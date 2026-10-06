import React from "react";
import Image from "next/image";
import { Sparkles, Award, MapPin, Users2, ShieldCheck } from "lucide-react";

export default function Introduction() {
  return (
    <section id="about" className="py-24 bg-[#0a0d14] relative overflow-hidden border-t border-[#1c2333]">
      {/* Decorative background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a880]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Heritage Story */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b27] border border-[#d4af37]/30 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase">
                Welcome to Century Convention Centre
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              A Hallmark of Grand Celebrations <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Since 2004</span>
            </h2>

            <p className="text-lg text-[#cbd5e1] leading-relaxed mb-6 font-normal">
              Located at Mele Chelari near Calicut University, Kerala,{" "}
              <strong className="text-white font-medium">Century Convention Centre</strong> has been the
              preferred venue for timeless weddings, prestigious gatherings, and celebratory milestones for more than two decades.
            </p>

            <p className="text-base text-[#94a3b8] leading-relaxed mb-8">
              Conceived with a vision to make <em className="text-[#f3e5ab] not-italic">“Every Occasion Become a Celebration”</em>,
              our facility blends stately architecture, fully air-conditioned halls, a tranquil swimming pool deck,
              spacious banquet dining, and generous parking to offer an unparalleled event experience in Malappuram district.
            </p>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1e2638]">
              <div className="p-4 rounded-xl bg-[#121722]/80 border border-[#222c3d]">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-3">
                  <Award className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Established 2004</h4>
                <p className="text-xs text-[#94a3b8]">20+ years of distinguished event hosting experience.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121722]/80 border border-[#222c3d]">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Strategic Location</h4>
                <p className="text-xs text-[#94a3b8]">Mele Chelari, conveniently beside Calicut University.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#121722]/80 border border-[#222c3d]">
                <div className="w-9 h-9 rounded-lg bg-[#d4af37]/10 flex items-center justify-center mb-3">
                  <Users2 className="w-5 h-5 text-[#d4af37]" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">Versatile Spaces</h4>
                <p className="text-xs text-[#94a3b8]">From intimate ceremonies to grand gala receptions.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlight Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-8 bg-gradient-to-b from-[#131926] to-[#0c1017] border border-[#d4af37]/30 shadow-2xl gold-border-glow">
              {/* Gold seal */}
              <div className="flex items-center justify-between pb-6 border-b border-[#222c3d] mb-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#c5a880]">
                    Kerala Heritage Venue
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-white mt-1">
                    Signature Highlights
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/50 bg-[#172030] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
                </div>
              </div>

              {/* Authentic Auditorium Seating Photo */}
              <div className="relative h-44 sm:h-48 w-full rounded-xl overflow-hidden mb-6 border border-[#d4af37]/25 shadow-lg group">
                <Image
                  src="/images/WhatsApp Image 2026-10-06 at 4.01.09 PM.jpeg"
                  alt="Century Convention Centre Grand Auditorium Seating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0a0d14]/85 text-[#d4af37] border border-[#d4af37]/30 backdrop-blur-sm">
                    Grand Auditorium Seating
                  </span>
                  <span className="text-[10px] text-gray-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    Authentic Hall View
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-[#cbd5e1]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-white font-medium">Grand Central Hall & Banquet:</strong> Fully air-conditioned, high ceilings, expansive stage and modern acoustic treatment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-white font-medium">Open-Air Pool Deck:</strong> Distinctive outdoor setting for evening pool parties, mehendi ceremonies and intimate dinners.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-white font-medium">Hassle-Free Logistics:</strong> Vast dedicated vehicle parking area with dedicated on-site security personnel.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                  <span>
                    <strong className="text-white font-medium">End-to-End Technology:</strong> Built-in LED video display, dynamic stage lighting, and professional sound systems.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#222c3d] flex items-center justify-between">
                <span className="text-xs text-[#94a3b8]">Ready to plan your function?</span>
                <a
                  href="#enquiry"
                  className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] hover:text-[#f3e5ab] flex items-center gap-1 transition-colors"
                >
                  Contact Management &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
