/* global React, Page, Hero, Btn, SectionLabel, Icon, IconBubble, HalftoneOrb, NodeNetwork, FadeUp, TiltCard, useLucide, ToolPill, Badge */

/* =========================================================
   PAGE 4 — SERVICES
   ========================================================= */
function ServicesPage({ currentPath }) {
  useLucide();
  const services = [
    {
      num: '01', icon: 'message-square',
      title: 'AI Customer Assistants',
      body: 'Automate common questions, customer requests, data collection, and escalation through WhatsApp, website chat, or other channels.',
      features: ['FAQ automation', 'Customer data collection', 'Request classification', 'Human escalation routing', 'WhatsApp & web chat integration'],
      surface: 'light', shape: 'sphere'
    },
    {
      num: '02', icon: 'git-merge',
      title: 'Workflow Automation',
      body: 'Connect your tools and automate repetitive internal tasks, ticket creation, reminders, alerts, database updates, and status changes.',
      features: ['Automatic ticket creation', 'CRM & database updates', 'Slack / WhatsApp / email alerts', 'Workflow status tracking', 'Tool integrations (n8n, Airtable, MySQL, and more)'],
      surface: 'dark', shape: 'flow', reverse: true
    },
    {
      num: '03', icon: 'target',
      title: 'Lead Capture & Follow-Up',
      body: 'Capture, qualify, and follow up with leads automatically so your team responds faster and avoids missed opportunities.',
      features: ['Multi-channel lead capture', 'Automated qualification', 'Instant lead response', 'Team notifications', 'Automated follow-up sequences'],
      surface: 'light', shape: 'aperture'
    },
  ];

  return (
    <Page currentPath={currentPath}>
      <Hero
        label="Services"
        title={<>Three systems.<br />One connected<br />operation.</>}
        body="Aiven builds three categories of automation, designed to work together as one operational system. Use them individually, or together as a full AI Operations System."
        ctas={
          <>
            <Btn href="#/packages" variant="dark">View Packages</Btn>
            <Btn href="#/contact" variant="ghost-light" noIcon>Book a Free Audit</Btn>
          </>
        }
        visual={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
            <HalftoneOrb size={180} shape="sphere" color="#00B3C0" grid={24} maxDot={3.2} />
            <HalftoneOrb size={180} shape="flow" color="#1A1A1A" grid={28} maxDot={3.2} />
            <HalftoneOrb size={180} shape="aperture" color="#00B3C0" grid={24} maxDot={3.2} />
          </div>
        }
      />

      {services.map((s, i) => (
        <div key={i} className={`service-block surface-${s.surface}${s.reverse ? ' reverse' : ''}`}
          style={{ marginLeft: -32, marginRight: -32 }}>
          <div className="service-block-wrap">
            <FadeUp>
              <div className="service-text">
                <div className="service-num">SERVICE {s.num} / 03</div>
                <IconBubble name={s.icon} size={56} iconSize={28} />
                <h3>{s.title}</h3>
                <p style={{ margin: '0 0 24px', textAlign: 'left' }}>{s.body}</p>
                <ul className="feature-list">
                  {s.features.map((f, j) => (
                    <li key={j}><span className="check">✓</span><span>{f}</span></li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <HalftoneOrb
                  size={400}
                  shape={s.shape}
                  color={s.surface === 'dark' ? '#00B3C0' : '#0A0A0A'}
                  grid={52}
                  maxDot={3.6}
                  contrast={1.1}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      ))}
    </Page>
  );
}

/* =========================================================
   PAGE 5 — HOW IT WORKS
   ========================================================= */
function HowItWorksPage({ currentPath }) {
  useLucide();

  const automationAreas = [
    { icon: 'message-square', title: 'Customer Request Automation', body: 'Turn repetitive customer messages into structured workflows that collect information, create requests, and notify the right person.', tags: ['WhatsApp', 'Web Forms', 'Email', 'Support'] },
    { icon: 'git-merge', title: 'Internal Workflow Automation', body: 'Automate manual tasks like ticket creation, status updates, reminders, database changes, and team notifications.', tags: ['Operations', 'Admin', 'Alerts'] },
    { icon: 'target', title: 'Lead Capture & Follow-Up', body: "Capture, qualify, and follow up with new leads automatically so potential customers don't get lost or forgotten.", tags: ['Leads', 'CRM', 'Follow-Up'] },
    { icon: 'bot', title: 'Custom AI Assistants', body: 'Build AI assistants that follow your business rules, answer common questions, collect required details, and escalate when needed.', tags: ['AI', 'Support', 'Escalation'] },
    { icon: 'database', title: 'CRM & Database Updates', body: 'Connect customer conversations and internal actions to your CRM, database, spreadsheets, or tracking systems.', tags: ['MySQL', 'Airtable', 'Sheets', 'CRM'] },
    { icon: 'bell', title: 'Team Notifications & Routing', body: 'Route the right information to the right person through Slack, WhatsApp, email, or internal tools.', tags: ['Slack', 'Email', 'Routing'] },
  ];

  const steps = [
    { n: '01', label: 'AUDIT', title: 'Identify the bottlenecks', body: 'We review your current workflows, tools, communication channels, repetitive tasks, and operational pain points.', output: 'Output: automation opportunities and priority workflow.' },
    { n: '02', label: 'STRATEGY', title: 'Map the ideal workflow', body: 'We define what should be automated, what data is needed, what tools should connect, and when humans should step in.', output: 'Output: workflow map and system architecture.' },
    { n: '03', label: 'BUILD', title: 'Build the custom system', body: 'We create the AI logic, automations, integrations, notifications, and internal workflows tailored to your operation.', output: 'Output: working automation system.' },
    { n: '04', label: 'LAUNCH', title: 'Test and deploy', body: 'We test real scenarios, refine the system, validate edge cases, and prepare your team to use it confidently.', output: 'Output: live system ready for use.' },
    { n: '05', label: 'OPTIMIZE', title: 'Improve over time', body: 'We monitor performance, adjust workflows, improve prompts, fix issues, and expand the system as your business evolves.', output: 'Output: ongoing optimization and support.' },
  ];

  const expectations = [
    { icon: 'workflow', title: 'Custom-built around your operation', body: 'Your system is designed around your tools, customer channels, business rules, and internal process.' },
    { icon: 'users', title: 'Human escalation included', body: 'AI handles repetitive work, but complex cases can still be routed to your team when needed.' },
    { icon: 'trending-up', title: 'Built to improve over time', body: 'Automations are monitored and refined so the system becomes more useful as your business evolves.' },
  ];

  const flowNodes = [
    { label: 'AUDIT', desc: 'Identify bottlenecks' },
    { label: 'STRATEGY', desc: 'Map the workflow' },
    { label: 'BUILD', desc: 'Build the system' },
    { label: 'LAUNCH', desc: 'Test and deploy' },
    { label: 'OPTIMIZE', desc: 'Improve over time' },
  ];

  return (
    <Page currentPath={currentPath} dark>

      {/* 1. HERO */}
      <Hero
        label="How Aiven Works"
        title={<>Every automation system is built around your workflow.</>}
        body="Aiven doesn't sell generic chatbot packages. We start by understanding how your business operates, then design and build custom AI automation systems that help your team save time, respond faster, and stay organized."
        ctas={
          <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
        }
        dark
        visual={
          <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }} viewBox="0 0 400 490" preserveAspectRatio="xMidYMid meet">
              <circle cx="200" cy="245" r="185" stroke="rgba(0,179,192,0.06)" strokeWidth="1" strokeDasharray="4 8" fill="none" />
              <circle cx="200" cy="245" r="128" stroke="rgba(0,179,192,0.04)" strokeWidth="1" strokeDasharray="3 6" fill="none" />
              <line x1="318" y1="52" x2="372" y2="52" stroke="rgba(0,179,192,0.2)" strokeWidth="1" />
              <circle cx="376" cy="52" r="3" fill="rgba(0,179,192,0.32)" />
              <line x1="318" y1="244" x2="372" y2="244" stroke="rgba(0,179,192,0.2)" strokeWidth="1" />
              <circle cx="376" cy="244" r="3" fill="rgba(0,179,192,0.32)" />
              <line x1="318" y1="436" x2="372" y2="436" stroke="rgba(0,179,192,0.2)" strokeWidth="1" />
              <circle cx="376" cy="436" r="3" fill="rgba(0,179,192,0.32)" />
            </svg>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', paddingTop: 8 }}>
              <div style={{ position: 'absolute', left: 23, top: 24, bottom: 24, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(0,179,192,0.5) 6%, rgba(0,179,192,0.5) 94%, transparent)' }} />
              {flowNodes.map((node, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', paddingBottom: i < flowNodes.length - 1 ? 54 : 0 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#0A0A0A', border: '1px solid rgba(0,179,192,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1, boxShadow: '0 0 12px rgba(0,179,192,0.1)', animation: `stepPulse 3s ease-in-out ${i * 0.6}s infinite` }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00B3C0' }} />
                  </div>
                  <div style={{ width: 18, height: 1, background: 'rgba(0,179,192,0.3)', flexShrink: 0 }} />
                  <div style={{ background: 'rgba(0,179,192,0.05)', border: '1px solid rgba(0,179,192,0.15)', borderRadius: 8, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                    <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 2, color: '#00B3C0', textTransform: 'uppercase' }}>{node.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{node.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <style>{`@keyframes stepPulse { 0%,100%{box-shadow:0 0 12px rgba(0,179,192,0.1);} 50%{box-shadow:0 0 22px rgba(0,179,192,0.35);} }`}</style>
          </div>
        }
      />

      {/* 2. WHAT WE AUTOMATE */}
      <section className="page-section on-dark">
        <FadeUp>
          <div className="section-head">
            <SectionLabel>Automation Areas</SectionLabel>
            <h2 className="on-dark">Start where manual work slows you down most.</h2>
            <p className="on-dark">Every business has different bottlenecks. These are the most common areas where Aiven helps service businesses automate repetitive work.</p>
          </div>
        </FadeUp>
        <div className="auto-grid">
          {automationAreas.map((a, i) => (
            <FadeUp key={i} delay={i * 65}>
              <TiltCard style={{ height: '100%' }}>
                <div className="auto-card">
                  <IconBubble name={a.icon} size={44} iconSize={20} />
                  <div className="auto-card-title">{a.title}</div>
                  <p className="auto-card-body">{a.body}</p>
                  <div className="auto-tags">
                    {a.tags.map((t) => <span key={t} className="auto-tag">{t}</span>)}
                  </div>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={400}>
          <div className="auto-cta">
            <span>Not sure what should be automated first?</span>
            <Btn href="#/contact" variant="primary" size="sm">Book a Free Audit</Btn>
          </div>
        </FadeUp>
      </section>

      {/* 3. THE PROCESS */}
      <section className="page-section on-dark">
        <FadeUp>
          <div className="section-head">
            <SectionLabel>The Process</SectionLabel>
            <h2 className="on-dark">From manual workflow to automated system.</h2>
            <p className="on-dark">Every engagement follows the same structured path, so you always know what happens next.</p>
          </div>
        </FadeUp>
        <div className="timeline">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={i * 90}>
              <div className="timeline-step">
                <div className="timeline-num">{step.n}</div>
                <div className="stage-label">{step.label}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="timeline-output">{step.output}</div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={500}>
          <div style={{ display: 'flex', gap: 12, marginTop: 48, flexWrap: 'wrap' }}>
            <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
            <Btn href="#/case-study" variant="ghost-dark" noIcon>See a Real Project</Btn>
          </div>
        </FadeUp>
      </section>

      {/* 4. PROJECT SCOPING */}
      <section className="page-section on-dark">
        <FadeUp>
          <div className="section-head">
            <SectionLabel>Project Scoping</SectionLabel>
            <h2 className="on-dark">Scoped to your workflow, not forced into a package.</h2>
            <p className="on-dark">Every project is scoped after the automation audit based on workflow complexity, tools involved, integrations, AI requirements, and ongoing support needs.</p>
          </div>
        </FadeUp>
        <div className="scope-grid">
          <FadeUp delay={80}>
            <div className="scope-card">
              <div className="scope-card-label">Initial Build</div>
              <h3>Covers workflow design, automation architecture, AI setup, integrations, testing, and launch.</h3>
              <ul>
                {['Workflow mapping', 'AI logic', 'Tool integrations', 'Automation build', 'Testing', 'Launch support'].map((item, i) => (
                  <li key={i}><span className="check">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
          <FadeUp delay={160}>
            <div className="scope-card">
              <div className="scope-card-label">Monthly Optimization</div>
              <h3>Covers monitoring, improvements, prompt adjustments, workflow updates, support, and system maintenance.</h3>
              <ul>
                {['System monitoring', 'Workflow improvements', 'Prompt optimization', 'Bug fixes', 'Support', 'Reporting'].map((item, i) => (
                  <li key={i}><span className="check">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
        <FadeUp delay={300}>
          <div className="auto-cta">
            <span>Want to know what your system would require?</span>
            <Btn href="#/contact" variant="primary" size="sm">Book a Free Audit</Btn>
          </div>
        </FadeUp>
      </section>

      {/* 5. WHAT TO EXPECT */}
      <section className="page-section on-dark">
        <FadeUp>
          <div className="section-head">
            <SectionLabel>What to Expect</SectionLabel>
            <h2 className="on-dark">A clear process. No generic templates. No unnecessary complexity.</h2>
          </div>
        </FadeUp>
        <div className="expect-grid">
          {expectations.map((e, i) => (
            <FadeUp key={i} delay={i * 90}>
              <TiltCard>
                <div className="expect-card">
                  <IconBubble name={e.icon} size={48} iconSize={22} />
                  <h3>{e.title}</h3>
                  <p>{e.body}</p>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <div className="hiw-cta-block">
        <FadeUp>
          <div className="hiw-cta-inner">
            <h2>Not sure what should be automated first?</h2>
            <p>Start with a free automation audit. We'll identify the highest-impact workflow and show you how Aiven could turn it into a custom automation system.</p>
            <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
          </div>
        </FadeUp>
      </div>
    </Page>
  );
}

/* =========================================================
   PAGE 6 — CASE STUDY
   ========================================================= */
function CaseStudyPage({ currentPath }) {
  useLucide();
  const built = [
    { icon: 'message-square', label: 'AI-powered WhatsApp assistant' },
    { icon: 'shield-check', label: 'Customer data validation flow' },
    { icon: 'refresh-cw', label: 'Service reactivation request automation' },
    { icon: 'wrench', label: 'Technical support request creation' },
    { icon: 'sparkles', label: 'New service inquiry handling' },
    { icon: 'layout-grid', label: 'Internal request organization system' },
    { icon: 'user-check', label: 'Human escalation routing' },
  ];

  const tools = ['n8n', 'Twilio', 'OpenAI', 'MySQL', 'Airtable', 'WhatsApp'];

  return (
    <Page currentPath={currentPath} dark>
      <Hero
        label="Case Study"
        title={<>From repetitive WhatsApp requests to an automated support system.</>}
        body="A regional internet service provider in Colombia was answering the same customer questions all day. We replaced the manual layer with an AI assistant connected to their internal tools."
        ctas={<Btn href="#/contact" variant="primary">Build Something Similar</Btn>}
        dark
        visual={
          <div style={{ position: 'relative' }}>
            <HalftoneOrb size={500} shape="orb" color="#00B3C0" grid={56} maxDot={4} contrast={1.15} rotation={Math.PI} />
          </div>
        }
      />

      <section className="page-section on-dark" style={{ paddingTop: 32, paddingBottom: 96 }}>
        <FadeUp>
          <div className="case-card">
            <div>
              <div className="case-meta" style={{ marginBottom: 24 }}>
                <div className="case-meta-row"><span>CLIENT</span><strong>Central Comunicaciones</strong></div>
                <div className="case-meta-row"><span>REGION</span><strong>Colombia</strong></div>
                <div className="case-meta-row"><span>INDUSTRY</span><Badge>Internet Service Provider</Badge></div>
              </div>

              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 2, color: '#00B3C0', textTransform: 'uppercase', marginBottom: 12 }}>Challenge</div>
              <div className="callout" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400, fontSize: 16, lineHeight: 1.6 }}>
                The business was spending too much time handling repetitive customer messages and processing requests. Response times were slow and support depended entirely on human availability.
              </div>

              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 2, color: '#00B3C0', textTransform: 'uppercase', marginTop: 32, marginBottom: 16 }}>Tools Used</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tools.map((t) => <ToolPill key={t}>{t}</ToolPill>)}
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 2, color: '#00B3C0', textTransform: 'uppercase', marginBottom: 20 }}>What Aiven Built</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {built.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 15 }}>
                    <IconBubble name={b.icon} size={36} iconSize={18} />
                    <span>{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={120}>
          <div style={{ marginTop: 48 }}>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 2, color: '#00B3C0', textTransform: 'uppercase', marginBottom: 20 }}>Outcomes</div>
            <div className="case-outcomes">
              <div className="case-outcome">+7 hours per week saved by automating internal processes.</div>
              <div className="case-outcome">Enabled faster responses and support for clients 24/7.</div>
              <div className="case-outcome">+$100/month saved per employee on overtime expenses.</div>
            </div>
          </div>
        </FadeUp>
      </section>
    </Page>
  );
}

Object.assign(window, { ServicesPage, HowItWorksPage, CaseStudyPage });
