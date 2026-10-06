import React from "react";
import Image from "next/image";
import { Phone, CalendarCheck, Sparkles, MapPin, ChevronDown, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const HERO_IMAGE = "/images/DJI_20260701103528_0067_D.JPG";

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Container with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Century Convention Centre Aerial View"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-105 duration-1000 ease-out"
        />
        {/* Deep luxury gradient overlays to guarantee pristine contrast and mood */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/80 to-[#080a0f]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#080a0f]/50 to-[#080a0f]/90" />
      </div>

      {/* Decorative subtle ambient glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121722]/90 border border-[#d4af37]/40 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs sm:text-sm font-medium tracking-widest text-[#f3e5ab] uppercase">
            ESTABLISHED 2004 • TWO DECADES OF EXCELLENCE
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-5 leading-[1.08]">
          Century Convention{" "}
          <span className="gold-gradient-text block sm:inline">Centre</span>
        </h1>

        {/* Brand Tagline */}
        <p className="font-serif-luxury italic text-xl sm:text-2xl md:text-3xl text-[#e2e8f0] font-normal mb-6 tracking-wide">
          “Where Every Occasion Becomes a Celebration.”
        </p>

        {/* Location pill */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#cbd5e1] mb-10 max-w-xl mx-auto bg-[#0a0d14]/70 px-4 py-2 rounded-lg border border-white/10 backdrop-blur-sm">
          <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
          <span>Mele Chelari, Near Calicut University, Malappuram, Kerala – 673636</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
          <a
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-[#0a0d14] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c5a880] hover:brightness-110 shadow-xl shadow-[#d4af37]/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <CalendarCheck className="w-5 h-5 text-[#0a0d14]" />
            <span>Enquire for Your Date</span>
          </a>

          <a
            href="tel:+919562410044"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium text-white bg-[#121722]/85 hover:bg-[#1a2233] border border-[#d4af37]/40 hover:border-[#d4af37] backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
          >
            <Phone className="w-5 h-5 text-[#d4af37]" />
            <span>Call: +91 95624 10044</span>
          </a>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-left">
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0e131d]/60 border border-white/5 backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-200">Grand AC Halls</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0e131d]/60 border border-white/5 backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-200">Pool & Open Lawn</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0e131d]/60 border border-white/5 backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-200">Expansive Parking</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0e131d]/60 border border-white/5 backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-gray-200">LED & Sound Systems</span>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#about"
        aria-label="Scroll down to introduction"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 text-gray-400 hover:text-[#d4af37] transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
