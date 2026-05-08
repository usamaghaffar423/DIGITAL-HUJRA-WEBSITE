import type { Metadata } from "next";
import "./globals.css";
import { manrope, newsreader, jetbrainsMono } from "./fonts";

export const metadata: Metadata = {
  title: "Digital Hujra — Bringing KP Business to the Digital World",
  description: "A digital studio in Batkhela, Malakand — helping local KP businesses with POS systems, e-commerce, branding, social media, product photography, video editing, and graphic design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
