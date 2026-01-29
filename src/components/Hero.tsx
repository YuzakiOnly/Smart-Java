"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/images/smart.mp4" type="video/mp4" />
        </video>

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-cyan-900/50 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50" />
      </div>

      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/25 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-sky-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* CONTENT */}
      <div
        className={`relative z-10 max-w-5xl mx-auto px-6 space-y-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
       {/* TITLE */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-none tracking-tight">
        <span className="bg-gradient-to-r from-white via-cyan-50 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
          Smart-Java{" "}
        </span>
        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">
          Game
        </span>
      </h1>

        {/* DESCRIPTION */}
        <div className="max-w-2xl mx-auto">
          <div className="px-6 py-5 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 transition-all">
            <p className="text-base md:text-lg text-white/85 leading-relaxed text-center">
              Jelajahi dunia{" "}
              <span className="font-semibold text-cyan-300">perhotelan</span>{" "}
              dan{" "}
              <span className="font-semibold text-sky-300">kuliner</span>{" "}
              melalui pengalaman game yang{" "}
              <span className="font-semibold text-white">immersive</span> dan{" "}
              <span className="font-semibold text-white">edukatif</span>
            </p>
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/profil"
            className="group relative px-8 py-3.5 rounded-xl overflow-hidden hover:-translate-y-0.5 hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500" />
            <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
              Deskripsi Smart Java →
            </span>
          </Link>

          <Link
            href="/gameplay"
            className="group px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/10 border border-cyan-400/30 hover:bg-white/15 hover:border-cyan-400/50 transition-all hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2 text-white font-semibold">
              ▶ Tonton Gameplay
            </span>
          </Link>
        </div>
      </div>

      {/* VIGNETTE */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
    </section>
  );
}
