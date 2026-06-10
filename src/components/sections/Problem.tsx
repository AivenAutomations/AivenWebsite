import { Section, EyebrowLabel, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { Icon } from "../Icons";

const PAINS = [
  {
    icon: Icon.Clock,
    text: "Slow or inconsistent response times — especially outside business hours.",
  },
  {
    icon: Icon.Funnel,
    text: "Leads and inquiries forgotten because follow-up is manual.",
  },
  {
    icon: Icon.Channels,
    text: "Customer requests arriving from multiple channels with no organization.",
  },
  {
    icon: Icon.Repeat,
    text: "Staff spending hours on tasks that repeat identically every day.",
  },
  {
    icon: Icon.People,
    text: "Too much dependency on one or two people to keep operations running.",
  },
  {
    icon: Icon.Eye,
    text: "No visibility into what's pending, in progress, or needs attention.",
  },
];

export function Problem() {
  return (
    <Section id="problem" tone="soft">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <EyebrowLabel>The Problem</EyebrowLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionTitle className="mt-5 max-w-md">
              Manual operations get more expensive as you grow.
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-graphite/70">
              When your team is answering the same questions, copying data
              between tools, and following up with customers by hand — that&apos;s
              not just inefficient. It&apos;s a structural problem that compounds
              with every new customer, every new channel, and every new hire.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-3 sm:gap-4">
          {PAINS.map((pain, i) => {
            const I = pain.icon;
            return (
              <Reveal as="li" key={i} delay={i * 0.06}>
                <div className="group flex items-start gap-4 rounded-2xl border border-line bg-white px-5 py-5 transition-all duration-300 hover:border-aqua/40 hover:shadow-[0_8px_28px_-18px_rgba(0,179,192,0.45)]">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-soft text-aqua transition-colors duration-300 group-hover:bg-aqua/10 group-hover:border-aqua/40">
                    <I width={18} height={18} />
                  </span>
                  <p className="pt-1.5 text-[15px] leading-relaxed text-graphite/85">
                    {pain.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
