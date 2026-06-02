import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Raazina Essence Case Study — Digital Hujra",
  description:
    "How Digital Hujra delivered 50+ professional perfume product shots across two shoots and ongoing weekly social media posts for Raazina Essence, Swat, KP.",
};

const SERVICES = [
  {
    icon: "📷",
    name: "Product Shoot — Group 1",
    desc: "First shoot: 25+ perfume product images — hero shots, flat lays, and styled arrangements for Raazina Ice perfume.",
    accent: "var(--amber)",
  },
  {
    icon: "✨",
    name: "Product Shoot — Group 2",
    desc: "Second shoot: 25+ additional images including lifestyle setups, glass detail shots, and varied backdrops — over 50 images total.",
    accent: "var(--blue-2)",
  },
  {
    icon: "📲",
    name: "Social Media Posts",
    desc: "Weekly designed posts for Instagram and Facebook — consistent, on-brand content delivered every week to keep the audience engaged.",
    accent: "var(--amber)",
  },
];

const GALLERY: { label: string; emoji: string; swatch: string; image?: string }[] = [
  { label: "Product Shoot · Group 1 · Perfume Hero",  emoji: "🌙", swatch: "rgba(120,60,180,0.55)", image: "/work/raazina-essence/RAAZINA-01.png" },
  { label: "Product Shoot · Group 1 · Flat Lay",      emoji: "💜", swatch: "rgba(120,60,180,0.40)", image: "/work/raazina-essence/RAAZINA-02.png" },
  { label: "Product Shoot · Group 2 · Lifestyle",     emoji: "✨", swatch: "rgba(120,60,180,0.45)" },
  { label: "Product Shoot · Group 2 · Detail & Glass",emoji: "💎", swatch: "rgba(42,157,244,0.35)"  },
  { label: "Social Media · Weekly Post",               emoji: "📲", swatch: "rgba(245,163,58,0.30)" },
  { label: "Social Media · Reel Cover",               emoji: "🎞️", swatch: "rgba(245,163,58,0.25)" },
];

export default function RaazinaEssencePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Raazina Essence case study">

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
          <div aria-hidden="true" style={{ position: "absolute", right: "5%", top: "10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(120,60,180,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", left: "10%", bottom: "10%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,244,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)" }} />

          <div className="wrap-mobile" style={{ maxWidth: 960, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40, justifyContent: "center" }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <a href="/#work" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>WORK</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>RAAZINA ESSENCE</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>📍 SHAMOZO, SWAT, KP · DELIVERED &amp; ONGOING</span>
            </div>

            <h1
              className="display"
              style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.95, margin: "0 0 28px", letterSpacing: "-0.038em" }}
            >
              Raazina Essence
            </h1>

            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 640, margin: "0 auto 36px" }}>
              A Swat-based perfume brand with a premium product that deserved premium visuals. We delivered two complete product shoots — over 50 images total — and ongoing weekly social media posts that keep Raazina Essence consistently in front of their audience.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48, justifyContent: "center" }}>
              {["Product Photography", "50+ Images", "2 Shoot Groups", "Weekly Social Media"].map(tag => (
                <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500, background: "rgba(245,163,58,0.1)", border: "1px solid rgba(245,163,58,0.25)", color: "var(--amber-soft)" }}>{tag}</span>
              ))}
            </div>

            <div className="cs-hero-ctas">
              <a href="/contact" className="btn btn-primary">Book a product shoot <Arrow /></a>
              <a href="/#work" className="btn btn-ghost">View all work <Arrow /></a>
            </div>
          </div>
        </section>

        {/* ── What We Delivered ────────────────────────────── */}
        <section aria-label="Services delivered" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>What we delivered · 3 services</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              50+ images, <span style={{ color: "var(--amber)" }}>zero compromise.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
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
              <span className="eyebrow" style={{ color: "var(--blue-2)" }}>Project gallery · Raazina Essence</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              The shoot, <span style={{ color: "var(--blue-2)" }}>in full.</span>
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
                    background: `linear-gradient(135deg, ${g.swatch} 0%, #050B17 100%)`,
                    border: "1px solid var(--line)",
                  }}
                >
                  {g.image ? (
                    <img
                      src={g.image}
                      alt={g.label}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
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

        {/* ── Testimonial ──────────────────────────────────── */}
        <section aria-label="Client testimonial" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 860, margin: "0 auto", padding: "0 36px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32, justifyContent: "center" }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Client words</span>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
              {[1,2,3,4,5].map(n => <span key={n} style={{ color: "var(--amber)", fontSize: 20 }}>★</span>)}
            </div>
            <blockquote style={{ margin: "0 0 32px", padding: 0, fontStyle: "italic", fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.5, color: "var(--ink-soft)" }}>
              &ldquo;Digital Hujra ne hamare Raazina Ice perfume ke liye jo shoot kiya — woh hamari expectations se kahin behtar tha. Professional, fast, aur bilkul woh feel jo hum chahte the.&rdquo;
            </blockquote>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "var(--ink)" }}>Raazina Essence</div>
              <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.1em", marginTop: 4 }}>PRODUCT PHOTOGRAPHY CLIENT · SWAT, KP</div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
