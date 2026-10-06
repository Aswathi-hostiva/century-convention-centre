import React from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05070a] text-gray-300 border-t border-[#1e2536] relative overflow-hidden">
      {/* Decorative top gold micro line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Century Convention Centre Contact Details (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Brand Logo & Name */}
            <div className="flex items-center gap-3.5">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1c2230] via-[#0d111a] to-[#05070a] border border-[#d4af37]/50 shadow-md">
                <svg
                  className="w-8 h-8 text-[#d4af37]"
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
                    stroke="#D4AF37"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="20,15 21.5,18.5 25,19 22.5,21.5 23,25 20,23 17,25 17.5,21.5 15,19 18.5,18.5"
                    fill="#d4af37"
                    className="opacity-70 scale-50 origin-center"
                  />
                </svg>
              </div>

              <div>
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-white uppercase block leading-tight">
                  CENTURY CONVENTION CENTRE
                </span>
                <span className="text-xs font-medium tracking-widest text-[#c5a880] uppercase">
                  Established 2004
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-serif-luxury italic text-lg sm:text-xl text-[#f3e5ab] max-w-xl">
              “Where Every Occasion Becomes a Celebration.”
            </p>

            {/* Detailed Contact List */}
            <div className="space-y-3.5 text-sm pt-2">
              <div className="flex items-start gap-3 text-[#cbd5e1]">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                <span>Mele Chelari, Near Calicut University, Malappuram, Kerala – 673636</span>
              </div>

              <div className="flex items-center gap-3 text-[#cbd5e1]">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="tel:+919562410044"
                    className="hover:text-[#d4af37] transition-colors font-medium"
                  >
                    +91 95624 10044
                  </a>
                  <span className="text-gray-600">/</span>
                  <a
                    href="tel:+919280100400"
                    className="hover:text-[#d4af37] transition-colors font-medium"
                  >
                    +91 9280 100400
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[#cbd5e1]">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href="mailto:centuryconventioncenterccj@gmail.com"
                  className="hover:text-[#d4af37] transition-colors font-medium break-all"
                >
                  centuryconventioncenterccj@gmail.com
                </a>
              </div>
            </div>


          </div>

          {/* RIGHT: Social Connect & Navigation (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 lg:text-right">
            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-white mb-2">
                Connect With Us
              </h4>
              <p className="text-xs sm:text-sm text-[#94a3b8] mb-6 lg:ml-auto max-w-sm">
                Follow our official social media pages for recent event highlights, stage designs, and celebrations.
              </p>

              {/* Official Instagram Gradient & Facebook Blue Icons */}
              <div className="flex items-center gap-5 lg:justify-end">
                {/* Instagram Gradient Icon */}
                <a
                  href="https://www.instagram.com/centuryconventioncentre?stkn=MTd2cXBhMDQ5N3V1bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 p-3 rounded-2xl bg-[#0f1420] border border-[#232c3f] hover:border-[#d4af37]/60 transition-all duration-300 shadow-md hover:scale-105"
                  aria-label="Century Convention Centre Instagram Profile"
                >
                  {/* Original Instagram Gradient SVG */}
                  <svg
                    className="w-9 h-9 rounded-xl overflow-hidden"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient id="igGradient" cx="20%" cy="105%" r="130%">
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="5%" stopColor="#fdf497" />
                        <stop offset="45%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="90%" stopColor="#285AEB" />
                      </radialGradient>
                    </defs>
                    <rect width="24" height="24" rx="6" fill="url(#igGradient)" />
                    <rect
                      x="4.5"
                      y="4.5"
                      width="15"
                      height="15"
                      rx="4"
                      stroke="#ffffff"
                      strokeWidth="1.8"
                    />
                    <circle cx="12" cy="12" r="3.7" stroke="#ffffff" strokeWidth="1.8" />
                    <circle cx="16.5" cy="7.5" r="1.1" fill="#ffffff" />
                  </svg>
                  <div className="text-left pr-2">
                    <span className="text-[11px] font-semibold text-white group-hover:text-[#f3e5ab] block">
                      Instagram
                    </span>
                    <span className="text-[10px] text-[#94a3b8] block">
                      @centuryconventioncentre
                    </span>
                  </div>
                </a>

                {/* Facebook Official Blue Icon */}
                <a
                  href="https://www.facebook.com/share/19naxcGYGK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 p-3 rounded-2xl bg-[#0f1420] border border-[#232c3f] hover:border-[#1877F2]/60 transition-all duration-300 shadow-md hover:scale-105"
                  
                >
                  {/* Original Facebook Blue SVG */}
                  <svg
                    className="w-9 h-9 rounded-xl overflow-hidden"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="6" fill="#1877F2" />
                    <path
                      d="M15.5 13.5L16 10H12.5V8C12.5 7.03 12.83 6.2 14.33 6.2H16V3.25C15.25 3.15 14.28 3.05 13.17 3.05C10.75 3.05 9 4.53 9 7.37V10H6V13.5H9V21.5H12.5V13.5H15.5Z"
                      fill="#ffffff"
                    />
                  </svg>
                  <div className="text-left pr-2">
                    <span className="text-[11px] font-semibold text-white group-hover:text-blue-300 block">
                      Facebook
                    </span>
                    <span className="text-[10px] text-[#94a3b8] block">
                      Century Convention
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Back to top & location quick trigger */}
            <div className="flex items-center gap-4 lg:justify-end pt-4">
              <a
                href="#hero"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#c5a880] hover:text-[#f3e5ab] bg-[#121722] px-4 py-2 rounded-xl border border-[#232d3f] transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean Standalone Copyright */}
        <div className="mt-14 pt-8 border-t border-[#1a2130] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748b]">
          <p>© 2026 Century Convention Centre. All rights reserved.</p>
          <p className="text-gray-500">
            Mele Chelari, Near Calicut University, Malappuram, Kerala – 673636
          </p>
        </div>
      </div>
    </footer>
  );
}
