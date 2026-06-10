/* global React */

/* =========================================================
   HalftoneOrb — the signature decorative visual.
   Renders a grid of dots whose radius is modulated by an
   underlying brightness function. Default shape: a soft
   crescent-lit orb in aqua tones.
   ========================================================= */
function HalftoneOrb({
  size = 560,
  shape = 'orb',
  color = '#00B3C0',
  grid = 60, // dots across
  maxDot = 4.2, // max radius in px
  rotation = 0,
  contrast = 1.0,
  glow = false,
  className,
  style
}) {
  const dots = [];
  const step = size / grid;
  const half = grid / 2;

  // Shape brightness functions. Inputs: nx, ny in roughly [-1, 1].
  // Output: 0..1 where 1 = big dot, 0 = no dot.
  const shapes = {
    // Crescent-lit sphere — the classic moon look.
    orb: (nx, ny) => {
      const r = Math.hypot(nx, ny);
      if (r > 1) return 0;
      // Lighting vector — diagonal from upper-right
      const lx = 0.65,ly = -0.55;
      const dot = nx * lx + ny * ly;
      // Soft falloff at edges + lighting
      const edge = 1 - Math.pow(r, 2.2);
      const lit = Math.max(0, dot * 0.85 + 0.2);
      return Math.max(0, Math.min(1, lit * edge));
    },
    // Full sphere — symmetric, denser center
    sphere: (nx, ny) => {
      const r = Math.hypot(nx, ny);
      if (r > 1) return 0;
      return Math.pow(1 - r, 1.4);
    },
    // Ring — emphasis on a band
    ring: (nx, ny) => {
      const r = Math.hypot(nx, ny);
      if (r > 1) return 0;
      const band = 1 - Math.abs(r - 0.7) * 4;
      return Math.max(0, band);
    },
    // Vertical band — for timeline
    column: (nx, ny) => {
      const ax = Math.abs(nx);
      const ay = Math.abs(ny);
      if (ay > 0.95) return 0;
      const fall = 1 - ax * 2.2;
      return Math.max(0, Math.min(1, fall)) * (1 - Math.pow(ay, 2));
    },
    // Disrupted / fragmented sphere — for "the problem"
    fragmented: (nx, ny) => {
      const r = Math.hypot(nx, ny);
      if (r > 1) return 0;
      // Pseudo-random gaps
      const seed = Math.sin(nx * 12.9898 + ny * 78.233) * 43758.5453;
      const noise = seed - Math.floor(seed);
      const edge = 1 - Math.pow(r, 1.6);
      return edge * (noise > 0.45 ? 1 : 0.05);
    },
    // Wave / flow — left-to-right curving band
    flow: (nx, ny) => {
      // y centered around a sine of x
      const y0 = Math.sin(nx * 2.6) * 0.45;
      const d = Math.abs(ny - y0);
      const fall = 1 - d * 3;
      const ax = 1 - Math.abs(nx * 0.95);
      return Math.max(0, fall) * Math.max(0, ax);
    },
    // Diamond / square rotated
    diamond: (nx, ny) => {
      const d = Math.abs(nx) + Math.abs(ny);
      if (d > 1) return 0;
      return Math.pow(1 - d, 1.5);
    },
    // Aperture — a ring + central point
    aperture: (nx, ny) => {
      const r = Math.hypot(nx, ny);
      if (r > 1) return 0;
      const outer = 1 - Math.abs(r - 0.85) * 6;
      const center = 1 - r * 4;
      return Math.max(0, outer) * 0.85 + Math.max(0, center) * 0.7;
    }
  };

  const fn = shapes[shape] || shapes.orb;
  const cosR = Math.cos(rotation);
  const sinR = Math.sin(rotation);

  for (let y = 0; y < grid; y++) {
    for (let x = 0; x < grid; x++) {
      let nx = (x - half + 0.5) / half;
      let ny = (y - half + 0.5) / half;
      // Rotate
      if (rotation) {
        const rx = nx * cosR - ny * sinR;
        const ry = nx * sinR + ny * cosR;
        nx = rx;ny = ry;
      }
      const b = fn(nx, ny);
      if (b <= 0.02) continue;
      const adjusted = Math.min(1, Math.pow(b, 1 / contrast));
      const r = adjusted * maxDot;
      if (r < 0.25) continue;
      const opacity = 0.45 + adjusted * 0.55;
      dots.push(
        <circle
          key={`${x}-${y}`}
          cx={(x + 0.5) * step}
          cy={(y + 0.5) * step}
          r={r}
          fill={color}
          opacity={opacity} style={{ stroke: "rgb(255, 255, 255)", fill: "rgb(255, 255, 255)" }} />

      );
    }
  }

  return (
    <svg
      className={className}
      style={{ ...style, stroke: "rgb(255, 255, 255)", fill: "rgb(255, 255, 255)" }}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg">
      
      {glow &&
      <defs>
          <filter id="hf-glow">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
      }
      <g filter={glow ? 'url(#hf-glow)' : undefined}>{dots}</g>
    </svg>);

}

/* =========================================================
   NodeNetwork — overlay automation graph (aqua nodes + lines)
   ========================================================= */
function NodeNetwork({ size = 560, color = '#00B3C0', opacity = 0.65, animated = true, style }) {
  // Hand-placed nodes (in 0..1 space) — a small automation graph.
  const nodes = [
  { x: 0.16, y: 0.45, r: 5 },
  { x: 0.36, y: 0.22, r: 4 },
  { x: 0.36, y: 0.72, r: 4 },
  { x: 0.58, y: 0.45, r: 6 },
  { x: 0.78, y: 0.28, r: 4 },
  { x: 0.78, y: 0.62, r: 4 },
  { x: 0.92, y: 0.45, r: 5 }];

  const edges = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]];


  return (
    <svg
      style={{ pointerEvents: 'none', ...style }}
      width={size} height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet">
      
      <g stroke={color} strokeWidth="0.18" opacity={opacity * 0.7}>
        {edges.map(([a, b], i) => {
          const A = nodes[a],B = nodes[b];
          return (
            <line
              key={i}
              x1={A.x * 100} y1={A.y * 100}
              x2={B.x * 100} y2={B.y * 100}
              strokeDasharray={animated ? '2 2' : 'none'}
              style={animated ? { animation: `nn-dash ${10 + i}s linear infinite` } : undefined} />);


        })}
      </g>
      <g fill={color} opacity={opacity}>
        {nodes.map((n, i) =>
        <circle key={i} cx={n.x * 100} cy={n.y * 100} r={n.r * 0.18}>
            {animated &&
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur={`${3 + i % 3}s`}
            repeatCount="indefinite"
            begin={`${i * 0.4}s`} />

          }
          </circle>
        )}
      </g>
    </svg>);

}

/* =========================================================
   Drifting node background — for the home hero.
   Slow, ambient. Low opacity. CSS keyframes.
   ========================================================= */
function NodeField({ count = 28, opacity = 0.12, color = '#00B3C0' }) {
  // Deterministic positions for stable layout
  const items = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < count; i++) {
    items.push({ x: rand() * 100, y: rand() * 100, dx: (rand() - 0.5) * 6, dy: (rand() - 0.5) * 6, dur: 18 + rand() * 14, delay: rand() * -20 });
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      opacity
    }} aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <g stroke={color} strokeWidth="0.12" fill="none">
          {items.map((p, i) => {
            const next = items[(i + 1) % items.length];
            return <line key={'l' + i} x1={p.x} y1={p.y} x2={next.x} y2={next.y} opacity="0.5" />;
          })}
        </g>
      </svg>
      {items.map((p, i) =>
      <span key={i}
      style={{
        position: 'absolute',
        left: p.x + '%', top: p.y + '%',
        width: 4, height: 4,
        background: color, borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: `drift ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
        ['--dx']: p.dx + 'px',
        ['--dy']: p.dy + 'px'
      }} />

      )}
      <style>{`
        @keyframes drift {
          from { transform: translate(-50%, -50%) translate(0, 0); }
          to   { transform: translate(-50%, -50%) translate(var(--dx), var(--dy)); }
        }
        @keyframes nn-dash { to { stroke-dashoffset: -100; } }
      `}</style>
    </div>);

}

Object.assign(window, { HalftoneOrb, NodeNetwork, NodeField });