import React, { useState } from "react";
import { PERSONAL_INFO } from "../src/data/portfolioData";
import {
  Mail,
  Phone,
  MessageCircle,
  Copy,
  Check,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export const ContactSection: React.FC = () => {
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
    <section id="contact" className="py-24 bg-[#09090b] border-t border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-medium block mb-2">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-zinc-100">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-zinc-400 text-sm leading-relaxed font-normal">
            Open to engineering roles, AI system integrations, and full stack product consultations.
            Connect with me directly through any of the verified channels below.
          </p>
        </div>

        {/* 4 Prominent Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {/* Card 1: Email */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-zinc-300">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold">
                Direct Email
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-zinc-200 font-mono text-xs font-semibold hover:text-white hover:underline block mt-1 break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-zinc-500 mt-2 font-normal">
                Prompt response for engineering roles & proposals.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-zinc-800/60">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <span>Compose email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp & Phone */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold">
                WhatsApp & Phone
              </span>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-zinc-200 font-mono text-xs font-semibold hover:text-white hover:underline block mt-1"
              >
                {PERSONAL_INFO.phoneFormatted}
              </a>
              <p className="text-xs text-zinc-500 mt-2 font-normal">
                Direct phone call or real-time instant chat.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-zinc-800/60">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: LinkedIn */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-[#0A66C2]">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
              </div>

              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold">
                LinkedIn Network
              </span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 font-mono text-xs font-semibold hover:text-white hover:underline block mt-1"
              >
                in/ilham-wahyu-saputro
              </a>
              <p className="text-xs text-zinc-500 mt-2 font-normal">
                Professional track record, endorsements & network.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-zinc-800/60">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <span>View LinkedIn profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 4: GitHub */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-zinc-300">
                  <GithubIcon className="w-4 h-4" />
                </div>
              </div>

              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block font-semibold">
                GitHub Repositories
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 font-mono text-xs font-semibold hover:text-white hover:underline block mt-1"
              >
                github.com/ilhamws
              </a>
              <p className="text-xs text-zinc-500 mt-2 font-normal">
                Source code repositories, commits & experiments.
              </p>
            </div>

            <div className="mt-6 pt-3.5 border-t border-zinc-800/60">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <span>Browse repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Central Prominent CTA Bar */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-1.5 rounded-xl bg-zinc-900 border border-zinc-800">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs text-zinc-950 bg-zinc-100 hover:bg-white shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-xs text-zinc-300 hover:text-white hover:bg-zinc-800 transition-all font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-500" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
