"use client";

import { useState, useRef, useEffect } from "react";
import { PRICING, SITE } from "@/lib/data";
import { Arrow } from "@/components/atoms";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" fill="currentColor" fillOpacity="0.15" />
      <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" fill="rgba(255,90,90,0.12)" />
      <path d="M4.5 4.5l5 5M9.5 4.5l-5 5" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const cat = PRICING[activeTab];
  const accentVar = cat.accent === "amber" ? "var(--amber)" : cat.accent === "green" ? "var(--green)" : "var(--blue-2)";
  const accentGlow =
    cat.accent === "amber"
      ? "rgba(245,163,58,0.18)"
      : cat.accent === "green"
      ? "rgba(91,214,138,0.18)"
      : "rgba(42,157,244,0.18)";
  const catEx = cat as typeof cat & { sectionNote?: string; footerNote?: string };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!gridRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const run = async () => {
      const { gsap } = await import("gsap");
      const cards = gridRef.current!.querySelectorAll<HTMLElement>(".pricing-card");
      gsap.fromTo(
        cards,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity" }
      );
    };
    run();
  }, [activeTab]);

  return (
    <section
      id="pricing"
      aria-label="Pricing packages"
      style={{
        position: "relative",
        padding: "140px 0",
        borderTop: "1px solid var(--line)",
        background: "linear-gradient(180deg, var(--night-2) 0%, var(--night) 100%)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }} className="wrap-mobile">

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p className="eyebrow section-eyebrow" style={{ color: "var(--amber)", marginBottom: 16 }}>
            Service packages · 18 options
          </p>
          <h2
            className="display section-title"
            style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02, margin: "0 0 20px" }}
          >
            Pick a service,{" "}
            <span className="serif-italic" style={{ color: "var(--blue-2)" }}>
              let&apos;s talk.
            </span>
          </h2>
          <p style={{ margin: 0, fontSize: 17, color: "var(--ink-soft)", maxWidth: 540, lineHeight: 1.55 }}>
            Every package lists exactly what&apos;s included. Final pricing is agreed after a free
            consultation — face to face or on WhatsApp — so it fits your budget.
          </p>
        </div>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label="Service categories"
          className="pricing-tabs"
          style={{ display: "flex", gap: 8, marginBottom: 40, overflowX: "auto", paddingBottom: 4 }}
        >
          {PRICING.map((c, i) => {
            const isActive = i === activeTab;
            const tabAccent = c.accent === "amber" ? "var(--amber)" : "var(--blue-2)";
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`pricing-panel-${c.id}`}
                onClick={() => setActiveTab(i)}
                className="mono"
                style={{
                  padding: "9px 18px",
                  borderRadius: 999,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  background: isActive ? tabAccent : "rgba(255,255,255,0.04)",
                  color: isActive
                    ? c.accent === "amber"
                      ? "var(--night)"
                      : c.accent === "green" ? "#0A1628" : "#fff"
                    : "var(--ink-mute)",
                  border: `1px solid ${isActive ? tabAccent : "var(--line-2)"}`,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  transition: "background 0.22s, color 0.22s, border-color 0.22s",
                }}
              >
                {c.tab}
              </button>
            );
          })}
        </div>

        {/* Section note */}
        {catEx.sectionNote && (
          <div style={{
            background: "rgba(42,157,244,0.07)",
            border: "1px solid rgba(42,157,244,0.2)",
            borderRadius: 12,
            padding: "14px 20px",
            marginBottom: 28,
            fontSize: 13.5,
            color: "var(--ink-soft)",
            lineHeight: 1.55,
          }}>
            {catEx.sectionNote}
          </div>
        )}

        {/* Package cards */}
        <div
          id={`pricing-panel-${cat.id}`}
          role="tabpanel"
          aria-label={`${cat.tab} packages`}
          ref={gridRef}
          className="card-grid pricing-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {cat.packages.map((_pkg) => {
            const pkg = _pkg as typeof _pkg & {
              notIncluded?: string[];
            };
            const isPopular = pkg.popular;
            const waMsg = encodeURIComponent(
              `Assalam o Alaikum! Mujhe ${pkg.name} (${cat.tab}) package chahiye. Pricing discuss karni thi.`
            );
            const waLink = `https://wa.me/${SITE.whatsapp}?text=${waMsg}`;

            return (
              <article
                key={pkg.name}
                className="card pricing-card"
                style={{
                  padding: "32px 28px 28px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  border: `1px solid ${isPopular ? accentVar : "var(--line)"}`,
                  boxShadow: isPopular ? `0 0 48px -10px ${accentGlow}` : "none",
                }}
              >
                {/* Ambient glow */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${accentGlow} 0%, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Badges */}
                {isPopular && (
                  <div style={{ position: "absolute", top: 18, right: 18, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <div
                      className="mono"
                      style={{
                        background: accentVar,
                        color: cat.accent === "amber" ? "var(--night)" : cat.accent === "green" ? "#0A1628" : "#fff",
                        padding: "3px 10px",
                        borderRadius: 999,
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                      }}
                    >
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Category label */}
                <p
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: accentVar,
                    margin: "0 0 10px",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.tab}
                </p>

                {/* Package name + tagline */}
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    margin: "0 0 6px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {pkg.name}
                </h3>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "var(--ink-mute)",
                    margin: "0 0 22px",
                    lineHeight: 1.4,
                  }}
                >
                  {pkg.tagline}
                </p>

                <hr className="rule" style={{ margin: "0 0 22px" }} />

                {/* Pricing — quote on request */}
                <div style={{ marginBottom: 26 }}>
                  <span
                    className="display"
                    style={{ fontSize: 28, lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.03em" }}
                  >
                    Custom quote
                  </span>
                  <p
                    className="mono"
                    style={{ fontSize: 10, color: "var(--ink-mute)", margin: "7px 0 0", letterSpacing: "0.1em" }}
                  >
                    PRICED AFTER A FREE CONSULTATION
                  </p>
                </div>

                {/* Features */}
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 auto",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 13.5,
                        color: "var(--ink-soft)",
                        lineHeight: 1.4,
                      }}
                    >
                      <span style={{ color: accentVar, flexShrink: 0, marginTop: 1 }}>
                        <CheckIcon />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Not included */}
                {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                  <>
                    <hr style={{ margin: "16px 0 12px", border: "none", borderTop: "1px solid var(--line)", opacity: 0.5 }} />
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {pkg.notIncluded.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.4 }}>
                          <span style={{ flexShrink: 0, marginTop: 1 }}><XIcon /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* CTA */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    marginTop: 28,
                    background: isPopular ? accentVar : "rgba(255,255,255,0.04)",
                    color: isPopular
                      ? cat.accent === "amber"
                        ? "var(--night)"
                        : cat.accent === "green" ? "#0A1628" : "#fff"
                      : "var(--ink)",
                    border: `1px solid ${isPopular ? accentVar : "var(--line-2)"}`,
                    justifyContent: "center",
                    fontSize: 13.5,
                    padding: "12px 20px",
                  }}
                >
                  Get Quote on WhatsApp
                  <Arrow size={13} rotate={-45} />
                </a>
              </article>
            );
          })}
        </div>

        {/* Footer note */}
        <p
          className="mono"
          style={{
            fontSize: 10,
            color: "var(--ink-mute)",
            margin: 0,
            paddingTop: 28,
            marginTop: 40,
            borderTop: "1px solid var(--line)",
            letterSpacing: "0.12em",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Every project is quoted after a free consultation — in the hujra, face to face, or on WhatsApp
        </p>
      </div>
    </section>
  );
}
