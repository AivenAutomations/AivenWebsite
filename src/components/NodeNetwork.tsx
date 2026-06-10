"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract node-and-connection graphic that echoes the logo motif.
 * Intentionally restrained: small nodes pulse, "data" pulses travel along
 * a few of the edges. No spinning, no orbs, no clichés.
 */
export function NodeNetwork({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  // Layered network — central spine + edges branching to satellite nodes
  type Node = { id: string; cx: number; cy: number; r: number; role?: "core" };
  const nodes: readonly Node[] = [
    { id: "c", cx: 200, cy: 200, r: 6.5, role: "core" },
    { id: "n1", cx: 80, cy: 110, r: 4 },
    { id: "n2", cx: 320, cy: 110, r: 4 },
    { id: "n3", cx: 60, cy: 260, r: 4 },
    { id: "n4", cx: 340, cy: 260, r: 4 },
    { id: "n5", cx: 200, cy: 60, r: 4 },
    { id: "n6", cx: 200, cy: 340, r: 4 },
    { id: "n7", cx: 130, cy: 200, r: 3.5 },
    { id: "n8", cx: 270, cy: 200, r: 3.5 },
    { id: "n9", cx: 110, cy: 320, r: 3 },
    { id: "n10", cx: 290, cy: 320, r: 3 },
    { id: "n11", cx: 110, cy: 80, r: 3 },
    { id: "n12", cx: 290, cy: 80, r: 3 },
  ] as const;

  // Edges connecting the core to satellites
  const edges = [
    ["c", "n7"],
    ["c", "n8"],
    ["c", "n5"],
    ["c", "n6"],
    ["n7", "n1"],
    ["n7", "n3"],
    ["n8", "n2"],
    ["n8", "n4"],
    ["n1", "n11"],
    ["n2", "n12"],
    ["n3", "n9"],
    ["n4", "n10"],
    ["n5", "n11"],
    ["n5", "n12"],
    ["n6", "n9"],
    ["n6", "n10"],
  ] as const;

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  // Edges that carry an animated "pulse" — keep small for restraint
  const pulseEdges = ["n7-c", "c-n8", "n5-c", "c-n6"];

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <radialGradient id="halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00B3C0" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#00B3C0" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#00B3C0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00B3C0" stopOpacity="0" />
          <stop offset="50%" stopColor="#00B3C0" stopOpacity="1" />
          <stop offset="100%" stopColor="#00B3C0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Soft halo behind the core */}
      <circle cx="200" cy="200" r="170" fill="url(#halo)" />

      {/* Static lines */}
      {edges.map(([a, b], i) => {
        const A = nodeMap[a];
        const B = nodeMap[b];
        return (
          <line
            key={`e-${i}`}
            x1={A.cx}
            y1={A.cy}
            x2={B.cx}
            y2={B.cy}
            stroke="#00B3C0"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}

      {/* Animated pulses along a few edges */}
      {!reduce &&
        pulseEdges.map((key, i) => {
          const [a, b] = key.split("-");
          const A = nodeMap[a];
          const B = nodeMap[b];
          const dx = B.cx - A.cx;
          const dy = B.cy - A.cy;
          return (
            <motion.circle
              key={`p-${i}`}
              r="2.5"
              fill="#00B3C0"
              initial={{ cx: A.cx, cy: A.cy, opacity: 0 }}
              animate={{
                cx: [A.cx, B.cx],
                cy: [A.cy, B.cy],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                delay: i * 0.65,
                ease: "easeInOut",
              }}
              style={{
                // ensure progress along edge
                transform: `translate(${dx * 0}px, ${dy * 0}px)`,
              }}
            />
          );
        })}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          {n.role === "core" ? (
            <>
              <motion.circle
                cx={n.cx}
                cy={n.cy}
                r={n.r + 6}
                stroke="#00B3C0"
                strokeWidth="1"
                strokeOpacity="0.6"
                initial={{ scale: 1, opacity: 0.6 }}
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }
                }
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
              />
              <circle cx={n.cx} cy={n.cy} r={n.r} fill="#00B3C0" />
              <circle
                cx={n.cx}
                cy={n.cy}
                r={n.r - 2}
                fill="#FFFFFF"
                fillOpacity="0.9"
              />
            </>
          ) : (
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="#FFFFFF"
              stroke="#00B3C0"
              strokeWidth="1.4"
              initial={{ opacity: 0.85 }}
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 3 + (n.cx % 5) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (n.cx + n.cy) % 2,
              }}
            />
          )}
        </g>
      ))}
    </svg>
  );
}
