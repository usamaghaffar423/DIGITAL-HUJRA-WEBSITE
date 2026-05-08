"use client";

import { useEffect, useRef } from "react";

interface Col { r: number; g: number; b: number }
const BLUE:  Col = { r: 42,  g: 157, b: 244 };
const AMBER: Col = { r: 245, g: 163, b: 58  };
const GREEN: Col = { r: 91,  g: 214, b: 138 };

const rgba = (c: Col, a: number) =>
  `rgba(${c.r},${c.g},${c.b},${Math.max(0, Math.min(1, a)).toFixed(3)})`;

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  r: number;
  color: Col;
  glowR: number;
  phase: number;
  depth: number;
  hub: boolean;
  pingT: number;
}

interface Packet {
  a: number; b: number;
  t: number;
  speed: number;
  color: Col;
  trail: { x: number; y: number }[];
}

export function NetworkField({ count = 34 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Skip animation entirely when user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    // Throttle to ~30fps on mobile to save battery
    const isMobile = window.innerWidth < 768;
    const FRAME_MS = isMobile ? 1000 / 30 : 0;
    let lastFrameTime = 0;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;

    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Seeded RNG — only for initial layout so positions are stable on first paint
    let seed = 42;
    const sr = () => {
      seed = Math.imul(1664525, seed) + 1013904223 | 0;
      return (seed >>> 0) / 0xffffffff;
    };

    const CONNECT = () => Math.min(W, H) * 0.28;

    const nodes: Node[] = Array.from({ length: count }, (_, i) => {
      const isHub   = i % 5 === 0;
      const isGreen = i % 8 === 3 && !isHub;
      const col = isHub ? AMBER : isGreen ? GREEN : BLUE;
      const depth = isHub ? 0.75 + sr() * 0.25 : 0.2 + sr() * 0.8;
      return {
        x: sr() * W,
        y: sr() * H,
        vx: (sr() - 0.5) * 0.55,
        vy: (sr() - 0.5) * 0.55,
        r: depth * (isHub ? 3.8 : 2.1) + 0.6,
        color: col,
        glowR: isHub ? 26 : 11,
        phase: sr() * Math.PI * 2,
        depth,
        hub: isHub,
        pingT: isHub ? sr() : -1,
      };
    });

    const packets: Packet[] = [];
    const edgeAct: Map<string, number> = new Map();
    let frame = 0;
    let raf: number;

    const eKey = (a: number, b: number) => a < b ? `${a}:${b}` : `${b}:${a}`;

    const spawnPacket = () => {
      const C = CONNECT();
      for (let attempt = 0; attempt < 50; attempt++) {
        const a = Math.floor(Math.random() * nodes.length);
        const b = Math.floor(Math.random() * nodes.length);
        if (a === b) continue;
        const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
        if (d < C) {
          packets.push({
            a, b, t: 0,
            speed: 0.0025 + Math.random() * 0.0045,
            color: nodes[a].hub || nodes[b].hub ? AMBER : BLUE,
            trail: [],
          });
          return;
        }
      }
    };

    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);

      // Frame throttle for mobile
      if (FRAME_MS > 0 && ts - lastFrameTime < FRAME_MS) return;
      lastFrameTime = ts;

      frame++;
      const now = performance.now() / 1000;
      const C = CONNECT();
      ctx.clearRect(0, 0, W, H);

      if (frame % 48 === 0 && packets.length < 14) spawnPacket();

      // ── Move nodes ──────────────────────────────────────────────────────────
      for (const n of nodes) {
        n.vx += (Math.random() - 0.5) * 0.016;
        n.vy += (Math.random() - 0.5) * 0.016;
        const spd = Math.hypot(n.vx, n.vy);
        const max = n.hub ? 0.32 : 0.28 + n.depth * 0.38;
        if (spd > max) { n.vx = (n.vx / spd) * max; n.vy = (n.vy / spd) * max; }
        n.x += n.vx;
        n.y += n.vy;
        const pad = 40;
        if (n.x < -pad) n.x = W + pad;
        if (n.x > W + pad) n.x = -pad;
        if (n.y < -pad) n.y = H + pad;
        if (n.y > H + pad) n.y = -pad;
        if (n.hub) { n.pingT += 0.0055; if (n.pingT > 1) n.pingT = 0; }
      }

      // ── Decay edge activity ──────────────────────────────────────────────────
      for (const [k, v] of edgeAct) {
        const nv = v * 0.91;
        nv < 0.008 ? edgeAct.delete(k) : edgeAct.set(k, nv);
      }

      // ── Draw edges ───────────────────────────────────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist > C) continue;
          const proximity = 1 - dist / C;
          const base  = proximity * 0.22 * nodes[i].depth * nodes[j].depth;
          const boost = edgeAct.get(eKey(i, j)) ?? 0;
          const alpha = base + boost * 0.4;
          const c = nodes[i].hub || nodes[j].hub ? AMBER : BLUE;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = rgba(c, alpha);
          ctx.lineWidth = 0.45 + boost * 1.1;
          ctx.stroke();
        }
      }

      // ── Draw & advance packets ───────────────────────────────────────────────
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        const na = nodes[p.a], nb = nodes[p.b];
        const edgeDist = Math.hypot(na.x - nb.x, na.y - nb.y);
        if (edgeDist > C * 1.3) { packets.splice(i, 1); continue; }
        p.t += p.speed;
        if (p.t >= 1) { packets.splice(i, 1); continue; }

        const k = eKey(p.a, p.b);
        edgeAct.set(k, Math.min(1, (edgeAct.get(k) ?? 0) + 0.45));

        const px = na.x + (nb.x - na.x) * p.t;
        const py = na.y + (nb.y - na.y) * p.t;

        p.trail.push({ x: px, y: py });
        if (p.trail.length > 20) p.trail.shift();

        for (let k = 1; k < p.trail.length; k++) {
          const ta = k / p.trail.length;
          ctx.beginPath();
          ctx.moveTo(p.trail[k - 1].x, p.trail[k - 1].y);
          ctx.lineTo(p.trail[k].x, p.trail[k].y);
          ctx.strokeStyle = rgba(p.color, ta * 0.65);
          ctx.lineWidth = ta * 2.2;
          ctx.lineCap = "round";
          ctx.stroke();
        }

        const g = ctx.createRadialGradient(px, py, 0, px, py, 9);
        g.addColorStop(0, rgba(p.color, 0.55));
        g.addColorStop(1, rgba(p.color, 0));
        ctx.beginPath();
        ctx.arc(px, py, 9, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 1.9, 0, Math.PI * 2);
        ctx.fillStyle = rgba(p.color, 1);
        ctx.fill();
      }

      // ── Draw hub ping rings ──────────────────────────────────────────────────
      for (const n of nodes) {
        if (!n.hub || n.pingT < 0) continue;
        const ringR = n.pingT * C * 0.65;
        const ringA = (1 - n.pingT) * 0.14;
        ctx.beginPath();
        ctx.arc(n.x, n.y, ringR, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(AMBER, ringA);
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Draw nodes ───────────────────────────────────────────────────────────
      for (const n of nodes) {
        const pulse = 0.82 + 0.18 * Math.sin(now * 1.5 + n.phase);
        const alpha = n.depth;

        const gr = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.glowR * pulse);
        gr.addColorStop(0, rgba(n.color, 0.3 * alpha * pulse));
        gr.addColorStop(0.5, rgba(n.color, 0.1 * alpha));
        gr.addColorStop(1, rgba(n.color, 0));
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.glowR * pulse, 0, Math.PI * 2);
        ctx.fillStyle = gr;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = rgba(n.color, 0.88 * alpha);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x - n.r * 0.26, n.y - n.r * 0.3, n.r * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${(0.45 * alpha).toFixed(3)})`;
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(tick);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      role="img"
      aria-label="Animated network visualization showing connected data nodes"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
