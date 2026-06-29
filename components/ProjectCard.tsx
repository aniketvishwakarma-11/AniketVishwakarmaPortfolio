"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {/* Compact Grid Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        onClick={() => setIsModalOpen(true)}
        className="group relative cursor-pointer h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative bg-black/50 border border-cyan-500/30 rounded-lg p-6 h-full flex flex-col justify-between group-hover:border-cyan-500/60 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
          <div>
            {/* Project Header */}
            <div className="mb-3">
              <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">{project.type}</p>
              <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">{project.title}</h3>
            </div>

            {/* Concise Description */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

            {/* Key Features (Just first 3) */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wider">Key Highlights:</p>
              <ul className="space-y-1">
                {project.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0">✓</span>
                    <span className="line-clamp-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack & Action Indicator */}
          <div>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="inline-block px-2 py-0.5 bg-cyan-500/5 border border-cyan-500/20 rounded text-[10px] text-cyan-300"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="inline-block px-1.5 py-0.5 rounded text-[10px] text-gray-500 font-semibold">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>

            {/* Action Text */}
            <p className="text-xs text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Click to view details ➜
            </p>
          </div>
        </div>
      </motion.div>

      {/* Detail Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0b0c16]/95 border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-500/10 max-h-[90vh] overflow-y-auto z-10 flex flex-col"
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-[#0b0c16]/90 backdrop-blur-md px-6 py-4 border-b border-cyan-500/10 flex justify-between items-center z-25">
                <div>
                  <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">{project.type}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white gradient-text">{project.title}</h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-full transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-2">Project Overview</h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                </div>

                {/* Key Metrics (if available) */}
                {project.stats && (
                  <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                    <h4 className="text-xs text-gray-400 font-semibold mb-3 uppercase tracking-wider">Key Metrics</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {project.stats.activeUsers && (
                        <div className="text-center sm:text-left">
                          <div className="text-cyan-400 font-bold text-lg">{project.stats.activeUsers}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Active Users</div>
                        </div>
                      )}
                      {project.stats.totalViews && (
                        <div className="text-center sm:text-left">
                          <div className="text-blue-400 font-bold text-lg">{project.stats.totalViews}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Total Views</div>
                        </div>
                      )}
                      {project.stats.events && (
                        <div className="text-center sm:text-left">
                          <div className="text-cyan-400 font-bold text-lg">{project.stats.events}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Events</div>
                        </div>
                      )}
                      {project.stats.engagementTime && (
                        <div className="text-center sm:text-left">
                          <div className="text-blue-400 font-bold text-lg">{project.stats.engagementTime}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-wider">Avg Engagement</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Key Features (Full List) */}
                <div>
                  <h4 className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-xs sm:text-sm text-gray-400 flex items-start gap-2.5">
                        <span className="text-cyan-400 shrink-0 mt-0.5">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack (Full List) */}
                <div>
                  <h4 className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-3">Full Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-block px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-[#0b0c16]/95 border-t border-cyan-500/10 px-6 py-4 flex justify-end gap-3 z-25">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 border border-gray-700 hover:border-gray-500 text-gray-300 rounded-full text-sm font-semibold transition-all cursor-pointer"
                >
                  Close
                </button>
                {project.deployment === "#" ? (
                  <div className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800 text-gray-500 rounded-full text-sm font-semibold cursor-not-allowed opacity-60">
                    Coming Soon ⏳
                  </div>
                ) : (
                  <motion.a
                    href={project.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all cursor-pointer"
                  >
                    View Live <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
