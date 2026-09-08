"use client";

import { motion } from "framer-motion";
import { ExternalLink, Info, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpenDetails,
}: ProjectCardProps) {
  const topTech = project.techStack.slice(0, 4);
  const remainingTechCount = project.techStack.length - 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="group relative h-full flex flex-col"
    >
      {/* Glow on hover */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}25, transparent)`,
        }}
      />

      <div
        onClick={() => onOpenDetails(project)}
        className="relative glass-card rounded-2xl flex flex-col justify-between h-full overflow-hidden transition-all duration-200 group-hover:translate-y-[-2px] cursor-pointer"
        style={{ border: `1px solid ${project.accentBorder}` }}
      >
        {/* Top accent bar */}
        <div
          className="h-1 w-full flex-shrink-0"
          style={{
            background: `linear-gradient(90deg, ${project.accentColor}, #7c3aed)`,
          }}
        />

        <div className="p-6 flex flex-col flex-1 justify-between gap-5">
          {/* Top block */}
          <div>
            {/* Badges row */}
            <div className="flex items-center gap-2 flex-wrap mb-3">
              <span
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold"
                style={{
                  background: project.accentGlow,
                  border: `1px solid ${project.accentBorder}`,
                  color: project.accentColor,
                }}
              >
                {project.type}
              </span>
              {project.badge && (
                <span
                  className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                  style={{
                    background: project.badge.includes("⭐")
                      ? "rgba(6,182,212,0.12)"
                      : "rgba(245,158,11,0.12)",
                    border: project.badge.includes("⭐")
                      ? "1px solid rgba(6,182,212,0.35)"
                      : "1px solid rgba(245,158,11,0.35)",
                    color: project.badge.includes("⭐") ? "#22d3ee" : "#fbbf24",
                  }}
                >
                  {project.badge}
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowUpRight
                size={18}
                className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
              />
            </h3>

            {/* Description — line clamped so all cards maintain identical height */}
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
              {project.description}
            </p>

            {/* Metrics highlight badge (compact pill if available) */}
            {project.stats && (
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-2"
                style={{
                  background: project.accentGlow,
                  border: `1px solid ${project.accentBorder}`,
                  color: project.accentColor,
                }}
              >
                <span>📊</span>
                <span>
                  {project.stats.activeUsers} Users · {project.stats.totalViews} Views
                </span>
              </div>
            )}
          </div>

          {/* Bottom block: Tech Stack + Actions */}
          <div className="pt-4 border-t border-white/5 space-y-4">
            {/* Tech Chips */}
            <div className="flex flex-wrap gap-1.5">
              {topTech.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-0.5 rounded-md font-medium text-slate-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tech}
                </span>
              ))}
              {remainingTechCount > 0 && (
                <span className="text-[11px] px-2 py-0.5 rounded-md font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
                  +{remainingTechCount} more
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div
              className="flex items-center justify-between gap-2 pt-1"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => onOpenDetails(project)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <Info size={13} /> View Full Info
              </button>

              {project.deployment === "#" ? (
                <span className="text-[11px] font-mono text-slate-500 px-3 py-1.5 rounded-xl bg-white/[0.02]">
                  Private
                </span>
              ) : (
                <a
                  href={project.deployment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white hover:shadow-lg transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}, #7c3aed)`,
                  }}
                >
                  Live Demo <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
