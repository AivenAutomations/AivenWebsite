"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Case Study", href: "#case-study" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "backdrop-blur-md bg-white/80 border-b border-line"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="relative z-10"
          aria-label="Aiven Automations — Home"
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-[14px] text-graphite/80 hover:text-graphite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ButtonLink href="/audit" size="md">
            Book a Free Audit
            <ArrowRight />
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 grid h-10 w-10 place-items-center rounded-md text-graphite md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={clsx(
                "absolute left-0 top-0 block h-px w-5 bg-current transition-transform duration-300",
                open ? "translate-y-1.5 rotate-45" : "",
              )}
            />
            <span
              className={clsx(
                "absolute left-0 top-3 block h-px w-5 bg-current transition-transform duration-300",
                open ? "-translate-y-1.5 -rotate-45" : "",
              )}
            />
          </span>
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={clsx(
          "md:hidden fixed inset-x-0 top-16 z-40 h-[calc(100dvh-4rem)] bg-white border-b border-line transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none -translate-y-1",
        )}
      >
        <div className="flex h-full flex-col px-6 py-8 gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={clsx(
                "font-display text-[28px] font-bold tracking-tight py-3 transition-all duration-500",
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2",
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6">
            <ButtonLink
              href="/audit"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Book a Free Audit
              <ArrowRight />
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" />
    </svg>
  );
}
