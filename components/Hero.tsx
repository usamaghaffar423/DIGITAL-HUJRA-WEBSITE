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
      aria-label="Hero — Digital Hujra, Batkhela KP"
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
              POS systems, custom software, e-commerce, photography — all under one warm roof in Batkhela.
            </p>

            <div className="hero-ctas" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}>
              <a href="/contact" className="btn btn-primary">Book a free hujra session <Arrow /></a>
              <a href="/services" className="btn btn-ghost">See what we do</a>
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

          {/* RIGHT — Digital Hujra Dokan display */}
          <div className="hero-chart hero-chart-panel" aria-hidden="true" style={{ position: "relative", paddingTop: 40 }}>
            <div style={{
              position: "relative",
              border: "1px solid rgba(245,163,58,0.22)",
              borderRadius: 22,
              background: "linear-gradient(160deg, rgba(15,27,48,0.65) 0%, rgba(5,11,23,0.93) 100%)",
              backdropFilter: "blur(14px)",
              overflow: "hidden",
              height: 460,
            }}>
              {/* Ambient network field */}
              <div style={{ position: "absolute", inset: 0, opacity: 0.5 }}>
                <NetworkField count={22} />
              </div>

              {/* Warm overhead amber lamp — dokan light */}
              <div style={{
                position: "absolute", top: -70, left: "50%", transform: "translateX(-50%)",
                width: 320, height: 200,
                background: "radial-gradient(ellipse, rgba(245,163,58,0.14) 0%, transparent 68%)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: -30, right: -30,
                width: 180, height: 180,
                background: "radial-gradient(circle, rgba(42,157,244,0.1) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              {/* ── Dokan signboard ── */}
              <div style={{
                position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)",
                zIndex: 10, display: "flex", alignItems: "center", gap: 9,
                padding: "7px 18px",
                background: "rgba(8,17,30,0.9)",
                border: "1px solid rgba(245,163,58,0.5)",
                borderRadius: 10,
                animation: "sign-glow 3.5s ease-in-out infinite",
                whiteSpace: "nowrap",
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)", animation: "pulse 1.8s ease-in-out infinite", display: "block" }} />
                <img src="/logo.png" alt="" style={{ height: 22, width: "auto" }} />
                <span className="mono" style={{ fontSize: 9, letterSpacing: "0.16em", color: "var(--amber)", opacity: 0.85 }}>OPEN · ہر وقت</span>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--amber)", animation: "pulse 1.8s ease-in-out 0.9s infinite", display: "block" }} />
              </div>

              {/* ── Website mockup card — top-left, slightly tilted ── */}
              <div style={{
                position: "absolute", top: 68, left: 14,
                animation: "drift-a 13s ease-in-out 0s infinite",
              }}>
                <div style={{
                  width: 138, transform: "rotate(-1.5deg)",
                  background: "rgba(7,16,29,0.84)",
                  border: "1px solid rgba(42,157,244,0.3)",
                  borderRadius: 10, overflow: "hidden",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.4), 0 0 0 1px rgba(42,157,244,0.06)",
                }}>
                  <div style={{ padding: "5px 8px", background: "rgba(42,157,244,0.1)", display: "flex", alignItems: "center", gap: 4 }}>
                    {["rgba(255,80,80,0.55)","rgba(255,190,0,0.55)","rgba(60,200,60,0.55)"].map((c,i) => (
                      <span key={i} style={{ width: 5, height: 5, borderRadius: "50%", background: c, display: "block" }} />
                    ))}
                    <div style={{ flex: 1, height: 3, background: "rgba(255,255,255,0.07)", borderRadius: 2, marginLeft: 4 }} />
                  </div>
                  <div style={{ padding: "8px 10px" }}>
                    <div style={{ height: 3, background: "var(--amber)", width: "52%", borderRadius: 2, marginBottom: 5 }} />
                    <div style={{ height: 30, background: "linear-gradient(135deg,rgba(42,157,244,0.1),rgba(245,163,58,0.06))", borderRadius: 5, marginBottom: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src="/logo.png" alt="" style={{ height: 14, width: "auto", opacity: 0.6 }} />
                    </div>
                    <div style={{ height: 2, background: "rgba(255,255,255,0.1)", width: "90%", borderRadius: 2, marginBottom: 3 }} />
                    <div style={{ height: 2, background: "rgba(255,255,255,0.07)", width: "68%", borderRadius: 2 }} />
                  </div>
                  <div style={{ padding: "2px 10px 7px" }}>
                    <span className="mono" style={{ fontSize: 7, letterSpacing: "0.12em", color: "var(--blue-soft)", opacity: 0.8 }}>E-COMMERCE</span>
                  </div>
                </div>
              </div>

              {/* ── Social media card — top-right, opposite tilt ── */}
              <div style={{
                position: "absolute", top: 58, right: 10,
                animation: "drift-b 10s ease-in-out 1.6s infinite",
              }}>
                <div style={{
                  width: 110, transform: "rotate(1.8deg)",
                  background: "rgba(7,16,29,0.8)",
                  border: "1px solid rgba(245,163,58,0.22)",
                  borderRadius: 12, padding: "10px",
                  boxShadow: "0 6px 22px rgba(0,0,0,0.3)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 7 }}>
                    <div style={{ width: 16, height: 16, borderRadius: "50%", background: "linear-gradient(135deg,#f5a33a,#e0174a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 7, color: "#fff", fontWeight: 700 }}>ig</span>
                    </div>
                    <div>
                      <div style={{ height: 2, width: 36, background: "rgba(255,255,255,0.22)", borderRadius: 2, marginBottom: 2 }} />
                      <div style={{ height: 2, width: 22, background: "rgba(255,255,255,0.1)", borderRadius: 2 }} />
                    </div>
                  </div>
                  <div style={{ height: 52, background: "linear-gradient(135deg,rgba(245,163,58,0.1),rgba(42,157,244,0.07))", borderRadius: 7, marginBottom: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, opacity: 0.6 }}>📸</div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 5 }}>
                    {["♥ 24","💬 3"].map(t => <span key={t} style={{ fontSize: 7, fontFamily: "monospace", color: "rgba(255,255,255,0.3)" }}>{t}</span>)}
                  </div>
                  <span className="mono" style={{ fontSize: 7, letterSpacing: "0.1em", color: "var(--amber)", opacity: 0.85 }}>PHOTOGRAPHY</span>
                </div>
              </div>

              {/* ── Brand hub — center, deliberately off-axis ── */}
              <div style={{
                position: "absolute", top: "40%", left: "50%",
                transform: "translate(-55%, -50%)",
                animation: "drift-c 15s ease-in-out 0.5s infinite",
                zIndex: 6,
              }}>
                <div style={{
                  width: 106,
                  background: "rgba(7,16,29,0.94)",
                  border: "2px solid rgba(245,163,58,0.55)",
                  borderRadius: 16, padding: "14px 10px 10px", textAlign: "center",
                  boxShadow: "0 0 34px rgba(245,163,58,0.16), 0 8px 28px rgba(0,0,0,0.45)",
                }}>
                  <img src="/logo.png" alt="" style={{ height: 32, width: "auto", display: "block", margin: "0 auto 8px" }} />
                  <div style={{ height: 1, background: "rgba(245,163,58,0.35)", margin: "0 0 7px" }} />
                  <span className="mono" style={{ fontSize: 7, letterSpacing: "0.14em", color: "var(--amber)" }}>DIGITAL HUJRA</span>
                </div>
              </div>

              {/* ── POS system card — lower-left, slight CW tilt ── */}
              <div style={{
                position: "absolute", bottom: 60, left: 12,
                animation: "drift-b 14s ease-in-out 3.2s infinite",
              }}>
                <div style={{
                  width: 128, transform: "rotate(1.2deg)",
                  background: "rgba(5,12,22,0.9)",
                  border: "1px solid rgba(91,214,138,0.28)",
                  borderRadius: 10, overflow: "hidden",
                  boxShadow: "0 6px 22px rgba(0,0,0,0.32)",
                }}>
                  <div style={{ background: "rgba(91,214,138,0.1)", padding: "5px 9px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="mono" style={{ fontSize: 7, letterSpacing: "0.1em", color: "var(--green)" }}>POS SYSTEM</span>
                    <span style={{ fontSize: 8, color: "var(--green)" }}>●</span>
                  </div>
                  <div style={{ padding: "7px 9px" }}>
                    {[["Nihari","₨180"],["Chapli","₨120"],["Pulao","₨160"]].map(([n,p]) => (
                      <div key={n} style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                        <span className="mono" style={{ fontSize: 7, color: "rgba(255,255,255,0.4)" }}>{n}</span>
                        <span className="mono" style={{ fontSize: 7, color: "var(--amber)" }}>{p}</span>
                      </div>
                    ))}
                    <div style={{ marginTop: 5, height: 14, background: "rgba(91,214,138,0.15)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="mono" style={{ fontSize: 7, color: "var(--green)", letterSpacing: "0.06em" }}>TOTAL ₨460</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Video / photography card — lower-right, opposite tilt ── */}
              <div style={{
                position: "absolute", bottom: 56, right: 10,
                animation: "drift-a 11s ease-in-out 5s infinite",
              }}>
                <div style={{
                  width: 108, transform: "rotate(-2deg)",
                  background: "rgba(7,16,29,0.82)",
                  border: "1px solid rgba(42,157,244,0.2)",
                  borderRadius: 10, overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.28)",
                }}>
                  <div style={{ height: 54, background: "linear-gradient(135deg,rgba(42,157,244,0.12),rgba(7,16,29,0.5))", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "rgba(42,157,244,0.22)", border: "1px solid rgba(42,157,244,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontSize: 9, marginLeft: 2, color: "var(--blue-soft)" }}>▶</span>
                    </div>
                    <span className="mono" style={{ position: "absolute", top: 5, right: 7, fontSize: 7, color: "rgba(255,255,255,0.3)" }}>01:24</span>
                    <span className="mono" style={{ position: "absolute", bottom: 5, left: 7, fontSize: 7, color: "rgba(255,255,255,0.25)" }}>HD</span>
                  </div>
                  <div style={{ padding: "6px 9px" }}>
                    <span className="mono" style={{ fontSize: 7, letterSpacing: "0.12em", color: "var(--blue-soft)" }}>CUSTOM SOFTWARE</span>
                  </div>
                </div>
              </div>

              {/* ── Floating micro-badges — scattered freely ── */}
              <div style={{ position: "absolute", top: "37%", left: 5, animation: "drift-c 8s ease-in-out 2s infinite", zIndex: 5 }}>
                <div style={{ padding: "4px 9px", background: "rgba(7,16,29,0.76)", border: "1px solid rgba(42,157,244,0.2)", borderRadius: 99 }}>
                  <span className="mono" style={{ fontSize: 8, color: "var(--blue-soft)", letterSpacing: "0.1em" }}>🛒 E-COMMERCE</span>
                </div>
              </div>
              <div style={{ position: "absolute", top: "28%", right: 5, animation: "drift-a 7s ease-in-out 4s infinite", zIndex: 5 }}>
                <div style={{ padding: "4px 9px", background: "rgba(7,16,29,0.72)", border: "1px solid rgba(245,163,58,0.18)", borderRadius: 99 }}>
                  <span className="mono" style={{ fontSize: 8, color: "var(--amber-soft)", letterSpacing: "0.1em" }}>📍 KP LOCAL</span>
                </div>
              </div>
              <div style={{ position: "absolute", top: "54%", right: 12, animation: "drift-b 9s ease-in-out 1s infinite", zIndex: 5 }}>
                <div style={{ padding: "4px 9px", background: "rgba(7,16,29,0.7)", border: "1px solid rgba(91,214,138,0.18)", borderRadius: 99 }}>
                  <span className="mono" style={{ fontSize: 8, color: "var(--green)", letterSpacing: "0.1em", opacity: 0.85 }}>48h DELIVERY</span>
                </div>
              </div>

              {/* ── Thin stats strip — translucent at bottom ── */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                display: "flex", justifyContent: "space-around", alignItems: "center",
                padding: "10px 16px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(5,11,23,0.78)",
                backdropFilter: "blur(10px)",
              }}>
                {[["6+","Services"],["5+","Cities"],["48h","Delivery"],["✓","Trusted"]].map(([v,l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div className="display" style={{ fontSize: 14, fontWeight: 800, color: "var(--amber)", lineHeight: 1 }}>{v}</div>
                    <div className="mono" style={{ fontSize: 7, letterSpacing: "0.1em", color: "var(--ink-mute)", marginTop: 2 }}>{l.toUpperCase()}</div>
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
