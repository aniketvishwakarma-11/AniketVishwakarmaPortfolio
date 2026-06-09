"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
      icon: "🎨",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Passport.js", "JWT Auth"],
      icon: "⚙️",
    },
    {
      title: "Databases & APIs",
      skills: ["MongoDB", "DynamoDB", "JWT", "Stock APIs", "REST APIs", "Cloudinary"],
      icon: "📊",
    },
    {
      title: "Real-Time",
      skills: ["WebRTC", "Socket.IO", "Video Conferencing", "Real-time Messaging"],
      icon: "🔴",
    },
    {
      title: "AI/ML & Tools",
      skills: ["Scikit-learn", "Python ML", "Chart.js", "ESLint", "TypeScript"],
      icon: "🤖",
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS", "Amazon S3", "AWS IAM", "Vercel", "Render", "Performance Tuning"],
      icon: "☁️",
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
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-center"
                    >
                      <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300 hover:bg-cyan-500/20 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
