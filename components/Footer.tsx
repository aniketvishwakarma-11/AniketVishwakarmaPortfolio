"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(7,11,20,0.8)" }}>
      {/* Subtle gradient top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #06b6d4, #7c3aed, transparent)" }} />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}>
                AV
              </span>
              <span className="text-lg font-bold text-slate-200">Aniket Vishwakarma</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Full-Stack Developer & ML Engineer. Building real-time, AI-powered web applications that scale.
            </p>
            <p className="text-xs text-slate-600 mt-4 font-mono">
              Based in Mumbai, India 📍
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-300 mb-5 font-mono tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-300 mb-5 font-mono tracking-wider uppercase">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/aniketvishwakarma-11" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group">
                  <span className="text-slate-600 group-hover:text-white transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors group">
                  <span className="text-slate-600 group-hover:text-blue-400 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.511zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.704 0-.951.768-1.703 1.96-1.703 1.189 0 1.914.752 1.939 1.703 0 .947-.751 1.704-1.984 1.704zm1.581 11.597H3.721V9.8h3.197v10.652zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:aniketvis675@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors group">
                  <span className="text-slate-600 group-hover:text-cyan-400 transition-colors">✉</span>
                  aniketvis675@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-xs text-slate-600 font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Aniket Vishwakarma · Built with Next.js & Framer Motion ⚡
          </p>

          <motion.button
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 rounded-xl text-white transition-all"
            style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)", boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
