"use client";

interface HujraFortressProps {
  width?: number;
  color?: string;
}

export function HujraFortress({ width = 280, color = "#F5A33A" }: HujraFortressProps) {
  return (
    <svg width={width} viewBox="0 0 280 200" style={{ display: "block" }}>
      <defs>
        <linearGradient id="fortGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.0" />
          <stop offset="60%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d="M0,180 L0,140 L20,140 L20,130 L40,130 L40,140 L60,140 L60,120
           L80,120 L80,80 L120,55 L160,80 L160,120 L180,120 L180,140 L200,140
           L200,130 L220,130 L220,140 L240,140 L240,120 L260,120 L260,140 L280,140 L280,180 Z"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
      />
      <path
        d="M0,180 L0,140 L20,140 L20,130 L40,130 L40,140 L60,140 L60,120
           L80,120 L80,80 L120,55 L160,80 L160,120 L180,120 L180,140 L200,140
           L200,130 L220,130 L220,140 L240,140 L240,120 L260,120 L260,140 L280,140 L280,180 Z"
        fill="url(#fortGlow)"
      />
      <path
        d="M110,180 L110,130 Q120,118 130,130 L130,180 Z"
        fill={color}
        fillOpacity="0.18"
        stroke={color}
        strokeWidth="1.2"
      />
      <rect x="98" y="100" width="6" height="10" fill={color} fillOpacity="0.55" />
      <rect x="136" y="100" width="6" height="10" fill={color} fillOpacity="0.55" />
      <circle cx="120" cy="92" r="1.5" fill={color} />
      <g stroke={color} strokeWidth="1" opacity="0.7">
        <line x1="0" y1="180" x2="280" y2="180" />
      </g>
      <line x1="120" y1="55" x2="120" y2="36" stroke={color} strokeWidth="1.2" />
      <path d="M120,36 L138,40 L120,46 Z" fill={color} />
    </svg>
  );
}
