"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, GraduationCap, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    year: "2021 – 2023",
    period: "HSC / Junior College",
    title: "Higher Secondary (11th & 12th) — Science & Computer Science",
    org: "D.G. Ruparel College · Mumbai",
    icon: <GraduationCap size={16} />,
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    badgeStyle: { background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)", color: "#22d3ee" },
    description:
      "Completed Higher Secondary Certificate (HSC) in Science with Bifocal Computer Science at D.G. Ruparel College. Cultivated strong algorithmic thinking, microprocessor fundamentals, and advanced computational problem solving.",
    achievements: [
      "Bifocal Computer Science (C++, Data Structures, OOP)",
      "8085 Microprocessor architecture & digital electronics",
      "Rigorous foundations in Physics, Chemistry & Mathematics",
      "Premier junior college known for academic excellence in Mumbai",
    ],
  },
  {
    year: "2023 – 2027",
    period: "Undergraduate",
    title: "Bachelor of Engineering (B.E.) — Final Year",
    org: "PVPPCOE · Mumbai University",
    icon: <GraduationCap size={16} />,
    iconColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    badgeStyle: { background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.3)", color: "#a78bfa" },
    description:
      "Pursuing Bachelor of Engineering while architecting scalable full-stack applications, production AI pipelines, and competing in national-level hackathons.",
    achievements: [
      "Final-year engineering student building production-grade software",
      "8+ full-stack & AI projects shipped to live production",
      "187+ active users across deployed platforms",
      "Active hackathon competitor & technical project lead",
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
    year: "May 2026 – Sept 2026",
    period: "Completed",
    title: "Software Development Engineer Intern",
    org: "Chitralai · Mumbai, India",
    icon: <Briefcase size={16} />,
    iconColor: "text-emerald-400",
    borderColor: "border-emerald-500/30",
    badgeStyle: { background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.4)", color: "#34d399" },
    isCurrent: false,
    description:
      "Full-stack engineering at Chitralai, an AI-powered event photo discovery platform serving thousands of users across India. Owned features end to end across the React/Next.js frontend and Node.js/Express backend, from performance optimization and security hardening to authentication and an automated reel generation pipeline.",
    achievements: [
      "Developed reusable frontend components and backend modules in React/Next.js and Node.js/Express, following modular REST API design",
      "Reduced image load latency by 40% with an async thumbnail pipeline (AWS SQS workers generate thumbnails on upload) and an EC2 backfill script for existing images",
      "Architected and delivered a reel generation pipeline from scratch, automating the flow from event photo selection to a rendered, shareable reel",
      "Implemented Sign in with Apple authentication, covering identity token validation, secure session handling and account linking with existing users",
      "Audited the platform and remediated 10+ critical vulnerabilities, including IDOR, XSS and broken access control",
      "Enforced JWT-based role-based access control (RBAC) across all core APIs, so users can only reach the data and actions their role allows",
      "Hardened login flows against OTP brute-force attacks, reducing the account-takeover attack surface",
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
          subtitle="From foundations in computer science to hackathon triumphs and production engineering."
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
