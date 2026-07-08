"use client";

import dynamic from "next/dynamic";

const Testimonials = dynamic(
  () => import("@/components/Testimonials").then((m) => m.Testimonials),
  { ssr: false, loading: () => <div style={{ height: 420 }} aria-hidden="true" /> }
);

const WhatsAppChannel = dynamic(
  () => import("@/components/WhatsAppChannel").then((m) => m.WhatsAppChannel),
  { ssr: false, loading: () => <div style={{ height: 520 }} aria-hidden="true" /> }
);

export function ClientSections() {
  return (
    <>
      <Testimonials />
      <WhatsAppChannel />
    </>
  );
}
