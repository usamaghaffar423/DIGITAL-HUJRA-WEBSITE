"use client";

import { useEffect, useRef, useState } from "react";

interface GrowthArrowProps {
  width?: number | string;
  height?: number | string;
}

const bars = [
  { x: 40, h: 70 },
  { x: 100, h: 100 },
  { x: 160, h: 90 },
  { x: 220, h: 140 },
  { x: 280, h: 130 },
  { x: 340, h: 180 },
  { x: 400, h: 170 },
  { x: 460, h: 230 },
];

export function GrowthArrow({ width = 520, height = 320 }: GrowthArrowProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 520 320"
      width={width}
      height={height}
      style={{ display: "block", overflow: "visible" }}
    >
      <defs>
        <linearGradient id="barG" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#1a3a60" stopOpacity="0.0" />
          <stop offset="100%" stopColor="#2A9DF4" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="arrowG" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#2A9DF4" />
          <stop offset="100%" stopColor="#6FC2FF" />
        </linearGradient>
        <filter id="arrowGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <line x1="0" y1="290" x2="520" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {[60, 130, 200, 260].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="520" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3 6" />
      ))}
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={290 - b.h}
          width="36"
          height={b.h}
          fill="url(#barG)"
          rx="3"
          style={{
            transformOrigin: `${b.x + 18}px 290px`,
            animation: seen ? `risingBar .9s cubic-bezier(.2,.8,.2,1) ${i * 0.1}s both` : "none",
          }}
        />
      ))}
      <path
        d="M10,260 Q140,270 240,210 T490,40"
        fill="none"
        stroke="url(#arrowG)"
        strokeWidth="3"
        strokeLinecap="round"
        filter="url(#arrowGlow)"
        strokeDasharray="700"
        strokeDashoffset={seen ? 0 : 700}
        style={{ transition: "stroke-dashoffset 2.2s cubic-bezier(.2,.7,.2,1) .4s" }}
      />
      <g style={{ opacity: seen ? 1 : 0, transition: "opacity .4s 2.4s" }}>
        <path d="M490,40 L470,28 L478,52 L460,46 Z" fill="#6FC2FF" />
        <circle cx="490" cy="40" r="6" fill="#6FC2FF" filter="url(#arrowGlow)" />
      </g>
      {seen &&
        [
          { x: 100, y: 256, d: 1.0 },
          { x: 200, y: 232, d: 1.2 },
          { x: 280, y: 180, d: 1.4 },
          { x: 380, y: 110, d: 1.6 },
        ].map((d, i) => (
          <circle
            key={i}
            cx={d.x}
            cy={d.y}
            r="3.5"
            fill="#F5A33A"
            style={{ animation: `pulse 2.6s ease-in-out ${d.d}s infinite` }}
          />
        ))}
    </svg>
  );
}
