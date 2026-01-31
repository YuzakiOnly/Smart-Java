"use client";

import HeroSection from "./_components/hero-section";
import AboutGameSection from "./_components/about-game-section";
import GameplaySection from "./_components/gameplay-section";
import RolesSection from "./_components/roles-section";
import FeaturesSection from "./_components/features-section";
import CTASection from "./_components/cta-button";

export default function About() {
  return (
    <>
      <div
        className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        <HeroSection />
        <AboutGameSection />
        <GameplaySection />
        <RolesSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </>
  );
}