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
            ? "glass-nav py-3.5 shadow-xl border-b border-[#d4af37]/20"
            : "bg-[#080a0f]/90 backdrop-blur-md py-4 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Century Logo + CENTURY CONVENTION CENTRE */}
            <a
              href="#hero"
              className="group flex items-center gap-3 sm:gap-3.5 focus:outline-none"
              aria-label="Century Convention Centre Homepage"
            >
              {/* Century Logo */}
              <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1c2230] via-[#0d111a] to-[#05070a] border border-[#d4af37]/40 shadow-md group-hover:border-[#d4af37] transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeDasharray="2 3"
                    className="opacity-60"
                  />
                  <path
                    d="M26 14C24.5 12.5 22.5 11.5 20 11.5C15.3056 11.5 11.5 15.3056 11.5 20C11.5 24.6944 15.3056 28.5 20 28.5C22.5 28.5 24.5 27.5 26 26"
                    stroke="url(#goldGradNavbar)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="20,15 21.5,18.5 25,19 22.5,21.5 23,25 20,23 17,25 17.5,21.5 15,19 18.5,18.5"
                    fill="#d4af37"
                    className="opacity-70 scale-50 origin-center"
                  />
                  <defs>
                    <linearGradient id="goldGradNavbar" x1="11" y1="11" x2="28" y2="28">
                      <stop stopColor="#FCEBC2" />
                      <stop offset="0.5" stopColor="#D4AF37" />
                      <stop offset="1" stopColor="#AA8032" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Brand text */}
              <div className="flex flex-col">
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
