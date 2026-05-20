/* global React, Page, Hero, Btn, SectionLabel, Icon, IconBubble, HalftoneOrb, NodeNetwork, NodeField, FadeUp, WordReveal, TiltCard, useLucide, BrandMark, Badge, ToolPill */

/* =========================================================
   Workflow Preview — hero right-side visual
   ========================================================= */
function WorkflowPreview() {
  const nodes = [
    { icon: 'message-circle', label: 'Customer Request', tags: ['WhatsApp', 'Web Form'] },
    { icon: 'cpu', label: 'AI Intake', tags: ['OpenAI'] },
    { icon: 'git-merge', label: 'Workflow Logic', tags: [] },
    { icon: 'database', label: 'Internal Tools', tags: ['CRM', 'Slack', 'Database'] },
    { icon: 'users', label: 'Team Routing', tags: ['Ticket Created'] },
  ];

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
      <div style={{
        position: 'absolute',
        left: 21, top: 22, bottom: 22,
        width: 1,
        background: 'linear-gradient(to bottom, transparent, rgba(0,179,192,0.45) 8%, rgba(0,179,192,0.38) 92%, transparent)',
        pointerEvents: 'none'
      }} />
      {nodes.map((node, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 14,
          marginBottom: i < nodes.length - 1 ? 10 : 0,
          position: 'relative',
          animation: `fadeSlideIn 0.5s ease ${i * 120}ms both`
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: '#060606',
            border: `1px solid ${i === 0 ? 'rgba(0,179,192,0.7)' : 'rgba(0,179,192,0.3)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, zIndex: 1,
            boxShadow: i === 0 ? '0 0 16px rgba(0,179,192,0.2)' : undefined,
            transition: 'box-shadow 0.3s ease'
          }}>
            <Icon name={node.icon} size={17} strokeWidth={1.6} color="#00B3C0" />
          </div>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(0,179,192,0.13)',
            borderRadius: 10,
            padding: '10px 14px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 10,
            transition: 'border-color 0.25s ease, background 0.25s ease'
          }}>
            <span style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: 13, color: '#fff', letterSpacing: '-0.1px', whiteSpace: 'nowrap'
            }}>{node.label}</span>
            {node.tags.length > 0 && (
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {node.tags.map((t) => (
                  <span key={t} style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: 0.5,
                    padding: '3px 8px', borderRadius: 999,
                    background: 'rgba(0,179,192,0.07)',
                    border: '1px solid rgba(0,179,192,0.18)',
                    color: 'rgba(0,179,192,0.75)', whiteSpace: 'nowrap'
                  }}>{t}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <style>{`@keyframes fadeSlideIn { from { opacity:0; transform:translateX(-12px); } to { opacity:1; transform:none; } }`}</style>
    </div>
  );
}

/* =========================================================
   PAGE 1 — HOME
   ========================================================= */
function HomePage({ currentPath }) {
  useLucide();

  const whatCards = [
    { icon: 'message-square', title: 'Customer Requests', body: 'Automate repetitive messages, data collection, request classification, and routing.' },
    { icon: 'git-merge', title: 'Internal Workflows', body: 'Create tickets, update systems, send alerts, and keep requests organized automatically.' },
    { icon: 'target', title: 'Lead Follow-Up', body: 'Capture, qualify, and follow up with incoming leads without manual intervention.' },
    { icon: 'plug', title: 'Tool Integrations', body: 'Connect WhatsApp, forms, CRMs, databases, Slack, Airtable, and more.' },
  ];

  const aboutFeatures = [
    { icon: 'workflow', title: 'Automate Repetitive Work', body: 'Replace copy-paste tasks, request intake, reminders, and manual follow-up with workflows that run automatically.' },
    { icon: 'zap', title: 'Respond Faster', body: 'Capture requests instantly, collect the right information, and route each case to the right place.' },
    { icon: 'layout-grid', title: 'Stay Organized', body: 'Every request, lead, or task can be tracked, updated, and assigned without relying on memory.' },
  ];

  const flowNodes = [
    { icon: 'message-circle', num: '01', title: 'Customer Request', body: 'Arrives through WhatsApp, web chat, or forms.' },
    { icon: 'cpu', num: '02', title: 'AI Intake', body: 'Reads, classifies, and collects required info.' },
    { icon: 'git-merge', num: '03', title: 'Workflow Logic', body: 'Applies rules and decides what happens next.' },
    { icon: 'database', num: '04', title: 'Internal Tools', body: 'Updates CRM, database, tickets, or trackers.' },
    { icon: 'users', num: '05', title: 'Team Routing', body: 'Sends the right info to the right person.' },
  ];

  const tools = ['n8n', 'OpenAI', 'Twilio', 'MySQL', 'Airtable', 'WhatsApp'];

  const outcomes = [
    { stat: '+7 hrs/wk', label: 'saved on internal processes' },
    { stat: '24/7', label: 'customer response coverage' },
    { stat: '$100+/mo', label: 'saved per employee in overtime' },
  ];

  const steps = [
    { n: '01', label: 'AUDIT', body: 'We identify repetitive workflows and operational bottlenecks.' },
    { n: '02', label: 'MAP', body: 'We design the automation logic around your tools and process.' },
    { n: '03', label: 'BUILD', body: 'We create the system, test it, and optimize it over time.' },
  ];

  return (
    <main className="page" style={{ background: 'transparent', color: '#fff' }}>

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <div className="home-hero">
        <div className="home-hero-bg">
          <NodeField count={26} opacity={0.15} />
        </div>
        <div className="page-frame" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <section className="hero" style={{ paddingLeft: 160, gridTemplateColumns: '1fr' }}>
            <div className="hero-text">
              <FadeUp>
                <SectionLabel style={{ marginBottom: 24 }}>AI Automation Systems</SectionLabel>
              </FadeUp>
              <FadeUp delay={80}>
                <h1 className="on-dark" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.06, letterSpacing: '-1.2px', marginBottom: 24 }}>
                  AI automation systems built around your workflow.
                </h1>
              </FadeUp>
              <FadeUp delay={200}>
                <p className="hero-body on-dark">
                  Aiven helps service businesses automate repetitive customer requests, internal workflows, and lead follow-up so teams can respond faster, stay organized, and stop relying on manual work.
                </p>
              </FadeUp>
              <FadeUp delay={320}>
                <div className="hero-ctas">
                  <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
                  <Btn href="#/how-it-works" variant="ghost-dark" noIcon>See How It Works</Btn>
                </div>
              </FadeUp>
            </div>
          </section>
        </div>
      </div>

      {/* ── 2–7. Content sections ─────────────────────────────── */}
      <div className="page-frame" style={{ paddingTop: 0 }}>

        {/* ── 2. WHAT AIVEN AUTOMATES ──────────────────────────── */}
        <section className="page-section on-dark">
          <FadeUp>
            <div className="section-head">
              <SectionLabel>What Aiven Automates</SectionLabel>
              <h2 className="on-dark">Start with the workflow that slows your team down most.</h2>
              <p className="on-dark">Aiven helps service businesses identify repetitive processes and turn them into connected automation systems.</p>
            </div>
          </FadeUp>
          <div className="home-4-grid">
            {whatCards.map((card, i) => (
              <FadeUp key={i} delay={60 + i * 70}>
                <TiltCard style={{ height: '100%' }}>
                  <div className="home-what-card">
                    <IconBubble name={card.icon} size={44} iconSize={20} />
                    <div className="home-what-card-title">{card.title}</div>
                    <p className="home-what-card-body">{card.body}</p>
                  </div>
                </TiltCard>
              </FadeUp>
            ))}
          </div>
        </section>

        {/* ── 3. ABOUT ─────────────────────────────────────────── */}
        <section className="page-section on-dark">
          <FadeUp>
            <SectionLabel style={{ marginBottom: 28 }}>About Aiven</SectionLabel>
          </FadeUp>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <FadeUp delay={80}>
              <div>
                <h2 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 2.6vw, 36px)', letterSpacing: '-0.5px', lineHeight: 1.15, margin: '0 0 20px' }}>
                  We turn repetitive operations into connected workflows.
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, margin: 0 }}>
                  Aiven builds AI-powered automation systems that connect customer conversations, internal tools, and team workflows. The goal is simple: reduce manual work, speed up response times, and keep every request moving through the right process.
                </p>
              </div>
            </FadeUp>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              {aboutFeatures.map((item, i) => (
                <FadeUp key={i} delay={120 + i * 90}>
                  <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                    <IconBubble name={item.icon} size={44} iconSize={20} />
                    <div>
                      <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{item.title}</div>
                      <p style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.body}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. SYSTEM FLOW ───────────────────────────────────── */}
        <section className="page-section on-dark">
          <FadeUp>
            <div className="section-head">
              <SectionLabel>The System Flow</SectionLabel>
              <h2 className="on-dark">From request to action — without manual handoffs.</h2>
            </div>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="flow">
              {flowNodes.map((node, i) => (
                <React.Fragment key={i}>
                  <div className="flow-node">
                    <span className="flow-node-num">{node.num}</span>
                    <Icon name={node.icon} size={20} color="#00B3C0" strokeWidth={1.6} />
                    <span className="flow-node-title">{node.title}</span>
                    <span className="flow-node-body">{node.body}</span>
                  </div>
                  {i < flowNodes.length - 1 && (
                    <div className="flow-arrow"><Icon name="arrow-right" size={18} color="#00B3C0" /></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={240}>
            <div className="callout" style={{ marginTop: 32 }}>
              Aiven builds systems, not bots — connecting customer conversations with the workflows that move your business forward.
            </div>
          </FadeUp>
        </section>

        {/* ── 5. CASE STUDY TEASER ─────────────────────────────── */}
        <section className="page-section on-dark">
          <FadeUp>
            <div className="section-head">
              <SectionLabel>Real Implementation</SectionLabel>
              <h2 className="on-dark">Built for a local internet provider with thousands of customers.</h2>
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="home-case-teaser">
              <div className="home-case-body">
                <p style={{ fontSize: 16, lineHeight: 1.65, margin: '0 0 24px' }}>
                  Aiven built an AI-powered WhatsApp automation system for Central Comunicaciones to help validate customer data, handle repetitive service requests, create internal workflows, and organize support operations.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                  {tools.map((t) => <span key={t} className="trusted-pill">{t}</span>)}
                </div>
                <Btn href="#/case-study" variant="ghost-dark" noIcon>See Case Study →</Btn>
              </div>
              <div className="home-case-stat-col">
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, letterSpacing: 2, color: '#00B3C0', textTransform: 'uppercase', marginBottom: 10 }}>Client</div>
                <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 20, marginBottom: 4, letterSpacing: '-0.3px' }}>Central Comunicaciones</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 0.5, marginBottom: 32 }}>Internet Service Provider · Colombia</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {outcomes.map((o, i) => (
                    <div key={i} style={{ borderLeft: '2px solid rgba(0,179,192,0.35)', paddingLeft: 16 }}>
                      <div style={{ fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 20, color: '#00B3C0', letterSpacing: '-0.3px' }}>{o.stat}</div>
                      <div style={{ fontSize: 12, lineHeight: 1.4 }}>{o.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* ── 6. HOW IT STARTS ─────────────────────────────────── */}
        <section className="page-section on-dark">
          <FadeUp>
            <div className="section-head">
              <SectionLabel>How It Starts</SectionLabel>
              <h2 className="on-dark">Start with a free audit. Build only what makes sense.</h2>
            </div>
          </FadeUp>
          <div className="home-steps-grid">
            {steps.map((step, i) => (
              <FadeUp key={i} delay={80 + i * 90}>
                <div className="home-step-card">
                  <div className="home-step-num">{step.n}</div>
                  <div className="home-step-label">{step.label}</div>
                  <p className="home-step-body">{step.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={360}>
            <div style={{ marginTop: 36 }}>
              <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
            </div>
          </FadeUp>
        </section>

        {/* ── 7. FINAL CTA ─────────────────────────────────────── */}
        <div className="hiw-cta-block">
          <FadeUp>
            <div className="hiw-cta-inner">
              <h2 style={{ color: '#fff' }}>Not sure what should be automated first?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>Start with a free automation audit. We'll identify the highest-impact workflow and show you how Aiven could turn it into a custom automation system.</p>
              <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
            </div>
          </FadeUp>
        </div>

      </div>
    </main>
  );
}

/* =========================================================
   PAGE 2 — THE PROBLEM
   ========================================================= */
function ProblemPage({ currentPath }) {
  useLucide();
  const pains = [
    { icon: 'clock', title: 'Slow Response Times', body: 'Customers wait too long for answers that could be handled automatically.' },
    { icon: 'message-square', title: 'Repetitive Customer Requests', body: 'Your team answers the same questions and collects the same details every day.' },
    { icon: 'alert-triangle', title: 'Missed Leads', body: 'New opportunities get lost when follow-up depends on someone remembering.' },
    { icon: 'layers', title: 'Disorganized Requests', body: 'Messages, requests, and tasks come from different channels with no clear system.' },
    { icon: 'copy', title: 'Manual Data Entry', body: 'Staff copy customer information between tools, spreadsheets, CRMs, or databases by hand.' },
    { icon: 'git-branch', title: 'Operational Bottlenecks', body: 'Too much of the process depends on one person, one inbox, or one manual routine.' },
  ];

  return (
    <Page currentPath={currentPath}>
      <Hero
        label="The Problem"
        title={<>Your team should not spend<br />hours managing repetitive<br />work manually.</>}
        body="Service businesses lose time when customer requests, lead follow-up, and internal tasks depend on people manually checking messages, copying data, creating tickets, and remembering what needs to happen next."
        ctas={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Btn href="#/contact" variant="dark">Book a Free Audit</Btn>
              <Btn href="#/solution" variant="ghost-light" noIcon>See the Solution</Btn>
            </div>
            <p style={{ fontSize: 13, margin: 0, fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.3px' }}>Not sure where the bottleneck is? That's exactly what the audit is for.</p>
          </div>
        }
        visual={
          <HalftoneOrb size={520} shape="fragmented" color="#1A1A1A" grid={56} maxDot={4} contrast={1.2} />
        }
      />
      <section className="page-section" style={{ background: 'transparent', marginLeft: -32, marginRight: -32, paddingLeft: 192, paddingRight: 32, paddingTop: 80, paddingBottom: 96 }}>
        <FadeUp>
          <div className="section-head">
            <SectionLabel>Where It Breaks Down</SectionLabel>
            <h2 className="on-dark">Where manual work slows the operation.</h2>
          </div>
        </FadeUp>
        <div className="pain-grid">
          {pains.map((p, i) => (
            <FadeUp key={i} delay={i * 70}>
              <TiltCard>
                <div className="pain-card">
                  <div className="pain-card-icon">
                    <Icon name={p.icon} size={22} strokeWidth={1.5} />
                  </div>
                  <div className="pain-card-title">{p.title}</div>
                  <p className="pain-card-body">{p.body}</p>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* =========================================================
   PAGE 3 — SOLUTION
   ========================================================= */
function SolutionPage({ currentPath }) {
  useLucide();
  const flow = [
    { num: '01', title: 'Customer Request', body: 'Arrives through WhatsApp, web chat, email, forms, or another customer channel.', icon: 'message-circle' },
    { num: '02', title: 'AI Intake', body: 'Reads the request, asks clarifying questions, and collects the required information.', icon: 'cpu' },
    { num: '03', title: 'Workflow Logic', body: 'Applies business rules, validates data, and decides what should happen next.', icon: 'git-merge' },
    { num: '04', title: 'Internal Systems', body: 'Updates your CRM, database, ticketing board, spreadsheet, or internal tracker.', icon: 'database' },
    { num: '05', title: 'Team Routing', body: 'Sends the right information to the right person with the context they need.', icon: 'users' },
  ];

  const adapts = [
    { icon: 'plug', title: 'Built around your tools', body: 'Connect WhatsApp, forms, Slack, CRMs, databases, spreadsheets, and internal systems.' },
    { icon: 'shield', title: 'Built around your rules', body: 'Define what information is required, when to create a task, and when to escalate to a human.' },
    { icon: 'users', title: 'Built around your team', body: 'Route each request to the right person or system with the context needed to act.' },
  ];

  return (
    <Page currentPath={currentPath} dark>
      <Hero
        label="The Solution"
        title={<>Automation that connects<br />conversations with real<br />business operations.</>}
        body="Aiven designs custom automation systems that collect information, trigger the right workflow, update your tools, notify your team, and escalate when human support is needed."
        ctas={
          <>
            <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
            <Btn href="#/how-it-works" variant="ghost-dark" noIcon>How We Work</Btn>
          </>
        }
        dark
        visual={
          <div style={{ position: 'relative', width: '100%', maxWidth: 540 }}>
            <HalftoneOrb size={540} shape="ring" color="#00B3C0" grid={60} maxDot={4} contrast={1.2} />
            <div style={{ position: 'absolute', inset: 0 }}>
              <NodeNetwork size={540} color="#00B3C0" opacity={0.7} />
            </div>
          </div>
        }
      />

      <section className="page-section on-dark" style={{ paddingTop: 64, paddingBottom: 96 }}>
        <FadeUp>
          <div className="section-head">
            <SectionLabel>The System Flow</SectionLabel>
            <h2 className="on-dark">From message to action — without manual handoffs.</h2>
          </div>
        </FadeUp>
        <FadeUp delay={120}>
          <div className="flow">
            {flow.map((node, i) => (
              <React.Fragment key={i}>
                <div className="flow-node">
                  <span className="flow-node-num">{node.num}</span>
                  <Icon name={node.icon} size={20} color="#00B3C0" strokeWidth={1.6} />
                  <span className="flow-node-title">{node.title}</span>
                  <span className="flow-node-body">{node.body}</span>
                </div>
                {i < flow.length - 1 && (
                  <div className="flow-arrow"><Icon name="arrow-right" size={18} color="#00B3C0" /></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={240}>
          <div className="callout" style={{ marginTop: 48 }}>
            Aiven builds systems, not bots — connecting customer conversations with the workflows that move your business forward.
          </div>
        </FadeUp>

        <FadeUp delay={320}>
          <div className="section-head" style={{ marginTop: 80, marginBottom: 24 }}>
            <SectionLabel>Custom to Your Operation</SectionLabel>
            <h2 className="on-dark">The system adapts to your workflow, not the other way around.</h2>
            <p className="on-dark">Every business handles requests differently. Aiven designs the automation logic around your tools, rules, team structure, and escalation process.</p>
          </div>
        </FadeUp>
        <div className="trust-grid">
          {adapts.map((a, i) => (
            <FadeUp key={i} delay={400 + i * 80}>
              <TiltCard>
                <div className="trust-card">
                  <IconBubble name={a.icon} size={44} iconSize={20} />
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </div>
              </TiltCard>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={640}>
          <div style={{ marginTop: 48 }}>
            <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
          </div>
        </FadeUp>
      </section>
    </Page>
  );
}

Object.assign(window, { HomePage, ProblemPage, SolutionPage });
