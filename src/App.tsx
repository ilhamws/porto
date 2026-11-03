import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ProjectsBento } from "../components/ProjectsBento";
import { ExperienceTimeline } from "../components/ExperienceTimeline";
import { SkillsMatrix } from "../components/SkillsMatrix";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* Hero Section with Background Beams */}
        <Hero />

        {/* Bento Grid Featured Projects */}
        <ProjectsBento />

        {/* Career & Experience Timeline */}
        <ExperienceTimeline />

        {/* Technical Skills Architecture Matrix */}
        <SkillsMatrix />

        {/* Direct Contact & Transmission Section */}
        <ContactSection />
      </main>

      {/* Modern Minimalist Footer */}
      <Footer />
    </div>
  );
}
