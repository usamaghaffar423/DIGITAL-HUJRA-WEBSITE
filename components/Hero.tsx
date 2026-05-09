"use client";

import { useEffect, useRef } from "react";
import { MountainRange } from "@/components/atoms/MountainRange";
import { HujraFortress } from "@/components/atoms/HujraFortress";
import { NetworkField } from "@/components/atoms/NetworkField";
import { GrowthArrow } from "@/components/atoms/GrowthArrow";
import { Arrow } from "@/components/atoms";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const init = async () => {
      const { gsap } = await import("gsap");
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" })
        // h1 animates transform only — opacity stays 1 so LCP registers immediately
        .from(".hero-h1", { y: 40, duration: 1, ease: "power3.out" }, "-=0.4")
        .from(".hero-desc", { y: 24, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .from(".hero-ctas", { y: 20, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .from(".hero-chips", { y: 16, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .from(".hero-chart", { x: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8");
    };
    init();
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      aria-label="Hero — Digital Hujra KP digital studio"
      style={{
        position: "relative",
        minHeight: "100vh",
        paddingTop: "calc(118px + 2vh)",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
      }}
    >
      {/* Decorative glows */}
      <div aria-hidden="true" style={{
        position: "absolute", right: "-12vw", top: "-10vw",
        width: "60vw", height: "60vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(245,163,58,0.26) 0%, rgba(245,163,58,0.08) 35%, rgba(245,163,58,0) 65%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", left: "-10vw", bottom: "10vh",
        width: "44vw", height: "44vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(42,157,244,0.22) 0%, rgba(42,157,244,0.05) 40%, rgba(42,157,244,0) 70%)",
        pointerEvents: "none",
      }} />
      {/* Decorative grid */}
      <div aria-hidden="true" className="grid-bg" style={{
        position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none",
        maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
      }} />
      {/* Animated network — decorative */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, opacity: 0.55 }}>
        <NetworkField count={38} />
      </div>
      {/* Decorative mountains */}
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "44vh", maxHeight: 480, pointerEvents: "none" }}>
        <MountainRange height="100%" />
      </div>
      {/* Decorative fortress */}
      <div aria-hidden="true" className="animate-float-y" style={{ position: "absolute", right: "6vw", bottom: "20vh", opacity: 0.55, pointerEvents: "none" }}>
        <HujraFortress width={240} />
      </div>

      <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
        {/* Title + chart */}
        <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 60, alignItems: "start" }}>
          {/* LEFT */}
          <div>
            <div className="hero-eyebrow" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "8px 14px", border: "1px solid rgba(42,157,244,0.4)",
              borderRadius: 999, background: "rgba(42,157,244,0.08)", marginBottom: 28,
            }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue-2)", animation: "pulse 2s ease-in-out infinite" }} />
              <span style={{ fontSize: 12, color: "var(--blue-soft)", fontWeight: 500, letterSpacing: "0.04em" }}>
                Bringing KP business to the digital world
              </span>
            </div>

            <h1 className="display hero-h1" style={{
              fontSize: "clamp(56px, 9.5vw, 156px)", lineHeight: 0.92,
              margin: "0 0 28px", letterSpacing: "-0.035em",
            }}>
              <span style={{ color: "var(--blue-2)" }}>Digital</span>
              <span style={{ color: "var(--amber)" }}>Hujra</span>
              <span style={{
                display: "block", fontSize: "0.32em",
                fontFamily: "var(--font-newsreader), serif", fontStyle: "italic", fontWeight: 400,
                color: "var(--ink-soft)", marginTop: 18, letterSpacing: "-0.01em",
              }}>
                where mountains meet the modern web.
              </span>
            </h1>

            <p className="hero-desc" style={{
              maxWidth: 560, fontSize: 19, lineHeight: 1.55,
              color: "var(--ink-soft)", margin: "0 0 36px",
            }}>
              We help local KP businesses get online, look professional, and{" "}
              <span style={{ color: "var(--amber)", fontWeight: 600 }}>grow</span>.
              POS, e-commerce, branding, social, shoots, edits — under one warm roof in Batkhela.
            </p>

            <div className="hero-ctas" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
              <a href="#contact" className="btn btn-primary">Book a free hujra session <Arrow /></a>
              <a href="#services" className="btn btn-ghost">See what we do</a>
            </div>

            {/* Pill chips */}
            <div className="hero-chips" style={{
              display: "inline-flex", alignItems: "center",
              padding: "10px 8px", border: "1px solid var(--line-2)", borderRadius: 999,
              background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", gap: 4,
            }}>
              {[
                { i: "📍", l: "Local-first" },
                { i: "✓", l: "Honest" },
                { i: "👤", l: "Accessible" },
                { i: "↗", l: "Growth-minded" },
              ].map((c, i, arr) => (
                <span key={c.l} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "6px 14px", fontSize: 13, fontWeight: 500, color: "var(--ink)",
                  }}>
                    <span aria-hidden="true" style={{
                      width: 22, height: 22, borderRadius: "50%",
                      background: i % 2 === 0 ? "rgba(42,157,244,0.18)" : "rgba(245,163,58,0.18)",
                      color: i % 2 === 0 ? "var(--blue-2)" : "var(--amber)",
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700,
                    }}>{c.i}</span>
                    {c.l}
                  </span>
                  {i < arr.length - 1 && (
                    <span aria-hidden="true" style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--amber)", opacity: 0.7 }} />
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — growth chart panel */}
          <div className="hero-chart hero-chart-panel" style={{ position: "relative", paddingTop: 40 }}>
            <div style={{
              position: "relative", padding: "28px 28px 16px",
              border: "1px solid var(--line-2)", borderRadius: 20,
              background: "linear-gradient(180deg, rgba(42,157,244,0.06), rgba(10,22,40,0.4))",
              backdropFilter: "blur(8px)",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)" }}>LIVE · CLIENT GROWTH</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4 }}>
                    +<span style={{ color: "var(--blue-2)" }}>247%</span>
                    <span style={{ fontSize: 14, color: "var(--ink-mute)", fontWeight: 500, marginLeft: 10 }}>avg. online sales lift</span>
                  </div>
                </div>
                <div aria-hidden="true" style={{
                  fontSize: 11, padding: "4px 10px", borderRadius: 4,
                  background: "rgba(91,214,138,0.15)", color: "#5BD68A",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5BD68A", animation: "pulse 1.6s ease-in-out infinite" }} />
                  TRENDING
                </div>
              </div>
              <div role="img" aria-label="Growth arrow chart showing 247% average online sales lift">
                <GrowthArrow width="100%" />
              </div>

              {/* Floating stat cards — decorative */}
              <div aria-hidden="true" style={{
                position: "absolute", left: -32, top: -28,
                padding: "12px 16px", background: "rgba(10,22,40,0.92)",
                border: "1px solid rgba(245,163,58,0.4)", borderRadius: 12,
                animation: "float-y 5s ease-in-out infinite",
                boxShadow: "0 12px 40px -10px rgba(245,163,58,0.3)",
              }}>
                <div className="mono" style={{ fontSize: 9, letterSpacing: "0.15em", color: "var(--ink-mute)" }}>KHAN PHARMACY</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--amber)", marginTop: 2 }}>↗ ₨ 1.2M / mo</div>
              </div>
              <div aria-hidden="true" style={{
                position: "absolute", right: -20, bottom: 32,
                padding: "12px 16px", background: "rgba(10,22,40,0.92)",
                border: "1px solid rgba(42,157,244,0.4)", borderRadius: 12,
                animation: "float-y 6s ease-in-out 1s infinite",
                boxShadow: "0 12px 40px -10px rgba(42,157,244,0.3)",
              }}>
                <div className="mono" style={{ fontSize: 9, letterSpacing: "0.15em", color: "var(--ink-mute)" }}>MALAKAND MART</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--blue-2)", marginTop: 2 }}>342 orders / wk</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue — decorative */}
        <div aria-hidden="true" className="hero-scroll-cue" style={{
          position: "absolute", left: 36, bottom: 28,
          display: "flex", alignItems: "center", gap: 12, color: "var(--ink-mute)",
        }}>
          <span style={{ width: 32, height: 1, background: "var(--ink-mute)" }} />
          <span className="mono" style={{ fontSize: 10, letterSpacing: "0.2em" }}>SCROLL TO EXPLORE</span>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ animation: "float-y 1.8s ease-in-out infinite" }}>
            <path d="M7 2v9M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
