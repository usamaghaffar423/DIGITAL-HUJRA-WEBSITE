"use client";
import { useEffect } from "react";

export function ThemeSync() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.style.colorScheme = "dark";
  }, []);

  return null;
}
