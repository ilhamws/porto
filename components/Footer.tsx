import React from "react";
import { PERSONAL_INFO } from "@/src/data/portfolioData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#09090b] border-t border-zinc-800/80 text-zinc-500 text-xs font-normal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-medium text-zinc-200 block text-sm tracking-tight">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono text-zinc-500 mt-0.5 block text-[11px]">
            Full Stack Developer • {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6 font-medium text-zinc-400 text-xs">
          <a href="#about" className="hover:text-zinc-100 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-zinc-100 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-zinc-100 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-zinc-100 transition-colors">
            Contact
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-all flex items-center gap-1.5"
          title="Scroll back to top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span className="font-mono text-[11px]">Top</span>
        </button>
      </div>
    </footer>
  );
};
