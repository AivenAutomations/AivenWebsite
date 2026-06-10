/* global React, Btn, Icon, useLucide, FadeUp, HalftoneOrb */
const { useEffect, useState, useRef } = React;

/* =========================================================
   Brand mark — node-connector SVG glyph
   ========================================================= */
function BrandMark({ size = 22, color = '#00B3C0' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="12" r="2" />
      <line x1="7" y1="6.8" x2="17" y2="11.4" />
      <line x1="7" y1="17.2" x2="17" y2="12.6" />
    </svg>
  );
}

/* =========================================================
   Top navigation
   ========================================================= */
const NAV_LINKS = [
  { href: '#/', label: 'Home' },
  { href: '#/problem', label: 'Problem' },
  { href: '#/solution', label: 'Solution' },
  { href: '#/how-it-works', label: 'How We Work' },
  { href: '#/case-study', label: 'Case Study' },
];

function Nav({ currentPath }) {
  useLucide();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="nav" style={{
      backgroundColor: scrolled ? 'rgba(0,0,0,0.96)' : 'rgba(0,0,0,0.88)',
      borderColor: 'rgba(255,255,255,0.08)',
      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none'
    }}>
      <div className="nav-inner">
        <a className="nav-brand" href="#/">
          <BrandMark />
          <span className="nav-brand-text">
            <span className="nav-brand-name">Aiven</span>
            <span className="nav-brand-suffix" style={{ fontFamily: '"JetBrains Mono"' }}>Automations</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}
              className={`nav-link${currentPath === l.href ? ' is-active' : ''}`}>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <Btn href="#/contact" variant="primary" size="sm" icon="→">Book a Free Audit</Btn>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   Left rail — section indicator
   ========================================================= */
const RAIL_ITEMS = [
  { href: '#/', label: 'Home' },
  { href: '#/problem', label: 'Problem' },
  { href: '#/solution', label: 'Solution' },
  { href: '#/services', label: 'Services' },
  { href: '#/how-it-works', label: 'Process' },
  { href: '#/case-study', label: 'Case' },
  { href: '#/packages', label: 'Packages' },
  { href: '#/why-aiven', label: 'Why Aiven' },
  { href: '#/faq', label: 'FAQ' },
  { href: '#/contact', label: 'Contact' },
];

function PageRail({ current, onDark }) {
  return (
    <nav className={`page-rail${onDark ? ' on-dark' : ''}`} aria-label="Page navigation">
      {RAIL_ITEMS.map((item) => (
        <a key={item.href} href={item.href}
          className={current === item.href ? 'is-current' : ''}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

/* =========================================================
   Page wrapper
   ========================================================= */
function Page({ children, currentPath, dark, features }) {
  return (
    <main className="page" style={dark ? { background: 'transparent', color: '#fff' } : undefined}>
      <div className="page-frame">
        {children}
        {features && features.length > 0 && (
          <section className={`feature-row${dark ? ' on-dark' : ''}`}>
            {features.map((f, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="feature">
                  <div className={`feature-icon${dark ? ' on-dark' : ''}`}>
                    {f.visual || <HalftoneOrb size={56} shape={f.shape || 'sphere'} grid={18} maxDot={1.6} color="#00B3C0" />}
                  </div>
                  <div className={`feature-title${dark ? ' on-dark' : ''}`}>{f.title}</div>
                  <p className={`feature-body${dark ? ' on-dark' : ''}`}>{f.body}</p>
                </div>
              </FadeUp>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}

/* =========================================================
   Hero block
   ========================================================= */
function Hero({ label, title, body, ctas, visual, dark }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <FadeUp>
          {label && <SectionLabel style={{ marginBottom: 24 }}>{label}</SectionLabel>}
        </FadeUp>
        <FadeUp delay={100}>
          <h1 className={dark ? 'on-dark' : ''} style={{ letterSpacing: '-1.2px', lineHeight: '1.06' }}>
            {title}
          </h1>
        </FadeUp>
        {body && (
          <FadeUp delay={200}>
            <p className={`hero-body${dark ? ' on-dark' : ''}`} style={{ lineHeight: '1.6' }}>{body}</p>
          </FadeUp>
        )}
        {ctas && (
          <FadeUp delay={300}>
            <div className="hero-ctas">{ctas}</div>
          </FadeUp>
        )}
      </div>
      <div className="hero-visual">{visual}</div>
    </section>
  );
}

/* =========================================================
   Footer
   ========================================================= */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner" style={{ maxWidth: 1440 }}>
        <div className="footer-brand">
          <a className="nav-brand" href="#/">
            <BrandMark />
            <span className="nav-brand-text">
              <span className="nav-brand-name">Aiven</span>
              <span className="nav-brand-suffix">Automations</span>
            </span>
          </a>
          <p className="footer-tag">AI automation systems for service businesses. Automate repetitive work. Respond faster. Stay organized.</p>
        </div>
        <div className="footer-links">
          {[
            ['#/', 'Home'],
            ['#/how-it-works', 'How We Work'],
            ['#/case-study', 'Case Study'],
            ['#/why-aiven', 'Why Aiven'],
            ['#/faq', 'FAQ'],
            ['#/contact', 'Contact'],
          ].map(([h, l]) => <a key={h} href={h}>{l}</a>)}
        </div>
        <div>
          <Btn href="#/contact" variant="primary" size="sm">Book a Free Audit</Btn>
        </div>
      </div>
      <div className="footer-bottom container">
        <div>© 2025 AIVEN AUTOMATIONS · ALL RIGHTS RESERVED</div>
        <div>BUILT FOR SERVICE BUSINESSES</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, PageRail, Page, Hero, Footer, BrandMark });
