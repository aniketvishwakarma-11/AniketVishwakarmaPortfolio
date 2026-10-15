"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export interface CodeLine {
  indent: number;
  text: string;
  color: string;
}

/** Types the given lines out character by character once scrolled into view. */
export default function TypedCode({ lines }: { lines: CodeLine[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [typed, setTyped] = useState(0);

  const total = lines.reduce((sum, l) => sum + l.text.length, 0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let count = 0;
    const timer = setInterval(() => {
      count = reduced ? total : count + 1;
      setTyped(count);
      if (count >= total) clearInterval(timer);
    }, 28);
    return () => clearInterval(timer);
  }, [inView, total]);

  // How much of each line is visible, and which line holds the cursor
  const starts = lines.map((_, i) => lines.slice(0, i).reduce((sum, l) => sum + l.text.length, 0));
  const visible = lines.map((line, i) =>
    line.text.slice(0, Math.max(0, Math.min(line.text.length, typed - starts[i]))),
  );
  const cursorLine = lines.findIndex((line, i) => typed < starts[i] + line.text.length);
  const done = typed >= total;

  return (
    <div ref={ref}>
      {/* Full text for screen readers and crawlers */}
      <span className="sr-only">{lines.map((l) => l.text).join(" ")}</span>
      <div aria-hidden="true" className="min-h-[7.5rem]">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`${line.color} leading-5 whitespace-pre-wrap`}
            style={{ paddingLeft: line.indent ? `${line.indent * 16}px` : undefined }}
          >
            {visible[i]}
            {(done ? i === lines.length - 1 : i === cursorLine) && (
              <span className="inline-block w-[7px] h-3.5 -mb-0.5 ml-0.5 bg-cyan-400 animate-[blink_1s_steps(1)_infinite]" />
            )}
            {visible[i] === "" && " "}
          </div>
        ))}
      </div>
    </div>
  );
}
