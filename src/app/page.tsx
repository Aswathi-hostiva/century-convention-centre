import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import EventTypes from "@/components/EventTypes";
import Facilities from "@/components/Facilities";
import Gallery from "@/components/Gallery";
import EnquiryLocation from "@/components/EnquiryLocation";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#080a0f] text-[#f1f5f9] flex flex-col selection:bg-[#d4af37]/30 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Single-Page Content */}
      <main className="flex-grow">
        {/* Section 1: Premium Hero */}
        <Hero />

        {/* Section 2: Short Introduction */}
        <Introduction />

        {/* Section 3: Event Types */}
        <EventTypes />

        {/* Section 4: Venue & Facilities */}
        <Facilities />

        {/* Section 5: Premium Image Gallery */}
        <Gallery />

        {/* Section 6: Location / Enquiry CTA */}
        <EnquiryLocation />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Floating Call & WhatsApp conversion buttons */}
      <FloatingActions />
    </div>
  );
}
