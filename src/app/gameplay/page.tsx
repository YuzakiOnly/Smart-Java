import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Gameplay() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen pt-32 pb-24 px-6 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 -z-10 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />

        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
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
              Smart-Java Game menghadirkan simulasi dunia kerja nyata melalui gameplay 
              interaktif dan berbasis misi yang edukatif namun tetap menyenangkan.
            </p>
          </div>

          {/* Video Section - More Compact */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative group">
              {/* Glow Effect Behind Video */}
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" />
              
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
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                🎮 Tutorial Gameplay
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: "🎯",
                title: "Sistem Misi & Level",
                description: "Selesaikan berbagai misi yang dirancang untuk meningkatkan kemampuan secara bertahap.",
                gradient: "from-emerald-500/20 to-cyan-500/20"
              },
              {
                icon: "🏨",
                title: "Simulasi Hotel & Dapur",
                description: "Rasakan pengalaman nyata mengelola operasional hotel dan dapur profesional.",
                gradient: "from-cyan-500/20 to-violet-500/20"
              },
              {
                icon: "📊",
                title: "Penilaian Performa Pemain",
                description: "Sistem penilaian real-time yang memberikan feedback untuk peningkatan skill.",
                gradient: "from-violet-500/20 to-pink-500/20"
              },
              {
                icon: "🎓",
                title: "Edukatif & Menyenangkan",
                description: "Belajar sambil bermain dengan pendekatan gamifikasi yang engaging.",
                gradient: "from-pink-500/20 to-emerald-500/20"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Gradient Border */}
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-emerald-500/50 via-cyan-500/50 to-violet-500/50 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700" />
                
                {/* Card */}
                <div className="relative h-full rounded-xl bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/5 p-6 group-hover:border-white/10 transition-all duration-500">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-500">
                      {feature.title}
                    </h3>

                    {/* Divider */}
                    <div className="w-12 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3 group-hover:w-20 transition-all duration-500" />

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Checkmark */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-2xl" />
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <p className="text-slate-300 text-base mb-4">
                  Siap memulai petualangan belajar Anda?
                </p>
                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 group">
                  <span>Mainkan Sekarang</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}