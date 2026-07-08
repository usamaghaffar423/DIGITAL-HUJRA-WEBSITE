"use client";
import { useEffect } from "react";

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

export function ThemeSync() {
  useEffect(() => {
    function sync() {
      if (localStorage.getItem("theme-override")) return;
      const h = getPKTHour();
      document.documentElement.setAttribute("data-theme", h >= 6 && h < 19 ? "light" : "dark");
    }

    const id = setInterval(sync, 10 * 60 * 1000);
    document.addEventListener("visibilitychange", sync);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return null;
}
