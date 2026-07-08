import type { Metadata } from "next";
import { GsapAnimations } from "@/components/GsapAnimations";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Coverage } from "@/components/Coverage";
import { Pricing } from "@/components/Pricing";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { ClientSections } from "@/components/ClientSections";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Digital Hujra",
      "url": "https://www.digitalhujra.com",
      "logo": "https://www.digitalhujra.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+92-371-5868088",
        "contactType": "customer service",
        "areaServed": "PK",
        "availableLanguage": ["Urdu", "English", "Pashto"],
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Popular Shopping Mall Plaza, Near Gul Rang Khadi Hall, Amandara Batkhela",
        "addressLocality": "Batkhela",
        "addressRegion": "Khyber Pakhtunkhwa",
        "postalCode": "23200",
        "addressCountry": "PK",
      },
    },
    {
      "@type": "LocalBusiness",
      "name": "Digital Hujra",
      "description": "Digital studio in Batkhela, KP — POS systems, e-commerce stores, custom software, and product photography for local businesses.",
      "url": "https://www.digitalhujra.com",
      "logo": "https://www.digitalhujra.com/logo.png",
      "image": "https://www.digitalhujra.com/cover.png",
      "telephone": "+92-371-5868088",
      "email": "info@digitalhujra.com",
      "priceRange": "$$",
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
          "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "18:00",
        },
      ],
      "areaServed": { "@type": "State", "name": "Khyber Pakhtunkhwa" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GsapAnimations />
      <Nav />
      <main id="main-content" aria-label="Digital Hujra — Batkhela, KP">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <Pricing />
        <Coverage />
        <ClientSections />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
