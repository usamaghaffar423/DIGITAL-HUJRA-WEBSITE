"use client";

import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  initials: string;
  color: string;
  variant?: "circle" | "portrait";
  size?: number;
}

export function TeamMemberImage({ src, alt, initials, color, variant = "portrait", size = 60 }: Props) {
  const [failed, setFailed] = useState(false);

  if (variant === "circle") {
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          flexShrink: 0,
          background: `${color}22`,
          border: `1.5px solid ${color}55`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!failed ? (
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            onError={() => setFailed(true)}
          />
        ) : (
          <span
            style={{
              fontSize: size * 0.3,
              fontWeight: 800,
              color,
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              lineHeight: 1,
            }}
          >
            {initials}
          </span>
        )}
      </div>
    );
  }

  // Portrait card variant
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: "3 / 4",
        overflow: "hidden",
        background: `linear-gradient(160deg, ${color}14 0%, ${color}06 100%)`,
      }}
    >
      {/* Placeholder shown until image loads or when it fails */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 56,
            fontWeight: 800,
            color,
            opacity: 0.2,
            lineHeight: 1,
            fontFamily: "var(--font-manrope), system-ui, sans-serif",
          }}
        >
          {initials}
        </span>
        <span
          style={{
            fontSize: 9,
            letterSpacing: "0.18em",
            color: `${color}70`,
            fontFamily: "var(--font-jetbrains-mono), monospace",
            textTransform: "uppercase",
          }}
        >
          Photo Coming Soon
        </span>
      </div>

      {/* Actual photo — sits on top and hides placeholder when loaded */}
      {!failed && (
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
