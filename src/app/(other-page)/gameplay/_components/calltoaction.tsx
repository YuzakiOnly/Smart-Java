export default function CallToAction() {
    return (
        <div className="mt-16 text-center">
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-linear-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl" />
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                    <p className="text-slate-300 text-base mb-4">
                        Siap memulai petualangan belajar Anda?
                    </p>
                    <button className="inline-flex items-center gap-3 bg-linear-to-r from-emerald-500 to-cyan-500 text-white font-bold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 group">
                        <span>Mainkan Sekarang</span>
                        <svg
                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}