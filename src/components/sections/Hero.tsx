"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "../Button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32"
    >
      {/* Readability scrim — keeps the centered headline legible over the
          site-wide wave background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/65 to-white/40"
      />
      {/* Subtle grid background */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 opacity-40"
      />
      {/* Aqua glow, centered behind the headline */}
      <div
        aria-hidden="true"
        className="aqua-glow absolute left-1/2 top-1/2 -z-10 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[2px]"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center px-6 text-center sm:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-aqua"
        >
          <span className="h-px w-6 bg-current opacity-60" />
          AI Automation Systems
          <span className="h-px w-6 bg-current opacity-60" />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 font-display text-[clamp(2.4rem,5.6vw,4.4rem)] font-bold leading-[1.04] tracking-tight text-graphite"
        >
          Your team is{" "}
          <span className="text-aqua">spending too much time</span> on work a
          system could handle.
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.18,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-xl text-[17px] leading-relaxed text-graphite/75"
        >
          Aiven builds AI-powered automation systems for businesses — so your
          team responds faster, stays organized, and stops doing the same
          manual work every day.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4"
        >
          <ButtonLink href="/audit" size="lg">
            Book a Free Automation Audit
            <ArrowRight />
          </ButtonLink>
          <a
            href="#how-it-works"
            className="group inline-flex items-center justify-center gap-2 px-2 py-3 text-[14px] font-medium text-graphite/80 hover:text-graphite transition-colors"
          >
            See How It Works
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
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
