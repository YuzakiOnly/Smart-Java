interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
    gradient: string;
    index: number;
}

export default function FeatureCard({
    icon,
    title,
    description,
    gradient,
    index,
}: FeatureCardProps) {
    return (
        <div
            className="group relative"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Gradient Border */}
            <div className="absolute -inset-px rounded-xl bg-linear-to-br from-emerald-500/50 via-cyan-500/50 to-violet-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />

            {/* Card */}
            <div className="relative h-full rounded-xl bg-linear-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/5 p-6 group-hover:border-white/10 transition-all duration-500">
                {/* Background Glow */}
                <div
                    className={`absolute inset-0 bg-linear-to-br ${gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative">
                    {/* Icon */}
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-500">
                        {title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-0.5 bg-linear-to-r from-emerald-400 to-cyan-400 mb-3 group-hover:w-20 transition-all duration-500" />

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {description}
                    </p>

                    {/* Checkmark */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-linear-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}