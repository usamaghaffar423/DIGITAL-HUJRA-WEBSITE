"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Arrow } from "@/components/atoms";
import { NAV_ITEMS } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let raf: number;
    const fn = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 24));
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => { window.removeEventListener("scroll", fn); cancelAnimationFrame(raf); };
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(10,22,40,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all .35s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <div
        className="wrap-mobile"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" aria-label="Digital Hujra — home" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logo.png"
            alt="Digital Hujra"
            style={{ height: 44, width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop nav pill */}
        <nav
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "6px 8px",
            border: "1px solid var(--line-2)",
            borderRadius: 999,
            background: "rgba(10,22,40,0.5)",
            backdropFilter: "blur(8px)",
          }}
        >
          {NAV_ITEMS.map((n) => {
            const isActive = n.h.startsWith("/") && !n.h.includes("#")
              ? pathname === n.h
              : pathname === "/";
            return (
              <a
                key={n.l}
                href={n.h}
                style={{
                  padding: "8px 16px",
                  fontSize: 13.5,
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: 999,
                  color: isActive ? "var(--ink)" : "var(--ink-soft)",
                  background: isActive ? "rgba(255,255,255,0.09)" : "transparent",
                  transition: "all .25s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)";
                  }
                }}
              >
                {n.l}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#5BD68A",
                marginRight: 8,
                verticalAlign: 1,
                boxShadow: "0 0 0 4px rgba(91,214,138,0.18)",
              }}
            />
            ACCEPTING WORK
          </span>
          <a href="/contact" className="btn btn-amber">
            Start a project <Arrow />
          </a>
        </div>

        {/* Mobile right: compact CTA + hamburger */}
        <div className="nav-mobile-right" style={{ alignItems: "center", gap: 10 }}>
          <a href="/contact" className="btn btn-amber" style={{ padding: "10px 16px", fontSize: 13 }}>
            Get started
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid var(--line-2)",
              borderRadius: 10,
              width: 42,
              height: 42,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: 0,
              color: menuOpen ? "var(--amber)" : "var(--ink)",
              transition: "color .25s, background .25s",
            }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
                <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        id="mobile-nav"
        className="nav-mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          maxHeight: menuOpen ? 480 : 0,
          transition: "max-height .35s cubic-bezier(.2,.7,.2,1)",
          background: "rgba(5,11,23,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: menuOpen ? "1px solid var(--line)" : "none",
        }}
      >
        <div style={{ padding: "12px 20px 24px", display: "flex", flexDirection: "column" }}>
          {NAV_ITEMS.map((n) => (
            <a
              key={n.l}
              href={n.h}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "15px 8px",
                fontSize: 17,
                fontWeight: 500,
                color: "var(--ink-soft)",
                borderBottom: "1px solid var(--line)",
                transition: "color .2s",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--amber)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--ink-soft)")}
            >
              {n.l}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn btn-amber"
            style={{ marginTop: 16, justifyContent: "center", fontSize: 15 }}
          >
            Start a project <Arrow />
          </a>
          <div
            className="mono"
            style={{ marginTop: 16, fontSize: 10, color: "var(--ink-mute)", letterSpacing: "0.15em", textAlign: "center" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#5BD68A",
                marginRight: 7,
                verticalAlign: 1,
                boxShadow: "0 0 0 3px rgba(91,214,138,0.18)",
              }}
            />
            ACCEPTING WORK · BATKHELA · KP
          </div>
        </div>
      </div>
    </header>
  );
}
