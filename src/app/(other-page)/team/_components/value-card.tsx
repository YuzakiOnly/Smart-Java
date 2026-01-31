interface ValueCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
}

export default function ValueCard({
    title,
    description,
    icon,
    gradient,
}: ValueCardProps) {
    return (
        <div className="group relative">
            <div
                className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}
            ></div>
            <div className="relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                >
                    {title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}