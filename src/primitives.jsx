/* global React */
const { useEffect, useRef, useState } = React;

/* =========================================================
   Lucide auto-init
   ========================================================= */
function useLucide(deps = []) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

/* =========================================================
   Icon — Lucide wrapper
   ========================================================= */
function Icon({ name, size = 20, color, strokeWidth = 1.6, style }) {
  return (
    <i
      data-lucide={name}
      style={{
        width: size,
        height: size,
        color,
        display: 'inline-flex',
        strokeWidth,
        ...style
      }}>
    </i>
  );
}

/* =========================================================
   Section label
   ========================================================= */
function SectionLabel({ children, style }) {
  return (
    <div className="section-label" style={{ ...style, height: '15px' }}>{children}</div>
  );
}

/* =========================================================
   Button — with magnetic hover + ripple click
   ========================================================= */
function Btn({ children, variant = 'primary', size = 'md', onClick, href, icon = '→', noIcon = false, style }) {
  const cls = `btn btn-${variant}${size === 'sm' ? ' btn-sm' : ''}`;

  function handleRipple(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const ripple = document.createElement('span');
    const d = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      position:absolute;width:${d}px;height:${d}px;
      left:${e.clientX - rect.left - d/2}px;top:${e.clientY - rect.top - d/2}px;
      background:rgba(255,255,255,0.18);border-radius:50%;
      transform:scale(0);animation:ripple-expand 0.55s ease forwards;pointer-events:none;
    `;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }

  const inner = (
    <>
      <span style={{ color: variant === 'primary' ? '#000' : undefined }}>{children}</span>
      {!noIcon && <span style={{ fontSize: 16, lineHeight: 1, transform: 'translateY(-1px)' }}>{icon}</span>}
    </>
  );

  const shared = { className: cls, onClick: (e) => { handleRipple(e); onClick && onClick(e); }, style: { position: 'relative', overflow: 'hidden', ...style } };

  if (href) return <a {...shared} href={href}>{inner}</a>;
  return <button {...shared}>{inner}</button>;
}

/* =========================================================
   IconBubble
   ========================================================= */
function IconBubble({ name, size = 48, iconSize = 22 }) {
  return (
    <div className="icon-bubble" style={{
      width: size, height: size,
      borderRadius: '50%',
      background: 'rgba(0,179,192,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#00B3C0',
      flexShrink: 0,
      transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), background 0.2s ease'
    }}>
      <Icon name={name} size={iconSize} strokeWidth={1.6} />
    </div>
  );
}

/* =========================================================
   ToolPill
   ========================================================= */
function ToolPill({ children, onDark }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 12px',
      borderRadius: 6,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 12,
      letterSpacing: 0.4,
      background: onDark ? 'rgba(255,255,255,0.04)' : '#F5F7F8',
      border: onDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #D9E1E5',
      color: onDark ? 'rgba(255,255,255,0.85)' : '#1A1A1A',
      transition: 'background 0.2s ease, border-color 0.2s ease'
    }}>{children}</span>
  );
}

function Badge({ children, accent, style }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 10px',
      borderRadius: 999,
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: 1.2,
      textTransform: 'uppercase',
      background: accent ? '#00B3C0' : 'transparent',
      color: accent ? '#000' : '#00B3C0',
      border: accent ? 'none' : '1px solid rgba(0,179,192,0.4)',
      ...style
    }}>{children}</span>
  );
}

/* =========================================================
   FadeUp — scroll-triggered entrance
   ========================================================= */
function FadeUp({ children, delay = 0, style, as: As = 'div' }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <As ref={ref} className={`fade-up${seen ? ' in' : ''}`} style={{ transitionDelay: delay + 'ms', ...style }}>
      {children}
    </As>
  );
}

/* =========================================================
   AnimatedCounter
   ========================================================= */
function Counter({ to, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const step = (t) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* =========================================================
   WordReveal — staggered word-by-word hero text
   ========================================================= */
function WordReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const text = typeof children === 'string' ? children : null;
  if (!text) return <span ref={ref}>{children}</span>;

  const words = text.split(' ');
  return (
    <span ref={ref}>
      {words.map((word, i) => (
        <span
          key={i}
          className={`hero-word${seen ? ' revealed' : ''}`}
          style={{ transitionDelay: `${delay + i * 55}ms`, marginRight: i < words.length - 1 ? '0.25em' : 0 }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

/* =========================================================
   TiltCard — subtle 3D tilt on mouse move
   ========================================================= */
function TiltCard({ children, style, className }) {
  const ref = useRef(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateZ(4px)`;
  }
  function onLeave() {
    const el = ref.current;
    if (el) el.style.transform = '';
  }

  return (
    <div ref={ref} className={`tilt-card ${className || ''}`} style={style}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  );
}

/* =========================================================
   Inject ripple keyframe once
   ========================================================= */
(function injectRippleStyle() {
  if (document.getElementById('aiven-ripple-style')) return;
  const s = document.createElement('style');
  s.id = 'aiven-ripple-style';
  s.textContent = '@keyframes ripple-expand { to { transform: scale(1); opacity: 0; } }';
  document.head.appendChild(s);
})();

Object.assign(window, {
  Icon, SectionLabel, Btn, IconBubble, ToolPill, Badge,
  FadeUp, Counter, WordReveal, TiltCard, useLucide
});
