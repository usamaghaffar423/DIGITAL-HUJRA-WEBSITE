"use client";
import { useEffect, useState } from "react";

function getPKTHour(): number {
  try {
    return parseInt(
      new Intl.DateTimeFormat("en-PK", {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        hour12: false,
      }).format(new Date()),
      10
    );
  } catch {
    return 12;
  }
}

function getAutoTheme(): "light" | "dark" {
  const h = getPKTHour();
  return h >= 6 && h < 19 ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [hasOverride, setHasOverride] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme-override");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      setHasOverride(true);
    } else {
      setTheme(getAutoTheme());
      setHasOverride(false);
    }
  }, []);

  function applyTheme(t: "light" | "dark") {
    document.documentElement.setAttribute("data-theme", t);
    setTheme(t);
  }

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme-override", next);
    setHasOverride(true);
    applyTheme(next);
  }

  function resetAuto() {
    localStorage.removeItem("theme-override");
    setHasOverride(false);
    applyTheme(getAutoTheme());
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        style={{
          background: "var(--nav-btn-subtle)",
          border: "1px solid var(--line-2)",
          borderRadius: 10,
          width: 38,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "var(--ink-mute)",
          transition: "color .25s, border-color .25s, background .25s",
          flexShrink: 0,
          padding: 0,
        }}
      >
        {theme === "dark" ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </button>
      {hasOverride && (
        <button
          type="button"
          onClick={resetAuto}
          aria-label="Reset to automatic theme based on Pakistan time"
          title="Reset to automatic (Pakistan time)"
          style={{
            background: "transparent",
            border: "none",
            padding: "2px 6px",
            borderRadius: 6,
            fontSize: 9,
            color: "var(--ink-mute)",
            cursor: "pointer",
            fontFamily: "var(--font-jetbrains-mono), monospace",
            letterSpacing: "0.08em",
          }}
        >
          AUTO
        </button>
      )}
    </div>
  );
}
