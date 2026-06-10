import { Section, EyebrowLabel, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { Icon } from "../Icons";

const CARDS = [
  {
    icon: Icon.Bot,
    title: "AI Customer Assistants",
    body: "Handles FAQs, collects customer information, classifies requests, and escalates complex cases — through WhatsApp, web chat, or other channels. Available at all hours, consistent on every interaction.",
  },
  {
    icon: Icon.Workflow,
    title: "Workflow Automation",
    body: "Creates tickets, updates databases, sends alerts to your team, and connects your tools automatically. No manual copying. No forgotten tasks. No dependency on someone remembering to do it.",
  },
  {
    icon: Icon.Funnel,
    title: "Lead & Inquiry Follow-Up",
    body: "Most businesses don't lose leads because they don't get enough — they lose them because follow-up is slow, inconsistent, or forgotten. We automate that process so no inquiry goes unanswered, regardless of when it arrives.",
  },
];

export function Solution() {
  return (
    <Section id="solution" tone="white">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <EyebrowLabel className="justify-center">The Solution</EyebrowLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionTitle className="mt-5">
            We build systems that connect your customer conversations with your
            internal operations.
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-graphite/70">
            Aiven doesn&apos;t build chatbots. We design and build automation
            systems that handle repetitive requests, organize incoming
            information, update your tools, and escalate to your team only when
            human judgment is actually needed. The result is a business that
            operates with fewer bottlenecks — regardless of volume or business
            hours.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
        {CARDS.map((card, i) => {
          const I = card.icon;
          return (
            <Reveal key={card.title} delay={0.1 + i * 0.08}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-aqua/40 hover:shadow-[0_22px_50px_-28px_rgba(0,179,192,0.45)]">
                <span
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-aqua/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-aqua/10 text-aqua">
                  <I width={22} height={22} />
                </span>
                <h3 className="relative mt-6 font-display text-[20px] font-bold leading-tight tracking-tight text-graphite">
                  {card.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-graphite/75">
                  {card.body}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-aqua/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
