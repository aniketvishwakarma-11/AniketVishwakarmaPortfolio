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

  const skillSpotlights: Record<string, { info: string; level: string; projects: string[] }> = {
    // Frontend
    "React": { 
      info: "Built 4+ web apps, custom hooks, context APIs, and responsive design systems", 
      level: "Expert",
      projects: ["Chitralai Internship", "EcoVision Bharat", "Vishwakarma Video Call", "Stock Dashboard"]
    },
    "Next.js": { 
      info: "Server-side rendering, static site generation, server actions, and route optimization", 
      level: "Expert",
      projects: ["Chitralai Internship", "Student Placement Predictor", "Karma Connect"]
    },
    "TypeScript": { 
      info: "Strict type checking, interfaces, generic types, and type-safe integration layers", 
      level: "Advanced",
      projects: ["Chitralai Internship", "Student Placement Predictor"]
    },
    "Tailwind CSS": { 
      info: "Responsive design systems, theme extensions, custom components, utility layouts", 
      level: "Expert",
      projects: ["Student Placement Predictor", "EcoVision Bharat"]
    },
    "Framer Motion": { 
      info: "Hardware-accelerated entrance animations, page transitions, and layout morphing", 
      level: "Advanced",
      projects: ["Personal Portfolio", "Next.js Projects"]
    },
    "Redux Toolkit": { 
      info: "Global state management, slices, store configurations, and async Thunk actions", 
      level: "Advanced",
      projects: ["Karma Connect"]
    },
    
    // Backend
    "Node.js": { 
      info: "Express servers routing, security middleware, REST APIs, and database orchestration", 
      level: "Expert",
      projects: ["Chitralai Internship", "Student Placement Predictor", "Vishwakarma Video Call", "HomeFix", "Stock Dashboard", "HomeVista"]
    },
    "Express.js": { 
      info: "REST endpoint structures, CORS configuration, error boundaries, request validation", 
      level: "Expert",
      projects: ["Chitralai Internship", "Student Placement Predictor", "EcoVision Bharat", "HomeFix", "HomeVista"]
    },
    "Python": { 
      info: "Data pre-processing, machine learning model runs, API endpoints scripting", 
      level: "Advanced",
      projects: ["Student Placement Predictor", "EcoVision Bharat"]
    },
    "Passport.js": { 
      info: "Multi-strategy user authentication (local/OAuth) and session management config", 
      level: "Advanced",
      projects: ["HomeFix"]
    },
    "JWT Auth": { 
      info: "Token signing, custom authentication middleware verification, secure cookie storage", 
      level: "Expert",
      projects: ["Chitralai Internship", "Student Placement Predictor", "Stock Dashboard"]
    },
    "REST APIs": { 
      info: "Standard endpoint structuring, JSON formatting, HTTP status logic validation", 
      level: "Expert",
      projects: ["Chitralai Internship", "Student Placement Predictor", "EcoVision Bharat"]
    },
    
    // Databases
    "MongoDB": { 
      info: "Mongoose schemas, aggregation pipelines, database queries indexing, CRUD logic", 
      level: "Advanced",
      projects: ["Chitralai Internship", "Student Placement Predictor", "Karma Connect", "Vishwakarma Video Call", "HomeFix", "Stock Dashboard", "HomeVista"]
    },
    "DynamoDB": { 
      info: "AWS document client database integrations, hash/range keys modeling for metadata", 
      level: "Intermediate",
      projects: ["Chitralai Internship"]
    },
    "PostgreSQL": { 
      info: "Relational queries, primary/foreign keys indexing, relational joins schema structure", 
      level: "Advanced",
      projects: ["EcoVision Bharat"]
    },
    "Supabase": { 
      info: "Auth systems, relational tables management, and real-time database listener channels", 
      level: "Advanced",
      projects: ["EcoVision Bharat"]
    },
    "Cloudinary": { 
      info: "Media uploads, assets hosting, responsive crop/transformation transformations", 
      level: "Advanced",
      projects: ["EcoVision Bharat", "Karma Connect", "HomeVista"]
    },
    
    // Real-Time
    "WebRTC": { 
      info: "Peer-to-peer audio/video streaming connections, STUN/TURN configurations, SDP negotiations", 
      level: "Advanced",
      projects: ["Vishwakarma Video Call"]
    },
    "Socket.IO": { 
      info: "Bi-directional real-time communication events, message broadcasts, online states", 
      level: "Advanced",
      projects: ["Karma Connect", "Vishwakarma Video Call"]
    },
    "Real-time Messaging": { 
      info: "Instant message delivery channels, typing indicator statuses, read receipt flags", 
      level: "Advanced",
      projects: ["Karma Connect", "Vishwakarma Video Call"]
    },
    "Video Conferencing": { 
      info: "Multi-peer WebRTC media grids, dynamic layout grids, stream toggling actions", 
      level: "Advanced",
      projects: ["Vishwakarma Video Call"]
    },
    
    // AI/ML
    "Scikit-learn": { 
      info: "Machine learning regressions, random forests modeling, and academic datasets split training", 
      level: "Intermediate",
      projects: ["Student Placement Predictor"]
    },
    "YOLOv8": { 
      info: "Object detection computer vision inference pipelines for waste severity analysis", 
      level: "Intermediate",
      projects: ["EcoVision Bharat"]
    },
    "Python ML": { 
      info: "Pandas/NumPy preprocessing, data visualization pipelines, datasets cleaning scripts", 
      level: "Advanced",
      projects: ["Student Placement Predictor", "EcoVision Bharat"]
    },
    "Chart.js": { 
      info: "Dynamic investment holdings visual metrics, stock performance analytics charts", 
      level: "Advanced",
      projects: ["Stock Dashboard"]
    },
    "ESLint": { 
      info: "Static code validation rules compliance, style guidelines checking configurations", 
      level: "Advanced",
      projects: ["Personal Portfolio", "Next.js Projects"]
    },
    
    // Cloud
    "AWS (S3, EC2)": { 
      info: "EC2 virtual instances setup, S3 file buckets configuration, security access policies", 
      level: "Advanced",
      projects: ["Chitralai Internship"]
    },
    "AWS IAM": { 
      info: "Access control lists (ACLs) setups, secure user groups, role-based keys rotation", 
      level: "Intermediate",
      projects: ["Chitralai Internship"]
    },
    "Vercel": { 
      info: "Front-end serverless deployments, automatic Git triggers, environment configurations", 
      level: "Expert",
      projects: ["Student Placement Predictor", "Karma Connect", "Personal Portfolio"]
    },
    "Render": { 
      info: "Back-end servers hosting, background services logs verification, hosting tasks", 
      level: "Advanced",
      projects: ["Vishwakarma Video Call", "HomeFix", "HomeVista"]
    },
    "Docker": { 
      info: "Containerized application builds, custom Dockerfiles, local testing tags", 
      level: "Intermediate",
      projects: ["Personal Dev Labs"]
    },
    "Performance Tuning": { 
      info: "Lighthouse optimization scores, image sizing optimizations, dynamic code loading", 
      level: "Advanced",
      projects: ["Chitralai Internship"]
    },
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
            Interactive stack explorer. Hover over individual skills to preview my implementation experience and project usage.
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
                    <div className="mt-8 pt-4 border-t border-cyan-500/10 flex flex-col min-h-[86px] justify-center">
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
                              <span className="text-[9px] uppercase font-semibold tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 rounded">
                                {spotlight.level}
                              </span>
                            </div>
                            <p className="text-[11px] text-gray-300 leading-relaxed mb-2 line-clamp-2">
                              {spotlight.info}
                            </p>
                            {/* Project Relations */}
                            {spotlight.projects && spotlight.projects.length > 0 && (
                              <div className="flex flex-wrap items-center gap-1">
                                <span className="text-[9px] uppercase font-semibold text-gray-500 mr-1 shrink-0">Used In:</span>
                                {spotlight.projects.map((proj, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] text-cyan-300 font-medium"
                                  >
                                    {proj}
                                  </span>
                                ))}
                                <span className="text-[9px] text-gray-500 font-semibold ml-1 shrink-0">
                                  ({spotlight.projects.length} {spotlight.projects.length === 1 ? "project" : "projects"})
                                </span>
                              </div>
                            )}
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
                            <span>Hover a tag to see stack details & project usage...</span>
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
