import React from "react";
import { Project } from "@/src/data/portfolioData";
import { X, ExternalLink, CheckCircle, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      ></div>

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#09090b] border border-zinc-800 p-6 sm:p-8 shadow-2xl z-10 my-8 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 mb-3">
            <span>{project.categoryLabel}</span>
          </div>

          <h3 className="text-2xl font-semibold text-zinc-100 tracking-[-0.03em]">
            {project.title}
          </h3>

          <p className="text-xs font-mono text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Summary */}
        <div className="mt-6 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1.5 font-semibold">
            Executive Summary
          </h4>
          <p className="text-xs text-zinc-300 leading-relaxed font-normal">
            {project.summary}
          </p>
        </div>

        {/* Deep Dive: Methodology & Results */}
        <div className="mt-5 space-y-3.5">
          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-zinc-400" />
              Methodology & Technical Architecture
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 font-normal">
              {project.methodology}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-semibold flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              Verified Results & Key Deliverables
            </h4>
            <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 font-normal">
              {project.results}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-5 pt-4 border-t border-zinc-800/80">
          <span className="text-[11px] font-mono text-zinc-500 block mb-2 font-semibold">
            Technologies & Frameworks:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-100 hover:bg-white text-zinc-950 shadow-sm transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demonstration</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Repository</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
