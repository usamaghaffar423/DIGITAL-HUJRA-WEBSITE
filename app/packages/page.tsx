import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { PackageTabs } from "@/components/PackageTabs";

export const metadata: Metadata = {
  title: "Packages — Digital Hujra | POS, E-Commerce, Software & Photography for KP Businesses",
  description:
    "Service packages for KP businesses — POS systems, e-commerce stores, custom software, and product photography. Each package lists exactly what's included; pricing is agreed after a free consultation.",
  alternates: {
    canonical: "/packages",
  },
  openGraph: {
    title: "Packages — Digital Hujra | Services for KP Businesses",
    description:
      "Service packages for KP businesses — POS systems, e-commerce stores, custom software, and product photography. Pricing is agreed after a free consultation.",
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
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>18 PACKAGES · QUOTED PER PROJECT</span>
            </div>

            <h1 className="display" style={{ fontSize: "clamp(48px, 8vw, 108px)", lineHeight: 0.93, margin: "0 0 28px", letterSpacing: "-0.038em" }}>
              Pick your service.<br />
              <span style={{ color: "var(--amber)" }}>Then let&apos;s talk.</span>
            </h1>

            <p style={{ maxWidth: 560, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 0" }}>
              Every package below lists exactly what&apos;s included. Pricing is agreed after a free
              consultation — in the hujra, face to face, or on WhatsApp — so it fits your budget.
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
                { n: "01", title: "Advance to Start",   body: "A part-payment upfront confirms your project. We start work the same day — no delays, no waiting.", color: "var(--amber)" },
                { n: "02", title: "Ongoing Support",     body: "A small agreed fee covers WhatsApp support, system updates, and remote monitoring through the year.", color: "var(--blue-2)" },
                { n: "03", title: "Balance When Happy",  body: "Once you're fully satisfied — you settle the balance. No pressure, just results you're happy with.", color: "var(--amber)" },
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

        {/* ── Why we quote in person ───────────────────────── */}
        <section aria-label="Why we quote in person" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Why we quote in person</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              No pressure. <span style={{ color: "var(--blue-2)" }}>Just a conversation.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {[
                { n: "01", title: "Agreed before we start", body: "We settle on scope and price together before a single pixel moves — then it's fixed. No scope creep, no surprise invoice at the end.", color: "var(--amber)" },
                { n: "02", title: "Sized to a KP budget",   body: "We quote in Pakistani Rupees, matched to what a local business can spend — not a Western agency rate card.", color: "var(--blue-2)" },
                { n: "03", title: "Room to negotiate",      body: "Talk it through with us in the hujra or on WhatsApp. Trim the scope, adjust the plan — we'll find a number that works for both sides.", color: "var(--amber)" },
                { n: "04", title: "WhatsApp support",       body: "Every package includes WhatsApp support throughout the project. We answer in Urdu, Pashto, or English.", color: "var(--blue-2)" },
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
