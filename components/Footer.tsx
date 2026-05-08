"use client";

import { HujraMark } from "@/components/atoms";

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--night-2)",
        borderTop: "1px solid var(--line)",
        padding: "56px 0 36px",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.2fr",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div>
            <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <HujraMark size={36} />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>
                  <span style={{ color: "var(--blue-2)" }}>Digital</span>
                  <span style={{ color: "var(--amber)" }}>Hujra</span>
                </span>
                <span
                  className="mono"
                  style={{ fontSize: 9, letterSpacing: "0.18em", color: "var(--ink-mute)", marginTop: 4 }}
                >
                  EST · 2020
                </span>
              </div>
            </a>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--ink-soft)",
                maxWidth: 320,
                margin: "0 0 20px",
              }}
            >
              A small, honest digital studio bringing KP businesses online — POS, e-commerce, branding,
              social, shoots and edits, all under one roof.
            </p>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7 }}>
              <div
                className="mono"
                style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.15em", marginBottom: 6 }}
              >
                STUDIO
              </div>
              Main Bazaar · Batkhela
              <br />
              District Malakand · KP, Pakistan
            </div>
          </div>
          {[
            {
              t: "Services",
              l: ["POS Systems", "E-commerce", "Branding", "Social Media", "Photography", "Video", "Graphics"],
            },
            { t: "Studio", l: ["About", "Process", "Work", "Coverage", "Careers"] },
            { t: "Contact", l: ["WhatsApp", "hello@digitalhujra.pk", "+92 371 5868088", "Book a session"] },
            { t: "Connect", l: ["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube"] },
          ].map((col) => (
            <div key={col.t}>
              <div
                className="mono"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  color: "var(--ink-mute)",
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                {col.t}
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {col.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#"
                      style={{ fontSize: 13.5, color: "var(--ink-soft)", transition: "color .25s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-soft)")}
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 28,
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em" }}>
            © 2026 DIGITAL HUJRA · BATKHELA · MALAKAND · KP · PAKISTAN
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 12, color: "var(--ink-mute)" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
