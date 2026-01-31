export default function RolesSection() {
    return (
        <section className="py-20 px-6 border-t border-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-4 text-white"
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Role Profesional
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Dua jalur karir dengan fokus pembelajaran dan tantangan yang
                        berbeda
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Receptionist */}
                    <div className="group p-10 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-slate-800/80 hover:border-emerald-500/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
                        <div className="flex items-start justify-between mb-6">
                            <div className="text-5xl group-hover:scale-110 transition-transform">
                                🏨
                            </div>
                            <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                                Front Office
                            </span>
                        </div>

                        <h3
                            className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Resepsionis Hotel
                        </h3>

                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Role yang fokus pada interaksi langsung dengan tamu. Pemain
                            akan belajar menangani check-in/check-out, mengelola
                            reservasi, menangani keluhan tamu, dan memberikan informasi
                            tentang fasilitas hotel dengan profesional.
                        </p>

                        <div className="mb-8">
                            <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-4">
                                Kompetensi yang Dikembangkan
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Customer service excellence & komunikasi efektif
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Complaint handling & conflict resolution
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Sistem reservasi & manajemen data tamu
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Multitasking & prioritization under pressure
                                    </span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/roles/receptionist"
                            className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all"
                        >
                            <span>Mulai sebagai Resepsionis</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                    {/* Chef */}
                    <div className="group p-10 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-slate-800/80 hover:border-orange-500/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
                        <div className="flex items-start justify-between mb-6">
                            <div className="text-5xl group-hover:scale-110 transition-transform">
                                👨‍🍳
                            </div>
                            <span className="px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                                Kitchen
                            </span>
                        </div>

                        <h3
                            className="text-3xl lg:text-4xl font-bold mb-4 text-white"
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Chef Profesional
                        </h3>

                        <p className="text-slate-300 mb-8 leading-relaxed">
                            Role yang menantang dalam lingkungan dapur dengan tekanan
                            tinggi. Pemain akan mengelola pesanan, menjaga standar
                            kualitas makanan, koordinasi dengan tim kitchen, dan
                            memastikan food safety protocol terpenuhi.
                        </p>

                        <div className="mb-8">
                            <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-4">
                                Kompetensi yang Dikembangkan
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Time management & order prioritization
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Quality control & food safety standards
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Team leadership & kitchen coordination
                                    </span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    <span className="text-slate-300 text-sm">
                                        Crisis management & problem-solving
                                    </span>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/roles/chef"
                            className="inline-flex items-center gap-2 text-orange-400 font-medium hover:gap-3 transition-all"
                        >
                            <span>Mulai sebagai Chef</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}