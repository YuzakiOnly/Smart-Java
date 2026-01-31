export default function AboutGameSection() {
    return (
        <section className="py-20 px-6 border-t border-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2
                                className="text-4xl lg:text-5xl font-bold mb-6 text-white"
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Tentang Game
                            </h2>
                            <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
                                <p>
                                    Smart-Java adalah game simulasi interaktif yang
                                    menempatkan pemain dalam peran profesional hospitality.
                                    Dikembangkan khusus untuk program Perhotelan SMK, game ini
                                    menyediakan lingkungan pembelajaran praktis tanpa risiko
                                    kesalahan di dunia nyata.
                                </p>
                                <p>
                                    Setiap skenario dalam game dirancang berdasarkan situasi
                                    autentik yang sering dihadapi di hotel, restoran, dan
                                    fasilitas perhotelan lainnya. Pemain akan membuat
                                    keputusan, menghadapi konsekuensi, dan belajar dari
                                    feedback yang diberikan secara real-time.
                                </p>
                                <p>
                                    Dengan sistem penilaian berbasis kompetensi, Smart-Java
                                    tidak hanya mengukur pengetahuan teoritis, tetapi juga
                                    kemampuan praktis seperti komunikasi, problem-solving,
                                    time management, dan decision-making dalam konteks
                                    hospitality profesional.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-900">
                            <h3
                                className="text-2xl font-semibold mb-5 text-slate-50"
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Tujuan Pembelajaran
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                                    <p className="text-slate-300">
                                        Mempersiapkan mahasiswa dengan pengalaman praktis
                                        sebelum memasuki dunia kerja
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                                    <p className="text-slate-300">
                                        Mengembangkan soft skills seperti komunikasi, empati,
                                        dan adaptabilitas
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                                    <p className="text-slate-300">
                                        Melatih kemampuan mengambil keputusan cepat dalam
                                        situasi tekanan tinggi
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                                    <p className="text-slate-300">
                                        Memberikan pemahaman mendalam tentang standar
                                        operasional hospitality
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div className="space-y-6">
                        <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-900/50 border border-slate-800/70 backdrop-blur-sm">
                            <h3
                                className="text-xl font-semibold mb-6 text-white"
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Informasi Game
                            </h3>
                            <div className="space-y-5">
                                <div className="pb-5 border-b border-slate-800">
                                    <div className="text-sm text-slate-400 mb-1.5">
                                        Target Pengguna
                                    </div>
                                    <div className="text-slate-100 font-medium">
                                        Mahasiswa SMK Perhotelan
                                    </div>
                                </div>
                                <div className="pb-5 border-b border-slate-800">
                                    <div className="text-sm text-slate-400 mb-1.5">Platform</div>
                                    <div className="text-slate-100 font-medium">
                                        Web-based (Desktop & Mobile)
                                    </div>
                                </div>
                                <div className="pb-5 border-b border-slate-800">
                                    <div className="text-sm text-slate-400 mb-1.5">
                                        Jumlah Role
                                    </div>
                                    <div className="text-slate-100 font-medium">
                                        3 Role Profesional
                                    </div>
                                </div>
                                <div className="pb-5 border-b border-slate-800">
                                    <div className="text-sm text-slate-400 mb-1.5">
                                        Durasi Sesi
                                    </div>
                                    <div className="text-slate-100 font-medium">
                                        15-30 menit per skenario
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-400 mb-1.5">
                                        Level Kesulitan
                                    </div>
                                    <div className="text-slate-100 font-medium">
                                        Beginner - Advanced
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-emerald-950/10 border border-emerald-900/40">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 text-emerald-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-emerald-100 font-semibold mb-2">
                                        Gratis & Open Access
                                    </h4>
                                    <p className="text-sm text-emerald-200/80 leading-relaxed">
                                        Dapat diakses kapan saja, di mana saja tanpa biaya untuk
                                        semua mahasiswa SMK
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}