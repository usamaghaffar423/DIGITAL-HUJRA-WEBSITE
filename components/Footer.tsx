"use client";

import { SITE } from "@/lib/data";

const SERVICES_LINKS = [
  { label: "POS Systems",    href: "/services" },
  { label: "E-commerce",     href: "/services" },
  { label: "Branding",       href: "/services" },
  { label: "Social Media",   href: "/services" },
  { label: "Photography",    href: "/services" },
  { label: "Video Editing",  href: "/services" },
  { label: "Graphic Design", href: "/services" },
];

const STUDIO_LINKS = [
  { label: "About",    href: "/about"    },
  { label: "Team",     href: "/team"     },
  { label: "Work",     href: "/#work"    },
  { label: "Packages", href: "/packages" },
  { label: "Contact",  href: "/contact"  },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.instagram || "#", },
  { label: "Facebook",  href: SITE.facebook  || "#", },
  { label: "TikTok",    href: SITE.tiktok    || "#", },
  { label: "YouTube",   href: SITE.youtube   || "#", },
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
                loading="lazy"
                className="footer-logo"
                style={{ height: 44, width: "auto", display: "block", maxWidth: "180px" }}
              />
            </a>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)", maxWidth: 320, margin: "0 0 20px" }}>
              Digital Hujra — bringing KP businesses online. POS, e-commerce, branding,
              social media, shoots and edits, all under one roof.
            </p>
            <address style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.7, fontStyle: "normal" }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.15em", marginBottom: 6 }}>STUDIO</div>
              Popular Shopping Mall Plaza<br />
              Near Gul Rang Khadi Hall, Amandara Batkhela, KP
            </address>
          </div>

          {/* Services */}
          <nav aria-label="Services links">
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-mute)", marginBottom: 14, textTransform: "uppercase" }}>Services</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {SERVICES_LINKS.map((x) => (
                <li key={x.label}>
                  <a href={x.href} style={{ fontSize: 13.5, color: "var(--ink-soft)", transition: "color .25s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-soft)")}>
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Studio */}
          <nav aria-label="Studio links">
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-mute)", marginBottom: 14, textTransform: "uppercase" }}>Studio</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {STUDIO_LINKS.map((x) => (
                <li key={x.label}>
                  <a href={x.href} style={{ fontSize: 13.5, color: "var(--ink-soft)", transition: "color .25s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-soft)")}>
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <nav aria-label="Contact links">
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-mute)", marginBottom: 14, textTransform: "uppercase" }}>Contact</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "WhatsApp",               href: `https://wa.me/${SITE.whatsapp}` },
                { label: SITE.email,               href: `mailto:${SITE.email}` },
                { label: SITE.phone,               href: `tel:${SITE.phone.replace(/\s/g, "")}` },
                { label: "Book a session",          href: "/contact" },
              ].map((x) => (
                <li key={x.label}>
                  <a href={x.href} style={{ fontSize: 13.5, color: "var(--ink-soft)", transition: "color .25s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-soft)")}>
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <nav aria-label="Social media links">
            <div className="mono" style={{ fontSize: 11, letterSpacing: "0.15em", color: "var(--ink-mute)", marginBottom: 14, textTransform: "uppercase" }}>Connect</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {SOCIAL_LINKS.map((x) => (
                <li key={x.label}>
                  <a
                    href={x.href}
                    target={x.href !== "#" ? "_blank" : undefined}
                    rel={x.href !== "#" ? "noopener noreferrer" : undefined}
                    style={{ fontSize: 13.5, color: x.href === "#" ? "var(--ink-mute)" : "var(--ink-soft)", transition: "color .25s" }}
                    onMouseEnter={(e) => { if (x.href !== "#") (e.currentTarget as HTMLElement).style.color = "var(--amber)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = x.href === "#" ? "var(--ink-mute)" : "var(--ink-soft)"; }}
                  >
                    {x.label}
                    {x.href === "#" && <span className="mono" style={{ fontSize: 9, marginLeft: 6, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>SOON</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, gap: 16, flexWrap: "wrap" }}>
          <p className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.12em", margin: 0 }}>
            © 2026 DIGITAL HUJRA · BATKHELA · MALAKAND · KP · PAKISTAN
          </p>
          <nav aria-label="Legal links" style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy",  href: "/privacy" },
              { label: "Terms",    href: "/terms"   },
              { label: "Sitemap",  href: "/sitemap.xml" },
            ].map((x) => (
              <a key={x.label} href={x.href} style={{ fontSize: 12, color: "var(--ink-mute)", transition: "color .25s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-mute)")}>
                {x.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
