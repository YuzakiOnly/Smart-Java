import AmbientBackground from "./_components/ambient-background";
import CTASection from "./_components/cta-button";
import HeroSection from "./_components/hero-section";
import TeamGrid from "./_components/team-grid";
import ValuesSection from "./_components/value-section";

export default function Team() {
  return (
    <div
      className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <AmbientBackground />
        <HeroSection />
      </section>

      <TeamGrid />

      <ValuesSection />

      <CTASection />
    </div>
  );
}