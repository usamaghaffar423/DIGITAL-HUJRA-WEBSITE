"use client";

import { useEffect } from "react";

export function GsapAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | undefined;
    let cleanupRefresh: (() => void) | undefined;

    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Reveal-on-scroll tweens. `clearProps` strips the inline transform/opacity
      // GSAP adds once each tween finishes, so a completed reveal never leaves a
      // residual translate that could overlap the following element.
      const reveal = { toggleActions: "play none none none" as const };

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".section-eyebrow").forEach((el) => {
          gsap.from(el, {
            x: -20, opacity: 0, duration: 0.7, ease: "power2.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: el, start: "top 86%", ...reveal },
          });
        });

        gsap.utils.toArray<HTMLElement>(".section-title").forEach((el) => {
          gsap.from(el, {
            y: 36, opacity: 0, duration: 0.9, ease: "power3.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: el, start: "top 85%", ...reveal },
          });
        });

        gsap.utils.toArray<HTMLElement>(".card-grid").forEach((grid) => {
          const cards = grid.querySelectorAll<HTMLElement>(".card");
          gsap.from(cards, {
            y: 48, opacity: 0, duration: 0.75, stagger: 0.08, ease: "power3.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: grid, start: "top 80%", ...reveal },
          });
        });

        gsap.utils.toArray<HTMLElement>(".work-item").forEach((el, i) => {
          gsap.from(el, {
            y: 40, opacity: 0, duration: 0.8, delay: i * 0.06, ease: "power3.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: el, start: "top 85%", ...reveal },
          });
        });

        const statPanel = document.querySelector<HTMLElement>(".stats-panel");
        if (statPanel) {
          gsap.from(statPanel, {
            scaleX: 0.9, opacity: 0, duration: 1, ease: "power3.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: statPanel, start: "top 82%", ...reveal },
          });
        }

        gsap.utils.toArray<HTMLElement>(".district-tag").forEach((el, i) => {
          gsap.from(el, {
            scale: 0.85, opacity: 0, duration: 0.5, delay: i * 0.03, ease: "back.out(1.4)", clearProps: "opacity,transform",
            scrollTrigger: { trigger: el, start: "top 90%", ...reveal },
          });
        });

        const testimonialCard = document.querySelector<HTMLElement>(".testimonial-card");
        if (testimonialCard) {
          gsap.from(testimonialCard, {
            y: 40, opacity: 0, duration: 1, ease: "power3.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: testimonialCard, start: "top 82%", ...reveal },
          });
        }

        const ctaHead = document.querySelector<HTMLElement>(".cta-head");
        if (ctaHead) {
          gsap.from(ctaHead, {
            y: 50, opacity: 0, duration: 1.1, ease: "power3.out", clearProps: "opacity,transform",
            scrollTrigger: { trigger: ctaHead, start: "top 82%", ...reveal },
          });
        }

        const marqueeSection = document.querySelector<HTMLElement>(".marquee-section");
        if (marqueeSection) {
          marqueeSection.addEventListener("mouseenter", () => {
            gsap.to(".marquee-strip", { scale: 1.01, duration: 0.4, ease: "power2.out" });
          });
          marqueeSection.addEventListener("mouseleave", () => {
            gsap.to(".marquee-strip", { scale: 1, duration: 0.4, ease: "power2.out" });
          });
        }
      });

      // Trigger start/end positions are measured from the layout at init time.
      // Fonts and images that finish loading afterwards shift that layout, which
      // is what made the first, uncached page load misfire (reveals landing in
      // the wrong place) while a warm refresh looked fine. Re-measure once those
      // resources settle.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      if (document.fonts?.ready) document.fonts.ready.then(refresh);
      const t = window.setTimeout(refresh, 1200);
      cleanupRefresh = () => {
        window.removeEventListener("load", refresh);
        window.clearTimeout(t);
      };
    };

    initGsap();

    return () => {
      cleanupRefresh?.();
      ctx?.revert();
    };
  }, []);

  return null;
}
