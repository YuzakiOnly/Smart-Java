export default function VideoSection() {
    return (
        <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative group">
                {/* Glow Effect Behind Video */}
                <div className="absolute -inset-3 bg-linear-to-r from-emerald-500/20 via-cyan-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

                {/* Video Container */}
                <div className="relative rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-emerald-400/50 transition-all duration-500 shadow-2xl">
                    {/* Video Element */}
                    <video
                        className="w-full aspect-video object-cover"
                        controls
                        poster="/images/video-thumbnail.jpg"
                    >
                        <source src="/images/smart.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-400/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-400/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Video Label */}
                <div className="absolute -top-3 left-6 bg-linear-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    🎮 Tutorial Gameplay
                </div>
            </div>
        </div>
    );
}