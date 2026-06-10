import { Section, EyebrowLabel, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { Icon } from "../Icons";

export function Contact() {
  return (
    <Section id="contact" tone="white">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <EyebrowLabel className="justify-center">Get In Touch</EyebrowLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionTitle className="mt-5">
            Have a question? Reach out directly.
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-graphite/70">
            Prefer to connect before booking a call? You can reach us by email
            or message our AI assistant on WhatsApp — available at any hour.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
        <Reveal delay={0.08}>
          <a
            href="https://wa.link/8mz8qk"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-soft p-8 transition-all duration-500 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-[0_22px_50px_-28px_rgba(0,179,192,0.45)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-aqua/10 text-aqua">
                <Icon.WhatsApp width={22} height={22} />
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-aqua/30 bg-aqua/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-aqua">
                <span className="relative grid h-2 w-2 place-items-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-aqua/70" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-aqua" />
                </span>
                Live · 24/7
              </span>
            </div>
            <h3 className="mt-6 font-display text-[22px] font-bold tracking-tight text-graphite">
              WhatsApp
            </h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-graphite/75">
              Message our AI assistant directly — it&apos;s available 24/7 and
              will route your inquiry to the right place.{" "}
              <span className="text-graphite/55">
                (You&apos;ll be talking to a system we built — a live example
                of what we do.)
              </span>
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-aqua">
              Message on WhatsApp
              <Icon.ArrowRight
                width={14}
                height={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </a>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href="mailto:zamir.obando@aivenautomations.com"
            className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-soft p-8 transition-all duration-500 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-[0_22px_50px_-28px_rgba(0,179,192,0.45)]"
          >
            <div className="flex items-start justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-aqua/10 text-aqua">
                <Icon.Mail width={22} height={22} />
              </span>
              <span className="inline-flex items-center rounded-full border border-line bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Direct
              </span>
            </div>
            <h3 className="mt-6 font-display text-[22px] font-bold tracking-tight text-graphite">
              Email
            </h3>
            <p className="mt-2 max-w-md text-[15px] leading-relaxed text-graphite/75">
              For direct inquiries, proposals, or anything else.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-aqua">
              zamir.obando@aivenautomations.com
              <Icon.ArrowRight
                width={14}
                height={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
