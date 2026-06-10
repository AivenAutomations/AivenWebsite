import clsx from "clsx";
import type { ReactNode } from "react";
import { Container } from "./Container";
import { WaveLayer } from "./WaveLayer";

export function Section({
  id,
  children,
  className,
  tone = "white",
  containerSize = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "soft" | "graphite";
  containerSize?: "narrow" | "default" | "wide";
}) {
  const isDark = tone === "graphite";

  return (
    <section
      id={id}
      className={clsx(
        "relative isolate scroll-mt-24 py-20 sm:py-24 lg:py-32",
        // Translucent surfaces so the site-wide wave shows through, with a
        // frosted veil that keeps copy high-contrast.
        tone === "white" &&
          "bg-white/55 text-graphite backdrop-blur-[2px]",
        tone === "soft" &&
          "bg-soft/45 text-graphite backdrop-blur-[2px]",
        // Dark sections carry their own aqua-on-ink wave so light copy stays
        // readable instead of sitting on the light page wave.
        isDark && "overflow-hidden bg-graphite text-white",
        className,
      )}
    >
      {isDark && (
        <>
          <WaveLayer dark className="-z-10" resolutionScale={0.6} />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-graphite/70"
          />
        </>
      )}
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

export function EyebrowLabel({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "light";
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em]",
        tone === "brand" && "text-aqua",
        tone === "light" && "text-aqua-soft",
        className,
      )}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={clsx(
        "font-display font-bold tracking-tight",
        Tag === "h1"
          ? "text-[clamp(2.4rem,5.6vw,4.25rem)] leading-[1.05]"
          : "text-[clamp(1.85rem,3.8vw,2.85rem)] leading-[1.1]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
