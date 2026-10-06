"use client";

import React from "react";
import {
  Heart,
  Gem,
  Cake,
  GlassWater,
  Users,
  Briefcase,
  Music,
  Waves,
  Crown,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface EventTypeItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const EVENT_ITEMS: EventTypeItem[] = [
  {
    id: "weddings",
    name: "Weddings",
    subtitle: "Regal Ceremonies & Grand Celebrations",
    description:
      "Transform your dream wedding into a majestic reality with our spacious air-conditioned halls, regal stage setup, and banquet seating for hundreds of beloved guests.",
    icon: Heart,
    tag: "Signature",
  },
  {
    id: "engagements",
    name: "Engagements",
    subtitle: "Intimate Ring Ceremonies & Family Gatherings",
    description:
      "A graceful setting to commemorate your new beginning, supported by ambient lighting, warm decor possibilities, and comfortable guest hospitality.",
    icon: Gem,
    tag: "Milestone",
  },
  {
    id: "receptions",
    name: "Receptions",
    subtitle: "Grand Evenings & Lavish Banquets",
    description:
      "Host magnificent reception dinners featuring spectacular stage illumination, state-of-the-art sound, and dedicated banquet dining spaces.",
    icon: GlassWater,
    tag: "Celebration",
  },
  {
    id: "birthday-parties",
    name: "Birthday Parties",
    subtitle: "Joyous Milestones for All Ages",
    description:
      "From 1st birthday galas to golden jubilees, our versatile spaces, cake cutting zones, and kids play area guarantee delightful celebrations.",
    icon: Cake,
    tag: "Family",
  },
  {
    id: "family-get-together",
    name: "Family Get Together",
    subtitle: "Reunions & Warm Community Bonding",
    description:
      "Reconnect with loved ones in an airy, welcoming environment equipped with indoor dining, outdoor lawn spaces, and seamless parking.",
    icon: Users,
    tag: "Gathering",
  },
  {
    id: "business-events",
    name: "Business Events",
    subtitle: "Conferences, Seminars & Corporate Meets",
    description:
      "Professional setups featuring high-definition LED screens, podiums, crisp acoustic audio, and dedicated dining arrangements for business delegates.",
    icon: Briefcase,
    tag: "Corporate",
  },
  {
    id: "live-events",
    name: "Live Events",
    subtitle: "Concerts, Cultural Shows & Public Gatherings",
    description:
      "A grand stage equipped with high-grade audio and dynamic lighting, accommodating lively audiences comfortably with proper acoustics and security.",
    icon: Music,
    tag: "Entertainment",
  },
  {
    id: "pool-parties",
    name: "Pool Parties",
    subtitle: "Refreshing Open-Air & Twilight Bashes",
    description:
      "Our scenic swimming pool area offers a refreshing atmosphere for evening soirees, cocktail dinners, haldi functions, and lively get-togethers.",
    icon: Waves,
    tag: "Outdoor",
  },
  {
    id: "bride-to-be",
    name: "Bride To Be",
    subtitle: "Bachelorette & Haldi/Mehendi Specials",
    description:
      "Create unforgettable moments with your closest circle in our private banquet hall or open lawn decorated for picturesque pre-wedding memories.",
    icon: Crown,
    tag: "Special",
  },
  {
    id: "photoshoots",
    name: "Photoshoots",
    subtitle: "Pre-Wedding, Fashion & Portfolio Shoots",
    description:
      "Architectural backdrops, serene poolside aesthetics, manicured greenery, and spacious interiors provide pristine settings for photographers.",
    icon: Camera,
    tag: "Creative",
  },
];

interface EventTypesProps {
  onSelectEvent?: (eventName: string) => void;
}

export default function EventTypes({ onSelectEvent }: EventTypesProps) {
  const handleEnquireEvent = (eventName: string) => {
    if (onSelectEvent) {
      onSelectEvent(eventName);
    }
    const enquirySection = document.getElementById("enquiry");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="events" className="py-24 bg-[#080a0f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4af37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b27] border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase">
              Events We Host
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-5">
            Tailored For Every Memorable Occasion
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            From regal traditional weddings to modern poolside parties and executive conventions,
            Century Convention Centre offers the ideal venue settings for all your celebrated moments.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_ITEMS.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#0e131d]/90 hover:bg-[#141b29] border border-[#1e2738] hover:border-[#d4af37]/50 p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#d4af37]/10"
              >
                <div>
                  {/* Top Bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1b2230] to-[#0a0d14] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:border-[#d4af37] transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#18202d] text-[#c5a880] border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#f3e5ab] transition-colors mb-1">
                    {item.name}
                  </h3>
                  <h4 className="text-xs font-medium text-[#c5a880] mb-3">
                    {item.subtitle}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#94a3b8] group-hover:text-[#cbd5e1] transition-colors leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Enquire Button */}
                <div className="pt-4 border-t border-[#1a2233]">
                  <button
                    type="button"
                    onClick={() => handleEnquireEvent(item.name)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-gray-300 group-hover:text-[#d4af37] py-2 transition-colors focus:outline-none"
                  >
                    <span>Enquire for {item.name}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0e131d]/80 border border-[#222c3d]">
          <p className="text-sm text-[#cbd5e1]">
            Planning a custom event format or multi-day occasion?{" "}
            <a
              href="#enquiry"
              className="text-[#d4af37] hover:text-[#f3e5ab] font-medium underline underline-offset-4 ml-1"
            >
              Speak directly with our event coordinators
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
