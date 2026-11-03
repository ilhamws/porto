import React from "react";
import { SKILL_CATEGORIES } from "@/src/data/portfolioData";
import { Code, Layout, Cpu, Server } from "lucide-react";

export const SkillsMatrix: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-zinc-300" />;
      case 1:
        return <Layout className="w-4 h-4 text-zinc-300" />;
      case 2:
        return <Cpu className="w-4 h-4 text-zinc-300" />;
      default:
        return <Server className="w-4 h-4 text-zinc-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#09090b] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium block mb-2">
            Architecture & Tooling
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-zinc-100">
            Technical Skills & Architecture Stack
          </h2>
          <p className="mt-3 text-zinc-400 text-sm leading-relaxed font-normal">
            Proven technologies, frameworks, and workflows applied in high-throughput production
            systems and AI research implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/80 text-zinc-300">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="font-semibold text-zinc-200 text-sm tracking-tight">{cat.category}</h3>
                </div>

                <div className="space-y-2.5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-zinc-200">{s.name}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/60">
                          {s.level}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500 block mt-1 font-mono">
                        {s.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
