"use client";

import { useEffect } from "react";

export function useGsapReveal() {
  useEffect(() => {
    // Dynamic import of GSAP to avoid SSR issues
    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      // Animate all section heads
      gsap.utils.toArray<HTMLElement>(".section-head").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Stagger cards
      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: (i % 4) * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      // Parallax on mountains
      gsap.utils.toArray<HTMLElement>(".gsap-parallax").forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    };

    initGsap();

    return () => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);
}
