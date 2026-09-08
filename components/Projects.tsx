"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          label="PROJECTS"
          title="Featured"
          subtitle="7 production-grade full-stack applications — shipped, deployed, and used by real people. Click any card for full details."
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter.value)}
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

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
          >
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenDetails={(p) => setSelectedProject(p)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-slate-500 font-mono mt-8"
        >
          Showing {filtered.length} of {projects.length} projects · Click any card to inspect full architecture
        </motion.p>
      </div>
    </section>
  );
}
