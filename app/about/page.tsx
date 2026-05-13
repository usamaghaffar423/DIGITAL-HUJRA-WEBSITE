import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { STATS, DISTRICTS } from "@/lib/data";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "About Us — Digital Hujra | Digital Studio in Batkhela, KP",
  description:
    "Founded in 2026 in Batkhela, Malakand — Digital Hujra helps local KP businesses get online. Our story, values, and the team behind every project.",
};

const VALUES = [
  {
    n: "01",
    title: "Local-first",
    body: "We live here. We shop from the same bazaars, speak the same languages, and understand the specific challenges of running a business in KP. That context shapes every project we take on.",
    color: "var(--blue-2)",
  },
  {
    n: "02",
    title: "Honest pricing",
    body: "No surprise bills, no locked-in retainers you didn't need. We give you a fixed price before work begins — and we stick to it. Plain language, every time.",
    color: "var(--amber)",
  },
  {
    n: "03",
    title: "Accessible to all",
    body: "We explain everything in Urdu, Pashto, or English — whatever works for you. You don't need to know what a CMS is to work with us. We make it easy.",
    color: "var(--blue-2)",
  },
  {
    n: "04",
    title: "Growth-minded",
    body: "A logo is not the finish line. We build tools and channels that compound — stores that sell at 2am, feeds that grow while you sleep, POS that tells you what to stock next.",
    color: "var(--amber)",
  },
];

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="About Digital Hujra">

        {/* ── Page Hero ─────────────────────────────────── */}
        <section
          aria-label="About us hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 0,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          {/* Amber glow center-left */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "5%", top: "15%",
            width: "45vw", height: "45vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,163,58,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          {/* Blue glow center-right */}
          <div aria-hidden="true" style={{
            position: "absolute", right: "5%", top: "5%",
            width: "35vw", height: "35vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(42,157,244,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" className="grid-bg" style={{
            position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none",
            maskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 25%, transparent 72%)",
          }} />

          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>ABOUT</span>
            </div>

            {/* Est badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(245,163,58,0.35)", borderRadius: 999, background: "rgba(245,163,58,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--amber-soft)" }}>EST. 2026 · BATKHELA, MALAKAND</span>
            </div>

            <h1
              className="display"
              style={{
                fontSize: "clamp(48px, 8vw, 118px)",
                lineHeight: 0.93,
                margin: "0 0 28px",
                letterSpacing: "-0.038em",
              }}
            >
              <span style={{ color: "var(--amber)" }}>Where mountains</span>
              <br />
              <span style={{ color: "var(--ink)" }}>meet the modern web.</span>
            </h1>

            <p style={{ maxWidth: 560, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 44px" }}>
              We&apos;re a digital studio from Batkhela, Malakand — born out of a simple observation: KP has incredible businesses, and almost none of them are online.
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 72 }}>
              <a href="/team" className="btn btn-ghost">Meet the team <Arrow /></a>
              <a href="/contact" className="btn btn-primary">Start a project <Arrow /></a>
            </div>
          </div>

          {/* Stats bar — unique to About hero */}
          <div
            style={{
              borderTop: "1px solid var(--line)",
              background: "rgba(255,255,255,0.015)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div style={{
              maxWidth: 1360,
              margin: "0 auto",
              padding: "0 36px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
            }}>
              {STATS.map((s, i) => (
                <div
                  key={s.l}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "32px 16px",
                    borderRight: i < STATS.length - 1 ? "1px solid var(--line)" : "none",
                    textAlign: "center",
                  }}
                >
                  <span
                    className="display"
                    style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: i % 2 === 0 ? "var(--amber)" : "var(--blue-2)", lineHeight: 1 }}
                  >
                    {s.v}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--ink-mute)" }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ─────────────────────────────────── */}
        <section
          aria-label="Our story"
          style={{
            padding: "100px 0",
            borderTop: "1px solid var(--line)",
            background: "var(--night)",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
                  <span className="eyebrow" style={{ color: "var(--amber)" }}>Our story · Est. 2026</span>
                </div>
                <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.02, margin: "0 0 28px", letterSpacing: "-0.025em" }}>
                  Started in a <span style={{ color: "var(--amber)" }}>hujra</span>,<br />
                  built for the bazaar.
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 20px" }}>
                  Digital Hujra was founded in 2026 in Main Bazaar, Batkhela by Osama Ghaffar — a local web developer who kept seeing the same problem: brilliant family-run businesses with no web presence, no POS, no social media. Business done purely on trust and word-of-mouth.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 20px" }}>
                  The pandemic made it urgent. Shops that couldn&apos;t take orders online had no fallback. That&apos;s when Usman turned his small studio into a proper agency — hiring designers, developers, photographers, and social media managers from the local talent pool.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: 0 }}>
                  Today we serve 120+ businesses across 8 KP districts. Our office is still in Main Bazaar, Batkhela. The chai is still free.
                </p>
              </div>

              {/* Studio card */}
              <div>
                <div className="card" style={{
                  padding: "40px 36px",
                  background: "linear-gradient(135deg, rgba(245,163,58,0.06), rgba(10,22,40,0.4))",
                  borderColor: "rgba(245,163,58,0.2)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 32,
                }}>
                  <div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", marginBottom: 8 }}>STUDIO DETAILS</div>
                    <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Digital Hujra</div>
                    <div style={{ fontSize: 14, color: "var(--ink-soft)" }}>Main Bazaar, Batkhela</div>
                    <div style={{ fontSize: 14, color: "var(--ink-soft)" }}>District Malakand, KP, Pakistan</div>
                  </div>
                  <hr className="rule" />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    {STATS.map((s) => (
                      <div key={s.l}>
                        <div className="display" style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", color: "var(--amber)" }}>{s.v}</div>
                        <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 4 }}>{s.l}</div>
                      </div>
                    ))}
                  </div>
                  <hr className="rule" />
                  <div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-mute)", marginBottom: 12 }}>OFFICE HOURS</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      {[
                        { d: "Mon – Sat", t: "9:00 am – 6:00 pm" },
                        { d: "Sunday", t: "Closed" },
                        { d: "WhatsApp", t: "Always available" },
                      ].map((row) => (
                        <div key={row.d} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                          <span style={{ color: "var(--ink-mute)" }}>{row.d}</span>
                          <span style={{ color: "var(--ink-soft)" }}>{row.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ─────────────────────────────────────── */}
        <section
          aria-label="Our values"
          style={{
            padding: "100px 0",
            borderTop: "1px solid var(--line)",
            background: "linear-gradient(180deg, var(--night-2), var(--night))",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>How we work · 4 principles</span>
            </div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.02, margin: "0 0 64px", letterSpacing: "-0.025em" }}>
              Not just a vendor. <span style={{ color: "var(--blue-2)" }}>A partner.</span>
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              {VALUES.map((v) => (
                <article key={v.n} className="card" style={{ padding: "36px 32px", display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: v.color }}>{v.n}</span>
                    <span style={{ width: 32, height: 1, background: v.color, opacity: 0.4 }} />
                  </div>
                  <h3 className="display" style={{ fontSize: 32, margin: 0, letterSpacing: "-0.02em", color: v.color }}>{v.title}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "var(--ink-soft)" }}>{v.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Coverage strip ─────────────────────────────── */}
        <section
          aria-label="Districts served"
          style={{
            padding: "80px 0",
            borderTop: "1px solid var(--line)",
            background: "var(--night)",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
              <span className="eyebrow" style={{ color: "var(--amber)" }}>Coverage · KP districts</span>
            </div>
            <p style={{ fontSize: 17, color: "var(--ink-soft)", maxWidth: 560, marginBottom: 36 }}>
              We work on-location and remotely across Khyber Pakhtunkhwa. If your business is in KP, we can help — no distance too far.
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: 10 }}>
              {DISTRICTS.map((d) => (
                <li key={d} style={{
                  padding: "7px 16px",
                  borderRadius: 999,
                  fontSize: 13,
                  fontWeight: 500,
                  background: "rgba(42,157,244,0.08)",
                  border: "1px solid rgba(42,157,244,0.2)",
                  color: "var(--blue-2)",
                }}>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
