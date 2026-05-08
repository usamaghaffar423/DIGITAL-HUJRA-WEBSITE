"use client";

interface MountainRangeProps {
  height?: number | string;
}

export function MountainRange({ height = 360 }: MountainRangeProps) {
  return (
    <svg
      viewBox="0 0 1600 360"
      preserveAspectRatio="none"
      style={{ width: "100%", height, display: "block", pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="mtnFar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3050" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0a1628" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="mtnMid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f2540" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#070f1f" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="mtnNear" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#091a30" stopOpacity="1" />
          <stop offset="100%" stopColor="#03080f" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        fill="url(#mtnFar)"
        d="M0,260 L80,210 L160,240 L240,170 L340,220 L420,175 L520,225 L620,160 L720,210 L820,180 L900,225 L1000,165 L1100,215 L1200,180 L1300,230 L1400,190 L1500,225 L1600,200 L1600,360 L0,360 Z"
      />
      <path
        fill="url(#mtnMid)"
        d="M0,310 L100,265 L200,295 L300,240 L420,290 L520,255 L640,295 L760,235 L880,290 L1000,250 L1140,305 L1260,260 L1380,305 L1500,265 L1600,295 L1600,360 L0,360 Z"
      />
      <g opacity="0.55">
        <path d="M298,242 L310,254 L322,242 L316,250 L304,250 Z" fill="#F5A33A" />
        <path d="M756,237 L770,249 L782,237 L774,246 L762,246 Z" fill="#F5A33A" />
        <path d="M996,252 L1010,262 L1022,252 L1014,260 L1004,260 Z" fill="#F5A33A" />
      </g>
      <path
        fill="url(#mtnNear)"
        d="M0,330 L120,300 L260,325 L380,290 L520,320 L660,295 L800,325 L940,290 L1080,320 L1220,295 L1360,325 L1500,300 L1600,325 L1600,360 L0,360 Z"
      />
    </svg>
  );
}
