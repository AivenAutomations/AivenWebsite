import clsx from "clsx";

type LogoProps = {
  className?: string;
  variant?: "full" | "icon";
  tone?: "brand" | "light" | "dark";
};

/**
 * Recreated from the Aiven Automations brand mark — connected nodes motif.
 * Symmetric vertical pattern with tick marks suggesting data flow.
 */
export function Logo({ className, variant = "full", tone = "brand" }: LogoProps) {
  const stroke =
    tone === "light" ? "#FFFFFF" : tone === "dark" ? "#1A1A1A" : "#00B3C0";
  const textColor =
    tone === "light" ? "#FFFFFF" : tone === "dark" ? "#1A1A1A" : "#1A1A1A";

  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 64 64"
        width="28"
        height="28"
        fill="none"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Row 1: top — single node + ticks */}
        <circle cx="32" cy="10" r="2.6" />
        <line x1="22" y1="10" x2="26" y2="10" />
        <line x1="38" y1="10" x2="42" y2="10" />

        {/* Row 2: pill (2 nodes) + side ticks */}
        <path d="M24 21h16" />
        <circle cx="24" cy="21" r="3.6" />
        <circle cx="40" cy="21" r="3.6" />
        <line x1="12" y1="21" x2="18" y2="21" />
        <line x1="46" y1="21" x2="52" y2="21" />

        {/* Row 3: widest — 3 nodes + side ticks */}
        <path d="M18 32h28" />
        <circle cx="18" cy="32" r="3.6" />
        <circle cx="32" cy="32" r="3.6" />
        <circle cx="46" cy="32" r="3.6" />
        <line x1="6" y1="32" x2="12" y2="32" />
        <line x1="52" y1="32" x2="58" y2="32" />

        {/* Row 4: mirror of row 2 */}
        <path d="M24 43h16" />
        <circle cx="24" cy="43" r="3.6" />
        <circle cx="40" cy="43" r="3.6" />
        <line x1="12" y1="43" x2="18" y2="43" />
        <line x1="46" y1="43" x2="52" y2="43" />

        {/* Row 5: bottom — mirror of row 1 */}
        <circle cx="32" cy="54" r="2.6" />
        <line x1="22" y1="54" x2="26" y2="54" />
        <line x1="38" y1="54" x2="42" y2="54" />
      </svg>

      {variant === "full" && (
        <span
          className="font-display text-[15px] font-bold tracking-[0.18em] leading-none"
          style={{ color: textColor }}
        >
          AIVEN
          <span className="ml-2 font-sans font-normal tracking-[0.22em] text-[11px] opacity-80">
            AUTOMATIONS
          </span>
        </span>
      )}
    </span>
  );
}
