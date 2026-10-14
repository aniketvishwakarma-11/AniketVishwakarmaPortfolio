"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Mail } from "lucide-react";
import { projects } from "@/lib/projects";
import { showToast } from "./Toast";

export const OPEN_QUICK_VIEW_EVENT = "open-quick-view";

/** 30-second recruiter summary, opened from the Hero. */
export default function QuickView() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onOpen = () => {
      previousFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener(OPEN_QUICK_VIEW_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_QUICK_VIEW_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocus.current?.focus();
    };
  }, [open]);

  const top = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="30-second summary"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative w-full max-w-lg max-h-[88dvh] overflow-y-auto rounded-t-2xl sm:rounded-2xl p-5 sm:p-6"
            style={{ background: "#0b1020", border: "1px solid rgba(6,182,212,0.3)" }}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-mono text-cyan-400 mb-1">30-SECOND SUMMARY</p>
                <h2 className="text-xl font-bold text-slate-100">Aniket Vishwakarma</h2>
                <p className="text-sm text-slate-400">Full-Stack &amp; ML Engineer · Mumbai · B.E. IT, graduating 2027</p>
              </div>
              <button
                ref={closeRef}
                onClick={() => setOpen(false)}
                aria-label="Close summary"
                className="p-2 -mr-2 -mt-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
              >
                <X size={20} />
              </button>
            </div>

            <section className="mb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Experience</h3>
              <ul className="space-y-1.5 text-sm text-slate-300">
                <li>
                  <span className="text-cyan-300 font-semibold">Platform &amp; Backend Engineer Intern</span> · Allkane
                  <span className="text-slate-400"> · Sept 2026 – present</span>
                </li>
                <li>
                  <span className="font-semibold">SDE Intern</span> · Chitralai
                  <span className="text-slate-400"> · May – Sept 2026</span>
                </li>
                <li>
                  <span className="font-semibold">Domain Winner 🏆</span> · GNA 4.0 Hackathon
                  <span className="text-slate-400"> · April 2026</span>
                </li>
              </ul>
            </section>

            <section className="mb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Top projects</h3>
              <ul className="space-y-2">
                {top.map((p) => (
                  <li key={p.id} className="flex items-center justify-between gap-3 text-sm">
                    <div className="min-w-0">
                      <p className="text-slate-100 font-medium truncate">{p.title}</p>
                      <p className="text-xs text-slate-400 truncate">{p.type}</p>
                    </div>
                    {p.deployment !== "#" && (
                      <a
                        href={p.deployment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                      >
                        Live <ExternalLink size={12} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <a
                href="mailto:aniketvis675@gmail.com"
                className="btn-primary flex items-center justify-center gap-2 py-2.5 px-5 text-sm rounded-xl"
              >
                <Mail size={14} /> Email me
              </a>
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText("aniketvis675@gmail.com");
                    showToast("Email copied to clipboard");
                  } catch {
                    showToast("Couldn't copy. Please select the address manually.", "error");
                  }
                }}
                className="btn-secondary flex items-center justify-center gap-2 py-2.5 px-5 text-sm rounded-xl"
              >
                Copy email
              </button>
              <a
                href="https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2 py-2.5 px-5 text-sm rounded-xl"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
