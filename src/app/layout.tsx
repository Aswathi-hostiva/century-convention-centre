import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-luxury",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://centuryconventioncentre.com"),
  icons: {
    icon: {
      url: "/images/WhatsApp Image 2026-10-06 at 7.39.57 PM.jpeg",
      type: "image/jpeg",
    },
  },
  title: "Century Convention Centre | Mele Chelari, Near Calicut University, Kerala",
  description:
    "Where Every Occasion Becomes a Celebration. Century Convention Centre, established in 2004 at Mele Chelari, Near Calicut University, Malappuram, Kerala – 673636. Premier luxury destination for Weddings, Receptions, Engagements, Business Events & Celebrations.",
  keywords: [
    "Century Convention Centre",
    "Convention Centre Calicut",
    "Auditorium Mele Chelari",
    "Marriage Hall Near Calicut University",
    "Wedding Venue Malappuram",
    "Century Auditorium Chelari",
    "Luxury Convention Centre Kerala",
    "Banquet Hall Malappuram",
    "Pool Party Venue Calicut"
  ],
  authors: [{ name: "Century Convention Centre" }],
  openGraph: {
    title: "Century Convention Centre | Where Every Occasion Becomes a Celebration",
    description:
      "Premier event venue established 2004 at Mele Chelari, Near Calicut University, Malappuram, Kerala.",
    url: "https://maps.google.com/?q=11.114003,75.887535",
    siteName: "Century Convention Centre",
    images: [
      {
        url: "/images/DJI_20260701103528_0067_D.JPG",
        width: 1200,
        height: 630,
        alt: "Century Convention Centre Aerial View",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#080a0f] text-[#f1f5f9] antialiased selection:bg-[#d4af37]/30 selection:text-[#f8fafc]">
        {children}
      </body>
    </html>
  );
}
