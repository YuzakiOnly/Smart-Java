import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Text Introduction */}
                <div className="text-center mb-16 relative z-10">
                    <div className="inline-block px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 mb-6">
                        <span className="text-xs tracking-[0.2em] text-emerald-400 uppercase font-medium">
                            Meet The Team
                        </span>
                    </div>

                    <h1
                        className="text-6xl md:text-8xl font-bold mb-8 text-white leading-[0.95]"
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            letterSpacing: "-0.03em",
                        }}
                    >
                        Minds Behind
                        <br />
                        <span className="bg-linear-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                            Smart-Java
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Kolaborasi enam talenta muda yang menghadirkan inovasi dalam
                        pembelajaran hospitality melalui teknologi game interaktif.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="absolute -inset-6 bg-linear-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>

                    <div className="relative">
                        <div className="aspect-21/10 rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl shadow-slate-950">
                            <Image
                                src="/images/villain.png"
                                alt="Smart-Java Team"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Color Overlay */}
                            <div className="absolute inset-0 bg-slate-950/40"></div>
                            <div className="absolute inset-0 bg-linear-to-br from-emerald-900/30 via-slate-900/20 to-blue-900/30 mix-blend-multiply"></div>
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                        </div>

                        {/* Floating Stats */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 text-center shadow-xl">
                                    <div
                                        className="text-3xl font-bold text-emerald-400"
                                        style={{ fontFamily: "'Sora', sans-serif" }}
                                    >
                                        6
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">Members</div>
                                </div>
                                <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 text-center shadow-xl">
                                    <div
                                        className="text-3xl font-bold text-emerald-400"
                                        style={{ fontFamily: "'Sora', sans-serif" }}
                                    >
                                        3
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">Expertise</div>
                                </div>
                                <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 text-center shadow-xl">
                                    <div
                                        className="text-3xl font-bold text-emerald-400"
                                        style={{ fontFamily: "'Sora', sans-serif" }}
                                    >
                                        1
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">Vision</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}