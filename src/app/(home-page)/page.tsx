import FeaturesSection from "./_components/sections/featured-section";
import Hero from "./_components/sections/hero-section";

export default function Home() {
    return (
        <div className="bg-background">
            <Hero />
            <FeaturesSection/>
        </div>
    );
}
