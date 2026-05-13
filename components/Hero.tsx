"use client";

import { useEffect, useRef } from "react";
import { MountainRange } from "@/components/atoms/MountainRange";
import { HujraFortress } from "@/components/atoms/HujraFortress";
import { NetworkField } from "@/components/atoms/NetworkField";
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

          {/* RIGHT — Digital Hujra network infographic */}
          <div className="hero-chart hero-chart-panel" aria-hidden="true" style={{ position: "relative", paddingTop: 40 }}>
            <div style={{
              position: "relative",
              border: "1px solid var(--line-2)", borderRadius: 20,
              background: "linear-gradient(180deg, rgba(10,22,40,0.7), rgba(5,11,23,0.95))",
              backdropFilter: "blur(8px)",
              overflow: "hidden",
              height: 420,
            }}>
              {/* Live network canvas fills the card */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.85 }}>
                <NetworkField count={28} />
              </div>

              {/* Central hub — Digital Hujra brand node */}
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                gap: 12, pointerEvents: "none",
              }}>
                <div style={{
                  padding: "14px 28px",
                  borderRadius: 16,
                  background: "rgba(10,22,40,0.92)",
                  border: "2px solid var(--amber)",
                  boxShadow: "0 0 40px rgba(245,163,58,0.35), inset 0 0 20px rgba(245,163,58,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  animation: "pulseGlow 3s ease-in-out infinite",
                }}>
                  <img src="/logo.png" alt="" style={{ height: 52, width: "auto", display: "block", maxWidth: 160 }} />
                </div>
                <div style={{
                  background: "rgba(10,22,40,0.88)",
                  border: "1px solid var(--line-2)",
                  borderRadius: 8, padding: "4px 14px",
                }}>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--amber)" }}>DIGITAL HUJRA · KP</span>
                </div>
              </div>

              {/* Service pills — float around the hub */}
              {[
                { label: "Branding",     color: "var(--amber)",  top: "12%",  left: "8%"  },
                { label: "Photography",  color: "var(--blue-2)", top: "10%",  right: "8%" },
                { label: "Social Media", color: "var(--blue-2)", bottom: "22%", left: "6%" },
                { label: "POS Systems",  color: "var(--amber)",  bottom: "18%", right: "6%" },
                { label: "E-commerce",   color: "var(--blue-2)", top: "44%",  left: "4%"  },
                { label: "Video",        color: "var(--amber)",  top: "44%",  right: "4%" },
              ].map((pill, i) => (
                <div
                  key={pill.label}
                  style={{
                    position: "absolute",
                    top: pill.top, bottom: pill.bottom,
                    left: pill.left, right: pill.right,
                    padding: "6px 12px",
                    background: "rgba(10,22,40,0.88)",
                    border: `1px solid ${pill.color}55`,
                    borderRadius: 999,
                    animation: `float-y ${5 + i * 0.6}s ease-in-out ${i * 0.4}s infinite`,
                    pointerEvents: "none",
                  }}
                >
                  <span className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: pill.color, whiteSpace: "nowrap" }}>
                    {pill.label.toUpperCase()}
                  </span>
                </div>
              ))}

              {/* Stats strip at bottom */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
                borderTop: "1px solid var(--line)",
                background: "rgba(5,11,23,0.88)",
                backdropFilter: "blur(8px)",
              }}>
                {[
                  { v: "6+",   l: "Services"   },
                  { v: "5+",   l: "Cities"     },
                  { v: "48h",  l: "Delivery"   },
                  { v: "100%", l: "Satisfaction"},
                ].map((s, i) => (
                  <div key={s.l} style={{
                    padding: "14px 10px", textAlign: "center",
                    borderRight: i < 3 ? "1px solid var(--line)" : "none",
                  }}>
                    <div className="display" style={{ fontSize: 20, fontWeight: 800, color: i % 2 === 0 ? "var(--amber)" : "var(--blue-2)", lineHeight: 1 }}>{s.v}</div>
                    <div className="mono" style={{ fontSize: 8, letterSpacing: "0.12em", color: "var(--ink-mute)", marginTop: 4 }}>{s.l.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
