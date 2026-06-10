import { Section, EyebrowLabel, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { Icon } from "../Icons";

const STEPS = [
  {
    n: "01",
    title: "Audit",
    icon: Icon.Search,
    body: "We review your current workflows, customer communication channels, and internal tools. We identify where repetitive work is happening and where the biggest operational gaps are.",
  },
  {
    n: "02",
    title: "Design",
    icon: Icon.Compass,
    body: "We map the ideal automation logic — how requests should flow, what should trigger what, and where humans stay in control. Nothing gets built until the design is clear.",
  },
  {
    n: "03",
    title: "Build",
    icon: Icon.Wrench,
    body: "We build the AI assistant, configure the automations, and connect the integrations. The system is built around your operation, not a generic template.",
  },
  {
    n: "04",
    title: "Launch",
    icon: Icon.Rocket,
    body: "We test thoroughly, handle edge cases, document the system, and deploy it into your business. Your team knows exactly how it works.",
  },
  {
    n: "05",
    title: "Optimize",
    icon: Icon.Chart,
    body: "We monitor performance, handle maintenance, and improve the system as your business evolves. This is an ongoing relationship, not a one-time delivery.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="graphite">
      <div
        aria-hidden="true"
        className="bg-grid-dark absolute inset-0 opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <EyebrowLabel tone="light" className="justify-center">
            How It Works
          </EyebrowLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionTitle className="mt-5 text-white">
            A structured process. No guesswork.
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
            Every system Aiven builds starts with understanding how your
            business actually operates — before we automate anything.
          </p>
        </Reveal>
      </div>

      <ol className="relative mx-auto mt-16 max-w-4xl">
        {/* Vertical guide line on desktop */}
        <span
          aria-hidden="true"
          className="absolute left-[27px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-aqua/0 via-aqua/40 to-aqua/0 md:block"
        />
        <div className="space-y-5 md:space-y-7">
          {STEPS.map((step, i) => {
            const I = step.icon;
            return (
              <Reveal as="li" key={step.n} delay={i * 0.07}>
                <div className="group relative grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-aqua/40 hover:bg-white/[0.05]">
                  <div className="relative grid h-14 w-14 place-items-center rounded-xl border border-white/10 bg-graphite text-aqua">
                    <I width={22} height={22} />
                    <span className="absolute -top-2 -right-2 inline-flex h-6 items-center rounded-full bg-aqua px-2 font-mono text-[10px] font-medium text-graphite">
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-[20px] font-bold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                        Step {step.n}
                      </span>
                    </div>
                    <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </ol>
    </Section>
  );
}
