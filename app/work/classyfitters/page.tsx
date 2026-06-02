import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Classyfitters Case Study — Digital Hujra",
  description:
    "How Digital Hujra delivered an e-commerce store, product shoot, WhatsApp Business setup, and Google Business profile for Classyfitters in Batkhela, KP.",
};

const SERVICES = [
  {
    icon: "🛒",
    name: "E-commerce Store",
    desc: "A fully functional online store with product listings, Cash on Delivery, and WhatsApp checkout — built and handed over ready to sell.",
    accent: "var(--amber)",
  },
  {
    icon: "📷",
    name: "Product Shoot",
    desc: "Professional fashion product photography for the full catalog — clean studio shots and detail images ready for the store and social media.",
    accent: "var(--blue-2)",
  },
  {
    icon: "💬",
    name: "WhatsApp Business Setup",
    desc: "WhatsApp Business profile configured with catalogue, quick replies, business hours, and a professional contact setup.",
    accent: "var(--amber)",
  },
  {
    icon: "🗺️",
    name: "Google Business Setup",
    desc: "Google Business Profile created, verified, and optimised so Classyfitters appears in local searches across Batkhela.",
    accent: "var(--blue-2)",
  },
];

const GALLERY = [
  { label: "E-commerce Store · Homepage",       emoji: "🛒", swatch: "rgba(245,163,58,0.45)", aspect: "16/9" },
  { label: "E-commerce Store · Product Listing", emoji: "👗", swatch: "rgba(245,163,58,0.30)", aspect: "4/3"  },
  { label: "Product Shoot · Fashion Collection", emoji: "📷", swatch: "rgba(245,163,58,0.35)", aspect: "4/3"  },
  { label: "Product Shoot · Detail Shots",       emoji: "✨", swatch: "rgba(42,157,244,0.30)",  aspect: "4/3"  },
  { label: "WhatsApp Business · Profile",        emoji: "💬", swatch: "rgba(91,214,138,0.30)", aspect: "4/3"  },
  { label: "Google Business · Live Profile",     emoji: "🗺️", swatch: "rgba(91,214,138,0.25)", aspect: "4/3"  },
];

export default function ClassyfittersPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Classyfitters case study">

        {/* ── Hero ─────────────────────────────────────────── */}
        <section
          aria-label="Project hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 80,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", left: "5%", top: "10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(245,163,58,0.10) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)" }} />

          <div className="wrap-mobile" style={{ maxWidth: 960, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <a href="/#work" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>WORK</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>CLASSYFITTERS</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>📍 BATKHELA, KP · DELIVERED &amp; LIVE</span>
            </div>

            <h1
              className="display"
              style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.95, margin: "0 0 28px", letterSpacing: "-0.038em" }}
            >
              Classyfitters
            </h1>

            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 640, margin: "0 0 36px" }}>
              A Batkhela fashion brand that needed a complete digital launch. We delivered an e-commerce store, a full product shoot, WhatsApp Business setup, and Google Business profile — all in one engagement, all fully live.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48 }}>
              {["E-commerce Store", "Product Shoot", "WhatsApp Business", "Google Business"].map(tag => (
                <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500, background: "rgba(245,163,58,0.1)", border: "1px solid rgba(245,163,58,0.25)", color: "var(--amber-soft)" }}>{tag}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/contact" className="btn btn-primary">Start a similar project <Arrow /></a>
              <a href="/#work" className="btn btn-ghost">View all work <Arrow /></a>
            </div>
          </div>
        </section>

        {/* ── What We Delivered ────────────────────────────── */}
        <section aria-label="Services delivered" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>What we delivered · 4 services</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              Every piece, <span style={{ color: "var(--amber)" }}>fully delivered.</span>
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
        <section aria-label="Project gallery" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "linear-gradient(180deg, var(--night-2), var(--night))" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--blue-2)" }} />
              <span className="eyebrow" style={{ color: "var(--blue-2)" }}>Project gallery · Classyfitters</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              The work, <span style={{ color: "var(--blue-2)" }}>in full.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {GALLERY.map((g) => (
                <div
                  key={g.label}
                  style={{
                    position: "relative",
                    aspectRatio: g.aspect,
                    borderRadius: 12,
                    overflow: "hidden",
                    background: `linear-gradient(135deg, ${g.swatch} 0%, #050B17 100%)`,
                    border: "1px solid var(--line)",
                  }}
                >
                  <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 8px, transparent 8px 18px)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 52 }}>{g.emoji}</span>
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 14px 12px", background: "linear-gradient(transparent, rgba(5,11,23,0.9))" }}>
                    <span className="mono" style={{ fontSize: 11, fontWeight: 600, color: "var(--ink-soft)", letterSpacing: "0.08em" }}>{g.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Outcome ──────────────────────────────────────── */}
        <section aria-label="Project outcome" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, justifyContent: "center" }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Result · Client satisfied</span>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
            </div>
            <p className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15, margin: "0 auto 28px", maxWidth: 740, letterSpacing: "-0.02em" }}>
              Classyfitters is now selling online, found on Google, and reachable on WhatsApp — completely set up.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.65 }}>
              From first conversation to final handover, every service was delivered and the client was fully trained to manage their store, WhatsApp, and Google Business profile independently. They were very satisfied with the results.
            </p>
            <a href="/contact" className="btn btn-primary">Start your project <Arrow /></a>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
