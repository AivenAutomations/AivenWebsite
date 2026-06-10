import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Case Study", href: "/#case-study" },
  { label: "Contact", href: "/#contact" },
  { label: "Book a Free Audit", href: "/audit" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white/60 text-graphite backdrop-blur-[2px]">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-[14px] leading-relaxed text-muted">
              AI automation systems for businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-center md:justify-self-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Navigate
            </span>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center text-[14px]">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-graphite/85 hover:text-graphite transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 md:items-end md:text-right">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Reach Out
            </span>
            <a
              href="mailto:zamir.obando@aivenautomations.com"
              className="link-underline text-[14px] text-graphite/90 break-all"
            >
              zamir.obando@aivenautomations.com
            </a>
            <a
              href="https://wa.link/8mz8qk"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[14px] text-graphite/90"
            >
              WhatsApp · wa.link/8mz8qk
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-line pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            © 2026 Aiven Automations. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
