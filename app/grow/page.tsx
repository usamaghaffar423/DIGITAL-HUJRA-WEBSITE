/**
 * /grow — Marketing & management landing page for KP local businesses.
 *
 * Self-contained route: everything it uses lives under app/grow/ (components,
 * content, tokens). Only the root layout (fonts, WhatsApp FAB) and the public
 * images are shared with the rest of the site.
 *
 * Before launch, resolve every {{PLACEHOLDER}} listed in app/grow/README.md.
 */
import type { Metadata } from "next";
import "./grow.css";
import { Calculator } from "./_components/Calculator";
import { FAQ } from "./_components/FAQ";
import { FinalCTA } from "./_components/FinalCTA";
import { Footer } from "./_components/Footer";
import { Hero } from "./_components/Hero";
import { Nav } from "./_components/Nav";
import { PlanProvider } from "./_components/PlanProvider";
import { Problem } from "./_components/Problem";
import { ProcessSteps } from "./_components/ProcessSteps";
import { Proof } from "./_components/Proof";
import { ServicesGrid } from "./_components/ServicesGrid";
import { TrustSection } from "./_components/TrustSection";

const description =
  "TikTok, Facebook, Instagram, WhatsApp Business and Google — set up and run for your shop by a team in Batkhela. Free 30-minute session, quoted in PKR, balance paid when you're happy.";

export const metadata: Metadata = {
  title: "Get Found Online — Marketing for KP Businesses",
  description,
  alternates: { canonical: "/grow" },
  openGraph: {
    title: "Get found online. Get customers talking to you. — Digital Hujra",
    description,
    url: "/grow",
    type: "website",
    locale: "en_PK",
    siteName: "Digital Hujra",
    images: [{ url: "/cover.png", width: 1200, height: 630, alt: "Digital Hujra — Batkhela, KP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get found online — Digital Hujra",
    description,
    images: ["/cover.png"],
  },
};

export default function GrowPage() {
  return (
    <PlanProvider>
      {/* Without JS, scroll-reveal content must still be visible. */}
      <noscript>
        <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
      </noscript>
      <div className="g-page">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-(--amber) focus:px-4 focus:py-3 focus:font-bold focus:text-(--night)">
          Skip to content
        </a>
        <Nav />
        <main id="main">
          <Hero />
          <Problem />
          <ServicesGrid />
          <Calculator />
          <ProcessSteps />
          <Proof />
          <TrustSection />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </PlanProvider>
  );
}
