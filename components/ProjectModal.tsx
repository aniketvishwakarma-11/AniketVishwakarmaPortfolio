"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  BarChart3,
  Layers,
  Cpu,
  Zap,
  Target,
} from "lucide-react";
import type { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden my-6 z-10 max-h-[92vh] flex flex-col"
          style={{
            boxShadow: `0 0 60px ${project.accentGlow}`,
            borderColor: project.accentBorder,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Accent Gradient Bar */}
          <div
            className="h-1.5 w-full flex-shrink-0"
            style={{
              background: `linear-gradient(90deg, ${project.accentColor}, #7c3aed, ${project.accentColor})`,
            }}
          />

          {/* Header */}
          <div className="p-6 sm:p-8 pb-5 flex items-start justify-between gap-4 border-b border-white/5 flex-shrink-0 bg-black/20">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span
                  className="text-xs font-mono px-2.5 py-0.5 rounded-full font-semibold"
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
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: project.badge.includes("⭐")
                        ? "rgba(6,182,212,0.15)"
                        : "rgba(245,158,11,0.15)",
                      border: project.badge.includes("⭐")
                        ? "1px solid rgba(6,182,212,0.4)"
                        : "1px solid rgba(245,158,11,0.4)",
                      color: project.badge.includes("⭐") ? "#22d3ee" : "#fbbf24",
                    }}
                  >
                    {project.badge}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                {project.title}
              </h2>

              {/* Role & Architecture Bar */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <span className="text-slate-500 font-mono">Role:</span>
                  <span className="text-slate-200 font-medium">{project.role}</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1 font-mono text-cyan-400/90">
                  <Cpu size={12} /> {project.architecture}
                </span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
              aria-label="Close details"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
            {/* Description */}
            <div>
              <h3 className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-2 flex items-center gap-1.5">
                <Layers size={13} style={{ color: project.accentColor }} /> Project Overview
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Problem Solved */}
            <div
              className="p-4 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <Target size={14} className="text-amber-400" />
                <h4 className="text-xs font-mono text-amber-400 tracking-wider uppercase font-semibold">
                  Core Problem Solved
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Live Analytics & Impact (if available) */}
            {project.stats && (
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: project.accentGlow,
                  border: `1px solid ${project.accentBorder}`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 size={16} style={{ color: project.accentColor }} />
                  <span
                    className="text-xs font-mono font-semibold tracking-wider uppercase"
                    style={{ color: project.accentColor }}
                  >
                    Live Platform Analytics & Impact
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.stats.activeUsers && (
                    <div className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: project.accentColor }}
                      >
                        {project.stats.activeUsers}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">Active Users</div>
                    </div>
                  )}
                  {project.stats.totalViews && (
                    <div className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: project.accentColor }}
                      >
                        {project.stats.totalViews}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">Total Views</div>
                    </div>
                  )}
                  {project.stats.engagementTime && (
                    <div className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: project.accentColor }}
                      >
                        {project.stats.engagementTime}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">Avg Engagement</div>
                    </div>
                  )}
                  {project.stats.events && (
                    <div className="bg-black/40 rounded-xl p-3 text-center border border-white/5">
                      <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: project.accentColor }}
                      >
                        {project.stats.events}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">User Events</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Architectural Highlights & Engineering Decisions */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={14} className="text-cyan-400" />
                  <h3 className="text-xs font-mono text-slate-400 tracking-wider uppercase font-semibold">
                    Technical Highlights & Engineering Decisions
                  </h3>
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: project.accentColor }}
                      />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features List */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Layers size={14} className="text-slate-400" />
                <h3 className="text-xs font-mono text-slate-400 tracking-wider uppercase font-semibold">
                  Key Features & Capabilities ({project.features.length})
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300"
                  >
                    <CheckCircle2
                      size={15}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: project.accentColor }}
                    />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Tech Stack */}
            <div>
              <h3 className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-3 font-semibold">
                Complete Technologies & Libraries ({project.techStack.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-xl font-medium text-slate-200"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/5 flex items-center justify-between gap-3 bg-black/40 flex-shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Close
            </button>

            {project.deployment !== "#" ? (
              <a
                href={project.deployment}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 text-xs py-2.5 px-6"
                style={{
                  background: `linear-gradient(135deg, ${project.accentColor}, #7c3aed)`,
                }}
              >
                Open Live Demo <ExternalLink size={14} />
              </a>
            ) : (
              <span className="text-xs text-slate-500 font-mono px-4 py-2 rounded-xl bg-white/5">
                Deployment: Private / Staging
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
