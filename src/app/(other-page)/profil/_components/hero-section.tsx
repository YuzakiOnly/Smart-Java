import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="relative pt-32 pb-20 px-6">
            <div className="absolute top-40 left-1/3 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px]"></div>
            <div className="absolute top-60 right-1/4 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[120px]"></div>

            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/60 shadow-lg shadow-slate-900/50">
                            <span className="text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">
                                Educational Simulation Game
                            </span>
                        </div>

                        <h1
                            className="text-6xl lg:text-7xl font-bold leading-tight text-white"
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Smart-Java
                        </h1>

                        <p className="text-xl text-slate-300 leading-relaxed">
                            Game simulasi hospitality berbasis skenario yang dirancang
                            untuk melatih keterampilan praktis mahasiswa SMK dalam
                            menghadapi situasi kerja nyata di industri perhotelan.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="/roles"
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                            >
                                Mainkan Sekarang
                            </a>
                            <a
                                href="#gameplay"
                                className="px-8 py-4 border-2 border-slate-700/80 text-slate-200 rounded-xl font-semibold hover:border-slate-600 hover:bg-slate-800/50 transition-all"
                            >
                                Cara Bermain
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-800/50 shadow-2xl shadow-slate-950/80">
                            <Image
                                src="/images/dokumentasi.jpeg"
                                alt="Smart-Java Game Interface"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}