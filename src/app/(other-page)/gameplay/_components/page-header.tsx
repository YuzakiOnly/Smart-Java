export default function PageHeader() {
    return (
        <div className="text-center mb-12">
            <div className="inline-block mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-cyan-400" />
                    <span className="text-sm uppercase tracking-[0.3em] text-emerald-400 font-medium">
                        Experience the Game
                    </span>
                    <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-transparent" />
                </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
                <span className="inline-block bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
                    Gameplay
                </span>
                <span className="text-white"> & </span>
                <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Fitur
                </span>
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
                Smart-Java Game menghadirkan simulasi dunia kerja nyata melalui
                gameplay interaktif dan berbasis misi yang edukatif namun tetap
                menyenangkan.
            </p>
        </div>
    );
}