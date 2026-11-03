import React, { useState } from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { PERSONAL_INFO } from "../src/data/portfolioData";
import {
  Copy,
  Check,
  Mail,
  Phone,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090b]"
    >
      {/* Background Beams Component */}
      <BackgroundBeams className="opacity-70 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 backdrop-blur-md text-xs font-mono text-zinc-300 shadow-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-zinc-200">{PERSONAL_INFO.status}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Contact */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-white leading-[1.12]">
              {PERSONAL_INFO.name}
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-medium text-zinc-400 tracking-[-0.02em]">
              {PERSONAL_INFO.role}
            </p>

            {/* Contact Pills with 1-Click Copy */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-800/80">
              {/* Email Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white font-mono transition-colors">
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  title="Copy email"
                  className="p-1 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white font-mono transition-colors">
                  {PERSONAL_INFO.phoneFormatted}
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  title="Copy phone"
                  className="p-1 hover:bg-zinc-800 rounded transition-colors text-zinc-400 hover:text-white"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end -mt-6 sm:-mt-12 lg:-mt-24 xl:-mt-28">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl flex flex-col items-center">
              {/* Subtle ambient lighting halo */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Seamless Image Container */}
              <div className="relative w-full flex flex-col items-center group">
                <img
                  src={PERSONAL_INFO.profileImg}
                  alt={PERSONAL_INFO.name}
                  className="w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] h-auto object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                />

                {/* Floating Bottom Card Over lower torso */}
                <div className="w-full max-w-[320px] -mt-6 sm:-mt-8 relative z-20 p-3 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800/80 flex items-center justify-between shadow-2xl">
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">
                      Full Stack Developer
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono block">
                      Semarang, Indonesia
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
