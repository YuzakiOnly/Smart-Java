import Link from "next/link";

interface RoleCardProps {
  icon: string;
  title: string;
  desc: string;
  link: string;
  theme: "hotel" | "culinary";
}

export default function RoleCard({
  icon,
  title,
  desc,
  link,
  theme,
}: RoleCardProps) {
  const themeStyles: Record<
    "hotel" | "culinary",
    {
      border: string;
      glow: string;
      iconBg: string;
      accent: string;
      gradient: string;
    }
  > = {
    hotel: {
      border: "hover:border-emerald-400/40",
      glow: "bg-emerald-500/20",
      iconBg: "bg-emerald-400/10",
      accent: "text-emerald-400",
      gradient: "from-emerald-500/10 to-teal-500/5",
    },
    culinary: {
      border: "hover:border-sky-400/40",
      glow: "bg-sky-500/20",
      iconBg: "bg-sky-400/10",
      accent: "text-sky-400",
      gradient: "from-sky-500/10 to-cyan-500/5",
    },
  };

  const style = themeStyles[theme];

  return (
    <Link href={link}>
      <div
        className={`
          group relative overflow-hidden rounded-3xl
          border border-white/10 ${style.border}
          bg-gradient-to-br ${style.gradient}
          backdrop-blur-xl
          p-10 h-full
          transition-all duration-500
          hover:-translate-y-2 hover:shadow-2xl
        `}
      >
        {/* Ambient glow */}
        <div
          className={`
            absolute -top-24 -right-24 w-56 h-56 rounded-full
            blur-3xl opacity-0 group-hover:opacity-100
            transition duration-700 ${style.glow}
          `}
        />

        {/* Shine layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon */}
          <div
            className={`
              w-16 h-16 rounded-2xl ${style.iconBg}
              flex items-center justify-center text-4xl
              mb-6
              transition-transform duration-300
              group-hover:scale-110
            `}
          >
            {icon}
          </div>

          {/* Content */}
          <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">
            {title}
          </h3>

          <p className="text-slate-300 leading-relaxed mb-8">
            {desc}
          </p>

          {/* CTA */}
          <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium">
            <span className={`${style.accent} tracking-wide`}>
              Mulai Sekarang
            </span>
            <svg
              className={`
                w-4 h-4 ${style.accent}
                transition-transform duration-300
                group-hover:translate-x-2
              `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
