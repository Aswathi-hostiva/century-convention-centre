"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  caption: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/images/DJI_20260701103528_0067_D.JPG",
    title: "Scenic Swimming Pool Deck & Water Stage",
    category: "Poolside & Outdoor",
    caption:
      "Crystal-clear swimming pool with an elevated stage platform and signature Century backdrop, ideal for poolside receptions, haldi ceremonies, and twilight celebrations.",
  },
  {
    src: "/images/WhatsApp Image 2026-10-06 at 4.01.09 PM.jpeg",
    title: "Grand Main Auditorium & Tiered Seating",
    category: "Auditorium & Halls",
    caption:
      "High-capacity multi-tier auditorium featuring cushioned theatre seats, acoustic-treated panelling, and expansive sightlines for regal weddings.",
  },
  {
    src: "/images/DJI_20260701100736_0036_D.JPG",
    title: "Century Pool Grand Entrance & Landscaped Steps",
    category: "Architecture & Entrance",
    caption:
      "Stately architectural gateway and manicured lawn stairway leading up to the signature pool deck and outdoor celebration grounds.",
  },
  {
    src: "/images/DJI_20260701081514_0001_D (2).JPG",
    title: "Paved Driveway & Welcome Courtyard",
    category: "Courtyard & Facade",
    caption:
      "Spacious interlocking paved arrival driveway with contemporary facade and dedicated thematic photo niche, ensuring smooth guest arrival.",
  },
  {
    src: "/images/DJI_20260701102437_0055_D.JPG",
    title: "Overhead Bird's-Eye View of Venue Grounds",
    category: "Aerial & Landscape",
    caption:
      "Spectacular drone perspective showcasing the azure pool, solar canopy architecture, and lush tropical coconut groves surrounding Mele Chelari.",
  },
  {
    src: "/images/DJI_20260701102604_0057_D.JPG",
    title: "Open Event Courtyard & Children's Play Zone",
    category: "Courtyard & Recreation",
    caption:
      "Wide paved open-air courtyard surrounded by palm trees with dedicated slide and play equipment, ensuring safe entertainment for young guests.",
  },
  {
    src: "/images/DJI_20260701193653_0131_D.JPG",
    title: "Night Illuminations & Poolside Glow",
    category: "Twilight & Ambiance",
    caption:
      "Atmospheric evening capture displaying radiant underwater pool illumination, warm architectural pathway lighting, and enchanting night gala vibes.",
  },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! === 0 ? GALLERY_IMAGES.length - 1 : prev! - 1));
  }, [selectedIdx]);

  const handleNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev! === GALLERY_IMAGES.length - 1 ? 0 : prev! + 1));
  }, [selectedIdx]);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, handlePrev, handleNext]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIdx]);

  return (
    <section id="gallery" className="py-24 bg-[#080a0f] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b27] border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase">
              Real Venue Showcase
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-5">
            Premium Image Gallery
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Experience the grandeur of Century Convention Centre. Browse authentic captures of our
            architecture, auditorium, pool deck, courtyards, and celebration spaces.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#c5a880] bg-[#121722] px-3.5 py-1.5 rounded-full border border-white/5">
            <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>7 Authentic On-Site Photographs</span>
          </div>
        </div>

        {/* Gallery Grid - 7 Items arranged in cohesive 12-col hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Row 1: Featured 1 (Span 7) - Pool Deck */}
          <div
            onClick={() => handleOpen(0)}
            className="md:col-span-7 group relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-3 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-2">
                  {GALLERY_IMAGES[0].category}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white mb-1">
                  {GALLERY_IMAGES[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-lg line-clamp-2">
                  {GALLERY_IMAGES[0].caption}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-4 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 1: Featured 2 (Span 5) - Main Auditorium */}
          <div
            onClick={() => handleOpen(1)}
            className="md:col-span-5 group relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[1].src}
              alt={GALLERY_IMAGES[1].title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-3 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-2">
                  {GALLERY_IMAGES[1].category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
                  {GALLERY_IMAGES[1].title}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-2">
                  {GALLERY_IMAGES[1].caption}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-4 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Row 2: Trio (Span 4 each) - Pool Entrance, Driveway, Bird's-Eye */}
          <div
            onClick={() => handleOpen(2)}
            className="md:col-span-4 group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[2].src}
              alt={GALLERY_IMAGES[2].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-2.5 py-0.5 rounded-full border border-[#d4af37]/30 inline-block mb-1.5">
                  {GALLERY_IMAGES[2].category}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-white mb-0.5">
                  {GALLERY_IMAGES[2].title}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-1">
                  {GALLERY_IMAGES[2].caption}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-2">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div
            onClick={() => handleOpen(3)}
            className="md:col-span-4 group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[3].src}
              alt={GALLERY_IMAGES[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-2.5 py-0.5 rounded-full border border-[#d4af37]/30 inline-block mb-1.5">
                  {GALLERY_IMAGES[3].category}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-white mb-0.5">
                  {GALLERY_IMAGES[3].title}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-1">
                  {GALLERY_IMAGES[3].caption}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-2">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div
            onClick={() => handleOpen(4)}
            className="md:col-span-4 group relative h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[4].src}
              alt={GALLERY_IMAGES[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-2.5 py-0.5 rounded-full border border-[#d4af37]/30 inline-block mb-1.5">
                  {GALLERY_IMAGES[4].category}
                </span>
                <h3 className="font-serif-luxury text-lg font-bold text-white mb-0.5">
                  {GALLERY_IMAGES[4].title}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-1">
                  {GALLERY_IMAGES[4].caption}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-2">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Row 3: Duo (Span 6 each) - Courtyard/Play Area & Night Glow */}
          <div
            onClick={() => handleOpen(5)}
            className="md:col-span-6 group relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[5].src}
              alt={GALLERY_IMAGES[5].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-3 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-2">
                  {GALLERY_IMAGES[5].category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
                  {GALLERY_IMAGES[5].title}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-2">
                  {GALLERY_IMAGES[5].caption}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-3 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          <div
            onClick={() => handleOpen(6)}
            className="md:col-span-6 group relative h-[300px] sm:h-[360px] rounded-2xl overflow-hidden cursor-pointer border border-[#1e2738] hover:border-[#d4af37]/60 transition-all duration-300 shadow-xl"
          >
            <Image
              src={GALLERY_IMAGES[6].src}
              alt={GALLERY_IMAGES[6].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#d4af37] bg-[#0d121c]/90 px-3 py-1 rounded-full border border-[#d4af37]/30 inline-block mb-2">
                  {GALLERY_IMAGES[6].category}
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white mb-1">
                  {GALLERY_IMAGES[6].title}
                </h3>
                <p className="text-xs text-[#cbd5e1] line-clamp-2">
                  {GALLERY_IMAGES[6].caption}
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#0a0d14]/80 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] shrink-0 ml-3 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-[#121722] border border-[#2a3447] text-gray-300 hover:text-white hover:border-[#d4af37] transition-all focus:outline-none"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#121722]/80 border border-[#2a3447] text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#121722]/80 border border-[#2a3447] text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37] transition-all focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Image Container */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <Image
                src={GALLERY_IMAGES[selectedIdx].src}
                alt={GALLERY_IMAGES[selectedIdx].title}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Captions and Info */}
            <div className="w-full mt-4 text-center px-4">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  {GALLERY_IMAGES[selectedIdx].category}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-xs text-[#94a3b8]">
                  Image {selectedIdx + 1} of {GALLERY_IMAGES.length}
                </span>
              </div>
              <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                {GALLERY_IMAGES[selectedIdx].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd5e1] max-w-2xl mx-auto mt-1">
                {GALLERY_IMAGES[selectedIdx].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
