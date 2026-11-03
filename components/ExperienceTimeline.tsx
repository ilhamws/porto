import React from "react";
import { EXPERIENCES } from "../src/data/portfolioData";
import { Calendar } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#09090b] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium block mb-2">
              Career Trajectory
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-zinc-100">
              Work & Practical Experience
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-mono text-xs text-zinc-500">
            Production Engineering • Capstone • Internships
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 md:before:left-1/2 before:w-px before:bg-zinc-800">
          {EXPERIENCES.map((item) => (
            <div
              key={item.number}
              className="relative flex flex-col md:flex-row items-start group"
            >
              {/* Center Dot Indicator */}
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono text-xs font-semibold absolute left-0 md:left-1/2 -translate-x-1/2 z-10 shadow-sm group-hover:border-zinc-500 transition-colors">
                {item.number}
              </div>

              {/* Left Column (Desktop) */}
              <div className="pl-10 md:pl-0 md:w-1/2 md:pr-12 md:text-right">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  {item.period}
                </span>
                <h3 className="text-lg font-semibold text-zinc-100 mt-2.5 tracking-tight group-hover:text-white transition-colors">
                  {item.company}
                </h3>
                <p className="text-xs font-medium text-zinc-300 mt-0.5">{item.role}</p>
                <p className="text-xs text-zinc-500 font-mono mt-0.5">{item.division}</p>
              </div>

              {/* Right Column / Content Card */}
              <div className="pl-10 md:pl-12 md:w-1/2 mt-3 md:mt-0 w-full">
                {(item.highlights.length > 0 || item.skills.length > 0) && (
                  <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300">
                    {item.highlights.length > 0 && (
                      <ul className="space-y-2.5 text-xs text-zinc-400 font-normal leading-relaxed">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-zinc-600 select-none mt-0.5">―</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Skills badges */}
                    {item.skills.length > 0 && (
                      <div
                        className={`${
                          item.highlights.length > 0 ? "mt-5 pt-3.5 border-t border-zinc-800/60" : ""
                        } flex flex-wrap gap-1.5`}
                      >
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
