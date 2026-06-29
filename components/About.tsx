"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "6+", label: "Projects Built", icon: "🚀" },
    { number: "200+", label: "Active Users On Projects", icon: "👥" },
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
            I'm a passionate <span className="text-cyan-400 font-semibold">third-year Information Technology student</span> at <span className="text-cyan-400 font-semibold">PVPPCOE</span> and currently working as a <span className="text-cyan-400 font-semibold">Software Development Engineer Intern</span> at <span className="text-cyan-400 font-semibold">Chitralai</span>. I enjoy building scalable, secure, and high-performance web applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            During my internship, I've worked on production-grade full-stack features, REST APIs, authentication systems, cloud infrastructure, and application security. I've also identified and resolved critical security vulnerabilities while contributing to software used by thousands of users.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of work, I enjoy participating in hackathons, building AI-powered products, exploring new technologies, and continuously improving my software engineering skills.
          </p>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Professional Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            {[
              "Software Development Engineer Intern",
              "Production Full Stack Development",
              "Application Security",
              "AWS Cloud",
              "REST APIs",
            ].map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-300">
                <span className="text-cyan-400 font-semibold">✔</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
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
