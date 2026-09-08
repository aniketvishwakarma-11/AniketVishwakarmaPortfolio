"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string; // e.g. "01"
  label: string;  // e.g. "ABOUT ME"
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  number,
  label,
  title,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      {/* Number + Label */}
      <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
        <span className="font-mono text-xs text-cyan-500 opacity-60">{number}.</span>
        <span className="section-label">{label}</span>
        <span className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
      </div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
        {title.split(" ").map((word, i) => {
          // Last word gets gradient
          const words = title.split(" ");
          const isLast = i === words.length - 1;
          return isLast ? (
            <span key={i} className="gradient-text"> {word}</span>
          ) : (
            <span key={i}>{word} </span>
          );
        })}
      </h2>

      {/* Gradient accent line */}
      <div
        className={`w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full ${center ? "mx-auto" : ""}`}
      />

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-5 text-slate-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}
