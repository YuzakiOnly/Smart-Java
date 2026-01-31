export default function AmbientBackground() {
    return (
        <>
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[130px]"></div>
        </>
    );
}