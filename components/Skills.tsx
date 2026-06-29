"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Activity, Cpu, Cloud, Terminal } from "lucide-react";

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<{ categoryIndex: number; skillName: string } | null>(null);

  const filterTabs = [
    { id: "all", label: "All Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases & Cloud" },
    { id: "realtime", label: "AI & Real-Time" },
  ];

  const skillSpotlights: Record<string, { info: string; level: string }> = {
    // Frontend
    "React": { info: "Built 4+ web apps, custom hooks, context APIs", level: "Expert" },
    "Next.js": { info: "SSR, static site generation, server actions routing", level: "Expert" },
    "TypeScript": { info: "Strict type checking, interfaces, generic types", level: "Advanced" },
    "Tailwind CSS": { info: "Responsive designs, custom themes, class optimization", level: "Expert" },
    "Framer Motion": { info: "Interactive animations, layout transitions, keyframes", level: "Advanced" },
    "Redux Toolkit": { info: "Global state management, slices, async Thunk actions", level: "Advanced" },
    
    // Backend
    "Node.js": { info: "Express server routing, JWT middlewares, file streaming", level: "Expert" },
    "Express.js": { info: "Built REST API endpoints, CORS configuration, logging", level: "Expert" },
    "Python": { info: "Scripting, data modeling, ML inference scripts", level: "Advanced" },
    "Passport.js": { info: "User authentication strategies & session validation", level: "Advanced" },
    "JWT Auth": { info: "Token signing, verified routing middleware, cookie storage", level: "Expert" },
    "REST APIs": { info: "Standard endpoint design, JSON response, HTTP status codes", level: "Expert" },
    
    // Databases
    "MongoDB": { info: "Mongoose models, indexing, aggregation queries", level: "Advanced" },
    "DynamoDB": { info: "NoSQL key-value lookups, S3 integrated operations", level: "Intermediate" },
    "PostgreSQL": { info: "Relational queries, primary/foreign keys, joins schema", level: "Advanced" },
    "Supabase": { info: "Auth integrations, real-time table listeners, serverless DB", level: "Advanced" },
    "Cloudinary": { info: "File uploads, image hosting, responsive transformations", level: "Advanced" },
    
    // Real-Time
    "WebRTC": { info: "P2P video conferences, STUN/TURN, SDP signaling", level: "Advanced" },
    "Socket.IO": { info: "Bi-directional channels, messaging triggers, real-time events", level: "Advanced" },
    "Real-time Messaging": { info: "Instant chat message payloads, read receipts, online states", level: "Advanced" },
    "Video Conferencing": { info: "WebRTC peer media streams, grid layout video grids", level: "Advanced" },
    
    // AI/ML
    "Scikit-learn": { info: "Machine learning regressions, random forests, data split", level: "Intermediate" },
    "YOLOv8": { info: "Object detection models for waste estimation inference", level: "Intermediate" },
    "Python ML": { info: "Pandas/NumPy preprocessing, data visualization pipelines", level: "Advanced" },
    "Chart.js": { info: "Holdings analytics visualizations, graphs, charts", level: "Advanced" },
    "ESLint": { info: "Code formatting validation, custom rules compliance", level: "Advanced" },
    
    // Cloud
    "AWS (S3, EC2)": { info: "Instance setup, security group rules, S3 bucket policy", level: "Advanced" },
    "AWS IAM": { info: "AWS users, groups, custom policy accesses, KMS keys", level: "Intermediate" },
    "Vercel": { info: "Front-end serverless deployments, environment variable set", level: "Expert" },
    "Render": { info: "Node.js back-end deployments, build logs and hosting", level: "Advanced" },
    "Docker": { info: "Containerized builds, custom Dockerfiles, image tags", level: "Intermediate" },
    "Performance Tuning": { info: "Lighthouse optimization, asset compression, lazy loading", level: "Advanced" },
  };

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "backend",
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Passport.js", "JWT Auth", "REST APIs"],
      icon: Server,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "database",
      title: "Databases & APIs",
      skills: ["MongoDB", "DynamoDB", "PostgreSQL", "Supabase", "Cloudinary"],
      icon: Database,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "realtime",
      title: "Real-Time Systems",
      skills: ["WebRTC", "Socket.IO", "Real-time Messaging", "Video Conferencing"],
      icon: Activity,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "realtime",
      title: "AI/ML & Tools",
      skills: ["Scikit-learn", "YOLOv8", "Python ML", "Chart.js", "TypeScript", "ESLint"],
      icon: Cpu,
      color: "from-pink-500 to-red-500",
    },
    {
      id: "database",
      title: "Cloud & Deployment",
      skills: ["AWS (S3, EC2)", "AWS IAM", "Vercel", "Render", "Docker", "Performance Tuning"],
      icon: Cloud,
      color: "from-red-500 to-cyan-500",
    },
  ];

  const filteredCategories = skillCategories.filter((category) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "frontend") return category.id === "frontend";
    if (selectedFilter === "backend") return category.id === "backend";
    if (selectedFilter === "database") return category.id === "database";
    if (selectedFilter === "realtime") return category.id === "realtime";
    return true;
  });

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Interactive stack explorer. Hover over individual skills to preview my implementation experience and proficiency.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Stack Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedFilter === tab.id
                  ? "text-white"
                  : "text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/5"
              }`}
            >
              {selectedFilter === tab.id && (
                <motion.div
                  layoutId="activeSkillTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              const hasHoveredSkill = hoveredSkill?.categoryIndex === index;
              const spotlight = hasHoveredSkill ? skillSpotlights[hoveredSkill.skillName] : null;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={category.title}
                  className="group relative h-full flex flex-col justify-between"
                >
                  {/* Glowing border effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative bg-black/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full justify-between">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                          <Icon size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills Tag Cloud */}
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            onMouseEnter={() => setHoveredSkill({ categoryIndex: index, skillName: skill })}
                            onMouseLeave={() => setHoveredSkill(null)}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className="inline-block px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-xs sm:text-sm text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-200 transition-all font-medium cursor-pointer"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Skill Info / Spotlight Area */}
                    <div className="mt-8 pt-4 border-t border-cyan-500/10 flex items-center min-h-[44px]">
                      <AnimatePresence mode="wait">
                        {hasHoveredSkill && spotlight ? (
                          <motion.div
                            key={hoveredSkill.skillName}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="w-full text-left"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <span className="text-xs font-bold text-cyan-400">
                                {hoveredSkill.skillName}
                              </span>
                              <span className="text-[10px] uppercase font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                                {spotlight.level}
                              </span>
                            </div>
                            <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                              {spotlight.info}
                            </p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="default"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            className="text-[11px] text-gray-500 flex items-center gap-1.5"
                          >
                            <Terminal size={12} className="text-cyan-500/50" />
                            <span>Hover a tag to see stack details...</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
