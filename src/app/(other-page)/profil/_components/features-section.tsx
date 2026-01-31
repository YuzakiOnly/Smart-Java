export default function FeaturesSection() {
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
                        Fitur Unggulan
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Teknologi pembelajaran interaktif untuk pengalaman yang lebih
                        efektif
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-6 h-6 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Skenario Berbasis Realitas
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Situasi diambil dari pengalaman nyata industri hospitality,
                            disesuaikan dengan konteks Indonesia
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-6 h-6 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Sistem Penilaian Komprehensif
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Evaluasi multi-dimensi yang mengukur berbagai aspek kompetensi
                            profesional
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-6 h-6 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Feedback Real-time
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Penjelasan langsung tentang dampak keputusan dan alternatif
                            pendekatan yang lebih baik
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-6 h-6 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Tingkat Kesulitan Adaptif
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Skenario yang menyesuaikan dengan level kemampuan dan progres
                            pembelajaran pemain
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-6 h-6 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Lingkungan Bebas Risiko
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Kesalahan menjadi pembelajaran tanpa konsekuensi terhadap
                            reputasi atau karir nyata
                        </p>
                    </div>

                    <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <svg
                                className="w-6 h-6 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                                />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Progress Tracking
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Pantau perkembangan kompetensi dengan dashboard analytics yang
                            detail
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}   