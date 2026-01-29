"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const teamMembers = [
  {
    name: "Damar Gesang Erlangga",
    role: "Front End Developer",
    image: "/images/erlannn.png",
    specialty: "Building Robust & Scalable Systems",
  },
  {
    name: "M.Arya Ardiansyah",
    role: "Game Developer",
    image: "/images/aryak.png",
    specialty: "Crafting immersive gameplay experiences",
  },
  {
    name: "Ghaffar Putra",
    role: "Content Creator",
    image: "/images/ghaffarr.png",
    specialty: "Bringing worlds to life visually",
  },
  {
    name: "Kayevano Atthaya",
    role: "Content Creator",
    image: "/images/vanoo.png",
    specialty: "Designing intuitive user journeys",
  },
  {
    name: "Nama Ivan Prabata",
    role: "Game Developer",
    image: "/images/ivannn.png",
    specialty: "Powering seamless integrations",
  },
  {
    name: "Julio Dwi Susiloolo",
    role: "Content Creator",
    image: "/images/julioo.png",
    specialty: "Orchestrating team excellence",
  },
];

export default function Team() {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Sora:wght@300;400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        
        {/* Hero Section - More Dramatic */}
        <section className="relative pt-24 pb-32 px-6 overflow-hidden">
          {/* Ambient Background */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[130px]"></div>
          
          <div className="max-w-7xl mx-auto">
            
            {/* Text Introduction First */}
            <div className="text-center mb-16 relative z-10">
              <div className="inline-block px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 mb-6">
                <span className="text-xs tracking-[0.2em] text-emerald-400 uppercase font-medium">Meet The Team</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-[0.95]" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.03em' }}>
                Minds Behind
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Smart-Java
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Kolaborasi enam talenta muda yang menghadirkan inovasi dalam pembelajaran hospitality melalui teknologi game interaktif.
              </p>
            </div>

            {/* Hero Image with Better Layout */}
            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
              
              <div className="relative">
                <div className="aspect-[21/10] rounded-3xl overflow-hidden border border-slate-800/50 shadow-2xl shadow-slate-950">
                  <Image 
                    src="/images/villain.png" 
                    alt="Smart-Java Team" 
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Color Overlay dengan Multiple Layers untuk efek warna yang menyesuaikan */}
                  <div className="absolute inset-0 bg-slate-950/40"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900/20 to-blue-900/30 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>
                
                {/* Floating Stats on Image */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 text-center shadow-xl">
                      <div className="text-3xl font-bold text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>6</div>
                      <div className="text-xs text-slate-400 mt-1">Members</div>
                    </div>
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 text-center shadow-xl">
                      <div className="text-3xl font-bold text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>3</div>
                      <div className="text-xs text-slate-400 mt-1">Expertise</div>
                    </div>
                    <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800/50 rounded-xl p-4 text-center shadow-xl">
                      <div className="text-3xl font-bold text-emerald-400" style={{ fontFamily: "'Sora', sans-serif" }}>1</div>
                      <div className="text-xs text-slate-400 mt-1">Vision</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Team Section - Improved Card Design */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Divider */}
            <div className="flex items-center justify-center mb-20">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-slate-700"></div>
              <div className="px-6 text-sm tracking-[0.3em] text-slate-500 uppercase">Our Team</div>
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-slate-700"></div>
            </div>

            {/* Team Grid - Layout seperti reference */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
              {teamMembers.map((member, i) => (
                <div key={i} className="group">
                  <div className="relative">
                    
                    {/* Floating Image - PNG Transparent */}
                    <div className="relative mb-6">
                      <div className="relative w-full h-64 group-hover:scale-105 transition-transform duration-500">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* PNG Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-contain drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))' }}
                          />
                        </div>
                      </div>

                      {/* Role Badge - Below Image */}
                      <div className="flex justify-center -mt-3">
                        <div className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm">
                          <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/50 overflow-hidden transition-all duration-500 group-hover:border-slate-700/80 group-hover:bg-slate-900/60">
                      
                      {/* Subtle top border glow */}
                      <div className="h-px bg-gradient-to-r from-transparent via-emerald-400/0 to-transparent group-hover:via-emerald-400/30 transition-all duration-500"></div>

                      {/* Content */}
                      <div className="p-8 text-center space-y-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>
                          {member.name}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed min-h-[3rem]">
                          {member.specialty}
                        </p>

                        {/* Social Icons */}
                        <div className="flex justify-center gap-2 pt-2">
                          <div className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-slate-800 hover:border-emerald-500/40 hover:scale-110 transition-all cursor-pointer">
                            <svg className="w-4 h-4 text-slate-400 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-slate-800 hover:border-emerald-500/40 hover:scale-110 transition-all cursor-pointer">
                            <svg className="w-4 h-4 text-slate-400 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </div>
                          <div className="w-9 h-9 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center hover:bg-slate-800 hover:border-emerald-500/40 hover:scale-110 transition-all cursor-pointer">
                            <svg className="w-4 h-4 text-slate-400 hover:text-emerald-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - New Addition */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent"></div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>
                What Drives Us
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Nilai-nilai yang menjadi fondasi kolaborasi dan inovasi kami.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Value 1 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Kolaborasi
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Setiap perspektif bernilai. Kami percaya kekuatan sejati muncul ketika berbagai keahlian bersinergi untuk tujuan bersama.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Inovasi
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Tidak puas dengan status quo. Kami terus mengeksplorasi pendekatan baru untuk membuat pembelajaran lebih efektif dan engaging.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Sora', sans-serif" }}>
                    Dampak
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    Teknologi tanpa tujuan adalah kosong. Kami fokus menciptakan solusi yang memberi nilai nyata bagi pendidikan dan masa depan.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section - Improved */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative text-center p-12 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800/50">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>
                  Mari Terhubung
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Tertarik berkolaborasi atau ingin tahu lebih lanjut tentang Smart-Java? Kami senang mendengar dari Anda.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="/contact" 
                    className="group px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center gap-2.5">
                      Hubungi Kami
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                  <a 
                    href="/profil" 
                    className="px-10 py-4 border-2 border-slate-700 text-slate-200 rounded-xl font-bold hover:border-slate-600 hover:bg-slate-800/50 transition-all"
                  >
                    Tentang Smart-Java
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}