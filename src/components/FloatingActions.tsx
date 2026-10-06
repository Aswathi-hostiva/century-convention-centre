"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/919562410044?text=Hello%20Century%20Convention%20Centre,%20I%20would%20like%20to%20enquire%20about%20booking%20the%20venue%20for%20my%20event."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-transform border border-white/20"
        aria-label="Chat on WhatsApp with Century Convention Centre"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+919562410044"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-[#0a0d14] shadow-xl hover:scale-110 active:scale-95 transition-transform border border-[#d4af37]/40"
        aria-label="Call Century Convention Centre"
      >
        <Phone className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
}
