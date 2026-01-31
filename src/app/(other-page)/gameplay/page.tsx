import AnimatedBackground from "./_components/animated-background ";
import PageHeader from "./_components/page-header";
import VideoSection from "./_components/video-section";
import FeaturesGrid from "./_components/featured-grid";
import CallToAction from "./_components/calltoaction";

export default function Gameplay() {
  return (
    <>
      <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
        <AnimatedBackground />

        <div className="max-w-6xl mx-auto">
          <PageHeader />
          <VideoSection />
          <FeaturesGrid />
          <CallToAction />
        </div>
      </section>
    </>
  );
}