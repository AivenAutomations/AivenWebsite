import { WaveLayer } from "./WaveLayer";

/**
 * Single, fixed, full-viewport animated wave behind the entire site.
 * Rendered once in the root layout so one continuous brand wash spans every
 * section and page as the user scrolls. A light veil keeps it calm enough for
 * dark copy in the translucent sections layered on top.
 */
export function SiteBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <WaveLayer resolutionScale={0.5} />
      <div className="absolute inset-0 bg-soft/35" />
    </div>
  );
}
