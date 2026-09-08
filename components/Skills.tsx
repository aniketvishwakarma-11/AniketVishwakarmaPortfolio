"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Sparkles, Layers, X } from "lucide-react";

interface SkillItem {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  color: string;
  accentHex: string;
  borderColor: string;
  glowColor: string;
  skills: SkillItem[];
}

// Complete mapping of where each technology is used in Aniket's work
const skillUsageMap: Record<
  string,
  { usedIn: string[]; highlight: string; role?: string }
> = {
  React: {
    usedIn: [
      "Student Placement Prediction",
      "Vishwakarma Video Call",
      "EcoVision Bharat",
      "Stock Monitoring Dashboard",
      "Chitralai SDE Internship",
    ],
    highlight: "Core foundation for interactive dashboards & real-time client views",
  },
  "Next.js": {
    usedIn: [
      "Student Placement Prediction",
      "Karma Connect",
      "Personal Portfolio",
      "Chitralai SDE Internship",
    ],
    highlight: "Full-stack App Router architecture, SSR & secure API endpoints",
  },
  TypeScript: {
    usedIn: [
      "Student Placement Prediction",
      "Personal Portfolio",
      "Chitralai SDE Internship",
    ],
    highlight: "Strict type safety across API contracts and UI states",
  },
  "Tailwind CSS": {
    usedIn: [
      "Student Placement Prediction",
      "EcoVision Bharat",
      "Personal Portfolio",
    ],
    highlight: "Modern glassmorphic styling, design token systems & responsive UIs",
  },
  "Framer Motion": {
    usedIn: ["Personal Portfolio", "Student Placement Prediction"],
    highlight: "Physics-based gestures, smooth scroll transitions & modal popovers",
  },
  "Redux Toolkit": {
    usedIn: ["Karma Connect"],
    highlight: "Predictable centralized state for social feeds & real-time messaging",
  },
  Recharts: {
    usedIn: ["Student Placement Prediction", "Stock Monitoring Dashboard"],
    highlight: "Dynamic analytics charts & placement probability trends",
  },
  "Node.js": {
    usedIn: [
      "Student Placement Prediction",
      "Vishwakarma Video Call",
      "HomeFix",
      "Stock Monitoring Dashboard",
      "HomeVista",
      "Chitralai SDE Internship",
    ],
    highlight: "Scalable asynchronous backends & API middleware pipelines",
  },
  "Express.js": {
    usedIn: [
      "Student Placement Prediction",
      "EcoVision Bharat",
      "HomeFix",
      "HomeVista",
      "Chitralai SDE Internship",
    ],
    highlight: "REST API microservices with security middleware & RBAC",
  },
  Python: {
    usedIn: ["Student Placement Prediction", "EcoVision Bharat"],
    highlight: "Machine learning workflows, data preprocessing & model serving",
  },
  FastAPI: {
    usedIn: ["EcoVision Bharat"],
    highlight: "High-throughput asynchronous Python microservice for YOLOv8 inference",
  },
  "Passport.js": {
    usedIn: ["HomeFix"],
    highlight: "Session-based user authentication and verified provider management",
  },
  "JWT Auth": {
    usedIn: [
      "Student Placement Prediction",
      "Stock Monitoring Dashboard",
      "Chitralai SDE Internship",
    ],
    highlight: "Stateless authorization, secure HTTP-only cookies & RBAC guards",
  },
  MongoDB: {
    usedIn: [
      "Student Placement Prediction",
      "Karma Connect",
      "Vishwakarma Video Call",
      "HomeFix",
      "Stock Monitoring Dashboard",
      "HomeVista",
    ],
    highlight: "Document database modeling with Mongoose schemas & aggregation pipelines",
  },
  PostgreSQL: {
    usedIn: ["EcoVision Bharat"],
    highlight: "Relational schema for municipal reports, severity tags & worker assignments",
  },
  Supabase: {
    usedIn: ["EcoVision Bharat"],
    highlight: "Real-time subscriptions & cloud database sync for civic reports",
  },
  Firebase: {
    usedIn: ["Student Placement Prediction"],
    highlight: "Firebase Authentication integrated with secure cookie sessions",
  },
  Cloudinary: {
    usedIn: ["Karma Connect", "EcoVision Bharat", "HomeVista"],
    highlight: "Cloud media uploads, image optimization & secure hosting",
  },
  "AWS S3": {
    usedIn: ["Chitralai SDE Internship"],
    highlight: "Secure cloud bucket storage for large event media discovery",
  },
  WebRTC: {
    usedIn: ["Vishwakarma Video Call"],
    highlight: "Peer-to-peer real-time video, audio & screen-sharing communication",
  },
  "Socket.IO": {
    usedIn: ["Karma Connect", "Vishwakarma Video Call"],
    highlight: "Bi-directional WebSocket messaging and WebRTC signaling server",
  },
  "REST APIs": {
    usedIn: ["All 7 Production Projects", "Chitralai SDE Internship"],
    highlight: "RESTful architecture, status conventions & comprehensive error handling",
  },
  "Video Conf.": {
    usedIn: ["Vishwakarma Video Call"],
    highlight: "Multi-party peer meetings with in-call chat & screen broadcasting",
  },
  "Real-time Chat": {
    usedIn: ["Karma Connect", "Vishwakarma Video Call"],
    highlight: "Instant messaging with online presence & read confirmations",
  },
  "Python ML": {
    usedIn: ["Student Placement Prediction", "EcoVision Bharat"],
    highlight: "Applied machine learning pipelines from dataset to deployment",
  },
  "Scikit-learn": {
    usedIn: ["Student Placement Prediction"],
    highlight: "Trained classification models predicting student placement probability",
  },
  YOLOv8: {
    usedIn: ["EcoVision Bharat (GNA 4.0 Domain Winner 🏆)"],
    highlight: "Computer vision severity detection identifying garbage density from photos",
  },
  Pandas: {
    usedIn: ["Student Placement Prediction"],
    highlight: "Dataset transformation, feature engineering & outlier handling",
  },
  NumPy: {
    usedIn: ["Student Placement Prediction"],
    highlight: "Vectorized numerical transformations for ML feature arrays",
  },
  "Gemini AI": {
    usedIn: ["Student Placement Prediction"],
    highlight: "Conversational career counselor chatbot & automated ATS resume scoring",
  },
  Vercel: {
    usedIn: [
      "Student Placement Prediction",
      "Karma Connect",
      "Personal Portfolio",
    ],
    highlight: "Continuous integration, edge network caching & instant deployments",
  },
  Render: {
    usedIn: ["Vishwakarma Video Call", "HomeFix", "HomeVista"],
    highlight: "Cloud web services hosting for persistent Node.js servers",
  },
  "Git / GitHub": {
    usedIn: ["All 7 Production Projects", "Chitralai Production Repos"],
    highlight: "Git branching, PR reviews, CI/CD and release versioning",
  },
  ESLint: {
    usedIn: ["Next.js & React Projects"],
    highlight: "Automated static analysis & enforcing TypeScript best practices",
  },
  Turbopack: {
    usedIn: ["Personal Portfolio (Next.js 16)"],
    highlight: "Ultra-fast incremental Rust compilation for modern React apps",
  },
  Vite: {
    usedIn: ["EcoVision Bharat"],
    highlight: "Lightning-fast HMR and build bundling for client React apps",
  },
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    color: "text-cyan-400",
    accentHex: "#06b6d4",
    borderColor: "rgba(6,182,212,0.2)",
    glowColor: "rgba(6,182,212,0.08)",
    skills: [
      { name: "React", icon: "⚛️" },
      { name: "Next.js", icon: "▲" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Framer Motion", icon: "🎭" },
      { name: "Redux Toolkit", icon: "🔄" },
      { name: "Recharts", icon: "📊" },
    ],
  },
  {
    title: "Backend",
    color: "text-violet-400",
    accentHex: "#7c3aed",
    borderColor: "rgba(124,58,237,0.2)",
    glowColor: "rgba(124,58,237,0.08)",
    skills: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "FastAPI", icon: "🚀" },
      { name: "Passport.js", icon: "🔐" },
      { name: "JWT Auth", icon: "🔑" },
    ],
  },
  {
    title: "Database & Cloud",
    color: "text-blue-400",
    accentHex: "#3b82f6",
    borderColor: "rgba(59,130,246,0.2)",
    glowColor: "rgba(59,130,246,0.08)",
    skills: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Supabase", icon: "⚡" },
      { name: "Firebase", icon: "🔥" },
      { name: "Cloudinary", icon: "☁️" },
      { name: "AWS S3", icon: "🪣" },
    ],
  },
  {
    title: "Real-Time & Comm",
    color: "text-emerald-400",
    accentHex: "#10b981",
    borderColor: "rgba(16,185,129,0.2)",
    glowColor: "rgba(16,185,129,0.08)",
    skills: [
      { name: "WebRTC", icon: "📹" },
      { name: "Socket.IO", icon: "🔌" },
      { name: "REST APIs", icon: "🔗" },
      { name: "Video Conf.", icon: "🎥" },
      { name: "Real-time Chat", icon: "💬" },
    ],
  },
  {
    title: "AI / ML",
    color: "text-amber-400",
    accentHex: "#f59e0b",
    borderColor: "rgba(245,158,11,0.2)",
    glowColor: "rgba(245,158,11,0.08)",
    skills: [
      { name: "Python ML", icon: "🤖" },
      { name: "Scikit-learn", icon: "🧠" },
      { name: "YOLOv8", icon: "👁️" },
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Gemini AI", icon: "✨" },
    ],
  },
  {
    title: "Tools & Deployment",
    color: "text-rose-400",
    accentHex: "#f43f5e",
    borderColor: "rgba(244,63,94,0.2)",
    glowColor: "rgba(244,63,94,0.08)",
    skills: [
      { name: "Vercel", icon: "▲" },
      { name: "Render", icon: "🚀" },
      { name: "Git / GitHub", icon: "🐙" },
      { name: "ESLint", icon: "🔍" },
      { name: "Turbopack", icon: "⚡" },
      { name: "Vite", icon: "⚡" },
    ],
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    icon: string;
    categoryColor: string;
  } | null>(null);

  const currentUsage = activeSkill ? skillUsageMap[activeSkill.name] : null;

  const handleSkillClick = (
    skill: SkillItem,
    categoryAccentHex: string,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    const isTouch =
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover)").matches;

    if (isTouch && activeSkill?.name === skill.name) {
      setActiveSkill(null);
      return;
    }

    setActiveSkill({
      name: skill.name,
      icon: skill.icon,
      categoryColor: categoryAccentHex,
    });

    if (isTouch && event?.currentTarget) {
      const button = event.currentTarget;
      setTimeout(() => {
        const rect = button.getBoundingClientRect();
        if (rect.top < 80 || rect.bottom > window.innerHeight - 140) {
          button.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100);
    }
  };

  const handleSkillMouseEnter = (
    skill: SkillItem,
    categoryAccentHex: string
  ) => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover)").matches
    ) {
      setActiveSkill({
        name: skill.name,
        icon: skill.icon,
        categoryColor: categoryAccentHex,
      });
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          number="03"
          label="SKILLS"
          title="Technical"
          subtitle="Full-stack architecture, AI engineering, and scalable distributed systems."
        />

        {/* Subtle, understated hint */}
        <div className="text-center -mt-8 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
            click or hover any technology to see where it was applied
          </span>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 items-start">
          {skillCategories.map((category, catIndex) => {
            const isSelectedCategory = category.skills.some(
              (s) => s.name === activeSkill?.name
            );

            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.05 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between ${
                  isSelectedCategory
                    ? "border-cyan-500/40"
                    : "hover:border-cyan-500/30"
                }`}
                style={{
                  border: `1px solid ${
                    isSelectedCategory
                      ? category.accentHex
                      : category.borderColor
                  }`,
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{ background: category.accentHex }}
                    />
                    <h3 className={`font-semibold text-sm ${category.color}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const isSelected = activeSkill?.name === skill.name;
                      return (
                        <button
                          key={skillIndex}
                          type="button"
                          onMouseEnter={() =>
                            handleSkillMouseEnter(skill, category.accentHex)
                          }
                          onClick={(e) =>
                            handleSkillClick(skill, category.accentHex, e)
                          }
                          className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 text-left cursor-pointer select-none ${
                            isSelected
                              ? "text-white scale-105 shadow-md"
                              : "text-slate-300 active:scale-95 md:hover:text-white md:hover:scale-105"
                          }`}
                          style={{
                            background: isSelected
                              ? `linear-gradient(135deg, ${category.accentHex}40, rgba(13,17,23,0.9))`
                              : category.glowColor,
                            border: `1px solid ${
                              isSelected
                                ? category.accentHex
                                : category.borderColor
                            }`,
                            boxShadow: isSelected
                              ? `0 0 15px ${category.accentHex}40`
                              : "none",
                          }}
                          aria-label={`View where ${skill.name} is used`}
                        >
                          <span className="text-sm leading-none">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile / Tablet Inline Tech Inspector: Expands right inside the active category */}
                <AnimatePresence>
                  {isSelectedCategory && activeSkill && currentUsage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="lg:hidden overflow-hidden w-full"
                    >
                      <div
                        className="mt-4 pt-3.5 border-t rounded-xl p-3.5 sm:p-4 text-xs"
                        style={{
                          background: `linear-gradient(135deg, ${category.glowColor}, rgba(13,17,23,0.92))`,
                          borderColor: `${activeSkill.categoryColor}40`,
                        }}
                      >
                        {/* Header with name, badge, and close button */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xl leading-none">
                              {activeSkill.icon}
                            </span>
                            <span className="font-bold text-slate-100 text-sm sm:text-base">
                              {activeSkill.name}
                            </span>
                            <span
                              className="text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-medium"
                              style={{
                                color: activeSkill.categoryColor,
                                background: `${activeSkill.categoryColor}15`,
                                border: `1px solid ${activeSkill.categoryColor}35`,
                              }}
                            >
                              Applied Stack
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveSkill(null);
                            }}
                            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 active:bg-white/20 transition-colors"
                            aria-label="Close details"
                          >
                            <X size={15} />
                          </button>
                        </div>

                        {/* Highlight description */}
                        <p className="text-slate-300 text-xs leading-relaxed mb-3">
                          {currentUsage.highlight}
                        </p>

                        {/* Applied in Projects list */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-2 text-slate-400 font-mono text-[10px] uppercase font-semibold">
                            <Layers
                              size={12}
                              style={{ color: activeSkill.categoryColor }}
                            />
                            <span>
                              Applied In {currentUsage.usedIn.length} Project
                              {currentUsage.usedIn.length > 1 ? "s" : ""}:
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {currentUsage.usedIn.map((item, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-200 border"
                                style={{
                                  background: item.includes("🏆")
                                    ? "rgba(245,158,11,0.12)"
                                    : item.includes("Internship")
                                    ? "rgba(6,182,212,0.12)"
                                    : "rgba(255,255,255,0.05)",
                                  borderColor: item.includes("🏆")
                                    ? "rgba(245,158,11,0.4)"
                                    : item.includes("Internship")
                                    ? "rgba(6,182,212,0.4)"
                                    : "rgba(255,255,255,0.1)",
                                }}
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{
                                    background: activeSkill.categoryColor,
                                  }}
                                />
                                <span className="leading-snug">{item}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* INTERACTIVE TECH INSPECTOR DOCK: Shows where active skill was used (Desktop only) */}
        <div className="hidden lg:block">
          <AnimatePresence mode="wait">
            {activeSkill && currentUsage ? (
              <motion.div
                key={activeSkill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.25 }}
                className="glass-card rounded-2xl p-6 sm:p-7 border relative overflow-hidden shadow-2xl"
                style={{
                  borderColor: `${activeSkill.categoryColor}50`,
                  boxShadow: `0 0 35px ${activeSkill.categoryColor}15`,
                }}
              >
                {/* Subtle top indicator bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${activeSkill.categoryColor}, transparent)`,
                  }}
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left info */}
                  <div className="space-y-2 max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{activeSkill.icon}</span>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
                          <span>{activeSkill.name}</span>
                          <span
                            className="text-[11px] font-mono px-2 py-0.5 rounded-full uppercase"
                            style={{
                              color: activeSkill.categoryColor,
                              background: `${activeSkill.categoryColor}15`,
                              border: `1px solid ${activeSkill.categoryColor}35`,
                            }}
                          >
                            Production Stack
                          </span>
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {currentUsage.highlight}
                    </p>
                  </div>

                  {/* Right: Where it is used */}
                  <div className="flex-1 md:max-w-md">
                    <div className="flex items-center gap-2 mb-2.5">
                      <Layers
                        size={14}
                        style={{ color: activeSkill.categoryColor }}
                      />
                      <span className="text-xs font-mono text-slate-400 tracking-wider uppercase font-semibold">
                        Applied In {currentUsage.usedIn.length} Project
                        {currentUsage.usedIn.length > 1 ? "s" : ""}:
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentUsage.usedIn.map((item, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 border transition-all"
                          style={{
                            background: item.includes("🏆")
                              ? "rgba(245,158,11,0.12)"
                              : item.includes("Internship")
                              ? "rgba(6,182,212,0.12)"
                              : "rgba(255,255,255,0.05)",
                            borderColor: item.includes("🏆")
                              ? "rgba(245,158,11,0.4)"
                              : item.includes("Internship")
                              ? "rgba(6,182,212,0.4)"
                              : "rgba(255,255,255,0.1)",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: activeSkill.categoryColor }}
                          />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card rounded-2xl p-5 border border-white/5 text-center text-slate-400 text-sm flex items-center justify-center gap-2.5">
                <Sparkles size={16} className="text-cyan-400 shrink-0" />
                <span>
                  Hover over any technology above to explore architectural highlights and production project usage.
                </span>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Currently Exploring / Continuous Learning */}
        <div
          className="mt-6 glass-card rounded-2xl p-5"
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
              <Sparkles size={12} className="text-cyan-400" />
              CURRENTLY RESEARCHING →
            </span>
            {[
              "Docker & Containers",
              "Kubernetes",
              "GraphQL",
              "React Native",
              "Cloudflare Workers AI",
            ].map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-medium text-slate-400 bg-white/[0.03] border border-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
