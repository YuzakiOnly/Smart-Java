export default function CTASection() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>

                    <div className="relative text-center p-12 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
                        <h2
                            className="text-4xl lg:text-5xl font-bold mb-6 text-white"
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Mari Terhubung
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Tertarik berkolaborasi atau ingin tahu lebih lanjut tentang
                            Smart-Java? Kami senang mendengar dari Anda.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="/contact"
                                className="group px-10 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                            >
                                <span className="flex items-center justify-center gap-2.5">
                                    Hubungi Kami
                                    <svg
                                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a
                                href="/profil"
                                className="px-10 py-4 border-2 border-slate-700 text-slate-200 rounded-xl font-bold hover:border-slate-600 hover:bg-slate-800/50 transition-all"
                            >
                                Tentang Smart-Java
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}