"use client";

import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle, Vec2 } from "ogl";

const vertex = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// Flowing wave fragment shader
const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform int uDarkTheme;

#define PI 3.14159265359

// Aiven brand palette — light theme.
// Calm, premium aqua wash: near-white base drifting to pale aqua, with a
// restrained #00B3C0 accent only at wave peaks (keeps dark copy high-contrast).
vec3 lightPalette(float t) {
  vec3 base = vec3(0.965, 0.973, 0.976); // ~#F6F8F9 soft background
  vec3 tint = vec3(0.70, 0.92, 0.94);    // pale aqua
  vec3 aqua = vec3(0.0, 0.702, 0.753);   // #00B3C0 Aiven Aqua
  float m = 0.5 + 0.5 * sin(6.2831 * t);
  vec3 col = mix(base, tint, m);
  col = mix(col, aqua, 0.18 * smoothstep(0.55, 1.0, m));
  return col;
}

// Aiven brand palette — dark theme (for dark sections / reversed logo areas).
// Ink base deepening into aqua, for light copy on top.
vec3 darkPalette(float t) {
  vec3 base = vec3(0.055, 0.059, 0.067); // #0E0F11 ink
  vec3 mid  = vec3(0.0, 0.353, 0.384);   // deep aqua
  vec3 aqua = vec3(0.0, 0.702, 0.753);   // #00B3C0 Aiven Aqua
  float m = 0.5 + 0.5 * cos(6.2831 * t);
  vec3 col = mix(base, mid, m);
  col = mix(col, aqua, 0.22 * smoothstep(0.6, 1.0, m));
  return col;
}

// Flowing wave function — slow, calm drift (premium, not busy).
float wave(vec2 uv, float speed, float offset) {
  return sin(uv.x * 3.0 + uTime * speed + offset) * 0.3 +
         cos(uv.y * 2.0 - uTime * speed * 0.5 + offset) * 0.2;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  uv = uv * 2.0 - 1.0;
  uv.x *= uResolution.x / uResolution.y;

  float w1 = wave(uv, 0.5, 0.0);
  float w2 = wave(uv, 0.35, 2.0);
  float w3 = wave(uv, 0.65, 4.0);
  float pattern = (w1 + w2 + w3) * 0.5;

  vec3 col;
  if (uDarkTheme == 1) {
    col = darkPalette(pattern + uTime * 0.03);
  } else {
    col = lightPalette(pattern + uTime * 0.03);
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

type Props = {
  darkTheme?: boolean;
  resolutionScale?: number;
};

export default function WaveBackground({
  darkTheme = false,
  resolutionScale = 1.0,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    const parent = canvas.parentElement as HTMLElement;

    // resolutionScale only lowers the internal render resolution (via dpr) for
    // performance — never the displayed size. ogl's setSize() also writes inline
    // canvas CSS width/height, so the canvas must always be sized to the full
    // parent; otherwise it visibly covers only part of the screen.
    const renderer = new Renderer({
      dpr: Math.min(window.devicePixelRatio, 2) * resolutionScale,
      canvas,
    });

    const gl = renderer.gl;
    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uDarkTheme: { value: darkTheme ? 1 : 0 },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const w = parent.clientWidth,
        h = parent.clientHeight;
      renderer.setSize(w, h);
      program.uniforms.uResolution.value.set(gl.canvas.width, gl.canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    let frame = 0;

    const loop = () => {
      program.uniforms.uTime.value = (performance.now() - start) / 1000;
      program.uniforms.uDarkTheme.value = darkTheme ? 1 : 0;
      renderer.render({ scene: mesh });
      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [darkTheme, resolutionScale]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full block" />;
}
