import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Top Man Tailor — Order Studio Case Study — Digital Hujra",
  description:
    "How Digital Hujra built Order Studio for Top Man Tailor in Batkhela — a custom order-management and retail POS system covering orders, customers, karigars, measurements, payments, inventory, and analytics.",
  alternates: { canonical: "/work/order-studio-tailor" },
  openGraph: {
    title: "Top Man Tailor — Order Studio Case Study — Digital Hujra",
    description:
      "How Digital Hujra built Order Studio for Top Man Tailor in Batkhela — a custom order-management and retail POS system covering orders, customers, karigars, measurements, payments, inventory, and analytics.",
    url: "https://www.digitalhujra.com/work/order-studio-tailor",
    type: "website",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",            "item": "https://www.digitalhujra.com/" },
    { "@type": "ListItem", "position": 2, "name": "Work",            "item": "https://www.digitalhujra.com/work" },
    { "@type": "ListItem", "position": 3, "name": "Top Man Tailor",  "item": "https://www.digitalhujra.com/work/order-studio-tailor" },
  ],
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Order Studio",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description":
    "Custom order-management and retail POS system built by Digital Hujra for Top Man Tailor — orders, customers, karigars, measurement templates, payments, inventory, and analytics.",
  "creator": { "@type": "Organization", "name": "Digital Hujra", "url": "https://www.digitalhujra.com" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
};

const ACCENT = "#E4002B";
const ACCENT_SOFT = "#FF5C7A";

const SERVICES = [
  {
    icon: "🧾",
    name: "Order Management",
    desc: "Create a stitching order in seconds, attach the customer, garment, and due date, assign it to a karigar, and follow it from booked to ready-for-pickup — no more paper slips.",
    accent: ACCENT_SOFT,
  },
  {
    icon: "📏",
    name: "Measurement Templates",
    desc: "Reusable templates per garment — Shalwar Qameez, shirt, waistcoat — with custom fields the shop defines once. Every new order starts from a saved template instead of a blank notebook page.",
    accent: "var(--blue-2)",
  },
  {
    icon: "👥",
    name: "Customer Records",
    desc: "A searchable profile for every customer with a unique ID, phone, full order history, and last-order date — pull up a returning customer and their measurements by name or number.",
    accent: ACCENT_SOFT,
  },
  {
    icon: "✂️",
    name: "Karigar Management",
    desc: "A roster of every karigar with speciality and live job load — see who has capacity before assigning work, and keep the workshop balanced instead of overloading one tailor.",
    accent: "var(--blue-2)",
  },
  {
    icon: "💰",
    name: "Payments & Balances",
    desc: "Record advances and part-payments against each order, see the outstanding balance instantly, and get a running list of pending dues across every open order plus a full payment history.",
    accent: ACCENT_SOFT,
  },
  {
    icon: "🛍️",
    name: "Retail POS & Products",
    desc: "A ready-made-garment side of the shop — product catalogue with sized and coloured variants, pricing, and a fast New Sale screen for walk-in retail customers.",
    accent: "var(--blue-2)",
  },
  {
    icon: "📦",
    name: "Inventory Control",
    desc: "Per-variant stock with low-stock thresholds, one-tap restock and adjust, auto-generated SKUs, and a last-restocked date — so the shop knows what to reorder before it runs out.",
    accent: ACCENT_SOFT,
  },
  {
    icon: "📊",
    name: "Dashboard & Analytics",
    desc: "Revenue for today, this week, this month, and all-time; inventory value on hand; average sale; top products; payment-method split; and a live recent-sales feed — the whole business on one screen.",
    accent: "var(--blue-2)",
  },
];

const GALLERY: { label: string; emoji: string; swatch: string; image?: string }[] = [
  { label: "Retail Dashboard · Revenue & Analytics",   emoji: "📊", swatch: "rgba(229,9,20,0.42)",  image: "/work/order-studio-tailor/retail-dashboard.webp" },
  { label: "Orders · Customer Records",                emoji: "👥", swatch: "rgba(229,9,20,0.34)",  image: "/work/order-studio-tailor/customers.webp" },
  { label: "Karigars · Workshop Roster",              emoji: "✂️", swatch: "rgba(42,157,244,0.32)", image: "/work/order-studio-tailor/karigars.webp" },
  { label: "Payments · Order Balances & History",      emoji: "💰", swatch: "rgba(229,9,20,0.30)",  image: "/work/order-studio-tailor/payments.webp" },
  { label: "Settings · Shop & Measurement Templates",  emoji: "📏", swatch: "rgba(42,157,244,0.30)", image: "/work/order-studio-tailor/settings-measurement-templates.webp" },
  { label: "Shop · Retail Products & Variants",        emoji: "🛍️", swatch: "rgba(229,9,20,0.28)",  image: "/work/order-studio-tailor/retail-products.webp" },
  { label: "Shop · Inventory & Low-Stock Alerts",      emoji: "📦", swatch: "rgba(42,157,244,0.26)", image: "/work/order-studio-tailor/inventory.webp" },
  { label: "Order Studio · Sign In",                   emoji: "🔐", swatch: "rgba(229,9,20,0.24)",  image: "/work/order-studio-tailor/sign-in.webp" },
];

const STACK = [
  { k: "Platform",   v: "Responsive web app — desktop, tablet & phone" },
  { k: "Modules",    v: "Orders · Customers · Karigars · Payments · Retail POS · Inventory" },
  { k: "Access",     v: "Admin sign-in with global search across orders, customers & karigars" },
  { k: "Theme",      v: "Built-in dark & light mode" },
  { k: "Support",    v: "Staff training + ongoing WhatsApp support" },
];

export default function OrderStudioTailorPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <Nav />
      <main id="main-content" aria-label="Top Man Tailor — Order Studio case study">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          aria-label="Project hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 80,
            background: "var(--hero-section-bg)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", left: "5%", top: "8%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(229,9,20,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: "8%", bottom: "6%", width: "32vw", height: "32vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,244,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)" }} />

          <div className="wrap-mobile" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40, justifyContent: "center" }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <a href="/#work" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>WORK</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: ACCENT_SOFT, letterSpacing: "0.12em" }}>TOP MAN TAILOR</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(229,9,20,0.4)", borderRadius: 999, background: "rgba(229,9,20,0.08)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: ACCENT_SOFT }}>🧵 BATKHELA, MALAKAND · CUSTOM SOFTWARE · DELIVERED &amp; LIVE</span>
            </div>

            <h1
              className="display"
              style={{ fontSize: "clamp(40px, 6.5vw, 84px)", lineHeight: 0.98, margin: "0 0 20px", letterSpacing: "-0.038em" }}
            >
              Top Man Tailor
            </h1>
            <p className="mono" style={{ fontSize: 13, letterSpacing: "0.2em", color: "var(--ink-mute)", margin: "0 0 28px" }}>
              PROJECT · <span style={{ color: ACCENT_SOFT }}>ORDER STUDIO</span>
            </p>

            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 680, margin: "0 auto 36px" }}>
              A busy menswear tailoring house in Batkhela was running everything on order slips and measurement
              notebooks. We built <strong style={{ color: "var(--ink)" }}>Order Studio</strong> — a custom web
              application that puts every order, customer, karigar, measurement, payment, and the entire
              ready-made retail counter into one system.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48, justifyContent: "center" }}>
              {["Custom Software", "Order Management", "Measurement Templates", "Retail POS", "Inventory", "Analytics"].map(tag => (
                <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500, background: "rgba(229,9,20,0.1)", border: "1px solid rgba(229,9,20,0.28)", color: ACCENT_SOFT }}>{tag}</span>
              ))}
            </div>

            {/* Hero preview image */}
            <div
              style={{
                position: "relative",
                maxWidth: 900,
                margin: "0 auto",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid var(--line-2)",
                boxShadow: "0 40px 90px -30px rgba(229,9,20,0.35), 0 0 0 1px rgba(255,255,255,0.03)",
              }}
            >
              <img
                src="/work/order-studio-tailor/retail-dashboard.webp"
                alt="Order Studio retail dashboard for Top Man Tailor, shown on desktop and mobile"
                width={1600}
                height={1223}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            </div>

            <div className="cs-hero-ctas" style={{ marginTop: 44 }}>
              <a href="/contact" className="btn btn-primary">Get software for your business <Arrow /></a>
              <a href="/#work" className="btn btn-ghost">View all work <Arrow /></a>
            </div>
          </div>
        </section>

        {/* ── The Problem ──────────────────────────────────── */}
        <section aria-label="The problem" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: ACCENT }} />
              <span className="eyebrow" style={{ color: ACCENT_SOFT }}>The problem</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 1.08, margin: "0 0 28px", letterSpacing: "-0.025em" }}>
              A growing shop, run on <span style={{ color: ACCENT_SOFT }}>paper.</span>
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 18px" }}>
              Orders were written on carbon-copy slips. Measurements lived in a stack of notebooks that had to be
              searched by hand every time a customer came back. There was no clear picture of which karigar was
              overloaded, which orders still had a balance due, or how the ready-made retail counter was actually
              performing.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
              The shop needed one system — fast enough to use at the counter, simple enough for every staff member,
              and built around how a tailoring business in KP actually works.
            </p>
          </div>
        </section>

        {/* ── What We Built ────────────────────────────────── */}
        <section aria-label="What we built" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "linear-gradient(180deg, var(--night-2), var(--night))" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: ACCENT }} />
              <span className="eyebrow" style={{ color: ACCENT_SOFT }}>What we built · 8 modules</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              One system, <span style={{ color: ACCENT_SOFT }}>end to end.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
              {SERVICES.map(s => (
                <article key={s.name} className="card" style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
                  <span style={{ fontSize: 36 }}>{s.icon}</span>
                  <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "-0.01em", color: s.accent }}>{s.name}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: "var(--ink-soft)" }}>{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────── */}
        <section aria-label="Project gallery" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--blue-2)" }} />
              <span className="eyebrow" style={{ color: "var(--blue-2)" }}>Screens · Order Studio</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              The software, <span style={{ color: "var(--blue-2)" }}>screen by screen.</span>
            </h2>

            <div className="cs-gallery-grid">
              {GALLERY.map((g) => (
                <div
                  key={g.label}
                  style={{
                    position: "relative",
                    aspectRatio: "4/3",
                    borderRadius: 12,
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${g.swatch} 0%, var(--card-dark-stop) 100%)`,
                    border: "1px solid var(--line)",
                  }}
                >
                  {g.image ? (
                    <img src={g.image} alt={g.label} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  ) : (
                    <>
                      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 8px, transparent 8px 18px)" }} />
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: 52 }}>{g.emoji}</span>
                      </div>
                    </>
                  )}
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 14px 12px", background: "linear-gradient(transparent, rgba(5,11,23,0.9))" }}>
                    <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-soft)", letterSpacing: "0.08em" }}>{g.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Build details ───────────────────────────────── */}
        <section aria-label="Build details" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "linear-gradient(180deg, var(--night-2), var(--night))" }}>
          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
              <span style={{ width: 28, height: 1, background: ACCENT }} />
              <span className="eyebrow" style={{ color: ACCENT_SOFT }}>Build details</span>
            </div>
            <dl style={{ margin: 0, display: "flex", flexDirection: "column", gap: 0 }}>
              {STACK.map((row, i) => (
                <div
                  key={row.k}
                  style={{
                    display: "flex",
                    gap: 24,
                    flexWrap: "wrap",
                    padding: "20px 0",
                    borderTop: i === 0 ? "1px solid var(--line)" : "none",
                    borderBottom: "1px solid var(--line)",
                  }}
                >
                  <dt className="mono" style={{ flex: "0 0 140px", fontSize: 12, letterSpacing: "0.12em", color: "var(--ink-mute)", textTransform: "uppercase" }}>{row.k}</dt>
                  <dd style={{ margin: 0, flex: 1, minWidth: 220, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Outcome ──────────────────────────────────────── */}
        <section aria-label="Project outcome" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, justifyContent: "center" }}>
              <span style={{ width: 28, height: 1, background: ACCENT }} />
              <span className="eyebrow" style={{ color: ACCENT_SOFT }}>Result · Delivered &amp; in use</span>
              <span style={{ width: 28, height: 1, background: ACCENT }} />
            </div>
            <p className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15, margin: "0 auto 28px", maxWidth: 760, letterSpacing: "-0.02em" }}>
              Top Man Tailor runs the whole shop from one screen — orders, measurements, karigars, payments, and retail.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 580, margin: "0 auto 48px", lineHeight: 1.65 }}>
              The order slips and measurement notebooks are gone. Staff were trained on every module, the shop owns
              the system and its data outright, and Digital Hujra stays on call for support and future changes.
            </p>
            <a href="/contact" className="btn btn-primary">Start your software project <Arrow /></a>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
