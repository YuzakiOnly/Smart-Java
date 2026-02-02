import FeaturesSection from "./_components/sections/featured-section";
import Hero from "./_components/sections/hero-section";
import TeamSection from "./_components/sections/team-section";

export default function Home() {
    return (
        <div className="bg-slate-950 overflow-x-hidden">
            <Hero />
            <FeaturesSection/>
            <TeamSection/>
        </div>
    );
}
