"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  const timeline = [
    {
      year: "April 4-5, 2026",
      title: "GNA 4.0 Hackathon - Clean & Green Technology Winner",
      description: "Won the Clean and Green Technology prize at GNA 4.0 Hackathon organized by GNA University, Phagwara, Punjab for EcoVision Bharat - a full-stack civic tech platform for waste management with AI-powered severity analysis.",
      achievements: [
        "🏆 Clean & Green Technology Prize",
        "Built AI-powered waste management platform",
        "Full-stack implementation with ML integration",
        "Real-time notifications and gamified scoring"
      ],
    },
    {
      year: "May 2026 – Present",
      title: "Software Development Engineer Intern",
      company: "Chitralai",
      location: "Remote",
      description: "Currently working as a Software Development Engineer Intern on an AI-powered event photo discovery platform.",
      achievements: [
        "Building full-stack features using React, Next.js, Node.js, Express.js, MongoDB, DynamoDB, and AWS.",
        "Developing production-ready frontend components and backend REST APIs.",
        "Implementing secure authentication, role-based access control (RBAC), and improving application security.",
        "Identified and fixed multiple critical security vulnerabilities including JWT authentication issues, IDOR, S3 access control, XSS, and OTP brute-force vulnerabilities.",
        "Working with AWS services including S3, EC2, and DynamoDB.",
        "Collaborating on features used by thousands of users across India."
      ]
    }
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
                <div className={`flex-1 w-full ${index % 2 === 0 ? "text-right md:pr-8" : "text-left md:pl-8"}`}>
                  <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-colors">
                    <p className="text-cyan-400 text-sm font-semibold mb-2">{item.year}</p>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                      {item.company && (
                        <span className="text-cyan-400 block md:inline md:ml-2 text-xl font-semibold">
                          @ {item.company}
                        </span>
                      )}
                    </h3>
                    {item.location && (
                      <p className="text-gray-400 text-xs mb-3 italic">{item.location}</p>
                    )}
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className={`text-gray-400 text-sm flex items-start gap-2 ${
                            index % 2 === 0 ? "flex-row-reverse text-right" : "text-left"
                          }`}
                        >
                          <CheckCircle size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                          <span className="flex-1">{achievement}</span>
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
