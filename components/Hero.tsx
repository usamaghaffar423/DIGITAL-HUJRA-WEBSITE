"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/work/classyfitters/Hero%20Section.webp",             label: "E-Commerce Website"  },
  { src: "/services/pos/pos%20System%20Service.webp",           label: "POS System"          },
  { src: "/work/al-ansar-abaya/Website.webp",                   label: "Client Website"      },
  { src: "/services/custom-softwares/Custom%20Softwares.webp",  label: "Custom Software"     },
  { src: "/services/ecommerce/E-Commerce%20Service.webp",       label: "E-Commerce Store"    },
];

const AVATARS = [
  { i: "R", bg: "#F6A33B", name: "Raazina Essence" },
  { i: "C", bg: "#50B2FB", name: "Classyfitters"   },
  { i: "A", bg: "#5BD68A", name: "Al Ansar Abaya"  },
];

export function Hero() {
  const [active, setActive]   = useState(0);
  const [hovering, setHovering] = useState(false);

  /* ── GSAP entrance ── */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const init = async () => {
      const { gsap } = await import("gsap");
      gsap.timeline({ delay: 0.1 })
        .from(".hero-eyebrow",  { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" })
        .from(".hero-h1",       { y: 40,             duration: 1,   ease: "power3.out" }, "-=0.4")
        .from(".hero-desc",     { y: 24, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .from(".hero-ctas",     { y: 20, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .from(".hero-chips",    { y: 16, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .from(".hero-showcase", { y: 40, opacity: 0, duration: 1,   ease: "power2.out" }, "-=0.3");
    };
    init();
  }, []);

  /* ── Auto-slide (pauses on hover) ── */
  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => setActive(p => (p + 1) % SLIDES.length), 3500);
    return () => clearInterval(id);
  }, [hovering]);

  return (
    <section
      id="top"
      aria-label="Hero — Digital Hujra, Batkhela KP"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "calc(var(--nav-height) + 64px)",
        paddingBottom: 140,
        background: "#0A1628",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* ── Mountain photo background ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          backgroundImage: "url('/backgrounds/background-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />
      {/* ── Dark navy overlay — 55% opacity for readability ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0,
          background: "rgba(10,22,40,0.62)",
          pointerEvents: "none",
        }}
      />
      {/* ── Bottom gradient so showcase cards blend in ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "38%",
          background: "linear-gradient(transparent, rgba(10,22,40,0.90) 70%, #0A1628 100%)",
          pointerEvents: "none",
        }}
      />
      {/* ── Ambient blue glow — top right ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "4%", right: "-6vw",
          width: "38vw", height: "38vw", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(80,178,251,0.14) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      {/* ── Amber glow — bottom center ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "28%", left: "50%", transform: "translateX(-50%)",
          width: "80vw", height: "30vw", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(246,163,59,0.10) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Main content column ── */}
      <div
        className="wrap-mobile"
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Eyebrow pill */}
        <div
          className="hero-eyebrow"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 16px", marginBottom: 24,
            border: "1px solid rgba(80,178,251,0.38)",
            borderRadius: 999,
            background: "rgba(80,178,251,0.09)",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "#50B2FB", display: "inline-block",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#50B2FB" }}>
            DIGITAL STUDIO · BATKHELA, KP
          </span>
        </div>

        {/* Headline */}
        <h1
          className="display hero-h1"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 7rem)",
            lineHeight: 1.07,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            margin: "0 0 24px",
            color: "#ffffff",
          }}
        >
          Bringing KP Business<br />
          to the{" "}
          <span style={{ color: "#50B2FB" }}>Digital</span>{" "}
          <span style={{ color: "#F6A33B" }}>World</span>
        </h1>

        {/* Subtitle */}
        <p
          className="hero-desc"
          style={{
            maxWidth: 560,
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            lineHeight: 1.65,
            color: "#E5E7EB",
            margin: "0 auto 36px",
          }}
        >
          POS systems, e-commerce, custom software, photography, WhatsApp &amp; Google —
          all under one roof in Batkhela.
        </p>

        {/* CTA buttons */}
        <div
          className="hero-ctas"
          style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 28 }}
        >
          <a
            href="/contact"
            className="btn"
            style={{
              background: "#F6A33B",
              color: "#0A1628",
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 28px",
              border: "1px solid transparent",
              boxShadow: "0 8px 28px -6px rgba(246,163,59,0.5)",
              transition: "transform .25s, box-shadow .25s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px -6px rgba(246,163,59,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px -6px rgba(246,163,59,0.5)";
            }}
          >
            Get Started
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/#work"
            className="btn"
            style={{
              background: "transparent",
              color: "#ffffff",
              borderRadius: 999,
              fontWeight: 600,
              fontSize: 15,
              padding: "14px 28px",
              border: "1px solid rgba(255,255,255,0.38)",
              transition: "border-color .25s, background .25s",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.7)";
              (e.currentTarget as HTMLElement).style.background  = "rgba(255,255,255,0.07)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.38)";
              (e.currentTarget as HTMLElement).style.background  = "transparent";
            }}
          >
            See Our Work
          </a>
        </div>

        {/* Social proof strip */}
        <div
          className="hero-chips"
          style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
        >
          {/* Stacked avatars */}
          <div style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            {AVATARS.map((a, i) => (
              <span
                key={a.i}
                title={a.name}
                style={{
                  width: 32, height: 32, borderRadius: "50%",
                  background: a.bg,
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 12, color: "#0A1628",
                  marginLeft: i > 0 ? -10 : 0,
                  border: "2px solid rgba(10,22,40,0.9)",
                  position: "relative",
                  zIndex: AVATARS.length - i,
                  flexShrink: 0,
                }}
              >
                {a.i}
              </span>
            ))}
          </div>

          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", gap: 2 }} aria-label="4.5 out of 5 stars">
            {Array.from({ length: 4 }, (_, n) => (
              <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill="#F6A33B" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <defs>
                <linearGradient id="hs-grad">
                  <stop offset="50%" stopColor="#F6A33B" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                </linearGradient>
              </defs>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#hs-grad)" />
            </svg>
          </div>

          {/* Text */}
          <span style={{ fontSize: "0.85rem", color: "#E5E7EB" }}>
            Trusted by businesses across{" "}
            <strong style={{ color: "#F6A33B", fontWeight: 600 }}>18+</strong> KP districts
          </span>
        </div>
      </div>

      {/* ── Image showcase slider ── */}
      <div
        className="hero-showcase"
        style={{
          position: "relative",
          zIndex: 3,
          marginTop: 60,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {/* Cards row */}
        <div
          style={{ position: "relative", width: "min(1100px, 100%)", height: 220 }}
        >
          {SLIDES.map((slide, i) => {
            let off = i - active;
            const half = Math.floor(SLIDES.length / 2);
            if (off > half)  off -= SLIDES.length;
            if (off < -half) off += SLIDES.length;
            const abs     = Math.abs(off);
            const visible = abs <= 2;
            return (
              <div
                key={slide.src}
                className={abs === 0 ? "hero-slide-center" : "hero-slide-side"}
                onClick={() => abs > 0 && setActive(i)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 260,
                  height: 178,
                  borderRadius: 12,
                  overflow: "hidden",
                  transform: `translate(calc(-50% + ${off * 200}px), calc(-50% + ${abs > 0 ? abs * 8 : 0}px)) rotate(${off * 6}deg) scale(${1 - abs * 0.09})`,
                  zIndex: visible ? (10 - abs) : 0,
                  opacity: !visible ? 0 : abs === 2 ? 0.55 : 1,
                  transition: "transform .5s cubic-bezier(.2,.7,.2,1), opacity .5s ease, box-shadow .3s",
                  cursor: abs > 0 ? "pointer" : "default",
                  boxShadow: abs === 0
                    ? "0 28px 70px -10px rgba(0,0,0,0.7), 0 0 0 1px rgba(80,178,251,0.28)"
                    : "0 14px 36px -8px rgba(0,0,0,0.55)",
                  background: "#1a2d46",
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.label}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "10px 12px 8px",
                  background: "linear-gradient(transparent, rgba(10,22,40,0.88))",
                }}>
                  <span className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: "#F6A33B" }}>
                    {slide.label.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Left arrow */}
          <button
            type="button"
            onClick={() => setActive(p => (p - 1 + SLIDES.length) % SLIDES.length)}
            aria-label="Previous project"
            style={{
              position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
              zIndex: 20,
              background: "rgba(10,22,40,0.78)", border: "1px solid rgba(80,178,251,0.3)",
              borderRadius: "50%", width: 40, height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", padding: 0,
              transition: "background .2s, border-color .2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background    = "rgba(80,178,251,0.2)";
              (e.currentTarget as HTMLElement).style.borderColor   = "#50B2FB";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background    = "rgba(10,22,40,0.78)";
              (e.currentTarget as HTMLElement).style.borderColor   = "rgba(80,178,251,0.3)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={() => setActive(p => (p + 1) % SLIDES.length)}
            aria-label="Next project"
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              zIndex: 20,
              background: "rgba(10,22,40,0.78)", border: "1px solid rgba(80,178,251,0.3)",
              borderRadius: "50%", width: 40, height: 40,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", padding: 0,
              transition: "background .2s, border-color .2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background    = "rgba(80,178,251,0.2)";
              (e.currentTarget as HTMLElement).style.borderColor   = "#50B2FB";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background    = "rgba(10,22,40,0.78)";
              (e.currentTarget as HTMLElement).style.borderColor   = "rgba(80,178,251,0.3)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 6, marginTop: 20, zIndex: 10, position: "relative" }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i ? "true" : undefined}
              style={{
                width: active === i ? 20 : 6, height: 6,
                borderRadius: 3, border: "none",
                background: active === i ? "#F6A33B" : "rgba(255,255,255,0.3)",
                cursor: "pointer", padding: 0,
                transition: "width .3s ease, background .3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-slide-side  { display: none !important; }
          .hero-chips       { gap: 10px !important; }
        }
      `}</style>
    </section>
  );
}
