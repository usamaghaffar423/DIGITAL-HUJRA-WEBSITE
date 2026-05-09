import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CtaBanner } from "@/components/CtaBanner";
import { TEAM } from "@/lib/data";
import { Arrow } from "@/components/atoms";

export const metadata: Metadata = {
  title: "Our Team — Digital Hujra | The People Behind Every Project",
  description:
    "Meet the designers, developers, photographers, and strategists who make Digital Hujra run. A local KP team based in Batkhela, Malakand.",
};

export default function TeamPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main-content" aria-label="Digital Hujra team">

        {/* ── Page Hero ─────────────────────────────────── */}
        <section
          aria-label="Team hero"
          style={{
            position: "relative",
            paddingTop: "calc(var(--nav-height) + 80px)",
            paddingBottom: 0,
            background: "linear-gradient(180deg, #0A1628 0%, #050B17 100%)",
            overflow: "hidden",
          }}
        >
          {/* Green glow top-center */}
          <div aria-hidden="true" style={{
            position: "absolute", left: "50%", top: "-5%", transform: "translateX(-50%)",
            width: "55vw", height: "40vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(91,214,138,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden="true" className="grid-bg" style={{
            position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none",
            maskImage: "radial-gradient(ellipse at 50% 35%, black 25%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 25%, transparent 72%)",
          }} />

          <div className="wrap-mobile" style={{ maxWidth: 900, margin: "0 auto", padding: "0 36px", position: "relative", zIndex: 2, textAlign: "center" }}>
            {/* Breadcrumb */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <a href="/" className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", textDecoration: "none" }}>HOME</a>
              <span style={{ color: "var(--line-2)" }}>/</span>
              <span className="mono" style={{ fontSize: 11, color: "var(--amber)", letterSpacing: "0.12em" }}>TEAM</span>
            </div>

            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", border: "1px solid rgba(91,214,138,0.3)", borderRadius: 999, background: "rgba(91,214,138,0.07)", marginBottom: 28 }}>
              <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", background: "#5BD68A", display: "inline-block" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "#5BD68A" }}>6 SPECIALISTS · BATKHELA-BORN</span>
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
              <span style={{ color: "var(--ink)" }}>The people</span>
              <br />
              <span style={{ color: "var(--blue-2)" }}>behind the work.</span>
            </h1>

            <p style={{ maxWidth: 520, fontSize: 19, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 auto 44px" }}>
              A small, focused team from KP — designers, developers, photographers, and social media managers who care about local business as much as you do.
            </p>

            <div style={{ marginBottom: 72 }}>
              <a href="/contact" className="btn btn-primary">Work with us <Arrow /></a>
            </div>
          </div>

          {/* Team avatar strip — unique to Team hero */}
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
              gridTemplateColumns: "repeat(6, 1fr)",
            }}>
              {TEAM.map((member, i) => (
                <div
                  key={member.name}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    padding: "28px 12px",
                    borderRight: i < TEAM.length - 1 ? "1px solid var(--line)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: `${member.color}22`,
                      border: `1px solid ${member.color}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 16,
                      fontWeight: 800,
                      color: member.color,
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.01em" }}>{member.name}</div>
                    <div className="mono" style={{ fontSize: 9, letterSpacing: "0.12em", color: "var(--ink-mute)", marginTop: 3 }}>{member.role.split(" ")[0].toUpperCase()}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team Grid ─────────────────────────────────── */}
        <section
          aria-label="Team members"
          style={{
            padding: "100px 0",
            borderTop: "1px solid var(--line)",
            background: "var(--night)",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              aria-label="Team member cards"
            >
              {TEAM.map((member) => (
                <li key={member.name} className="card" style={{ padding: "36px 28px", display: "flex", flexDirection: "column", gap: 20 }}>
                  {/* Avatar */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div
                      aria-hidden="true"
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        background: `${member.color}22`,
                        border: `1px solid ${member.color}55`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: 20,
                        fontWeight: 800,
                        color: member.color,
                        flexShrink: 0,
                      }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.015em" }}>{member.name}</div>
                      <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-mute)", marginTop: 4 }}>
                        {member.role.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  <hr className="rule" />

                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-soft)", flexGrow: 1 }}>
                    {member.bio}
                  </p>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: member.color }}>{member.since.toUpperCase()}</span>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: `${member.color}18`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: member.color, lineHeight: 0 }} aria-hidden="true"><Arrow size={12} rotate={-45} /></span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Culture strip ─────────────────────────────── */}
        <section
          aria-label="Our culture"
          style={{
            padding: "80px 0",
            borderTop: "1px solid var(--line)",
            background: "linear-gradient(180deg, var(--night-2), var(--night))",
          }}
        >
          <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <span style={{ width: 28, height: 1, background: "var(--amber)" }} />
                  <span className="eyebrow" style={{ color: "var(--amber)" }}>Our culture · Batkhela-born</span>
                </div>
                <h2 className="display" style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.02, margin: "0 0 24px", letterSpacing: "-0.025em" }}>
                  A small team that <span style={{ color: "var(--amber)" }}>punches above its weight.</span>
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 20px" }}>
                  We&apos;re a tight group — everyone knows each other, everyone communicates directly. You deal with the person doing the actual work, not a project manager who relays messages.
                </p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-soft)", margin: "0 0 32px" }}>
                  We hire from the local talent pool and invest in growth. Most of our team members started with Digital Hujra as their first professional job — and have grown into specialists.
                </p>
                <a href="/contact" className="btn btn-primary">Work with us <Arrow /></a>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: "Languages spoken", value: "Pashto, Urdu, English" },
                  { label: "Studio location", value: "Main Bazaar, Batkhela" },
                  { label: "Team size", value: "6 full-time specialists" },
                  { label: "Client comms", value: "WhatsApp + email" },
                  { label: "Remote work", value: "Available across KP" },
                ].map((row) => (
                  <div key={row.label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 0",
                    borderBottom: "1px solid var(--line)",
                    gap: 20,
                  }}>
                    <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>{row.label}</span>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)", textAlign: "right" }}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
