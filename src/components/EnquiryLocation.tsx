"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Send,
  MessageCircle,
  ExternalLink,
  CheckCircle,
  Sparkles,
  Clock,
} from "lucide-react";

const EVENT_OPTIONS = [
  "Weddings",
  "Engagements",
  "Birthday Parties",
  "Receptions",
  "Family Get Together",
  "Business Events",
  "Live Events",
  "Pool Parties",
  "Bride To Be",
  "Photoshoots",
];

interface EnquiryLocationProps {
  selectedEventType?: string;
}

export default function EnquiryLocation({ selectedEventType = "Weddings" }: EnquiryLocationProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: selectedEventType || "Weddings",
    date: "",
    guests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Sync if prop updates
  React.useEffect(() => {
    if (selectedEventType) {
      setFormData((prev) => ({ ...prev, eventType: selectedEventType }));
    }
  }, [selectedEventType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Century Convention Centre! I would like to enquire about booking the venue for:
Event: ${formData.eventType || "Event"}
Name: ${formData.name || "Guest"}
Phone: ${formData.phone || "Not specified"}
Date: ${formData.date || "To be discussed"}
Expected Guests: ${formData.guests || "Not specified"}
Message: ${formData.message || "Please provide date availability and details."}`
    );
    return `https://wa.me/919562410044?text=${text}`;
  };

  return (
    <section id="enquiry" className="py-24 bg-[#0a0d14] relative overflow-hidden border-t border-[#1c2333]">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#d4af37]/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a880]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b27] border border-[#d4af37]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-semibold tracking-wider text-[#c5a880] uppercase">
              Plan Your Celebration
            </span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-white mb-5">
            Bookings & Venue Location
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Reach out to our reservations team to check date availability, request a venue tour, or plan your celebration.
          </p>
        </div>

        {/* Dual Column Layout: Form + Location */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Booking Form (Span 7) */}
          <div className="lg:col-span-7 bg-[#0e131d]/95 border border-[#1e2738] p-6 sm:p-10 rounded-3xl shadow-2xl relative">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#1f293d]">
              <div>
                <h3 className="font-serif-luxury text-2xl font-bold text-white">
                  Event Date Enquiry
                </h3>
                <p className="text-xs text-[#94a3b8] mt-1">
                  Fill in your requirements for immediate coordinator assistance.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#c5a880] bg-[#141b29] px-3 py-1.5 rounded-lg border border-[#222c3d]">
                <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Prompt Response</span>
              </div>
            </div>

            {submitted ? (
              <div className="py-12 px-4 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto mb-5 text-[#d4af37]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-2xl font-bold text-white mb-2">
                  Enquiry Received
                </h4>
                <p className="text-sm text-[#94a3b8] max-w-md mx-auto mb-8">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>! Our venue coordinator will contact you shortly on{" "}
                  <span className="text-[#d4af37] font-medium">{formData.phone}</span>.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-gray-300 bg-[#161e2c] hover:bg-[#1d2738] transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Muhammed Rashid"
                      className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98470 XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2">
                      Event Type *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white focus:outline-none focus:border-[#d4af37] text-sm transition-colors cursor-pointer"
                    >
                      {EVENT_OPTIONS.map((type) => (
                        <option key={type} value={type} className="bg-[#141a26] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
                    />
                  </div>

                  {/* Estimated Guests */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>Estimated Guests</span>
                    </label>
                    <input
                      type="text"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="e.g. 500 - 1000 Guests"
                      className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#cbd5e1] mb-2">
                    Additional Notes / Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specific stage decor requirements, catering preferences, pool deck access, etc."
                    className="w-full px-4 py-3 rounded-xl bg-[#141a26] border border-[#232d3f] text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37] text-sm transition-colors"
                  ></textarea>
                </div>

                {/* Submit & WhatsApp buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:flex-1 py-4 px-6 rounded-xl text-sm font-semibold text-[#0a0d14] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#c5a880] hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Submitting..." : "Submit Venue Enquiry"}</span>
                  </button>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-4 px-5 rounded-xl text-sm font-semibold text-white bg-[#1f2838] hover:bg-[#273347] border border-[#2f3c52] transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Location & Contact Cards (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Info Card */}
            <div className="bg-[#0e131d]/90 border border-[#1e2738] p-6 sm:p-7 rounded-3xl shadow-xl">
              <h3 className="font-serif-luxury text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                Direct Contact Details
              </h3>

              <div className="space-y-4">
                {/* Phone 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#172030] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-medium block">
                      Phone Reservations
                    </span>
                    <a
                      href="tel:+919562410044"
                      className="text-sm font-semibold text-white hover:text-[#d4af37] transition-colors block"
                    >
                      +91 95624 10044
                    </a>
                    <a
                      href="tel:+919280100400"
                      className="text-sm font-semibold text-white hover:text-[#d4af37] transition-colors block mt-0.5"
                    >
                      +91 9280 100400
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#172030] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-medium block">
                      Official Email
                    </span>
                    <a
                      href="mailto:centuryconventioncenterccj@gmail.com"
                      className="text-sm font-semibold text-white hover:text-[#d4af37] transition-colors break-all"
                    >
                      centuryconventioncenterccj@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#172030] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-medium block">
                      Venue Address
                    </span>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      Mele Chelari, Near Calicut University, Malappuram, Kerala – 673636
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map Block */}
            <div className="bg-[#0e131d]/90 border border-[#1e2738] p-6 rounded-3xl shadow-xl overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-white">
                    Venue Location
                  </h4>
                  <p className="text-xs text-[#94a3b8]">Near Calicut University, Mele Chelari</p>
                </div>
                <a
                  href="https://maps.google.com/?q=11.114003,75.887535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0a0d14] bg-[#d4af37] hover:bg-[#e5c07b] transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map embed iframe */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-[#222c3d]">
                <iframe
                  title="Century Convention Centre Location"
                  src="https://maps.google.com/maps?q=11.114003,75.887535&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Accessibility badges */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#cbd5e1]">
                <div className="p-2.5 rounded-xl bg-[#131926] border border-white/5">
                  <span className="text-[10px] text-[#c5a880] block font-semibold uppercase">Highway Access</span>
                  <span>NH 66 Calicut Belt</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#131926] border border-white/5">
                  <span className="text-[10px] text-[#c5a880] block font-semibold uppercase">Key Landmark</span>
                  <span>Near Calicut University</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
