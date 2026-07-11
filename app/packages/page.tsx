import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { PackageTabs } from "@/components/PackageTabs";

export const metadata: Metadata = {
  title: "Packages — Digital Hujra | Fixed-Price POS, E-Commerce & Software Packages",
  description:
    "18 transparent, fixed-price packages for KP businesses — POS systems, e-commerce stores, custom software, and product photography. All prices in PKR, no hidden fees.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Packages — Digital Hujra | Fixed-Price Packages for KP Businesses",
    description:
      "18 transparent, fixed-price packages for KP businesses — POS systems, e-commerce stores, custom software, and product photography. All prices in PKR.",
    url: "https://www.digitalhujra.com/packages",
    type: "website",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.digitalhujra.com/" },
    { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://www.digitalhujra.com/packages" },
  ],
};

export default function PackagesPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <Nav />
      <main id="main-content" aria-label="Packages and pricing">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          aria-label="Packages hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 80,
            background: "var(--hero-section-bg)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", left: "8%", top: "10%", width: "44vw", height: "44vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,163,58,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: "6%", bottom: "5%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,244,0.09) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)" }} />

          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>PACKAGES</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>TRANSPARENT PRICING · 18 PACKAGES · PKR</span>
            </div>

            <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 108px)", lineHeight: 0.93, margin: "0 0 28px", letterSpacing: "-0.038em" }}>
              Fixed prices.<br />
              <span style={{ color: "var(--amber)" }}>Zero surprises.</span>
            </h1>

            <p style={{ maxWidth: 560, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 0" }}>
              Every package is a flat rate — quoted in PKR, no hidden fees, no locked-in retainers. Pick what you need and we get started.
            </p>
          </div>
        </section>

        {/* ── Package Grid ─────────────────────────────────── */}
        <section
          id="pkg-grid"
          aria-label="Package details"
          style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "linear-gradient(180deg, var(--night-2) 0%, var(--night) 100%)" }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <PackageTabs />
          </div>
        </section>

        {/* ── How Payment Works ────────────────────────────── */}
        <section aria-label="How payment works" style={{ padding: "80px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>How payment works</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1.05, margin: "0 0 48px", letterSpacing: "-0.025em" }}>
              Simple. <span style={{ color: "var(--amber)" }}>Flexible.</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { n: "01", title: "50% Advance",        body: "Pay half upfront to confirm your project. We start work the same day — no delays, no waiting.", color: "var(--amber)" },
                { n: "02", title: "Monthly Support Fee", body: "Small monthly fee for WhatsApp support, system updates, and remote monitoring throughout the year.", color: "var(--blue-2)" },
                { n: "03", title: "50% After 3 Months", body: "Once you're fully satisfied — pay the remaining 50%. No pressure, just results you're happy with.", color: "var(--amber)" },
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
                { n: "01", title: "Agreed upfront",   body: "We agree on price and scope before a single pixel moves. No scope creep, no surprise invoices at the end.", color: "var(--amber)" },
                { n: "02", title: "In PKR, always",   body: "Every quote is in Pakistani Rupees. No dollar conversions, no rate fluctuations hitting your budget.", color: "var(--blue-2)" },
                { n: "03", title: "Custom is OK too", body: "Don't see what you need? Message us. We build custom quotes for projects that don't fit a package.", color: "var(--amber)" },
                { n: "04", title: "WhatsApp support", body: "Every package includes WhatsApp support throughout the project. We answer in Urdu, Pashto, or English.", color: "var(--blue-2)" },
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
