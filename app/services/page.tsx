import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Process } from "@/components/Process";
import { SERVICES } from "@/lib/data";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Services — Digital Hujra | POS, E-commerce, Software & Photography",
  description:
    "Digital Hujra — focused digital studio in Batkhela, KP. POS systems, e-commerce stores, custom software, and product photography for local businesses across KP.",
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
    case "code":   return <svg {...common}><rect x="4" y="8" width="36" height="28" rx="2"/><path d="M13 20l-5 4 5 4"/><path d="M31 20l5 4-5 4"/><line x1="26" y1="13" x2="18" y2="33"/></svg>;
    case "camera":   return <svg {...common}><rect x="4" y="12" width="36" height="22" rx="2"/><circle cx="22" cy="23" r="6"/><circle cx="22" cy="23" r="2.5" fill={c}/><path d="M14 12l3-4h10l3 4"/></svg>;
    case "whatsapp": return <svg {...common}><path d="M22 8C14.3 8 8 14.3 8 22c0 2.8.8 5.4 2.1 7.6L8 36l6.6-1.9A13.9 13.9 0 0022 36c7.7 0 14-6.3 14-14S29.7 8 22 8z"/><path d="M18 20.5c0-.3-.2-.9.3-1.7s1.8-1.5 1.8-1.5 .6-.2.9.5l.8 1.7c.2.4 0 .8-.3 1l-.5.5c-.2.2-.2.4 0 .7.5.7 1.5 1.9 3.2 2.8.3.2.5.1.7-.1l.4-.5c.3-.3.7-.5 1.2-.2l1.7.9c.7.3.6 1 .6 1s-.5 1.2-1.5 1.8-2 .2-2 .2c-2.6-.9-4.9-3.2-5.7-5.4-.3-.7-.6-2-.6-2z" fill={c} stroke="none"/></svg>;
    case "google":   return <svg {...common}><path d="M22 8c-5.5 0-10 4.5-10 10 0 7.5 10 18 10 18s10-10.5 10-18c0-5.5-4.5-10-10-10z"/><circle cx="22" cy="18" r="3.5" fill={c} stroke="none"/></svg>;
    default: return null;
  }
}

const SERVICE_EXTRAS: Record<string, { tagline: string; details: string; callouts: string[] }> = {
  "05": {
    tagline: "Your shop on every customer's phone",
    details: "WhatsApp is Pakistan's #1 messaging app — and your customers are already on it. We set up your WhatsApp Business profile, get you the verified green tick, create your channel, and build your catalog so every inquiry turns into a sale.",
    callouts: ["Green tick verification", "Channel & catalog setup", "Auto-replies configured", "Staff training included"],
  },
  "06": {
    tagline: "Show up when customers search",
    details: "When someone searches for a shop in Batkhela or Chakdara, Google Maps is what they see first. We create, verify, and fully optimize your Google Business Profile — so your shop appears with your phone number, hours, photos, and directions, right at the top.",
    callouts: ["Maps pin & verification", "Full profile optimization", "Photos & posts uploaded", "Local SEO setup"],
  },
  "01": {
    tagline: "Your shop, fully in control",
    details: "We install, configure, and train your staff on a modern POS that fits on any counter. From a small pharmacy in Batkhela to a busy mart in Mardan — we've done it 40+ times. Daily Z-reports, stock alerts, and Urdu/Pashto receipts included.",
    callouts: ["Same-day installation available", "Staff training included", "Remote support for 90 days", "Works offline too"],
  },
  "02": {
    tagline: "Software that fits your business exactly",
    details: "Off-the-shelf software always needs workarounds. We build tools that match how your business actually operates — from billing and inventory to booking platforms and internal CRMs. Fully installed, trained, and supported.",
    callouts: ["Desktop & web applications", "Inventory & billing systems", "Booking & CRM tools", "Training + 90-day support"],
  },
  "03": {
    tagline: "Open for business — 24 hours a day",
    details: "A well-built online store turns your WhatsApp catalogue into a proper shop that runs itself. We handle Shopify, WooCommerce, or custom builds — with Cash on Delivery, WhatsApp checkout, and local courier integrations already set up.",
    callouts: ["Cash on Delivery", "WhatsApp checkout", "Local courier integrations", "Bilingual (Urdu / Pashto)"],
  },
  "04": {
    tagline: "Products that sell themselves",
    details: "Studio shoots in Batkhela or on-location anywhere in Malakand Division. Edited cutouts, lifestyle scenes, and catalog-ready galleries. Shoot-day turnaround is 48 hours.",
    callouts: ["Studio + on-location shoots", "Product cutouts & lifestyle", "48-hour turnaround", "Catalog-ready delivery"],
  },
};

const SERVICE_IMAGES: Record<string, string> = {
  "01": "/services/pos/pos%20System%20Service.webp",
  "02": "/services/custom-softwares/Custom%20Softwares.webp",
  "03": "/services/ecommerce/E-Commerce%20Service.webp",
  "04": "/services/photography/Product%20Photography.webp",
  "05": "/services/Whatsapp-Business/Whatapp%20Website%20Image%2001.webp",
  "06": "/services/Google-Business/Google%20Busines%20%281%29.webp",
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
            paddingBottom: 0,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          {/* Glow left */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "10%", top: "20%",
            width: "40vw", height: "40vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,244,0.14) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          {/* Glow right */}
          <div aria-hidden="true" style={{
            position: "absolute", right: "10%", top: "10%",
            width: "30vw", height: "30vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,163,58,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" className="grid-bg" style={{
            position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)",
          }} />

          <div className="wrap-mobile" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32, justifyContent: "center" }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>SERVICES</span>
            </div>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(42,157,244,0.35)", borderRadius: 999, background: "rgba(42,157,244,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--blue-2)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--blue-soft)" }}>6 SERVICES · ONE ROOF</span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: "clamp(52px, 8.5vw, 130px)",
                lineHeight: 0.93,
                margin: "0 0 28px",
                letterSpacing: "-0.038em",
              }}
            >
              <span style={{ color: "var(--blue-2)" }}>Six services,</span>
              <br />
              <span style={{ color: "var(--ink)" }}>one studio.</span>
            </h1>

            <p style={{ maxWidth: 560, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 44px" }}>
              From the till in your shop to the reel on your customer&apos;s feed — we cover the whole digital journey of a KP business, under one warm roof in Batkhela.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 72 }}>
              <a href="/contact" className="btn btn-amber">Book a free consultation <Arrow /></a>
              <a href="tel:+923715868088" className="btn btn-ghost">Call: +92 371 5868088</a>
            </div>
          </div>

          {/* Service chip strip — unique to this page */}
          <div
            aria-hidden="true"
            style={{
              borderTop: "1px solid var(--line)",
              background: "rgba(255,255,255,0.015)",
              backdropFilter: "blur(8px)",
              padding: "0",
              overflow: "hidden",
            }}
          >
            <div style={{
              maxWidth: 1360,
              margin: "0 auto",
              padding: "0 36px",
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
            }}>
              {SERVICES.map((s, i) => {
                const accentColor = s.accent === "amber" ? "var(--amber)" : "var(--blue-2)";
                return (
                  <div
                    key={s.n}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 10,
                      padding: "24px 12px",
                      borderRight: i < SERVICES.length - 1 ? "1px solid var(--line)" : "none",
                      transition: "background .25s",
                    }}
                  >
                    <div style={{ color: accentColor }}>
                      <ServiceIcon kind={s.icon} color={accentColor} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-soft)", textAlign: "center", letterSpacing: "-0.01em" }}>{s.name}</span>
                  </div>
                );
              })}
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
                        {SERVICE_IMAGES[s.n] ? (
                          <img
                            src={SERVICE_IMAGES[s.n]}
                            alt={s.name}
                            loading="lazy"
                            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        ) : (
                          <>
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
                          </>
                        )}
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
