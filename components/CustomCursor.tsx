"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);

  useEffect(() => {
    // Don't run on touch-only devices
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseEnter = () => { isHovering.current = true; };
    const onMouseLeave = () => { isHovering.current = false; };

    // Single RAF loop — lerp ring toward cursor
    const animate = () => {
      const lerp = 0.1;
      ring.current.x += (mouse.current.x - ring.current.x) * lerp;
      ring.current.y += (mouse.current.y - ring.current.y) * lerp;

      const dot = dotRef.current;
      const ringEl = ringRef.current;

      if (dot) {
        dot.style.transform = `translate(${mouse.current.x - 3}px, ${mouse.current.y - 3}px)`;
        dot.style.opacity = isHovering.current ? "0" : "1";
      }
      if (ringEl) {
        const size = isHovering.current ? 44 : 28;
        ringEl.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringEl.style.width = `${size}px`;
        ringEl.style.height = `${size}px`;
        ringEl.style.borderColor = isHovering.current
          ? "rgba(6,182,212,0.7)"
          : "rgba(6,182,212,0.45)";
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Use event delegation on document instead of attaching to every element
    document.addEventListener("mouseover", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        isHovering.current = true;
      }
    });
    document.addEventListener("mouseout", (e) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea, select")) {
        isHovering.current = false;
      }
    });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot — moves instantly to cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#06b6d4",
          boxShadow: "0 0 8px #06b6d4, 0 0 16px rgba(6,182,212,0.4)",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
      {/* Ring — follows with lerp */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 28,
          height: 28,
          borderRadius: "50%",
          border: "1px solid rgba(6,182,212,0.45)",
          pointerEvents: "none",
          zIndex: 9998,
          willChange: "transform",
          transition: "width 0.15s ease, height 0.15s ease, border-color 0.15s ease, opacity 0.15s ease",
        }}
      />
    </>
  );
}
