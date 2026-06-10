import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export const Icon = {
  Clock: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  Inbox: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M3 13l3-8h12l3 8" />
      <path d="M3 13v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
      <path d="M3 13h5l1 2h6l1-2h5" />
    </svg>
  ),
  Channels: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 7h10M4 12h16M4 17h10" />
      <circle cx="18" cy="7" r="1.6" />
      <circle cx="18" cy="17" r="1.6" />
    </svg>
  ),
  Repeat: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 8h12l-2-2M20 16H8l2 2" />
    </svg>
  ),
  People: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="17" cy="11" r="2.2" />
      <path d="M3 19c0-3 3-5 6-5s6 2 6 5" />
      <path d="M15 19c0-2 2-3.6 4-3.6s2 0.6 2 1.6" />
    </svg>
  ),
  Eye: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  ),
  Bot: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 4v3" />
      <circle cx="9" cy="13" r="1.2" />
      <circle cx="15" cy="13" r="1.2" />
      <path d="M9 17h6" />
    </svg>
  ),
  Workflow: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3" y="4" width="6" height="6" rx="1.5" />
      <rect x="15" y="14" width="6" height="6" rx="1.5" />
      <path d="M9 7h6a3 3 0 0 1 3 3v4" />
    </svg>
  ),
  Funnel: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M3 5h18l-7 9v6l-4-2v-4z" />
    </svg>
  ),
  Search: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  ),
  Compass: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-2 6-6 2 2-6z" />
    </svg>
  ),
  Wrench: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M14 6a4 4 0 0 1 4 4l3 3-3 3-3-3a4 4 0 0 1-4-4l-6 6-3-3 6-6a4 4 0 0 1 4-4z" />
    </svg>
  ),
  Rocket: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M5 14l-2 6 6-2" />
      <path d="M13 4c4 0 7 3 7 7l-7 9-3-3 9-7" />
      <circle cx="14" cy="10" r="1.6" />
    </svg>
  ),
  Chart: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M3 20h18" />
      <path d="M6 16l4-5 4 3 5-7" />
    </svg>
  ),
  Check: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  ),
  Plug: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M9 3v5M15 3v5" />
      <path d="M6 8h12v3a6 6 0 0 1-12 0z" />
      <path d="M12 17v4" />
    </svg>
  ),
  Shield: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 3l8 3v5c0 5-4 9-8 10-4-1-8-5-8-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Handshake: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M3 12l4-4 3 1 3-3 3 3 5 4-3 3-5-4-3 3-3-2-4 3z" />
    </svg>
  ),
  WhatsApp: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 20l1.5-4A8 8 0 1 1 9 19.5L4 20z" />
      <path d="M9 10c.5 2 1.5 3 3.5 3.5l1.4-1.2 2.4 1c-.3 1.5-2 2.4-3.5 2-2.5-.5-4.3-2.3-4.8-4.8-.4-1.5.5-3.2 2-3.5l1 2.4z" />
    </svg>
  ),
  Mail: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  ArrowRight: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  ),
  ArrowDown: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  ),
  ChevronDown: (p: SVGProps<SVGSVGElement>) => (
    <svg {...base} {...p}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
};
