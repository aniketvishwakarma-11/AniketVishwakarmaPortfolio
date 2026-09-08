"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { value: "7+", label: "Projects Built", icon: "🚀", color: "#06b6d4" },
  { value: "187+", label: "Active Users", icon: "👥", color: "#7c3aed" },
  { value: "4.4k+", label: "Total Views", icon: "👁️", color: "#3b82f6" },
  { value: "6.7k+", label: "User Events", icon: "⚡", color: "#10b981" },
];

const expertise = [
  "React", "Next.js", "TypeScript", "Node.js", "Express.js",
  "MongoDB", "WebRTC", "Socket.IO", "Python", "FastAPI",
  "YOLOv8", "Scikit-learn", "Tailwind CSS", "Redux Toolkit",
  "Supabase", "Cloudinary", "Firebase", "REST APIs"
];

const marqueeItems = [...expertise, ...expertise];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="01"
          label="ABOUT ME"
          title="The Developer Behind the"
          subtitle="3rd-year engineering student at PVPPCOE, Mumbai — building scalable, production-grade applications."
        />

        {/* BENTO GRID — Perfectly balanced, no empty cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* ROW 1: BIO CARD (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                <div
                  className="relative p-[2px] rounded-2xl"
                  style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900">
                    <Image
                      src="/aniket.png"
                      alt="Aniket Vishwakarma"
                      fill
                      sizes="112px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {/* Open to work badge */}
                <div
                  className="mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">Open to Work</span>
                </div>
              </div>

              {/* Bio Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-2xl font-bold text-slate-100">Aniket Vishwakarma</h3>
                  <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    Full-Stack & ML
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Engineering student at{" "}
                  <span className="text-cyan-400 font-medium">PVPPCOE, Mumbai University</span>.
                  Since starting my journey in 2024, I&apos;ve engineered and deployed{" "}
                  <span className="text-slate-200 font-semibold">7+ full-stack platforms</span>{" "}
                  incorporating real-time communication (WebRTC, Socket.IO) and machine learning.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Currently interning as an{" "}
                  <span className="text-cyan-400 font-medium">SDE at Chitralai</span>, where I build
                  customer-facing features and hardened production APIs by eliminating 10+ critical security vulnerabilities.
                </p>

                {/* Key Highlights row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-white/5">
                  <div className="text-xs text-slate-400">
                    <span className="text-cyan-400 font-semibold block text-sm">7+</span>
                    Production Apps
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="text-amber-400 font-semibold block text-sm">Domain Winner 🏆</span>
                    Clean & Green Tech
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="text-emerald-400 font-semibold block text-sm">10+ Fixes 🛡️</span>
                    Security Hardened
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROW 1: QUICK DETAILS / PROFILE CARD (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20 text-lg">
                  📍
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">LOCATION</p>
                  <p className="text-slate-200 font-semibold text-sm">Mumbai, India</p>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-violet-500/10 border border-violet-500/20 text-lg">
                  🎓
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">EDUCATION</p>
                  <p className="text-slate-200 font-semibold text-sm">B.E. — PVPPCOE</p>
                  <p className="text-slate-500 text-xs">Graduating 2027</p>
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 text-lg">
                  💼
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">CURRENT ROLE</p>
                  <p className="text-slate-200 font-semibold text-sm">SDE Intern</p>
                  <p className="text-slate-500 text-xs">@ Chitralai, Mumbai</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5">
              <span className="text-xs font-mono text-slate-500 block mb-1">CORE STACK</span>
              <p className="text-xs text-cyan-300 font-mono">MERN · WebRTC · FastAPI · YOLOv8</p>
            </div>
          </motion.div>

          {/* ROW 2: FULL-WIDTH STATS BAR (Spans all 3 cols, 4 items) */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-5 text-center hover:scale-[1.02] transition-transform duration-200"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text-static mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <p className="text-slate-400 text-xs font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* ROW 3: THREE BALANCED HIGHLIGHT CARDS (1 col each) */}

          {/* CARD 1: HACKATHON WINNER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            style={{ border: "1px solid rgba(251,191,36,0.25)" }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }}
            />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🏆</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full text-amber-400 bg-amber-500/10 border border-amber-500/30 font-semibold">
                  Domain Winner
                </span>
              </div>
              <h4 className="text-slate-100 font-bold text-base mb-1">GNA 4.0 Hackathon</h4>
              <p className="text-xs text-amber-400/90 font-medium mb-3">Domain Winner · Clean & Green Technology</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Built <span className="text-slate-200 font-medium">EcoVision Bharat</span> — an AI civic platform with YOLOv8 severity analysis, GPS geolocation, and worker allocation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
              GNA University, Punjab · Apr 2026
            </div>
          </motion.div>

          {/* CARD 2: PRODUCTION SECURITY & SDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            style={{ border: "1px solid rgba(6,182,212,0.25)" }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
            />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">🛡️</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-semibold">
                  Production
                </span>
              </div>
              <h4 className="text-slate-100 font-bold text-base mb-1">Production Security & SDE</h4>
              <p className="text-xs text-cyan-400/90 font-medium mb-3">Chitralai SDE Internship</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Fixed <span className="text-slate-200 font-medium">10+ critical vulnerabilities</span> including IDOR, XSS, and broken auth. Enforced JWT role-based access control across core APIs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
              Serving thousands of users across India
            </div>
          </motion.div>

          {/* CARD 3: ARCHITECTURAL FOCUS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between"
            style={{ border: "1px solid rgba(124,58,237,0.25)" }}
          >
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
            />
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">⚡</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full text-violet-400 bg-violet-500/10 border border-violet-500/30 font-semibold">
                  Architecture
                </span>
              </div>
              <h4 className="text-slate-100 font-bold text-base mb-1">Real-Time & AI Systems</h4>
              <p className="text-xs text-violet-400/90 font-medium mb-3">Low-Latency & Clean Code</p>
              <p className="text-slate-400 text-xs leading-relaxed">
                Specialized in <span className="text-slate-200 font-medium">WebRTC peer connections</span>, Socket.IO signaling, and orchestrating fallback AI models (Gemini + Cloudflare Workers).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-slate-500 font-mono">
              Clean Architecture · Modular REST APIs
            </div>
          </motion.div>

          {/* ROW 4: EXPERTISE MARQUEE (Spans all 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card rounded-2xl p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-slate-400 tracking-wider">CORE TECH STACK</span>
              <span className="text-xs text-cyan-400/80 font-mono">Continuous delivery</span>
            </div>
            <div className="relative">
              <div
                className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, rgba(13,17,23,0.9), transparent)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, rgba(13,17,23,0.9), transparent)" }}
              />

              <div className="flex gap-3 animate-scroll-x w-max">
                {marqueeItems.map((item, i) => (
                  <span key={i} className="tech-chip whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
