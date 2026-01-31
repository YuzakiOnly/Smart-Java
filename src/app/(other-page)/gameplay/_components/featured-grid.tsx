import FeatureCard from "./featured-card";

const features = [
    {
        icon: "🎯",
        title: "Sistem Misi & Level",
        description:
            "Selesaikan berbagai misi yang dirancang untuk meningkatkan kemampuan secara bertahap.",
        gradient: "from-emerald-500/20 to-cyan-500/20",
    },
    {
        icon: "🏨",
        title: "Simulasi Hotel & Dapur",
        description:
            "Rasakan pengalaman nyata mengelola operasional hotel dan dapur profesional.",
        gradient: "from-cyan-500/20 to-violet-500/20",
    },
    {
        icon: "📊",
        title: "Penilaian Performa Pemain",
        description:
            "Sistem penilaian real-time yang memberikan feedback untuk peningkatan skill.",
        gradient: "from-violet-500/20 to-pink-500/20",
    },
    {
        icon: "🎓",
        title: "Edukatif & Menyenangkan",
        description:
            "Belajar sambil bermain dengan pendekatan gamifikasi yang engaging.",
        gradient: "from-pink-500/20 to-emerald-500/20",
    },
];

export default function FeaturesGrid() {
    return (
        <div className="grid md:grid-cols-2 gap-5">
            {features.map((feature, i) => (
                <FeatureCard
                    key={i}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    gradient={feature.gradient}
                    index={i}
                />
            ))}
        </div>
    );
}