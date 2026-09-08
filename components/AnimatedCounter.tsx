"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string; // e.g. "187+" or "6.7k+"
  duration?: number; // ms
}

function parseValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^([\d.]+)([a-zA-Z+]*)(.*)$/);
  if (!match) return { num: 0, suffix: val };
  return { num: parseFloat(match[1]), suffix: match[2] + match[3] };
}

export default function AnimatedCounter({
  value,
  duration = 1600,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");
  const { num, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let rafId: number = 0;
    const startVal = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = startVal + eased * num;

      if (num >= 1000) {
        setDisplay((current / 1000).toFixed(1) + "k");
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setDisplay(num >= 1000 ? (num / 1000).toFixed(1) + "k" : num.toString());
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isInView, num, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
