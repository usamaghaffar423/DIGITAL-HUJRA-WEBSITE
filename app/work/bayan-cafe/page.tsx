import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Bayan Cafe Case Study — Digital Hujra",
  description:
    "How Digital Hujra built a complete brand identity for Bayan Cafe — logo design, color system, typography, brand guidelines, social media kit, stationery, and print collateral.",
};

const SERVICES = [
  {
    icon: "✏️",
    name: "Logo Design",
    desc: "A distinctive logo mark crafted to reflect Bayan Cafe's character — versatile across digital screens, print menus, and cafe signage.",
    accent: "var(--amber)",
  },
  {
    icon: "🎨",
    name: "Color System",
    desc: "A curated primary and secondary palette with exact HEX, RGB, and CMYK values — consistent across every touchpoint from packaging to social media.",
    accent: "var(--blue-2)",
  },
  {
    icon: "🔤",
    name: "Typography",
    desc: "Heading and body typeface selection with clear usage hierarchy — so every piece of communication looks intentional and on-brand.",
    accent: "var(--amber)",
  },
  {
    icon: "📖",
    name: "Brand Guidelines",
    desc: "A complete brand book covering logo usage, color rules, spacing, do's and don'ts — everything the cafe needs to stay consistent as they grow.",
    accent: "var(--blue-2)",
  },
  {
    icon: "📱",
    name: "Social Media Kit",
    desc: "Ready-to-use post templates, story frames, and highlight covers — designed so Bayan Cafe can publish on-brand content without a designer.",
    accent: "var(--amber)",
  },
  {
    icon: "🖨️",
    name: "Stationery & Print",
    desc: "Business cards, menu layouts, and print-ready collateral — all delivered in press-ready files for local printing in Batkhela and beyond.",
    accent: "var(--blue-2)",
  },
];

const GALLERY: { label: string; emoji: string; swatch: string; image?: string }[] = [
  { label: "Brand Kit · Page 1",   emoji: "✏️", swatch: "rgba(180,120,60,0.45)",  image: "/work/bayan-cafe/1.webp"  },
  { label: "Brand Kit · Page 2",   emoji: "🎨", swatch: "rgba(180,120,60,0.38)",  image: "/work/bayan-cafe/2.webp"  },
  { label: "Brand Kit · Page 3",   emoji: "🔤", swatch: "rgba(180,120,60,0.32)",  image: "/work/bayan-cafe/3.webp"  },
  { label: "Brand Kit · Page 4",   emoji: "📖", swatch: "rgba(42,157,244,0.32)",  image: "/work/bayan-cafe/4.webp"  },
  { label: "Brand Kit · Page 5",   emoji: "📐", swatch: "rgba(42,157,244,0.28)",  image: "/work/bayan-cafe/5.webp"  },
  { label: "Brand Kit · Page 6",   emoji: "📱", swatch: "rgba(180,120,60,0.30)",  image: "/work/bayan-cafe/6.webp"  },
  { label: "Brand Kit · Page 7",   emoji: "🖨️", swatch: "rgba(42,157,244,0.25)",  image: "/work/bayan-cafe/7.webp"  },
  { label: "Brand Kit · Page 8",   emoji: "💼", swatch: "rgba(180,120,60,0.28)",  image: "/work/bayan-cafe/8.webp"  },
  { label: "Brand Kit · Page 9",   emoji: "🏷️", swatch: "rgba(42,157,244,0.30)",  image: "/work/bayan-cafe/9.webp"  },
  { label: "Brand Kit · Page 10",  emoji: "☕", swatch: "rgba(180,120,60,0.35)",  image: "/work/bayan-cafe/10.webp" },
];

export default function BayanCafePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Bayan Cafe case study">

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
          <div aria-hidden="true" style={{ position: "absolute", left: "5%", top: "10%", width: "50vw", height: "50vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,120,60,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", right: "10%", bottom: "5%", width: "30vw", height: "30vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(42,157,244,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div aria-hidden="true" className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.3, pointerEvents: "none", maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)", WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)" }} />

          <div className="wrap-mobile" style={{ maxWidth: 960, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40, justifyContent: "center" }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <a href="/#work" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>WORK</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>BAYAN CAFE</span>
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>☕ BATKHELA, KP · BRANDING KIT DELIVERED</span>
            </div>

            {/* Logo */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
              <img
                src="/work/bayan-cafe/LOGO.webp"
                alt="Bayan Cafe logo"
                style={{ height: 100, width: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 24px rgba(180,120,60,0.3))" }}
              />
            </div>

            <h1
              className="display"
              style={{ fontSize: "clamp(42px, 7vw, 90px)", lineHeight: 0.95, margin: "0 0 28px", letterSpacing: "-0.038em" }}
            >
              Bayan Cafe
            </h1>

            <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 640, margin: "0 auto 36px" }}>
              A Batkhela cafe that needed an identity as inviting as their space. We designed a complete branding kit — logo, color system, typography, brand guidelines, social media templates, and print collateral — all delivered and ready to use.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 48, justifyContent: "center" }}>
              {["Logo Design", "Color System", "Typography", "Brand Guidelines", "Social Media Kit", "Print & Stationery"].map(tag => (
                <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500, background: "rgba(180,120,60,0.12)", border: "1px solid rgba(180,120,60,0.3)", color: "var(--amber)" }}>{tag}</span>
              ))}
            </div>

            <div className="cs-hero-ctas">
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
              <span className="eyebrow" style={{ color: "var(--amber)" }}>What we delivered · 6 brand deliverables</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              An identity built to last, <span style={{ color: "var(--amber)" }}>not just look good.</span>
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
              <span className="eyebrow" style={{ color: "var(--blue-2)" }}>Brand kit · Bayan Cafe</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, margin: "0 0 56px", letterSpacing: "-0.025em" }}>
              The full brand, <span style={{ color: "var(--blue-2)" }}>page by page.</span>
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

        {/* ── Outcome ──────────────────────────────────────── */}
        <section aria-label="Project outcome" style={{ padding: "100px 0", borderTop: "1px solid var(--line)", background: "var(--night)" }}>
          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", textAlign: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, justifyContent: "center" }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Result · Brand kit delivered</span>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
            </div>
            <p className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.15, margin: "0 auto 28px", maxWidth: 740, letterSpacing: "-0.02em" }}>
              Bayan Cafe now has a brand identity that looks the same on a menu, an Instagram post, or a business card.
            </p>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 580, margin: "0 auto 48px", lineHeight: 1.65 }}>
              Six deliverables, all in one engagement — every file handed over in print-ready and digital formats. Bayan Cafe can now print, post, and grow without needing a designer for every piece of content.
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
