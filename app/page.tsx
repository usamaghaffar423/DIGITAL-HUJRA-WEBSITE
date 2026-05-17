"use client";

import { useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { Coverage } from "@/components/Coverage";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Section head reveals
      document.querySelectorAll<HTMLElement>(".section-eyebrow").forEach((el) => {
        gsap.from(el, {
          x: -20, opacity: 0, duration: 0.7, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 86%", toggleActions: "play none none none" },
        });
      });

      document.querySelectorAll<HTMLElement>(".section-title").forEach((el) => {
        gsap.from(el, {
          y: 36, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      // Card grid stagger
      document.querySelectorAll<HTMLElement>(".card-grid").forEach((grid) => {
        const cards = grid.querySelectorAll<HTMLElement>(".card");
        gsap.from(cards, {
          y: 48, opacity: 0, duration: 0.75, stagger: 0.08, ease: "power3.out",
          scrollTrigger: { trigger: grid, start: "top 80%", toggleActions: "play none none none" },
        });
      });

      // Work items
      document.querySelectorAll<HTMLElement>(".work-item").forEach((el, i) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.8, delay: i * 0.06, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      // Stats panel
      const statPanel = document.querySelector(".stats-panel");
      if (statPanel) {
        gsap.from(statPanel, {
          scaleX: 0.9, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: statPanel, start: "top 82%", toggleActions: "play none none none" },
        });
      }

      // District tags stagger
      document.querySelectorAll<HTMLElement>(".district-tag").forEach((el, i) => {
        gsap.from(el, {
          scale: 0.85, opacity: 0, duration: 0.5, delay: i * 0.03, ease: "back.out(1.4)",
          scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
        });
      });

      // Testimonial card
      const testimonialCard = document.querySelector(".testimonial-card");
      if (testimonialCard) {
        gsap.from(testimonialCard, {
          y: 40, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: testimonialCard, start: "top 82%", toggleActions: "play none none none" },
        });
      }

      // CTA banner text
      const ctaHead = document.querySelector(".cta-head");
      if (ctaHead) {
        gsap.from(ctaHead, {
          y: 50, opacity: 0, duration: 1.1, ease: "power3.out",
          scrollTrigger: { trigger: ctaHead, start: "top 82%", toggleActions: "play none none none" },
        });
      }

      // Marquee scale on hover
      const marqueeSection = document.querySelector(".marquee-section");
      if (marqueeSection) {
        (marqueeSection as HTMLElement).addEventListener("mouseenter", () => {
          gsap.to(".marquee-strip", { scale: 1.01, duration: 0.4, ease: "power2.out" });
        });
        (marqueeSection as HTMLElement).addEventListener("mouseleave", () => {
          gsap.to(".marquee-strip", { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    };

    // Only run animations when motion is allowed
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      initGsap();
    }
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Digital Hujra — Batkhela, KP">
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Work />
        <Pricing />
        <Coverage />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
