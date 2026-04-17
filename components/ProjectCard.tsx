"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg p-6 h-full flex flex-col group-hover:border-cyan-500/60 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
        {/* Project Header */}
        <div className="mb-4">
          <p className="text-cyan-400 text-sm font-semibold mb-1">{project.type}</p>
          <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 font-semibold mb-3">Key Features:</p>
          <ul className="space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                <span className="text-cyan-400">✓</span>
                {feature}
              </li>
            ))}
            {project.features.length > 3 && (
              <li className="text-sm text-gray-500 italic">+{project.features.length - 3} more...</li>
            )}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 font-semibold mb-3">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="inline-block px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300 hover:bg-cyan-500/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats (if available) */}
        {project.stats && (
          <div className="mb-6 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
            <p className="text-sm text-gray-400 font-semibold mb-3">Key Metrics:</p>
            <div className="grid grid-cols-2 gap-3">
              {project.stats.activeUsers && (
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">{project.stats.activeUsers}</div>
                  <div className="text-xs text-gray-500">Active Users</div>
                </div>
              )}
              {project.stats.totalViews && (
                <div className="text-center">
                  <div className="text-blue-400 font-bold text-lg">{project.stats.totalViews}</div>
                  <div className="text-xs text-gray-500">Total Views</div>
                </div>
              )}
              {project.stats.events && (
                <div className="text-center">
                  <div className="text-cyan-400 font-bold text-lg">{project.stats.events}</div>
                  <div className="text-xs text-gray-500">Events</div>
                </div>
              )}
              {project.stats.engagementTime && (
                <div className="text-center">
                  <div className="text-blue-400 font-bold text-lg">{project.stats.engagementTime}</div>
                  <div className="text-xs text-gray-500">Avg Engagement</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Link Button */}
        {project.deployment === "#" ? (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-500/50 text-gray-300 rounded text-sm font-semibold opacity-60 cursor-not-allowed w-fit">
            Coming Soon ⏳
          </div>
        ) : (
          <motion.a
            href={project.deployment}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all relative z-10 cursor-pointer w-fit"
          >
            View Project <ExternalLink size={16} />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
