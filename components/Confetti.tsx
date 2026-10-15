"use client";

import { motion } from "framer-motion";

const COLORS = ["#06b6d4", "#7c3aed", "#818cf8", "#34d399", "#fbbf24"];
const COUNT = 18;

/** One-shot particle burst. Deterministic (no randomness) so it is pure and SSR-safe. */
export default function Confetti() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {Array.from({ length: COUNT }).map((_, i) => {
        const angle = (i / COUNT) * Math.PI * 2;
        const distance = 55 + (i % 3) * 22;
        return (
          <motion.span
            key={i}
            className="absolute w-1.5 h-2.5 rounded-[2px]"
            style={{ background: COLORS[i % COLORS.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance - 12,
              opacity: 0,
              scale: 0.4,
              rotate: (i % 2 ? 1 : -1) * 220,
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        );
      })}
    </span>
  );
}
