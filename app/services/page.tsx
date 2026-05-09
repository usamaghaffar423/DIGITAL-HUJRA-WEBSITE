import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Process } from "@/components/Process";
import { SERVICES } from "@/lib/data";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Services — Digital Hujra | POS, E-commerce, Branding & More",
  description:
    "Full-service digital studio in Batkhela, KP. POS systems, e-commerce stores, branding, social media marketing, product photography, video editing, and graphic design.",
};

function ServiceIcon({ kind, color }: { kind: string; color?: string }) {
  const c = color || "currentColor";
  const common = {
    width: 52,
    height: 52,
    viewBox: "0 0 44 44",
    fill: "none",
    stroke: c,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };
  switch (kind) {
    case "pos":    return <svg {...common}><rect x="6" y="10" width="32" height="22" rx="2"/><line x1="6" y1="16" x2="38" y2="16"/><rect x="10" y="20" width="6" height="3"/><rect x="18" y="20" width="6" height="3"/><rect x="26" y="20" width="6" height="3"/><rect x="10" y="26" width="6" height="3"/><rect x="18" y="26" width="6" height="3"/><rect x="26" y="26" width="6" height="3" fill={c}/></svg>;
    case "cart":   return <svg {...common}><path d="M5 8h4l3 18h20l3-12H12"/><circle cx="14" cy="34" r="2.5"/><circle cx="32" cy="34" r="2.5"/><path d="M22 14v6M19 17h6" stroke={c}/></svg>;
    case "brand":  return <svg {...common}><circle cx="22" cy="22" r="14"/><path d="M16 28L22 12l6 16M18 23h8"/></svg>;
    case "social": return <svg {...common}><circle cx="11" cy="14" r="4"/><circle cx="33" cy="14" r="4"/><circle cx="22" cy="32" r="4"/><line x1="14" y1="16" x2="20" y2="29"/><line x1="30" y1="16" x2="24" y2="29"/><line x1="15" y1="14" x2="29" y2="14"/></svg>;
    case "camera": return <svg {...common}><rect x="4" y="12" width="36" height="22" rx="2"/><circle cx="22" cy="23" r="6"/><circle cx="22" cy="23" r="2.5" fill={c}/><path d="M14 12l3-4h10l3 4"/></svg>;
    case "video":  return <svg {...common}><rect x="4" y="12" width="26" height="20" rx="2"/><path d="M30 18l10-4v16l-10-4z" fill={c} fillOpacity="0.3"/><path d="M14 19v6l6-3z" fill={c}/></svg>;
    case "grid":   return <svg {...common}><rect x="6" y="6" width="14" height="14" rx="1"/><rect x="24" y="6" width="14" height="14" rx="1"/><rect x="6" y="24" width="14" height="14" rx="1"/><rect x="24" y="24" width="14" height="14" rx="1" fill={c} fillOpacity="0.2"/></svg>;
    default: return null;
  }
}

const SERVICE_EXTRAS: Record<string, { tagline: string; details: string; callouts: string[] }> = {
  "01": {
    tagline: "Your shop, fully in control",
    details: "We install, configure, and train your staff on a modern POS that fits on any counter. From a small pharmacy in Batkhela to a busy mart in Mardan — we've done it 40+ times. Daily Z-reports, stock alerts, and Urdu/Pashto receipts included.",
    callouts: ["Same-day installation available", "Staff training included", "Remote support for 90 days", "Works offline too"],
  },
  "02": {
    tagline: "Open for business — 24 hours a day",
    details: "A well-built online store turns your WhatsApp catalogue into a proper shop that runs itself. We handle Shopify, WooCommerce, or custom builds — with Cash on Delivery, WhatsApp checkout, and local courier integrations already set up.",
    callouts: ["Cash on Delivery", "WhatsApp checkout", "Local courier integrations", "Bilingual (Urdu / Pashto)"],
  },
  "03": {
    tagline: "Look the part — everywhere",
    details: "We build identities that hold together: from your first business card to your shop's façade signage. A proper brand book means every future designer you hire stays on-brand — even years down the line.",
    callouts: ["Logo + wordmark variants", "Color & typography system", "Stationery & print templates", "Detailed brand guidelines"],
  },
  "04": {
    tagline: "Content that converts, not just impresses",
    details: "We plan, create, and publish a full month of content — Reels, Stories, carousels, and targeted Meta ads. Monthly performance reports in plain language, no jargon.",
    callouts: ["Monthly content calendar", "Reels & Stories production", "Targeted Meta & TikTok ads", "Monthly analytics report"],
  },
  "05": {
    tagline: "Products that sell themselves",
    details: "Studio shoots in Batkhela or on-location anywhere in Malakand Division. Edited cutouts, lifestyle scenes, and catalog-ready galleries. Shoot-day turnaround is 48 hours.",
    callouts: ["Studio + on-location shoots", "Product cutouts & lifestyle", "48-hour turnaround", "Catalog-ready delivery"],
  },
  "06": {
    tagline: "Video that works on every screen",
    details: "Short-form Reels, long-form brand films, ad cuts, and product explainers. Color grading, sound design, captions, and motion graphics — all produced in-house, all delivered to your phone.",
    callouts: ["Short-form Reels & TikToks", "Brand films", "Ad cuts", "Captions & motion graphics"],
  },
  "07": {
    tagline: "Print that gets noticed",
    details: "Menus, flyers, packaging, banners, and shop signage — all designed in print-ready formats and sent directly to your preferred local press. We have standing relationships with printers across KP.",
    callouts: ["Menus & restaurant prints", "Packaging design", "Banners & shop signs", "Print-ready file delivery"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Digital Hujra services">

        {/* ── Page Hero ─────────────────────────────────── */}
        <section
          aria-label="Services hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 100,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{
            position: "absolute", right: "-8vw", top: "-8vw",
            width: "50vw", height: "50vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,244,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" className="grid-bg" style={{
            position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none",
            maskImage: "radial-gradient(ellipse at 60% 40%, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 60% 40%, black 20%, transparent 70%)",
          }} />
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>SERVICES</span>
            </div>
            <h1
              className="display"
              style={{
                fontSize: "clamp(52px, 8vw, 120px)",
                lineHeight: 0.95,
                margin: "0 0 28px",
                letterSpacing: "-0.035em",
              }}
            >
              <span style={{ color: "var(--blue-2)" }}>Seven services,</span>
              <br />
              <span style={{ color: "var(--ink)" }}>one studio.</span>
            </h1>
            <p style={{ maxWidth: 580, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 0 44px" }}>
              From the till in your shop to the reel on your customer&apos;s feed — we cover the whole digital journey of a KP business, under one warm roof in Batkhela.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn-amber">Book a free consultation <Arrow /></a>
              <a href="tel:+923715868088" className="btn btn-ghost">Call us: +92 371 5868088</a>
            </div>
          </div>
        </section>

        {/* ── Services Detail Grid ──────────────────────── */}
        <section aria-label="All services" style={{ padding: "100px 0", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
              {SERVICES.map((s, i) => {
                const accentColor = s.accent === "amber" ? "var(--amber)" : "var(--blue-2)";
                const accentBg = s.accent === "amber" ? "rgba(245,163,58,0.10)" : "rgba(42,157,244,0.10)";
                const extra = SERVICE_EXTRAS[s.n];
                const isReversed = i % 2 === 1;
                return (
                  <article
                    key={s.n}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 64,
                      alignItems: "center",
                      direction: isReversed ? "rtl" : "ltr",
                      borderTop: "1px solid var(--line)",
                      paddingTop: 64,
                    }}
                  >
                    {/* Text side */}
                    <div style={{ direction: "ltr" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                        <span style={{ color: accentColor }}><ServiceIcon kind={s.icon} color={accentColor} /></span>
                        <span className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: "var(--ink-mute)" }}>{s.n} / {SERVICES.length.toString().padStart(2, "0")}</span>
                      </div>
                      <p className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", color: accentColor, marginBottom: 12 }}>
                        {extra?.tagline}
                      </p>
                      <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.0, margin: "0 0 20px", letterSpacing: "-0.025em" }}>
                        {s.name}
                      </h2>
                      <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--ink-soft)", margin: "0 0 32px" }}>
                        {extra?.details || s.blurb}
                      </p>
                      <ul style={{ listStyle: "none", margin: "0 0 36px", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 20px" }}>
                        {(extra?.callouts || s.bullets).map((b) => (
                          <li key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "var(--ink-soft)" }}>
                            <span aria-hidden="true" style={{ width: 18, height: 18, borderRadius: "50%", background: accentBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
                                <path d="M1 3.5L3.5 6L8 1" stroke={accentColor} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <a href="/contact" className="btn btn-primary" style={{ fontSize: 13 }}>
                        Get a quote <Arrow />
                      </a>
                    </div>

                    {/* Visual side */}
                    <div style={{ direction: "ltr" }}>
                      <div style={{
                        borderRadius: 20,
                        border: "1px solid var(--line)",
                        background: `linear-gradient(135deg, ${accentBg}, rgba(10,22,40,0.6))`,
                        aspectRatio: "4/3",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 20,
                        position: "relative",
                        overflow: "hidden",
                      }}>
                        <div aria-hidden="true" style={{
                          position: "absolute", inset: 0,
                          backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 6px, transparent 6px 14px)",
                        }} />
                        <div aria-hidden="true" style={{
                          width: 100, height: 100, borderRadius: "50%",
                          background: accentBg,
                          border: `1px solid ${accentColor}33`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          position: "relative",
                        }}>
                          <ServiceIcon kind={s.icon} color={accentColor} />
                        </div>
                        <div style={{ textAlign: "center", position: "relative" }}>
                          <div className="display" style={{ fontSize: "clamp(52px, 7vw, 96px)", color: "rgba(255,255,255,0.06)", lineHeight: 1, letterSpacing: "-0.04em" }}>
                            {s.n}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <Process />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
