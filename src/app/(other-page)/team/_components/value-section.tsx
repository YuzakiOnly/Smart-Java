import ValueCard from "./value-card";

export default function ValuesSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-500/2 to-transparent"></div>

            <div className="max-w-6xl mx-auto relative">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl lg:text-5xl font-bold mb-6 text-white"
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        What Drives Us
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Nilai-nilai yang menjadi fondasi kolaborasi dan inovasi kami.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Value 1 - Kolaborasi */}
                    <ValueCard
                        title="Kolaborasi"
                        description="Setiap perspektif bernilai. Kami percaya kekuatan sejati muncul ketika berbagai keahlian bersinergi untuk tujuan bersama."
                        gradient="from-emerald-500/10 to-transparent"
                        icon={
                            <svg
                                className="w-8 h-8 text-emerald-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        }
                    />

                    {/* Value 2 - Inovasi */}
                    <ValueCard
                        title="Inovasi"
                        description="Tidak puas dengan status quo. Kami terus mengeksplorasi pendekatan baru untuk membuat pembelajaran lebih efektif dan engaging."
                        gradient="from-blue-500/10 to-transparent"
                        icon={
                            <svg
                                className="w-8 h-8 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                            </svg>
                        }
                    />

                    {/* Value 3 - Dampak */}
                    <ValueCard
                        title="Dampak"
                        description="Teknologi tanpa tujuan adalah kosong. Kami fokus menciptakan solusi yang memberi nilai nyata bagi pendidikan dan masa depan."
                        gradient="from-purple-500/10 to-transparent"
                        icon={
                            <svg
                                className="w-8 h-8 text-purple-400"
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
                        }
                    />
                </div>
            </div>
        </section>
    );
}