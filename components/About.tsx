"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "6+", label: "Projects Built", icon: "🚀" },
    { number: "187+", label: "Active Users On Projects", icon: "👥" },
    { number: "4.4k+", label: "Total Views On Projects", icon: "👁️" },
    { number: "6.7k+", label: "User Events On Projects", icon: "⚡" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a passionate <span className="text-cyan-400 font-semibold">3rd-year engineering student</span> at{" "}
            <span className="text-cyan-400 font-semibold">PVPPCOE</span>, specializing in building secure, scalable, and real-time web
            applications. Starting my development journey in 2024, I've quickly built 6+ full-stack projects with a focus on clean architecture and best practices.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise includes the
            <span className="text-cyan-400 font-semibold"> MERN stack</span>,{" "}
            <span className="text-cyan-400 font-semibold">WebRTC</span>, and{" "}
            <span className="text-cyan-400 font-semibold">AI/ML</span> technologies to solve real-world problems. I'm an active
            hackathon participant with multiple awards and a strong passion for continuous learning and innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg p-8 text-center hover:border-cyan-500/60 transition-colors h-full flex flex-col justify-center items-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
