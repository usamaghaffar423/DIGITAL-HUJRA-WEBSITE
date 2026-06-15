import type { Metadata, Viewport } from "next";
import "./globals.css";
import { manrope, newsreader, jetbrainsMono } from "./fonts";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalhujra.com"),
  title: {
    default: "Digital Hujra — Bringing KP Business to the Digital World",
    template: "%s — Digital Hujra",
  },
  description:
    "Digital Hujra, based in Batkhela, Malakand — helping local KP businesses with POS systems, e-commerce stores, custom software, and product photography.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Hujra — KP Digital Agency",
    description:
      "Digital Hujra in Batkhela, KP. POS systems, e-commerce stores, custom software, and product photography — all under one roof.",
    type: "website",
    url: "https://digitalhujra.com",
    locale: "en_PK",
    siteName: "Digital Hujra",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Digital Hujra — KP Digital Agency, Batkhela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Hujra — KP Digital Agency",
    description:
      "POS systems, e-commerce, custom software, photography — all under one roof in Batkhela, Malakand.",
    images: ["/cover.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Digital Hujra",
  "description": "Digital studio in Batkhela, KP — POS systems, e-commerce stores, custom software, and product photography for local businesses.",
  "url": "https://digitalhujra.com",
  "logo": "https://digitalhujra.com/logo.png",
  "image": "https://digitalhujra.com/cover.png",
  "telephone": "+92-371-5868088",
  "email": "info@digitalhujra.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Popular Shopping Mall Plaza, Near Gul Rang Khadi Hall, Amandara Batkhela",
    "addressLocality": "Batkhela",
    "addressRegion": "Khyber Pakhtunkhwa",
    "postalCode": "23200",
    "addressCountry": "PK",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00",
    },
  ],
  "areaServed": {
    "@type": "State",
    "name": "Khyber Pakhtunkhwa",
  },
  "priceRange": "$$",
  "sameAs": [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
