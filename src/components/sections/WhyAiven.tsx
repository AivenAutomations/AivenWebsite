import { Section, EyebrowLabel, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { Icon } from "../Icons";

const POINTS = [
  {
    icon: Icon.Workflow,
    title: "Built around your real workflows",
    body: "Every system is designed from scratch based on how your business actually operates — not adapted from a generic template.",
  },
  {
    icon: Icon.Handshake,
    title: "Human escalation built in",
    body: "Your team stays in control. The system handles what it can, and escalates cleanly when a situation needs human judgment.",
  },
  {
    icon: Icon.Plug,
    title: "Integrates with the tools you already use",
    body: "We connect with the platforms your business already depends on — no need to replace your stack to get started.",
  },
  {
    icon: Icon.Shield,
    title: "Ongoing support after launch",
    body: "After deployment, we monitor, maintain, and improve the system. Automation requires continuous care — we handle that so you don't have to.",
  },
];

export function WhyAiven() {
  return (
    <Section id="why-aiven" tone="soft">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <EyebrowLabel className="justify-center">Why Aiven</EyebrowLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionTitle className="mt-5">
            Not just a chatbot. A system built around how your business actually works.
          </SectionTitle>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:gap-5 md:grid-cols-2">
        {POINTS.map((p, i) => {
          const I = p.icon;
          return (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-aqua/40 hover:shadow-[0_18px_40px_-26px_rgba(0,179,192,0.4)]">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-[3px] bg-aqua opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua/10 text-aqua">
                    <I width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-[18px] font-bold leading-tight tracking-tight text-graphite">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-graphite/75">
                      {p.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
