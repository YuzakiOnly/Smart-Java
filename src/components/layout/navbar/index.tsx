"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data/navigation";
import { ThemeToggle } from "@/components/theme/theme-provider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-slate-950/70 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group relative">
          <span className="text-xl font-semibold tracking-tight bg-linear-to-r from-emerald-400 to-sky-400 bg-clip-text text-transparent">
            Smart-Java Game
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-sky-400 transition-all duration-300 group-hover:w-full" />
        </Link>

        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-emerald-400 to-sky-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="/gameplay"
            className="ml-4 px-5 py-2 rounded-xl text-sm font-medium bg-linear-to-r from-emerald-500 to-sky-500 text-slate-950 hover:opacity-90 transition-all"
          >
            Mulai
          </Link>

          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}