"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, CornerDownLeft } from "lucide-react";
import { projects } from "@/lib/projects";

interface PaletteItem {
  id: string;
  label: string;
  hint: string;
  run: () => void;
}

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const OPEN_PALETTE_EVENT = "open-command-palette";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
    previousFocus.current?.focus();
  }, []);

  const items = useMemo<PaletteItem[]>(() => {
    const go = (id: string) => () => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return [
      ...sections.map((s) => ({ id: `s-${s.id}`, label: s.label, hint: "Go to section", run: go(s.id) })),
      ...projects.map((p) => ({
        id: `p-${p.id}`,
        label: p.title,
        hint: "Open project",
        run: () => {
          window.location.hash = `project-${p.id}`;
        },
      })),
      {
        id: "l-github",
        label: "GitHub",
        hint: "Open link",
        run: () => window.open("https://github.com/aniketvishwakarma-11", "_blank", "noopener,noreferrer"),
      },
      {
        id: "l-linkedin",
        label: "LinkedIn",
        hint: "Open link",
        run: () =>
          window.open("https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5", "_blank", "noopener,noreferrer"),
      },
      {
        id: "l-email",
        label: "Email",
        hint: "Send an email",
        run: () => {
          window.location.href = "mailto:aniketvis675@gmail.com";
        },
      },
    ];
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        previousFocus.current = document.activeElement as HTMLElement | null;
        setOpen((v) => !v);
      }
    };
    const onOpen = () => {
      previousFocus.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const choose = (item: PaletteItem | undefined) => {
    if (!item) return;
    close();
    // Let the dialog unmount before scrolling / navigating
    setTimeout(item.run, 50);
  };

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(results[cursor]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "Tab") {
      // The input is the only focusable control in the dialog: keep focus trapped
      e.preventDefault();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[15vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{ background: "#0b1020", border: "1px solid rgba(6,182,212,0.3)" }}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search size={16} className="text-cyan-400 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setCursor(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Jump to a section, project or link…"
                aria-label="Search commands"
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none"
              />
              <kbd className="text-[10px] font-mono text-slate-400 border border-white/10 rounded px-1.5 py-0.5">Esc</kbd>
            </div>
            <ul className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
              {results.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-slate-400">No matches</li>
              )}
              {results.map((item, i) => (
                <li key={item.id} role="option" aria-selected={i === cursor}>
                  <button
                    onMouseEnter={() => setCursor(i)}
                    onClick={() => choose(item)}
                    tabIndex={-1}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-colors ${
                      i === cursor ? "bg-cyan-500/10 text-cyan-300" : "text-slate-300"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      {item.hint}
                      {i === cursor && <CornerDownLeft size={12} />}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
