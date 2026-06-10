"use client";

import clsx from "clsx";
import { useReducedMotion } from "framer-motion";
import WaveBackground from "./ui/wave-background";

/**
 * Positioned wrapper around the WebGL WaveBackground.
 * Honors prefers-reduced-motion by swapping the animation for a static
 * brand wash, so motion-sensitive users still get the aqua ambience.
 */
export function WaveLayer({
  dark = false,
  className,
  resolutionScale = 0.5,
}: {
  dark?: boolean;
  className?: string;
  resolutionScale?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        aria-hidden="true"
        className={clsx(
          "absolute inset-0",
          dark ? "bg-graphite" : "bg-soft",
          className,
        )}
      >
        <div className="aqua-glow absolute inset-0 opacity-50" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={clsx("absolute inset-0", className)}>
      <WaveBackground darkTheme={dark} resolutionScale={resolutionScale} />
    </div>
  );
}
