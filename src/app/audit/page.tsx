import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { AuditForm } from "@/components/AuditForm";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Book a Free Automation Audit",
  description:
    "Tell us about your business — we'll review your workflows and give you a clear recommendation on where automation can help.",
};

const EXPECT = [
  "A 30–45 minute discovery call at your convenience",
  "A review of your current operations and the repetitive work your team handles",
  "A clear, honest recommendation on where automation can help",
];

export default function AuditPage() {
  return (
    <div className="relative min-h-dvh">
      <header className="border-b border-line bg-white/60 backdrop-blur-[2px]">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center px-6 sm:px-8">
          <Link href="/" aria-label="Aiven Automations — Home">
            <Logo />
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 sm:px-8 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-aqua">
              <span className="h-px w-6 bg-current opacity-60" />
              Free Audit
            </div>
            <h1 className="mt-5 font-display text-[clamp(2.1rem,4.6vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-graphite">
              Book a Free Automation Audit
            </h1>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite/75">
              Tell us a bit about your business and we&apos;ll be in touch to
              schedule a 30–45 minute call. We&apos;ll review your current
              workflows, identify automation opportunities, and give you a
              clear recommendation — no pitch, no pressure.
            </p>

            <div className="mt-10 rounded-2xl border border-line bg-white p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                What to expect
              </span>
              <ul className="mt-4 space-y-3">
                {EXPECT.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14px] leading-relaxed text-graphite/85"
                  >
                    <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-aqua/15 text-aqua">
                      <Icon.Check width={11} height={11} strokeWidth={2.2} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <AuditForm />
          </div>
        </div>
      </main>
    </div>
  );
}
