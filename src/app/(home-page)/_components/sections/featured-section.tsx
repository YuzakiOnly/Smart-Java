"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
    const featuredRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: featuredRef.current,
                    start: "top 35%",
                    end: "45% center",
                    scrub: 0.5,
                    markers: true,
                },
            });

            tl.from(".features-heading", {
                opacity: 0,
                y: 80,
                scale: 0.8,
                ease: "power3.inOut",
                duration: 1.5,      
            })
                .from(
                    ".feature-badge",
                    {
                        opacity: 0,
                        y: 50,
                        ease: "back.out(1.7)",
                        duration: 1,
                    },
                    "-=0.8"          
                )
                .from(
                    ".feature-title",
                    {
                        opacity: 0,
                        y: 60,
                        ease: "power3.out",
                        duration: 1.2,
                    },
                    "-=0.6"
                )
                .from(
                    ".feature-description",
                    {
                        opacity: 0,
                        y: 40,
                        ease: "power2.out",
                        duration: 1,
                    },
                    "-=0.4"
                )
                .from(
                    ".feature-image",
                    {
                        opacity: 0,
                        x: 100,
                        scale: 0.9,
                        ease: "power3.out",
                        duration: 1.5,
                    },
                    "-=0.5"
                )
                .from(
                    ".feature-button",
                    {
                        opacity: 0,
                        y: 30,
                        stagger: 0.15,
                        ease: "power2.out",
                        duration: 0.8,
                    },
                    "-=0.3"
                );
        },
        { scope: featuredRef }
    );

    return (
        <div
            ref={featuredRef}
            className="features relative min-h-screen bg-linear-to-b from-black via-slate-950 to-slate-900 px-6 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-cyan-500/20 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-100 h-100 bg-purple-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="features-heading text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Fitur Unggulan
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
                        Pengalaman gaming edukatif dengan teknologi terdepan
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="feature-badge inline-block px-5 py-2.5 rounded-full bg-linear-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/60 shadow-lg shadow-slate-900/50">
                                <span className="text-xs tracking-[0.25em] text-slate-300 uppercase font-medium">
                                    Educational Simulation Game
                                </span>
                            </div>

                            <h1
                                className="feature-title text-6xl lg:text-7xl font-bold leading-tight text-white"
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Smart-Java
                            </h1>

                            <p className="feature-description text-xl text-slate-300 leading-relaxed">
                                Game simulasi hospitality berbasis skenario yang dirancang
                                untuk melatih keterampilan praktis mahasiswa SMK dalam
                                menghadapi situasi kerja nyata di industri perhotelan.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <a
                                    href="/roles"
                                    className="feature-button px-8 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                                >
                                    Mainkan Sekarang
                                </a>
                                <a
                                    href="#gameplay"
                                    className="feature-button px-8 py-4 border-2 border-slate-700/80 text-slate-200 rounded-xl font-semibold hover:border-slate-600 hover:bg-slate-800/50 transition-all"
                                >
                                    Cara Bermain
                                </a>
                            </div>
                        </div>

                        <div className="feature-image relative">
                            <div className="absolute -inset-4 bg-linear-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
                            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border-2 border-slate-800/50 shadow-2xl shadow-slate-950/80">
                                <Image
                                    src="/images/dokumentasi.jpeg"
                                    alt="Smart-Java Game Interface"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-900 to-transparent pointer-events-none" />
        </div>
    );
}