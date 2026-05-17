"use client";


const FOOTER_COLS = [
  {
    t: "Services",
    l: ["POS Systems", "E-commerce", "Branding", "Social Media", "Photography", "Video", "Graphics"],
  },
  { t: "Studio", l: ["About", "Process", "Work", "Coverage", "Careers"] },
  { t: "Contact", l: ["WhatsApp", "info@digitalhujra.com", "+92 371 5868088", "Book a session"] },
  { t: "Connect", l: ["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube"] },
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--night-2)",
        borderTop: "1px solid var(--line)",
        padding: "56px 0 36px",
      }}
    >
      <div className="wrap-mobile" style={{ maxWidth: 1360, margin: "0 auto", padding: "0 36px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1.2fr",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid var(--line)",
          }}
        >
          {/* Brand column */}
          <div>
            <a href="/" aria-label="Digital Hujra — back to top" style={{ display: "inline-flex", marginBottom: 18 }}>
              <img
                src="/logo.png"
                alt="Digital Hujra"
                className="footer-logo"
                style={{ height: 44, width: "auto", display: "block", maxWidth: "180px" }}
              />
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
            <address style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7, fontStyle: "normal" }}>
              <div
                className="mono"
                style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.15em", marginBottom: 6 }}
              >
                STUDIO
              </div>
              Popular Shopping Mall Plaza
              <br />
              Near Gul Rang Khadi Hall, Amandara Batkhela, KP
            </address>
          </div>

          {/* Nav columns */}
          {FOOTER_COLS.map((col) => (
            <nav key={col.t} aria-label={`${col.t} links`}>
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
                      href={x === "info@digitalhujra.com" ? "mailto:info@digitalhujra.com" : x === "+92 371 5868088" ? "tel:+923715868088" : x === "WhatsApp" ? "https://wa.me/923715868088" : "#"}
                      style={{ fontSize: 13.5, color: "var(--ink-soft)", transition: "color .25s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-soft)")}
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
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
          <p className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", margin: 0 }}>
            © 2026 DIGITAL HUJRA · BATKHELA · MALAKAND · KP · PAKISTAN
          </p>
          <nav aria-label="Legal links" style={{ display: "flex", gap: 24, fontSize: 12, color: "var(--ink-mute)" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
