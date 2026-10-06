"use client";

import React, { useState } from "react";
import {
  Building2,
  Home,
  UtensilsCrossed,
  Waves,
  Trees,
  Baby,
  Tv,
  Car,
  Wind,
  Volume2,
  Cake,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";

interface FacilityItem {
  id: string;
  name: string;
  category: "halls" | "outdoor" | "amenities";
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "main-hall",
    name: "Main Hall",
    category: "halls",
    badge: "Grand Scale",
    description:
      "Expansive, column-free auditorium with high ceilings, grand celebration stage, and opulent decor capabilities to host massive guest gatherings.",
    icon: Building2,
  },
  {
    id: "mini-hall",
    name: "Mini Hall",
    category: "halls",
    badge: "Intimate Setup",
    description:
      "A sophisticated and cozy space designed specifically for intimate engagements, family functions, prayer gatherings, and closed meetings.",
    icon: Home,
  },
  {
    id: "banquet-hall",
    name: "Banquet Hall",
    category: "halls",
    badge: "Fine Dining",
    description:
      "Comfortably arranged banquet hall facilitating smooth buffet and traditional banquet service with seamless kitchen and catering access.",
    icon: UtensilsCrossed,
  },
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    category: "outdoor",
    badge: "Scenic Deck",
    description:
      "Crystal-clear outdoor swimming pool surrounded by paved decking, providing a stunning scenic backdrop for poolside celebrations and twilight functions.",
    icon: Waves,
  },
  {
    id: "dining-area",
    name: "Dining Area",
    category: "halls",
    badge: "Spacious Seating",
    description:
      "Dedicated, hygienically maintained dining hall engineered for large-scale meal hosting, guest comfort, and efficient buffet traffic flow.",
    icon: UtensilsCrossed,
  },
  {
    id: "open-event-area",
    name: "Open Event Area",
    category: "outdoor",
    badge: "Open-Air Lawn",
    description:
      "Fresh open-air grounds under Kerala's evening sky, perfect for outdoor food stalls, open buffet setups, canopies, and reception lounge areas.",
    icon: Trees,
  },
  {
    id: "kids-play-area",
    name: "Kids Play Area",
    category: "outdoor",
    badge: "Family Friendly",
    description:
      "Dedicated, secure recreation zone for young children to play safely while families enjoy the ceremonies without worry.",
    icon: Baby,
  },
  {
    id: "led-screen",
    name: "LED Screen",
    category: "amenities",
    badge: "High-Definition Visuals",
    description:
      "Large-format high-resolution LED backdrop screens for live stage telecast, wedding videos, presentations, and dynamic graphics.",
    icon: Tv,
  },
  {
    id: "parking",
    name: "Parking",
    category: "amenities",
    badge: "Ample Capacity",
    description:
      "Spacious dedicated on-site parking lot accommodating numerous cars and buses, ensuring smooth arrival and departure for all attendees.",
    icon: Car,
  },
  {
    id: "ac",
    name: "AC",
    category: "amenities",
    badge: "Full Climate Control",
    description:
      "Powerful, state-of-the-art central air conditioning throughout the indoor halls, keeping guests cool and relaxed in every season.",
    icon: Wind,
  },
  {
    id: "sound-lighting",
    name: "Sound & Lighting",
    category: "amenities",
    badge: "Acoustic & Ambient",
    description:
      "Integrated professional audio systems, wireless microphones, acoustic optimization, and programmable stage lighting fixtures.",
    icon: Volume2,
  },
  {
    id: "cake-cutting-area",
    name: "Cake Cutting Area",
    category: "halls",
    badge: "Celebration Zone",
    description:
      "Specially designated celebration niche with thematic backdrop support, ideal for ceremonial cake cutting, toast moments, and photographs.",
    icon: Cake,
  },
  {
    id: "security",
    name: "Security",
    category: "amenities",
    badge: "24/7 Monitored",
    description:
      "Round-the-clock trained security personnel, parking wardens, and surveillance coverage ensuring guest safety and peaceful proceedings.",
    icon: ShieldCheck,
  },
];

export default function Facilities() {
  const [activeFilter, setActiveFilter] = useState<"all" | "halls" | "outdoor" | "amenities">("all");

  const filteredFacilities =
    activeFilter === "all"
      ? FACILITIES_DATA
      : FACILITIES_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="facilities" className="py-24 bg-[#0a0d14] relative overflow-hidden border-t border-[#1c2333]">
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b27] border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase">
              World-Class Amenities
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-5">
            Venue & Facilities
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Thoughtfully planned infrastructure built to ensure maximum comfort, elegance, and seamless hospitality for you and your guests.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-[#0a0d14] font-semibold shadow-md shadow-[#d4af37]/20"
                : "bg-[#121722] text-[#94a3b8] hover:text-white border border-[#222c3d]"
            }`}
          >
            All Facilities (13)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("halls")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeFilter === "halls"
                ? "bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-[#0a0d14] font-semibold shadow-md shadow-[#d4af37]/20"
                : "bg-[#121722] text-[#94a3b8] hover:text-white border border-[#222c3d]"
            }`}
          >
            Halls & Dining
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("outdoor")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeFilter === "outdoor"
                ? "bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-[#0a0d14] font-semibold shadow-md shadow-[#d4af37]/20"
                : "bg-[#121722] text-[#94a3b8] hover:text-white border border-[#222c3d]"
            }`}
          >
            Outdoor & Pool
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("amenities")}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeFilter === "amenities"
                ? "bg-gradient-to-r from-[#d4af37] to-[#c5a880] text-[#0a0d14] font-semibold shadow-md shadow-[#d4af37]/20"
                : "bg-[#121722] text-[#94a3b8] hover:text-white border border-[#222c3d]"
            }`}
          >
            Comfort & Technology
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredFacilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div
                key={facility.id}
                className="group p-6 rounded-2xl bg-[#0e131d]/90 hover:bg-[#141b29] border border-[#1e2738] hover:border-[#d4af37]/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#172030] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#161e2b] text-[#c5a880] border border-white/5">
                      {facility.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-2">
                    {facility.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] leading-relaxed transition-colors">
                    {facility.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#121722] via-[#161e2d] to-[#121722] border border-[#d4af37]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-white">
                Comprehensive Turnkey Venue Infrastructure
              </h4>
              <p className="text-xs sm:text-sm text-[#94a3b8] mt-0.5">
                All 13 facilities are maintained and managed on-site for seamless function execution.
              </p>
            </div>
          </div>
          <a
            href="#enquiry"
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#0a0d14] bg-gradient-to-r from-[#d4af37] to-[#c5a880] hover:brightness-110 transition-all shadow-md"
          >
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
