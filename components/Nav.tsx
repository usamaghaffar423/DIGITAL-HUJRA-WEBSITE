"use client";

import { useEffect, useState } from "react";
import { HujraMark, Arrow } from "@/components/atoms";
import { NAV_ITEMS } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
        background: scrolled ? "rgba(10,22,40,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "all .35s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      <div
        className="wrap"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
              BATKHELA · MALAKAND · KP
            </span>
          </div>
        </a>

        <nav
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
          {NAV_ITEMS.map((n) => (
            <a
              key={n.l}
              href={n.h}
              style={{
                padding: "8px 16px",
                fontSize: 13.5,
                fontWeight: 500,
                borderRadius: 999,
                color: "var(--ink-soft)",
                transition: "all .25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--ink-soft)";
              }}
            >
              {n.l}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            className="mono"
            style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.1em" }}
          >
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
          <a href="#contact" className="btn btn-amber">
            Start a project <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
