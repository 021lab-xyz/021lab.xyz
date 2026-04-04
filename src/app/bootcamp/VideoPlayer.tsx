"use client";

import { useState } from "react";

const videos = [
  {
    id: "BV1jr9EB1EPc",
    title: "Program Overview",
    subtitle: "训练营介绍",
    season: "S1 & S2",
    duration: "Intro",
  },
  {
    id: "BV1Lp9JBmEzk",
    title: "Training Camp Introduction",
    subtitle: "开营介绍",
    season: "S2",
    duration: "Lecture",
  },
  {
    id: "BV1PMXfBqEBF",
    title: "Blockchain Fundamentals",
    subtitle: "区块链基础",
    season: "S2",
    duration: "Lecture",
  },
  {
    id: "BV1PMXfBqESr",
    title: "Local Environment Setup",
    subtitle: "本地环境安装",
    season: "S2",
    duration: "Workshop",
  },
];

export default function VideoPlayer() {
  const [active, setActive] = useState(videos[0]);

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-4 items-start">
      {/* Main player */}
      <div className="rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
        <iframe
          key={active.id}
          src={`https://player.bilibili.com/player.html?bvid=${active.id}&high_quality=1&autoplay=0&danmaku=0`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
          style={{ border: "none" }}
        />
      </div>

      {/* Playlist */}
      <div className="space-y-2">
        {videos.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v)}
            className={`w-full text-left rounded-xl px-4 py-4 transition-all border ${
              active.id === v.id
                ? "bg-white/10 border-white/20"
                : "border-white/5 hover:bg-white/5 hover:border-white/10"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                  active.id === v.id
                    ? "bg-gradient-to-br from-cyan-400 to-purple-500 text-white"
                    : "bg-white/5 text-zinc-500"
                }`}
              >
                {active.id === v.id ? (
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                    <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                  </svg>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white leading-snug truncate">
                  {v.title}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">{v.subtitle}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-xs bg-white/5 text-zinc-500 rounded-full px-2 py-0.5">
                    {v.season}
                  </span>
                  <span className="text-xs bg-white/5 text-zinc-500 rounded-full px-2 py-0.5">
                    {v.duration}
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
        <p className="text-xs text-zinc-600 px-2 pt-2">
          More videos added as the bootcamp progresses.
        </p>
      </div>
    </div>
  );
}
