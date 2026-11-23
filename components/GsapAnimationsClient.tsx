"use client";

import dynamic from "next/dynamic";

const GsapAnimations = dynamic(
  () => import("@/components/GsapAnimations").then((m) => m.GsapAnimations),
  { ssr: false }
);

export default GsapAnimations;
