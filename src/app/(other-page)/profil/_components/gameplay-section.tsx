export default function GameplaySection() {
    return (
        <section id="gameplay" className="py-20 px-6 border-t border-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-4 text-white"
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Cara Bermain
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Sistem pembelajaran berbasis keputusan dengan konsekuensi yang
                        realistis
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">1️⃣</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Pilih Role
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Pilih antara Resepsionis atau Chef sesuai minat dan jalur
                            karir yang ingin dipelajari
                        </p>
                    </div>

                    <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">2️⃣</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Hadapi Skenario
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Masuki situasi realistis dengan berbagai tingkat kesulitan dan
                            kompleksitas masalah
                        </p>
                    </div>

                    <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">3️⃣</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Buat Keputusan
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Pilih tindakan dari berbagai opsi yang tersedia, setiap
                            pilihan memiliki konsekuensi berbeda
                        </p>
                    </div>

                    <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                            <span className="text-2xl">4️⃣</span>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 text-white">
                            Terima Feedback
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Dapatkan evaluasi langsung dan pelajari pendekatan yang lebih
                            efektif untuk situasi serupa
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}