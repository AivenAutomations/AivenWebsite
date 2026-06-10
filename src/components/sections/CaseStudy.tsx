import { Section, EyebrowLabel, SectionTitle } from "../Section";
import { Reveal } from "../Reveal";
import { ButtonLink } from "../Button";
import { Icon } from "../Icons";

const HANDLES = [
  "Service reactivation requests after missed payments",
  "Technical support and revision requests",
  "New service inquiries from prospective customers",
  "General FAQ responses about services, coverage, and billing",
  "Customer data validation before creating any internal request",
  "Automatic escalation to a human agent when the case requires it",
];

const TOOLS = ["n8n", "OpenAI", "Twilio", "MySQL", "WhatsApp"];

const FLOW = [
  "Customer sends WhatsApp message",
  "AI assistant identifies the request type",
  "Collects and validates customer information",
  "Creates the relevant internal request automatically",
  "Notifies the responsible team member",
  "Escalates to human only when judgment is required",
];

export function CaseStudy() {
  return (
    <Section id="case-study" tone="white">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <EyebrowLabel>Case Study</EyebrowLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <SectionTitle className="mt-5 max-w-xl">
              From repetitive WhatsApp requests to an automated support system.
            </SectionTitle>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-aqua">
              Central Comunicaciones · ISP · Colombia
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                The Situation
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite/80">
                Central Comunicaciones serves thousands of active customers,
                primarily through WhatsApp and phone. Their support team was
                handling the same categories of requests every day — service
                reactivations after missed payments, technical support
                requests, new service inquiries — each one requiring manual
                handling from start to finish. Response times were limited by
                staff availability, and after-hours requests went unanswered.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                The Result
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite/80">
                The system handles routine requests automatically, enables
                consistent responses outside business hours, and organizes all
                incoming requests without requiring staff to manually process
                each one. The support team now handles only the cases that
                genuinely need a human.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 rounded-2xl border border-line bg-soft p-6">
              <p className="text-[15px] leading-relaxed text-graphite">
                Want to see what this could look like for your business?
              </p>
              <div className="mt-4">
                <ButtonLink href="/audit" size="md">
                  Book a Free Automation Audit
                  <Icon.ArrowRight width={14} height={14} />
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-white p-7">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                What Aiven Built
              </span>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite/80">
                An AI-powered WhatsApp assistant connected to their internal
                systems, designed to handle the most common request types
                end-to-end without requiring staff intervention for every
                case.
              </p>
              <ul className="mt-5 space-y-2.5">
                {HANDLES.map((h) => (
                  <li key={h} className="flex gap-3 text-[14px] text-graphite/80">
                    <span className="mt-1.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-aqua/15 text-aqua">
                      <Icon.Check width={11} height={11} strokeWidth={2.2} />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mr-1">
                  Tools used
                </span>
                {TOOLS.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-line bg-soft px-3 py-1 font-mono text-[11px] text-graphite/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-2xl border border-line bg-graphite p-7 text-white">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-aqua">
                How It Works
              </span>
              <ol className="mt-4 space-y-3">
                {FLOW.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-white/5 font-mono text-[10px] text-aqua">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] leading-relaxed text-white/85">
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
