import type { Metadata, Viewport } from "next";
import "./globals.css";
import { manrope, newsreader, jetbrainsMono } from "./fonts";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digitalhujra.com"),
  title: {
    default: "Digital Hujra — Bringing KP Business to the Digital World",
    template: "%s — Digital Hujra",
  },
  description:
    "Digital Hujra, based in Batkhela, Malakand — helping local KP businesses with POS systems, e-commerce stores, custom software, and product photography.",
  openGraph: {
    title: "Digital Hujra — KP Digital Agency",
    description:
      "Digital Hujra in Batkhela, KP. POS systems, e-commerce stores, custom software, and product photography — all under one roof.",
    type: "website",
    url: "https://www.digitalhujra.com",
    locale: "en_PK",
    siteName: "Digital Hujra",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Digital Hujra — KP Digital Agency, Batkhela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Hujra — KP Digital Agency",
    description:
      "POS systems, e-commerce, custom software, photography — all under one roof in Batkhela, Malakand.",
    images: ["/cover.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};


const themeScript = `(function(){try{document.documentElement.setAttribute('data-theme','dark');document.documentElement.style.colorScheme='dark';}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${manrope.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        <WhatsAppFAB />
        <Analytics />
      </body>
    </html>
  );
}
