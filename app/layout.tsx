import type { Metadata, Viewport } from "next";
import "./globals.css";
import { manrope, newsreader, jetbrainsMono } from "./fonts";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Digital Hujra — Bringing KP Business to the Digital World",
  description:
    "A digital studio in Batkhela, Malakand — helping local KP businesses with POS systems, e-commerce, branding, social media, product photography, video editing, and graphic design.",
  openGraph: {
    title: "Digital Hujra — KP Digital Studio",
    description:
      "A digital studio in Batkhela, KP. POS systems, e-commerce, branding, social media, photography and video — all under one roof.",
    type: "website",
    locale: "en_PK",
    siteName: "Digital Hujra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Hujra — KP Digital Studio",
    description:
      "POS, e-commerce, branding, social media — all under one roof in Batkhela, Malakand.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body>{children}<WhatsAppFAB /></body>
    </html>
  );
}
