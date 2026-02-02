"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(
        ".hero-content",
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          clearProps: "all",
        }
      );

      gsap.to(
        ".hero-title",
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.4,
          clearProps: "all",
        }
      );


      gsap.to(
        ".hero-cta-item",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.8,
          clearProps: "all",
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,  
          markers: true
        },
      });

      tl.to(".hero-video-bg", {
        opacity: 0,
        scale: 1.2,
        filter: "blur(20px)",
        ease: "power2.inOut",
      }, 0);

      tl.to(".hero-title-first", {
        x: -100,
        opacity: 0,
        rotateX: -20,
        ease: "power2.inOut",
      }, 0)
        .to(".hero-title-second", {
          x: 100,
          opacity: 0,
          rotateX: 20,
          ease: "power2.inOut",
        }, 0);

      tl.to(".hero-description", {
        y: -10,
        opacity: 0,
        scale: 0.8,
        ease: "power2.inOut",
      }, 0);

      tl.to(".hero-cta", {
        y: -30,
        opacity: 0,
        ease: "power2.inOut",
      }, 0.15);

      tl.to(".hero-content", {
        y: -100,
        scale: 0.9,
        ease: "power2.inOut",
      }, 0);

    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="hero-video-bg absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/images/smart.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-slate-900/75 via-cyan-900/50 to-slate-900/80" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/50" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-100 h-100 bg-cyan-500/25 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-sky-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="hero-content relative z-10 max-w-5xl mx-auto px-6 space-y-8">
        <h1 className="hero-title flex gap-10 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-none tracking-tight">
          <span className="hero-title-first inline-block bg-linear-to-r from-white via-cyan-50 to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            Smart-Java
          </span>
          <span className="hero-title-second inline-block bg-linear-to-r from-cyan-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.5)]">
            Game
          </span>
        </h1>

        <div className="hero-description max-w-2xl mx-auto">
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

        <div className="hero-cta flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/profil"
            className="hero-cta-item group relative px-8 py-3.5 rounded-xl overflow-hidden hover:-translate-y-0.5 hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-sky-500" />
            <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
              Deskripsi Smart Java →
            </span>
          </Link>

          <Link
            href="/gameplay"
            className="hero-cta-item group px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/10 border border-cyan-400/30 hover:bg-white/15 hover:border-cyan-400/50 transition-all hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2 text-white font-semibold">
              ▶ Tonton Gameplay
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}