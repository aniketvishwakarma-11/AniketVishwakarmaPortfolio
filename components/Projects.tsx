"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects, type Project } from "@/lib/projects";
import SectionHeading from "./SectionHeading";

const filters = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "AI / ML", value: "ai" },
  { label: "Real-Time", value: "realtime" },
  { label: "Civic Tech", value: "civic" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredFeatured =
    activeFilter === "all"
      ? featuredProjects
      : featuredProjects.filter((p) => p.category === activeFilter);

  const filteredOther =
    activeFilter === "all"
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  const hasOtherProjects = filteredOther.length > 0;

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          label="PROJECTS"
          title="Featured Work"
          subtitle="Production-grade applications shipped to real users. Three flagship projects below — explore the full portfolio beneath."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setActiveFilter(filter.value);
                setShowAllProjects(false);
              }}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? "text-white"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              style={{
                background:
                  activeFilter === filter.value
                    ? "linear-gradient(135deg, #06b6d4, #7c3aed)"
                    : "rgba(255,255,255,0.04)",
                border:
                  activeFilter === filter.value
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  activeFilter === filter.value
                    ? "0 0 20px rgba(6,182,212,0.3)"
                    : "none",
              }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* ============================================================
             FEATURED PROJECTS — Always Visible (Top 3)
        ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-violet-500" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Flagship Projects
            </span>
            <span className="text-xs text-slate-600 font-mono">
              {filteredFeatured.length} of {featuredProjects.length} featured
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
            >
              {filteredFeatured.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenDetails={(p) => setSelectedProject(p)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* ============================================================
             MORE PROJECTS — Expandable Section
        ============================================================ */}
        {hasOtherProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            {/* Expand Trigger */}
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group w-full flex items-center justify-center gap-3 py-5 px-6 rounded-2xl transition-all duration-300"
              style={{
                background: showAllProjects
                  ? "rgba(6,182,212,0.08)"
                  : "rgba(255,255,255,0.03)",
                border: showAllProjects
                  ? "1px solid rgba(6,182,212,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
              aria-expanded={showAllProjects}
            >
              <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                {showAllProjects
                  ? `Show Less (${filteredFeatured.length + filteredOther.length} Total Projects)`
                  : `Show All ${filteredOther.length} More Projects →`}
              </span>
              <motion.div
                animate={{ rotate: showAllProjects ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="text-cyan-400"
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            {/* Expandable Grid */}
            <AnimatePresence mode="wait">
              {showAllProjects && (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="mt-6"
                >
                  {/* Divider with label */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                    <div className="relative flex justify-center text-xs font-mono uppercase tracking-wider text-slate-500">
                      <span className="bg-[#070b14] px-4">
                        Additional Projects
                      </span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
                  >
                    {filteredOther.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onOpenDetails={(p) => setSelectedProject(p)}
                      />
                    ))}
                  </motion.div>

                  {/* Summary footer when expanded */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="text-center text-xs text-slate-500 font-mono mt-8 pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    {projects.length} total projects •{" "}
                    {projects.filter((p) => p.deployment !== "#").length} live demos •{" "}
                    {projects.length} GitHub repositories • Click any card for architecture deep-dive
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}