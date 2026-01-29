"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    // Load fonts on client side only
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

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="absolute top-40 left-1/3 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[140px]"></div>
          <div className="absolute top-60 right-1/4 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-[120px]"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/60 shadow-lg shadow-slate-900/50">
                  <span className="text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">Educational Simulation Game</span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>
                  Smart-Java
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed">
                  Game simulasi hospitality berbasis skenario yang dirancang untuk melatih keterampilan praktis mahasiswa SMK dalam menghadapi situasi kerja nyata di industri perhotelan.
                </p>

                <div className="flex gap-4 pt-4">
                  <a href="/roles" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5">
                    Mainkan Sekarang
                  </a>
                  <a href="#gameplay" className="px-8 py-4 border-2 border-slate-700/80 text-slate-200 rounded-xl font-semibold hover:border-slate-600 hover:bg-slate-800/50 transition-all">
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
        </section>

        {/* About Game Section */}
        <section className="py-20 px-6 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Tentang Game</h2>
                  <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
                    <p>
                      Smart-Java adalah game simulasi interaktif yang menempatkan pemain dalam peran profesional hospitality. Dikembangkan khusus untuk program Perhotelan SMK, game ini menyediakan lingkungan pembelajaran praktis tanpa risiko kesalahan di dunia nyata.
                    </p>
                    <p>
                      Setiap skenario dalam game dirancang berdasarkan situasi autentik yang sering dihadapi di hotel, restoran, dan fasilitas perhotelan lainnya. Pemain akan membuat keputusan, menghadapi konsekuensi, dan belajar dari feedback yang diberikan secara real-time.
                    </p>
                    <p>
                      Dengan sistem penilaian berbasis kompetensi, Smart-Java tidak hanya mengukur pengetahuan teoritis, tetapi juga kemampuan praktis seperti komunikasi, problem-solving, time management, dan decision-making dalam konteks hospitality profesional.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-900">
                  <h3 className="text-2xl font-semibold mb-5 text-slate-50" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Tujuan Pembelajaran</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                      <p className="text-slate-300">Mempersiapkan mahasiswa dengan pengalaman praktis sebelum memasuki dunia kerja</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                      <p className="text-slate-300">Mengembangkan soft skills seperti komunikasi, empati, dan adaptabilitas</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                      <p className="text-slate-300">Melatih kemampuan mengambil keputusan cepat dalam situasi tekanan tinggi</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 flex-shrink-0"></div>
                      <p className="text-slate-300">Memberikan pemahaman mendalam tentang standar operasional hospitality</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm border border-slate-800/80 shadow-xl">
                  <h3 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Informasi Game</h3>
                  <div className="space-y-5">
                    <div>
                      <div className="text-sm text-slate-500 mb-1">Platform</div>
                      <div className="text-slate-200">Web Browser</div>
                    </div>
                    <div className="pt-5 border-t border-slate-800">
                      <div className="text-sm text-slate-500 mb-1">Genre</div>
                      <div className="text-slate-200">Educational Simulation</div>
                    </div>
                    <div className="pt-5 border-t border-slate-800">
                      <div className="text-sm text-slate-500 mb-1">Target Pemain</div>
                      <div className="text-slate-200">Mahasiswa SMK Perhotelan</div>
                    </div>
                    <div className="pt-5 border-t border-slate-800">
                      <div className="text-sm text-slate-500 mb-1">Durasi Sesi</div>
                      <div className="text-slate-200">15-30 menit per skenario</div>
                    </div>
                    <div className="pt-5 border-t border-slate-800">
                      <div className="text-sm text-slate-500 mb-1">Role Tersedia</div>
                      <div className="text-slate-200">2 Jalur Karir</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 to-emerald-900/30 border border-emerald-800/40 shadow-lg">
                  <div className="text-sm text-emerald-400 mb-2 font-medium">Status Pengembangan</div>
                  <div className="text-white font-semibold">Aktif & Terus Diperbarui</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section id="gameplay" className="py-20 px-6 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Mekanisme Gameplay</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Sistem pembelajaran berbasis keputusan dengan konsekuensi yang realistis
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Pilih Role</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pilih antara Resepsionis atau Chef sesuai minat dan jalur karir yang ingin dipelajari
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Hadapi Skenario</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Masuki situasi realistis dengan berbagai tingkat kesulitan dan kompleksitas masalah
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Buat Keputusan</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pilih tindakan dari berbagai opsi yang tersedia, setiap pilihan memiliki konsekuensi berbeda
                </p>
              </div>

              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">4️⃣</span>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Terima Feedback</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Dapatkan evaluasi langsung dan pelajari pendekatan yang lebih efektif untuk situasi serupa
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Roles Section */}
        <section className="py-20 px-6 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Role Profesional</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Dua jalur karir dengan fokus pembelajaran dan tantangan yang berbeda
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Receptionist */}
              <div className="group p-10 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-slate-800/80 hover:border-emerald-500/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform">🏨</div>
                  <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                    Front Office
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Resepsionis Hotel</h3>
                
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Role yang fokus pada interaksi langsung dengan tamu. Pemain akan belajar menangani check-in/check-out, mengelola reservasi, menangani keluhan tamu, dan memberikan informasi tentang fasilitas hotel dengan profesional.
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-4">Kompetensi yang Dikembangkan</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Customer service excellence & komunikasi efektif</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Complaint handling & conflict resolution</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Sistem reservasi & manajemen data tamu</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Multitasking & prioritization under pressure</span>
                    </div>
                  </div>
                </div>

                <a href="/roles/receptionist" className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all">
                  <span>Mulai sebagai Resepsionis</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              {/* Chef */}
              <div className="group p-10 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-slate-800/80 hover:border-orange-500/40 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform">👨‍🍳</div>
                  <span className="px-3 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                    Kitchen
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Chef Profesional</h3>
                
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Role yang menantang dalam lingkungan dapur dengan tekanan tinggi. Pemain akan mengelola pesanan, menjaga standar kualitas makanan, koordinasi dengan tim kitchen, dan memastikan food safety protocol terpenuhi.
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-sm text-slate-400 uppercase tracking-wider mb-4">Kompetensi yang Dikembangkan</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Time management & order prioritization</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Quality control & food safety standards</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Team leadership & kitchen coordination</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">Crisis handling & stress management</span>
                    </div>
                  </div>
                </div>

                <a href="/roles/chef" className="inline-flex items-center gap-2 text-orange-400 font-medium hover:gap-3 transition-all">
                  <span>Mulai sebagai Chef</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>Fitur Pembelajaran</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Sistem yang dirancang untuk memaksimalkan efektivitas pembelajaran
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Skenario Berbasis Kasus Nyata</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Lebih dari 100 skenario yang diambil dari pengalaman praktisi industri hospitality
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Sistem Penilaian Komprehensif</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Evaluasi multi-dimensi yang mengukur berbagai aspek kompetensi profesional
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Feedback Real-time</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Penjelasan langsung tentang dampak keputusan dan alternatif pendekatan yang lebih baik
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Tingkat Kesulitan Adaptif</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Skenario yang menyesuaikan dengan level kemampuan dan progres pembelajaran pemain
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Lingkungan Bebas Risiko</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Kesalahan menjadi pembelajaran tanpa konsekuensi terhadap reputasi atau karir nyata
                </p>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3 text-white">Progress Tracking</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pantau perkembangan kompetensi dengan dashboard analytics yang detail
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 border-t border-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white" style={{ fontFamily: "'Sora', sans-serif", letterSpacing: '-0.02em' }}>
              Siap Memulai Perjalanan Pembelajaran?
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Bergabunglah dengan ratusan mahasiswa SMK yang telah menggunakan Smart-Java untuk mempersiapkan karir mereka di industri hospitality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/roles" className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-bold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5">
                Pilih Role & Mulai
              </a>
              <a href="/contact" className="px-10 py-4 border-2 border-slate-700/80 text-slate-200 rounded-xl font-bold hover:border-slate-600 hover:bg-slate-800/50 transition-all">
                Hubungi Kami
              </a>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}