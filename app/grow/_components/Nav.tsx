"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WA_MESSAGES } from "../_lib/content";
import { WhatsAppButton } from "./primitives";

/** Focused landing nav: logo + one WhatsApp CTA. Transparent at top, solid once scrolled. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-300"
      style={{
        height: "var(--nav-height)",
        background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg-top)",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "var(--nav-border-top)"}`,
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
      }}
    >
      <div className="g-wrap flex h-full items-center justify-between gap-4">
        <a href="#top" aria-label="Digital Hujra — back to top" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Digital Hujra"
            width={4003}
            height={943}
            priority
            sizes="180px"
            className="block h-8 w-auto sm:h-10"
          />
        </a>

        <div className="flex items-center gap-3">
          <span className="g-eyebrow hidden items-center gap-2 lg:inline-flex">
            <span className="g-dot" aria-hidden="true" />
            Replies within 48 hrs
          </span>
          <WhatsAppButton message={WA_MESSAGES.nav} size="sm">
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">WhatsApp Us Now</span>
          </WhatsAppButton>
        </div>
      </div>
    </header>
  );
}
