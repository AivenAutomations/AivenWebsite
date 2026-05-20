/* global React, Page, Hero, Btn, SectionLabel, Icon, IconBubble, HalftoneOrb, NodeNetwork, FadeUp, TiltCard, useLucide, ToolPill, Badge */
const { useState } = React;

/* =========================================================
   PAGE 7 — PACKAGES
   ========================================================= */
function PackagesPage({ currentPath }) {
  useLucide();
  const packages = [
    {
      badge: 'Start Here',
      title: 'Automation Opportunity Audit',
      body: 'A structured audit to identify repetitive tasks and automation opportunities inside your business.',
      includes: ['Discovery call', 'Workflow review', 'Opportunity mapping', 'Implementation plan'],
      cta: 'Book a Free Audit', ctaVariant: 'ghost-light'
    },
    {
      badge: 'Starter',
      title: 'AI Assistant Starter',
      body: 'For businesses ready to automate basic customer communication and repetitive requests.',
      includes: ['AI assistant setup', 'FAQ automation', 'Data collection', 'Escalation routing', 'WhatsApp / web chat integration'],
      cta: 'Get Started', ctaVariant: 'ghost-light'
    },
    {
      badge: 'Most Popular', featured: true,
      title: 'AI Operations System',
      body: 'The full system. AI customer assistant connected to internal workflow automation and lead management.',
      includes: ['Everything in Starter', 'Workflow automation', 'CRM updates & tickets', 'Multi-channel alerts', 'Operations dashboard', 'Monthly optimization'],
      cta: 'Book a Free Audit', ctaVariant: 'primary'
    },
    {
      badge: 'Custom',
      title: 'Custom AI Workflow Build',
      body: 'For specific automation needs that go beyond standard packages.',
      includes: ['Custom workflow design', 'Advanced integrations', 'Project-based implementation'],
      cta: 'Contact Us', ctaVariant: 'ghost-light'
    },
  ];

  return (
    <Page currentPath={currentPath}>
      <Hero
        label="Packages"
        title={<>Automation solutions<br />built around your<br />business needs.</>}
        body="Whether you need to automate customer requests, internal tasks, or lead follow-up, Aiven helps you start with a clear process and build toward a system that saves time across your business."
        ctas={
          <>
            <Btn href="#/contact" variant="dark">Book a Free Audit</Btn>
            <Btn href="#/why-aiven" variant="ghost-light" noIcon>Why Aiven</Btn>
          </>
        }
        visual={
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 460 }}>
            <HalftoneOrb size={210} shape="sphere" color="#0A0A0A" grid={28} maxDot={3.2} />
            <HalftoneOrb size={210} shape="aperture" color="#00B3C0" grid={28} maxDot={3.2} />
            <HalftoneOrb size={210} shape="ring" color="#00B3C0" grid={28} maxDot={3.2} />
            <HalftoneOrb size={210} shape="diamond" color="#0A0A0A" grid={28} maxDot={3.2} />
          </div>
        }
      />

      <section className="page-section" style={{ background: 'transparent', marginLeft: -32, marginRight: -32, paddingLeft: 192, paddingRight: 32, paddingTop: 80, paddingBottom: 96 }}>
        <FadeUp>
          <div className="section-head">
            <SectionLabel>Custom-Built Automation Systems</SectionLabel>
            <h2>Start with an audit. Scale into a system.</h2>
          </div>
        </FadeUp>

        <div className="package-grid">
          {packages.map((p, i) => (
            <FadeUp key={i} delay={i * 90}>
              {p.featured ? (
                <div className={`package featured`}>
                  <Badge accent style={{ alignSelf: 'flex-start' }}>{p.badge}</Badge>
                  <div className="package-title">{p.title}</div>
                  <p>{p.body}</p>
                  <ul>{p.includes.map((it, j) => <li key={j}>{it}</li>)}</ul>
                  <div className="package-cta-wrap">
                    <Btn href="#/contact" variant={p.ctaVariant} size="sm" noIcon>{p.cta}</Btn>
                  </div>
                </div>
              ) : (
                <TiltCard>
                  <div className="package">
                    <Badge style={{ alignSelf: 'flex-start' }}>{p.badge}</Badge>
                    <div className="package-title">{p.title}</div>
                    <p>{p.body}</p>
                    <ul>{p.includes.map((it, j) => <li key={j}>{it}</li>)}</ul>
                    <div className="package-cta-wrap">
                      <Btn href="#/contact" variant={p.ctaVariant} size="sm" noIcon>{p.cta}</Btn>
                    </div>
                  </div>
                </TiltCard>
              )}
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={400}>
          <p style={{ marginTop: 40, fontSize: 13, maxWidth: 720 }}>
            Pricing is based on scope and complexity. Starting from $1,000 CAD setup.{' '}
            <a href="#/contact" style={{ textDecoration: 'underline', textUnderlineOffset: 3, color: '#00B3C0' }}>Book a free audit</a> to get a tailored estimate.
          </p>
        </FadeUp>
      </section>
    </Page>
  );
}

/* =========================================================
   PAGE 8 — WHY AIVEN
   ========================================================= */
function WhyAivenPage({ currentPath }) {
  useLucide();
  const trust = [
    { icon: 'workflow', title: 'Built Around Real Processes', body: 'Every system is mapped to your actual workflows, not a generic template.' },
    { icon: 'users', title: 'Human Escalation Included', body: 'Complex cases always route to a real person when needed.' },
    { icon: 'settings', title: 'Custom Implementation', body: 'No off-the-shelf tools resold. Every system is built for your operation.' },
    { icon: 'shield', title: 'Designed for Maintainability', body: 'Systems are documented and built to be maintained and improved over time.' },
    { icon: 'bar-chart-3', title: 'Continuous Optimization', body: 'Monthly monitoring, improvements, and reporting included in retainer.' },
    { icon: 'zap', title: 'Technical With Business Thinking', body: 'We understand both the automation stack and the operational outcomes that matter.' },
  ];

  return (
    <Page currentPath={currentPath} dark>
      <Hero
        label="Why Aiven"
        title={<>Not just AI chatbots.<br />Real workflow<br />automation.</>}
        body="Aiven builds automation systems designed around your real business processes. The goal is not to replace your team — it is to remove repetitive work, improve response speed, and keep your processes organized."
        ctas={
          <>
            <Btn href="#/contact" variant="primary">Book a Free Audit</Btn>
            <Btn href="#/case-study" variant="ghost-dark" noIcon>See a Real Project</Btn>
          </>
        }
        dark
        visual={
          <div style={{ position: 'relative' }}>
            <HalftoneOrb size={520} shape="sphere" color="#00B3C0" grid={60} maxDot={3.8} contrast={1.2} />
            <div style={{ position: 'absolute', inset: 0 }}>
              <NodeNetwork size={520} color="#00B3C0" opacity={0.5} />
            </div>
          </div>
        }
      />

      <section className="page-section on-dark" style={{ paddingTop: 48, paddingBottom: 96 }}>
        <FadeUp>
          <div className="section-head">
            <SectionLabel>Six Reasons Clients Choose Us</SectionLabel>
            <h2 className="on-dark">Trust comes from how we build, not what we promise.</h2>
          </div>
        </FadeUp>
        <div className="trust-grid">
          {trust.map((t, i) => (
            <FadeUp key={i} delay={i * 80}>
              <TiltCard>
                <div className="trust-card">
                  <IconBubble name={t.icon} size={44} iconSize={22} />
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
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
   PAGE 9 — FAQ
   ========================================================= */
function FaqPage({ currentPath }) {
  useLucide();
  const faqs = [
    { q: 'What kind of businesses does Aiven work with?', a: 'Aiven works with small-to-medium service businesses — typically 5–50 employees — that receive repetitive customer requests and manage too much of their operation manually. Examples include clinics, ISPs, automotive shops, real estate agencies, gyms, and local service providers.' },
    { q: 'Is this just an AI chatbot?', a: 'No. Aiven builds automation systems that connect customer conversations with internal business workflows. That includes ticket creation, database updates, team alerts, and lead follow-up — not just a chatbot that answers FAQs.' },
    { q: 'What channels do your systems work with?', a: 'Primarily WhatsApp, website chat, and web forms. Additional channels can be configured based on your business needs.' },
    { q: 'What does the monthly retainer cover?', a: 'Maintenance, monitoring, prompt optimization, small workflow adjustments, bug fixes, infrastructure management, and monthly reporting.' },
    { q: "Do I need a technical team to use Aiven's systems?", a: 'No. Aiven handles the full technical implementation. You need only to understand your own business workflows so we can design the right system for you.' },
    { q: 'How long does implementation take?', a: 'A standard AI Operations System takes 3–6 weeks from audit to launch, depending on complexity.' },
    { q: 'Do you offer a pilot or trial?', a: 'Yes. We offer a 30-Day Automation Pilot where we automate one specific workflow and measure results before a full engagement.' },
  ];

  const [open, setOpen] = useState(0);

  return (
    <Page currentPath={currentPath}>
      <Hero
        label="FAQ"
        title={<>Common<br />questions.</>}
        body="Quick answers about how Aiven works, what we build, who we work with, and what implementation actually looks like."
        ctas={
          <>
            <Btn href="#/contact" variant="dark">Still Have Questions?</Btn>
            <Btn href="#/how-it-works" variant="ghost-light" noIcon>See the Process</Btn>
          </>
        }
        visual={<HalftoneOrb size={460} shape="aperture" color="#0A0A0A" grid={52} maxDot={3.8} contrast={1.1} />}
      />

      <section className="page-section" style={{ background: 'transparent', marginLeft: -32, marginRight: -32, paddingLeft: 192, paddingRight: 32, paddingTop: 64, paddingBottom: 96 }}>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <FadeUp key={i} delay={i * 45}>
              <div className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="faq-q-icon">
                    <Icon name="plus" size={16} strokeWidth={1.8} />
                  </span>
                </button>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* =========================================================
   PAGE 10 — CONTACT
   ========================================================= */
function ContactPage({ currentPath }) {
  useLucide();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', business: '', email: '', phone: '', type: '', challenge: '' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <Page currentPath={currentPath} dark>
      <section className="hero" style={{ alignItems: 'flex-start', paddingTop: 96 }}>
        <div className="hero-text">
          <FadeUp>
            <SectionLabel style={{ marginBottom: 24 }}>Get Started</SectionLabel>
          </FadeUp>
          <FadeUp delay={120}>
            <h1 className="on-dark">Ready to stop managing repetitive work manually?</h1>
          </FadeUp>
          <FadeUp delay={240}>
            <p className="hero-body on-dark">
              Book a free automation audit and discover where your business can save time with AI-powered workflows.
            </p>
          </FadeUp>
          <FadeUp delay={360}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
              {[
                ' 30-minute discovery call',
                'Workflow opportunity assessment',
                'Plain-English recommendation — no obligation'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.85)', fontSize: 14, animation: `fadeSlideLeft 0.5s ease ${400 + i * 120}ms both` }}>
                  <Icon name="check-circle-2" size={18} color="#00B3C0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
          <style>{`@keyframes fadeSlideLeft { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:none; } }`}</style>
        </div>

        <div className="hero-visual" style={{ minHeight: 'auto', alignItems: 'flex-start' }}>
          <FadeUp delay={200} style={{ width: '100%' }}>
            <form className="contact-card" onSubmit={submit}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 16px' }}>
                  <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: '50%', background: 'rgba(0,179,192,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00B3C0' }}>
                    <Icon name="check" size={28} strokeWidth={2} />
                  </div>
                  <h3 style={{ color: '#fff', fontFamily: 'Sora, sans-serif', fontWeight: 700, fontSize: 22, margin: '0 0 12px' }}>Audit request received.</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.6, margin: 0, maxWidth: 380, marginInline: 'auto' }}>
                    We will be in touch within one business day to schedule your call.
                  </p>
                </div>
              ) : (
                <>
                  <div className="field-row">
                    <div className="field">
                      <label>Full Name</label>
                      <input type="text" value={form.name} onChange={set('name')} placeholder="Jane Smith" required />
                    </div>
                    <div className="field">
                      <label>Business Name</label>
                      <input type="text" value={form.business} onChange={set('business')} placeholder="Your company" required />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>Email Address</label>
                      <input type="email" value={form.email} onChange={set('email')} placeholder="jane@company.com" required />
                    </div>
                    <div className="field">
                      <label>Phone / WhatsApp (optional)</label>
                      <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Business Type</label>
                    <select value={form.type} onChange={set('type')} required>
                      <option value="">Select your industry…</option>
                      <option>Clinic / Healthcare</option>
                      <option>Internet Service Provider</option>
                      <option>Automotive Shop</option>
                      <option>Real Estate Agency</option>
                      <option>Gym / Fitness</option>
                      <option>Local Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Describe your biggest operational challenge</label>
                    <textarea value={form.challenge} onChange={set('challenge')} placeholder="What's eating your team's time?" required></textarea>
                  </div>
                  <Btn variant="primary" style={{ width: '100%', padding: '16px 24px', fontSize: 15 }}>
                    Book My Free Audit
                  </Btn>
                  <p style={{ marginTop: 16, fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 0.8, color: 'rgba(255,255,255,0.4)', textAlign: 'center' }}>
                    NO COMMITMENT · NO SALES PRESSURE · JUST A CONVERSATION
                  </p>
                </>
              )}
            </form>
          </FadeUp>
        </div>
      </section>
    </Page>
  );
}

Object.assign(window, { PackagesPage, WhyAivenPage, FaqPage, ContactPage });
