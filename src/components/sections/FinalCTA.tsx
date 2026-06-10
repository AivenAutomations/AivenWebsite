import { Section, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { ButtonLink } from "../Button";
import { Icon } from "../Icons";

export function FinalCTA() {
  return (
    <Section id="cta" tone="graphite" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid-dark absolute inset-0 opacity-30"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 70% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />
      <div
        aria-hidden="true"
        className="aqua-glow absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <SectionTitle className="text-white">
            Ready to stop managing repetitive work manually?
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/75">
            Book a free automation audit. We&apos;ll review your workflows,
            identify where automation can save your team time, and give you a
            clear picture of what a system for your business would look like.
            No pressure. No commitment.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex justify-center">
            <ButtonLink href="/audit" size="lg">
              Book a Free Automation Audit
              <Icon.ArrowRight width={14} height={14} />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
