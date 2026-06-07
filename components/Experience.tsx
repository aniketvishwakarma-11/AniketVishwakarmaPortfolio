"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "2024",
      title: "Started Development Journey",
      description: "Began learning web development with a focus on building practical full-stack applications using MERN stack.",
      achievements: ["First project built", "Learned MERN stack", "Explored WebRTC & real-time systems"],
    },
    {
      year: "2024-2025",
      title: "PVPPCOE Engineering (3rd Year)",
      description: "Pursuing Bachelor of Engineering with active participation in hackathons and tech communities. Developed 6+ full-stack projects.",
      achievements: ["Built 6+ projects", "Active hackathon participant", "Multiple awards in competitions"],
    },
    {
      year: "April 4-5, 2026",
      title: "GNA 4.0 Hackathon - Clean & Green Technology Winner",
      description: "Won the Clean and Green Technology prize at GNA 4.0 Hackathon organized by GNA University, Phagwara, Punjab for EcoVision Bharat - a full-stack civic tech platform for waste management with AI-powered severity analysis.",
      achievements: ["🏆 Clean & Green Technology Prize", "Built AI-powered waste management platform", "Full-stack implementation with ML integration", "Real-time notifications and gamified scoring"],
    },
    {
      year: "May 2026 - Present",
      title: "Software Development Engineer Intern @ Chitralai",
      description: "Engineered full-stack features across frontend and backend from scratch for an AI-powered event photo discovery platform serving thousands of users across India.",
      achievements: [
        "Built React/Next.js UI and Node.js/Express REST APIs",
        "Remediated 10+ critical security vulnerabilities (auth, IDOR, XSS, S3)",
        "Implemented role-based access control & server-side identity verification",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Experience & Timeline</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content Section */}
                <div className={`flex-1 ${index % 2 === 0 ? "text-right md:pr-8" : "text-left md:pl-8"}`}>
                  <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-colors">
                    <p className="text-cyan-400 text-sm font-semibold mb-2">{item.year}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className={`text-gray-400 text-sm flex items-center gap-2 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                          <CheckCircle size={16} className="text-cyan-400" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="flex justify-center md:flex-col flex-shrink-0">
                  <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-black relative z-10 mt-2 md:mt-0"></div>
                </div>

                {/* Empty Space (for layout balance) */}
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
