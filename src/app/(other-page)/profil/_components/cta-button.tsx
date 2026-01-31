export default function CTASection() {
    return (
        <section className="py-24 px-6 border-t border-slate-900">
            <div className="max-w-4xl mx-auto text-center">
                <h2
                    className="text-4xl lg:text-5xl font-bold mb-6 text-white"
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Siap Memulai Perjalanan Pembelajaran?
                </h2>
                <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Bergabunglah dengan ratusan mahasiswa SMK yang telah menggunakan
                    Smart-Java untuk mempersiapkan karir mereka di industri
                    hospitality.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/roles"
                        className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                    >
                        Pilih Role & Mulai
                    </a>
                    <a
                        href="/contact"
                        className="px-10 py-4 border-2 border-slate-700/80 text-slate-200 rounded-xl font-bold hover:border-slate-600 hover:bg-slate-800/50 transition-all"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </div>
        </section>
    );
}