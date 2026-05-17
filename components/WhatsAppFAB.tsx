"use client";

import { SITE } from "@/lib/data";

export function WhatsAppFAB() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum! Digital Hujra se contact kar raha hoon. Mujhe services ke baare mein baat karni thi.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="wa-fab"
    >
      {/* Pulse ring */}
      <span className="wa-fab-pulse" aria-hidden="true" />

      {/* WhatsApp icon */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.49.648 4.83 1.782 6.862L2 30l7.352-1.758A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="#fff"
          fillOpacity="0.15"
        />
        <path
          d="M16 3.5C9.096 3.5 3.5 9.096 3.5 16c0 2.364.626 4.58 1.72 6.494L3.5 28.5l6.162-1.694A12.45 12.45 0 0016 28.5c6.904 0 12.5-5.596 12.5-12.5S22.904 3.5 16 3.5z"
          fill="#fff"
        />
        <path
          d="M21.8 19.4c-.3-.15-1.76-.868-2.032-.967-.272-.1-.47-.15-.668.15-.198.298-.767.967-.94 1.166-.174.198-.347.223-.647.074-.3-.149-1.266-.467-2.41-1.49-.89-.794-1.492-1.775-1.666-2.074-.174-.298-.018-.46.13-.608.135-.134.3-.348.45-.522.15-.174.2-.298.3-.497.1-.198.05-.372-.025-.521-.075-.15-.668-1.61-.915-2.205-.24-.58-.486-.5-.668-.51l-.57-.01c-.198 0-.52.074-.793.372-.272.298-1.04 1.016-1.04 2.477 0 1.461 1.065 2.872 1.213 3.07.149.199 2.096 3.202 5.08 4.49.71.306 1.264.489 1.696.626.712.226 1.36.194 1.872.118.571-.085 1.76-.72 2.008-1.415.248-.695.248-1.29.174-1.415-.075-.124-.273-.198-.572-.347z"
          fill="#25D366"
        />
      </svg>

      <style jsx>{`
        .wa-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 150;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.45);
          transition: transform 0.25s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.25s;
          text-decoration: none;
        }
        .wa-fab:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 28px rgba(37, 211, 102, 0.6);
        }
        .wa-fab:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
        .wa-fab-pulse {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          animation: wa-pulse 2.4s ease-out infinite;
          pointer-events: none;
        }
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          70% { transform: scale(1.6); opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (max-width: 768px) {
          .wa-fab {
            bottom: 20px;
            right: 20px;
            width: 52px;
            height: 52px;
          }
        }
      `}</style>
    </a>
  );
}
