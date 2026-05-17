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

function fmtPKR(n: number) {
  return "PKR " + n.toLocaleString();
}

function periodSuffix(p: string) {
  if (p === "month") return "/ month";
  if (p === "shoot") return "/ shoot";
  return "";
}

export function Pricing() {
  const [activeTab, setActiveTab] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const cat = PRICING[activeTab];
  const accentVar = cat.accent === "amber" ? "var(--amber)" : "var(--blue-2)";
  const accentGlow =
    cat.accent === "amber"
      ? "rgba(245,163,58,0.18)"
      : "rgba(42,157,244,0.18)";

  // Animate cards on tab switch (initial scroll-in handled by page.tsx GSAP)
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
            Transparent pricing · 18 packages
          </p>
          <h2
            className="display section-title"
            style={{ fontSize: "clamp(40px, 5.4vw, 76px)", lineHeight: 1.02, margin: "0 0 20px" }}
          >
            Pick a plan,{" "}
            <span className="serif-italic" style={{ color: "var(--blue-2)" }}>
              start today.
            </span>
          </h2>
          <p style={{ margin: 0, fontSize: 17, color: "var(--ink-soft)", maxWidth: 540, lineHeight: 1.55 }}>
            Fixed prices, no hidden fees. Every package includes WhatsApp support and is quoted in PKR.
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
                      : "#fff"
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

        {/* Package cards */}
        <div
          id={`pricing-panel-${cat.id}`}
          role="tabpanel"
          aria-label={`${cat.tab} packages`}
          ref={gridRef}
          className="card-grid pricing-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
        >
          {cat.packages.map((pkg) => {
            const isPopular = pkg.popular;
            const waMsg = encodeURIComponent(
              `Assalam o Alaikum! ${pkg.name} (${cat.tab}) package ke baare mein enquire karna tha. Pricing: ${fmtPKR(pkg.price)}.`
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

                {/* Popular badge */}
                {isPopular && (
                  <div
                    className="mono"
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      background: accentVar,
                      color: cat.accent === "amber" ? "var(--night)" : "#fff",
                      padding: "3px 10px",
                      borderRadius: 999,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    Popular
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

                {/* Price */}
                <div style={{ marginBottom: 26 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                    <span
                      className="display"
                      style={{ fontSize: 32, lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.03em" }}
                    >
                      {fmtPKR(pkg.price)}
                    </span>
                    {pkg.period !== "one-time" && (
                      <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>
                        {periodSuffix(pkg.period)}
                      </span>
                    )}
                  </div>
                  {pkg.period === "one-time" && (
                    <p
                      className="mono"
                      style={{ fontSize: 10, color: "var(--ink-mute)", margin: "5px 0 0", letterSpacing: "0.1em" }}
                    >
                      one-time payment
                    </p>
                  )}
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
                        : "#fff"
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
            marginTop: 32,
            letterSpacing: "0.12em",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          All prices in PKR · VAT not included · Custom quotes available on request
        </p>
      </div>
    </section>
  );
}
