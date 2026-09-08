"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Trophy, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    year: "2024",
    period: "Year 1",
    title: "Started the Development Journey",
    org: "Self-taught",
    icon: <Rocket size={16} />,
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    badgeStyle: { background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#22d3ee" },
    description:
      "Dove into full-stack development with a focus on building real, working products. Mastered the MERN stack and explored WebRTC for real-time communication.",
    achievements: [
      "Built first full-stack project",
      "Mastered MERN stack from scratch",
      "Explored WebRTC & real-time systems",
    ],
  },
  {
    year: "2024–2025",
    period: "Year 2",
    title: "PVPPCOE Engineering — 3rd Year",
    org: "Mumbai University",
    icon: <GraduationCap size={16} />,
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    badgeStyle: { background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" },
    description:
      "Pursuing B.E. while actively shipping production-grade projects and competing in hackathons. Built 7+ full-stack apps used by real users.",
    achievements: [
      "7+ full-stack projects shipped",
      "187+ active users across deployments",
      "Active hackathon competitor",
    ],
  },
  {
    year: "April 2026",
    period: "Milestone",
    title: "Domain Winner — GNA 4.0 Hackathon 🏆",
    org: "GNA University, Punjab",
    icon: <Trophy size={16} />,
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/30",
    badgeStyle: { background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.4)", color: "#fbbf24" },
    description:
      "Domain Winner in Clean & Green Technology at GNA 4.0 Hackathon for EcoVision Bharat — an AI-powered waste management civic platform with YOLOv8 ML inference, real-time notifications, and gamified scoring.",
    achievements: [
      "🏆 Domain Winner — Clean & Green Technology",
      "AI-powered civic tech platform with YOLOv8",
      "Full-stack ML & real-time notification pipeline",
      "Municipal officer verification & worker dispatch",
    ],
  },
  {
    year: "May 2026 – Present",
    period: "Current",
    title: "Software Development Engineer Intern",
    org: "Chitralai · Mumbai, India",
    icon: <Briefcase size={16} />,
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    badgeStyle: { background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.4)", color: "#34d399" },
    isCurrent: true,
    description:
      "Full-stack engineering at Chitralai — an AI-powered event photo discovery platform serving thousands of users across India.",
    achievements: [
      "Engineered full-stack features (React/Next.js + Node.js/Express)",
      "Identified & remediated 10+ critical security vulnerabilities",
      "Implemented JWT-based RBAC across all core APIs",
      "Hardened platform against IDOR, XSS, and OTP brute-force",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          number="02"
          label="EXPERIENCE"
          title="My Journey &"
          subtitle="From self-taught developer to hackathon winner and production engineer."
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #06b6d4, #7c3aed, rgba(124,58,237,0.1))" }} />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center glass-card ${item.iconColor} flex-shrink-0`}
                    style={{ border: `1px solid ${item.borderColor.replace("border-", "rgba(").replace("/30", ", 0.3)")}` }}
                  >
                    <span className={item.iconColor}>{item.icon}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={item.badgeStyle}>
                        {item.year}
                      </span>
                      {item.isCurrent && (
                        <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.4)", color: "#34d399" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-5 sm:p-6" style={{ border: `1px solid ${item.borderColor.replace("border-", "rgba(").replace("/30", ", 0.15)")}` }}>
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 font-mono mb-3">{item.org}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-400"
                        >
                          <CheckCircle2 size={14} className={`flex-shrink-0 mt-0.5 ${item.iconColor}`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
