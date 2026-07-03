"use client";

import { useRef, useState } from "react";
import { LAND, MARKERS } from "./worldMapData";

type Tip = { x: number; y: number; label: string; count: number } | null;

export default function WorldMap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tip, setTip] = useState<Tip>(null);

  const show = (e: React.MouseEvent, label: string, count: number) => {
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    setTip({ x: e.clientX - r.left, y: e.clientY - r.top, label, count });
  };

  return (
    <div ref={wrapRef} className="relative">
      <svg
        viewBox="0 22 1000 388"
        preserveAspectRatio="xMidYMid meet"
        className="block w-full h-auto max-h-[52vh]"
        role="img"
        aria-label="021Lab partner network map"
      >
        <path
          d={LAND}
          fill="rgba(255,255,255,0.045)"
          stroke="rgba(255,255,255,0.11)"
          strokeWidth={0.4}
          className="pointer-events-none"
        />
        {MARKERS.map((m) => (
          <g key={m.name}>
            {m.count >= 10 && (
              <circle cx={m.cx} cy={m.cy} r={m.r} fill="none" stroke="#4ade80" strokeWidth={1} className="pointer-events-none">
                <animate attributeName="r" from={m.r} to={m.r + 13} dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.45" to="0" dur="2.4s" repeatCount="indefinite" />
              </circle>
            )}
            <circle
              cx={m.cx}
              cy={m.cy}
              r={m.r}
              className="worldmap-dot"
              onMouseEnter={(e) => show(e, m.name, m.count)}
              onMouseMove={(e) => show(e, m.name, m.count)}
              onMouseLeave={() => setTip(null)}
            />
          </g>
        ))}
      </svg>

      {tip && (
        <div
          className="pointer-events-none absolute z-10 rounded-lg border border-green-400/40 bg-[#080c0a]/95 px-2.5 py-1.5 font-mono text-xs text-white whitespace-nowrap"
          style={{ left: tip.x + 14, top: tip.y - 6 }}
        >
          {tip.label} · {tip.count} partners
        </div>
      )}
    </div>
  );
}
