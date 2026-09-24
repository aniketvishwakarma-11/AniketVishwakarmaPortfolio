"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://github.com/aniketvishwakarma-11",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/aniket-vishwakarma-bb1b922b5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.047-8.733 0-9.652h3.554v1.366c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.511zM5.337 8.855c-1.144 0-1.915-.757-1.915-1.704 0-.951.768-1.703 1.96-1.703 1.189 0 1.914.752 1.939 1.703 0 .947-.751 1.704-1.984 1.704zm1.581 11.597H3.721V9.8h3.197v10.652zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
      </svg>
    ),
    label: "LinkedIn",
  },
  {
    href: "mailto:aniketvis675@gmail.com",
    icon: <Mail size={18} />,
    label: "Email",
  },
];

const codeLines = [
  { indent: 0, text: "const aniket = {", color: "text-slate-300" },
  { indent: 1, text: 'role: "Full-Stack & ML Engineer",', color: "text-cyan-300" },
  { indent: 1, text: 'hackathon: "GNA 4.0 Domain Winner 🏆",', color: "text-amber-300" },
  { indent: 1, text: 'internship: "SDE @ Chitralai",', color: "text-emerald-300" },
  { indent: 1, text: 'projects: "9+ Shipped to Production",', color: "text-violet-300" },
  { indent: 0, text: "}", color: "text-slate-300" },
];

const stats = [
  { value: "9+", label: "Projects Shipped" },
  { value: "187+", label: "Active Users" },
  { value: "6.7k+", label: "Events Tracked" },
];

export default function Hero() {
  const handleScroll = (id: string) => {
    setTimeout(() => {
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Spotlight */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(6,182,212,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center min-h-[calc(100vh-80px)] py-6 lg:py-6">

          {/* Left — Text Content */}
          <div className="flex flex-col justify-center max-w-xl lg:max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" style={{ animation: "pulse-glow 2.5s ease-in-out infinite", boxShadow: "0 0 6px rgba(16,185,129,0.6)" }} />
              <span className="text-sm text-slate-400 font-mono">
                Available for opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3">
                <span className="text-slate-100">Hi, I'm </span>
                <span className="gradient-text">Aniket Vishwakarma</span>
                <span className="block text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mt-2 font-mono">
                  Full-Stack & ML Engineer | GNA Hackathon 4.0 Domain Winner 🏆
                </span>
              </h1>
            </motion.div>

            

            {/* Type animation role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm font-medium"
                style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.2)" }}>
                <span className="text-cyan-400">&lt;</span>
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    1500,
                    "ML Engineer",
                    1500,
                    "WebRTC Specialist",
                    1500,
                    "MERN Stack Dev",
                    1500,
                  ]}
                  wrapper="span"
                  speed={55}
                  repeat={Infinity}
                  className="text-slate-200"
                />
                <span className="text-cyan-400">/&gt;</span>
              </div>
            </motion.div>

            {/* Subtitle & Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-xl"
            >
              <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-2">
                I engineer{" "}
                <span className="text-slate-200 font-medium">
                  high-concurrency, AI-powered web applications
                </span>{" "}
                that scale. Specializing in MERN stack, WebRTC real-time systems, and computer vision pipelines from architecture to production.
              </p>
              <p className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                SDE Intern @ Chitralai · Secured 10+ production APIs · 9 shipped products · 187+ users
              </p>
            </motion.div>

            {/* CTAs with Semantic Internal Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#projects");
                }}
                className="btn-primary flex items-center justify-center gap-2 py-3 px-6 text-sm font-medium rounded-xl text-center"
              >
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
                className="btn-secondary flex items-center justify-center gap-2 py-3 px-6 text-sm font-medium rounded-xl text-center"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              <div className="h-px flex-1 max-w-[60px]" style={{ background: "rgba(255,255,255,0.08)" }} />
              <span className="text-xs text-slate-600 font-mono">@aniketvishwakarma-11</span>
            </motion.div>
          </div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 lg:items-end"
          >
            {/* Profile Image */}
            <div className="relative">
              {/* Outer glow ring — static, no animation (blur+animate = very expensive) */}
              <div
                className="absolute -inset-3 rounded-2xl opacity-40"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(124,58,237,0.3))",
                  filter: "blur(16px)",
                }}
              />
              {/* Gradient border */}
              <div
                className="relative p-[2px] rounded-2xl"
                style={{ background: "linear-gradient(135deg, #06b6d4, #7c3aed)" }}
              >
                <div className="relative overflow-hidden rounded-2xl w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
                  <Image
                    src="/aniket.png"
                    alt="Aniket Vishwakarma"
                    fill
                    sizes="(max-width: 768px) 240px, 288px"
                    className="object-cover"
                    style={{ objectPosition: "50% 12%" }}
                    priority
                  />
                  {/* Subtle overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(7,11,20,0.4) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </div>

              {/* Floating badge — hackathon — CSS animation, no JS */}
              <div
                className="absolute -bottom-3 -left-5 glass-card px-3 py-1.5 rounded-xl text-xs font-semibold"
                style={{
                  border: "1px solid rgba(251,191,36,0.3)",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                🏆 <span className="text-amber-400">Domain Winner · Clean & Green</span>
              </div>

              {/* Floating badge — intern — CSS animation, no JS */}
              <div
                className="absolute -top-3 -right-5 glass-card px-3 py-1.5 rounded-xl text-xs font-semibold"
                style={{
                  border: "1px solid rgba(6,182,212,0.3)",
                  animation: "float 3s ease-in-out infinite 1.5s",
                }}
              >
                💼 <span className="text-cyan-400">SDE Intern</span>
              </div>
            </div>

            {/* Code card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="glass-card rounded-xl p-3 sm:p-3.5 w-full max-w-md font-mono text-xs"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Code header */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-600 text-[10px]">aniket.js</span>
              </div>
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className={`${line.color} leading-5`}
                  style={{ paddingLeft: line.indent ? `${line.indent * 16}px` : undefined }}
                >
                  {line.text}
                </div>
              ))}
            </motion.div>

            {/* Stats row — Increased width with full visibility */}
            <div className="flex gap-3 w-full max-w-md justify-between">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl px-4 py-2.5 text-center flex-1 min-w-0"
                >
                  <div className="text-xl sm:text-2xl font-bold gradient-text-static leading-tight">{stat.value}</div>
                  <div className="text-xs text-slate-400 mt-0.5 whitespace-nowrap">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
