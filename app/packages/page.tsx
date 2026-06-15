"use client";

import { useState, useRef, useEffect } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
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
  return "PKR " + n.toLocaleString();
}

function periodSuffix(p: string) {
  if (p === "month") return "/ month";
  if (p === "shoot") return "/ shoot";
  return "";
}

const SERVICE_ICONS: Record<string, string> = {
  pos:    "🖥️",
  cart:   "🛒",
  code:   "💻",
  camera: "📷",
};

export default function PackagesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const gridRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  const cat = PRICING[activeTab];
  const accentVar = cat.accent === "amber" ? "var(--amber)" : "var(--blue-2)";
  const accentGlow = cat.accent === "amber" ? "rgba(245,163,58,0.18)" : "rgba(42,157,244,0.18)";
  const accentBg   = cat.accent === "amber" ? "rgba(245,163,58,0.07)" : "rgba(42,157,244,0.07)";

  useEffect(() => {
    if (isFirstRender.current) { isFirstRender.current = false; return; }
    if (!gridRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run = async () => {
      const { gsap } = await import("gsap");
      const cards = gridRef.current!.querySelectorAll<HTMLElement>(".pkg-card");
      gsap.fromTo(cards,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.42, stagger: 0.07, ease: "power3.out", clearProps: "transform,opacity" }
      );
    };
    run();
  }, [activeTab]);


  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Packages and pricing">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          aria-label="Packages hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 80,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", left: "8%", top: "10%", width: "44vw", height: "44vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,163,58,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: "6%", bottom: "5%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,244,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)" }} />

          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>PACKAGES</span>
            </div>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>TRANSPARENT PRICING · 12 PACKAGES · PKR</span>
            </div>

            <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 108px)", lineHeight: 0.93, margin: "0 0 28px", letterSpacing: "-0.038em" }}>
              Fixed prices.<br />
              <span style={{ color: "var(--amber)" }}>Zero surprises.</span>
            </h1>

            <p style={{ maxWidth: 560, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 44px" }}>
              Every package is a flat rate — quoted in PKR, no hidden fees, no locked-in retainers. Pick what you need and we get started.
            </p>

            {/* Service category quick-jump pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {PRICING.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => { setActiveTab(i); setTimeout(() => document.getElementById("pkg-grid")?.scrollIntoView({ behavior: "smooth", block: "start" }), 80); }}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 500,
                    background: activeTab === i ? (c.accent === "amber" ? "var(--amber)" : "var(--blue-2)") : "rgba(255,255,255,0.05)",
                    color: activeTab === i ? (c.accent === "amber" ? "var(--night)" : "#fff") : "var(--ink-soft)",
                    border: `1px solid ${activeTab === i ? (c.accent === "amber" ? "var(--amber)" : "var(--blue-2)") : "var(--line-2)"}`,
                    cursor: "pointer",
                    transition: "all .22s",
                  }}
                >
                  {SERVICE_ICONS[c.icon]} {c.tab}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Package Grid ─────────────────────────────────── */}
        <section
          id="pkg-grid"
          aria-label="Package details"
          style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "linear-gradient(180deg, var(--night-2) 0%, var(--night) 100%)" }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>

            {/* Active category header */}
            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ width: 28, height: 1, background: accentVar }} />
                <span className="eyebrow" style={{ color: accentVar }}>{cat.tab} · {cat.packages.length} packages</span>
              </div>
              <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 56px)", lineHeight: 1.05, margin: 0, letterSpacing: "-0.025em" }}>
                {cat.tab} <span style={{ color: accentVar }}>packages</span>
              </h2>
            </div>

            {/* Cards */}
            <div
              id={`pkg-panel-${cat.id}`}
              role="tabpanel"
              aria-label={`${cat.tab} packages`}
              ref={gridRef}
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}
              className="pricing-grid"
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
                    className="card pkg-card"
                    style={{
                      padding: "36px 32px 32px",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      overflow: "hidden",
                      border: `1px solid ${isPopular ? accentVar : "var(--line)"}`,
                      boxShadow: isPopular ? `0 0 60px -12px ${accentGlow}` : "none",
                      transition: "border-color .3s, box-shadow .3s, transform .3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                      if (!isPopular) (e.currentTarget as HTMLElement).style.borderColor = accentVar;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      if (!isPopular) (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                    }}
                  >
                    {/* Ambient glow */}
                    <div aria-hidden="true" style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, ${accentGlow} 0%, transparent 70%)`, pointerEvents: "none" }} />

                    {/* Popular badge */}
                    {isPopular && (
                      <div className="mono" style={{ position: "absolute", top: 20, right: 20, background: accentVar, color: cat.accent === "amber" ? "var(--night)" : "#fff", padding: "4px 12px", borderRadius: 999, fontSize: 9, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                        Most Popular
                      </div>
                    )}

                    {/* Category + icon */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: accentBg, border: `1px solid ${accentVar}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                        {SERVICE_ICONS[cat.icon]}
                      </div>
                      <p className="mono" style={{ fontSize: 10, letterSpacing: "0.15em", color: accentVar, margin: 0, textTransform: "uppercase" }}>{cat.tab}</p>
                    </div>

                    {/* Name + tagline */}
                    <h3 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 8px", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{pkg.name}</h3>
                    <p style={{ fontSize: 14, color: "var(--ink-mute)", margin: "0 0 24px", lineHeight: 1.45 }}>{pkg.tagline}</p>

                    <hr className="rule" style={{ margin: "0 0 24px" }} />

                    {/* Price */}
                    <div style={{ marginBottom: 28 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                        <span className="display" style={{ fontSize: 34, lineHeight: 1, color: "var(--ink)", letterSpacing: "-0.03em" }}>{fmtPKR(pkg.price)}</span>
                        {pkg.period !== "one-time" && (
                          <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>{periodSuffix(pkg.period)}</span>
                        )}
                      </div>
                      {pkg.period === "one-time" && (
                        <p className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", margin: "6px 0 0", letterSpacing: "0.1em" }}>one-time payment</p>
                      )}
                    </div>

                    {/* Features */}
                    <ul style={{ listStyle: "none", margin: "0 0 auto", padding: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                      {pkg.features.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.4 }}>
                          <span style={{ color: accentVar, flexShrink: 0, marginTop: 1 }}><CheckIcon /></span>
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
                        marginTop: 32,
                        background: isPopular ? accentVar : "rgba(255,255,255,0.04)",
                        color: isPopular ? (cat.accent === "amber" ? "var(--night)" : "#fff") : "var(--ink)",
                        border: `1px solid ${isPopular ? accentVar : "var(--line-2)"}`,
                        justifyContent: "center",
                        fontSize: 14,
                        padding: "13px 20px",
                        fontWeight: 600,
                      }}
                    >
                      Get Quote on WhatsApp <Arrow size={13} rotate={-45} />
                    </a>
                  </article>
                );
              })}
            </div>

            {/* Footer note */}
            <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <p className="mono" style={{ fontSize: 10, color: "var(--ink-mute)", margin: 0, letterSpacing: "0.12em", textAlign: "center", textTransform: "uppercase" }}>
                All prices in PKR · VAT not included · Custom quotes available on request
              </p>
            </div>
          </div>
        </section>

        {/* ── Why Fixed Pricing ────────────────────────────── */}
        <section aria-label="Why fixed pricing" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Why fixed pricing</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              No surprises. <span style={{ color: "var(--blue-2)" }}>Just work.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { n: "01", title: "Agreed upfront",    body: "We agree on price and scope before a single pixel moves. No scope creep, no surprise invoices at the end.", color: "var(--amber)" },
                { n: "02", title: "In PKR, always",    body: "Every quote is in Pakistani Rupees. No dollar conversions, no rate fluctuations hitting your budget.", color: "var(--blue-2)" },
                { n: "03", title: "Custom is OK too",  body: "Don't see what you need? Message us. We build custom quotes for projects that don't fit a package.", color: "var(--amber)" },
                { n: "04", title: "WhatsApp support",  body: "Every package includes WhatsApp support throughout the project. We answer in Urdu, Pashto, or English.", color: "var(--blue-2)" },
              ].map((item) => (
                <article key={item.n} className="card" style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: item.color }}>{item.n}</span>
                  <h3 className="display" style={{ fontSize: 26, margin: 0, letterSpacing: "-0.02em", color: item.color }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)" }}>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
