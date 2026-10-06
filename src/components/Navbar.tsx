"use client";

import React, { useState, useEffect } from "react";
import { Phone, CalendarCheck, MapPin } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro bar for quick access */}
      <div className="hidden sm:block bg-[#05070a] border-b border-[#222938] text-xs text-[#94a3b8] py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#c5a880]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
              Established 2004 • Premier Convention Centre
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
              Mele Chelari, Near Calicut University, Malappuram
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="tel:+919562410044"
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              +91 95624 10044
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="tel:+919280100400"
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              +91 9280 100400
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-2 shadow-xl border-b border-[#d4af37]/20"
            : "bg-[#080a0f]/90 backdrop-blur-md py-2 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-between gap-y-2 sm:flex-nowrap">
            {/* Century Logo + CENTURY CONVENTION CENTRE */}
            <a
              href="#hero"
              className="group flex w-full min-w-0 items-center gap-2 sm:w-auto sm:gap-2.5 focus:outline-none"
              aria-label="Century Convention Centre Homepage"
            >
              {/* Century Logo */}
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden sm:h-24 sm:w-24">
                <img
                  src="/images/WhatsApp Image 2026-10-06 at 7.39.57 PM.jpeg"
                  alt="Century Convention Centre"
                  className="absolute left-1/2 top-1/2 h-auto w-[140%] max-w-none -translate-x-1/2 -translate-y-[40%]"
                />
              </div>
              {/* Brand text */}
              <div className="flex w-0 min-w-0 flex-1 flex-col sm:w-auto sm:flex-none">
                <span className="font-serif-luxury text-base sm:text-lg md:text-xl font-bold tracking-wider text-white uppercase group-hover:text-[#f3e5ab] transition-colors leading-tight">
                  CENTURY CONVENTION CENTRE
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-[#c5a880] uppercase">
                  Mele Chelari • Near Calicut University
                </span>
              </div>
            </a>

            {/* Enquire Now button (Desktop & Mobile) */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+919562410044"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-gray-300 hover:text-white bg-[#141b28] border border-[#2a3447] hover:border-[#d4af37]/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>+91 95624 10044</span>
              </a>

              <a
                href="#enquiry"
                className="relative inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#0a0d14] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c5a880] hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <CalendarCheck className="w-4 h-4 text-[#0a0d14]" />
                <span>Enquire Now</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}