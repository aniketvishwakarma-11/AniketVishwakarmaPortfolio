"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Activity, Cpu, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Passport.js", "JWT Auth", "REST APIs"],
      icon: Server,
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Databases & APIs",
      skills: ["MongoDB", "DynamoDB", "PostgreSQL", "Supabase", "Cloudinary"],
      icon: Database,
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Real-Time Systems",
      skills: ["WebRTC", "Socket.IO", "Real-time Messaging", "Video Conferencing"],
      icon: Activity,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI/ML & Tools",
      skills: ["Scikit-learn", "YOLOv8", "Python ML", "Chart.js", "TypeScript", "ESLint"],
      icon: Cpu,
      color: "from-pink-500 to-red-500",
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS (S3, EC2)", "AWS IAM", "Vercel", "Render", "Docker", "Performance Tuning"],
      icon: Cloud,
      color: "from-red-500 to-cyan-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

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
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            A comprehensive breakdown of my engineering stack, full-stack tools, databases, and deployment platforms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                {/* Glowing border effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative bg-black/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 flex flex-col h-full justify-between">
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
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        whileHover={{ y: -2, scale: 1.05 }}
                        className="inline-block px-3 py-1.5 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-xs sm:text-sm text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-200 transition-all font-medium cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
