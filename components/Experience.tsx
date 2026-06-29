"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experience = {
    role: "Software Development Engineer Intern",
    company: "Chitralai",
    location: "Remote",
    duration: "May 2026 – Present",
    description: "Currently working as a Software Development Engineer Intern on an AI-powered event photo discovery platform.",
    achievements: [
      "Building full-stack features using React, Next.js, Node.js, Express.js, MongoDB, DynamoDB, and AWS.",
      "Developing production-ready frontend components and backend REST APIs.",
      "Implementing secure authentication, role-based access control (RBAC), and improving application security.",
      "Identified and fixed multiple critical security vulnerabilities including JWT authentication issues, IDOR, S3 access control, XSS, and OTP brute-force vulnerabilities.",
      "Working with AWS services including S3, EC2, and DynamoDB.",
      "Collaborating on features used by thousands of users across India.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "DynamoDB",
      "AWS",
      "S3",
      "EC2",
      "REST APIs",
    ],
  };

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
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group relative max-w-4xl mx-auto"
        >
          {/* Neon Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg p-8 sm:p-10 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            {/* Header: Role, Company, Location, Duration */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 border-b border-cyan-500/10 pb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300 font-semibold mb-2">
                  Internship
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {experience.role}
                </h3>
                <p className="text-lg text-cyan-400 font-semibold mt-1">
                  {experience.company} <span className="text-gray-500">|</span> <span className="text-gray-400 font-normal">{experience.location}</span>
                </p>
              </div>
              <div className="md:text-right">
                <span className="text-md font-semibold text-gray-400 bg-gray-900/50 border border-gray-800 px-3 py-1.5 rounded-full inline-block">
                  {experience.duration}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="mb-8">
              <h4 className="text-sm text-gray-400 font-semibold mb-4 uppercase tracking-wider">Key Achievements & Responsibilities:</h4>
              <ul className="space-y-3.5">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="text-gray-300 text-sm sm:text-base flex items-start gap-3"
                  >
                    <span className="text-cyan-400 font-bold text-lg shrink-0 mt-0.5">✓</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm text-gray-400 font-semibold mb-3 uppercase tracking-wider">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2.5">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs sm:text-sm text-cyan-300 hover:bg-cyan-500/20 transition-colors font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
