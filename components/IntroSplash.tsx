"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Short intro: the "AV" monogram draws itself, then the overlay fades out.
 * A CSS fallback (.intro-splash in globals.css) hides it even if JS never runs,
 * and it is skipped entirely for people who prefer reduced motion.
 */
export default function IntroSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden="true"
          className="intro-splash fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[#070b14]"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <svg width="96" height="60" viewBox="0 0 74 46" fill="none">
            <defs>
              <linearGradient id="av-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
            <motion.path
              d="M4 42 L18 4 L32 42 M9.5 29 H26.5"
              stroke="url(#av-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M40 4 L54 42 L68 4"
              stroke="url(#av-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeInOut" }}
            />
          </svg>
          <motion.p
            className="font-mono text-xs tracking-[0.3em] text-slate-400"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            ANIKET VISHWAKARMA
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
