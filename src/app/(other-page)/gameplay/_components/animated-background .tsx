export default function AnimatedBackground() {
    return (
        <>
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-1/4 w-125 h-125 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
                <div
                    className="absolute bottom-1/4 left-1/4 w-150 h-150 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
                <div
                    className="absolute top-1/2 right-1/3 w-100 h-100 bg-violet-500/10 rounded-full blur-[100px] animate-pulse"
                    style={{ animationDelay: "2s" }}
                />
            </div>

            <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />
        </>
    );
}