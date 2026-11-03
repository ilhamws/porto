import React, { useState } from "react";
import { PROJECTS, Project } from "../src/data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import {
  ExternalLink,
  ArrowUpRight,
  Eye,
  Hand,
  ShieldAlert,
  Activity,
  FileText,
  Globe
} from "lucide-react";
import { GithubIcon } from "./icons/SocialIcons";

export const ProjectsBento: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "security">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "retinascan":
        return <Eye className="w-4 h-4 text-zinc-300" />;
      case "sibi-sign-language":
        return <Hand className="w-4 h-4 text-zinc-300" />;
      case "ritapi-minifw":
        return <ShieldAlert className="w-4 h-4 text-zinc-300" />;
      case "security-dashboard":
        return <Activity className="w-4 h-4 text-zinc-300" />;
      case "contract-risk-analyzer":
        return <FileText className="w-4 h-4 text-zinc-300" />;
      default:
        return <Globe className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#09090b] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium block mb-2">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-zinc-100">
              Featured Systems & Case Studies
            </h2>
            <p className="mt-2 text-zinc-400 text-sm max-w-xl leading-relaxed font-normal">
              Production architectures demonstrating deep learning inference, modern web client experiences,
              and resilient Linux daemon services.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1 p-1 rounded-xl bg-zinc-900 border border-zinc-800 self-start md:self-auto font-mono text-xs">
            {(
              [
                { key: "all", label: "All Works" },
                { key: "ai", label: "AI & ML" },
                { key: "security", label: "Security & Systems" },
                { key: "fullstack", label: "Full Stack" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  filter === tab.key
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => {
            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/60 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-zinc-200">
                      {getProjectIcon(project.id)}
                    </div>

                    <div className="flex items-center gap-2 font-mono text-[11px]">
                      {project.stats && (
                        <span className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400">
                          {project.stats}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-md bg-zinc-800/70 text-zinc-300">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white tracking-tight transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-500 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed font-normal">
                    {project.summary}
                  </p>
                </div>

                {/* Card Footer: Tech Tags & CTA */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-zinc-900/90 text-zinc-500 border border-zinc-800">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                    <span className="flex items-center gap-1">
                      <span>View case study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub repo"
                          className="p-1 text-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                          className="p-1 text-zinc-500 hover:text-zinc-200 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
