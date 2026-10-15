"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Pure CSS-animated orbs — no JS animation engine, no GPU layer overload
// CSS animations are handled by the browser's compositor thread, not JS heap

export default function FloatingOrbs() {
  // Orbs drift as you scroll, so each section feels like a different "room"
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10"
      aria-hidden="true"
    >
      <motion.div style={{ x, y }} className="absolute inset-0">
      {/* Orb 1 — cyan top-left */}
      <div
        className="orb orb-1"
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          left: "10%",
          top: "-10%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          animation: "aurora 18s ease-in-out infinite",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
      {/* Orb 2 — violet bottom-right */}
      <div
        className="orb orb-2"
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          left: "80%",
          top: "65%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          animation: "aurora 22s ease-in-out infinite 3s",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
      {/* Orb 3 — indigo center */}
      <div
        className="orb orb-3"
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          left: "50%",
          top: "40%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.07) 0%, transparent 70%)",
          animation: "aurora 26s ease-in-out infinite 7s",
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
      </motion.div>
    </div>
  );
}
