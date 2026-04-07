"use client";

import { useState } from "react";

type Video =
  | { type: "bilibili"; id: string; title: string; subtitle: string; season: string; tag: string; desc?: string }
  | { type: "gdrive"; id: string; title: string; subtitle: string; season: string; tag: string; desc?: string }
  | { type: "link"; href: string; title: string; subtitle: string; season: string; tag: string; desc?: string };

const videos: Video[] = [
  {
    type: "bilibili",
    id: "BV1NpSUBiEsa",
    title: "Introduction",
    subtitle: "第1节 · 介绍 · Mike & All",
    season: "S2",
    tag: "Lecture · Apr 1",
    desc: "Season 2 kickoff — curriculum structure, project tracks, and learning objectives.",
  },
  {
    type: "bilibili",
    id: "BV1h3DFBkEM8",
    title: "Blockchain Fundamentals",
    subtitle: "第2节 · 区块链基础 · Mike",
    season: "S2",
    tag: "Lecture · Apr 2",
    desc: "Core concepts: consensus, accounts, transactions, and the Solana runtime model.",
  },
  {
    type: "bilibili",
    id: "BV1g3DFBCEUi",
    title: "Local Environment Setup",
    subtitle: "第3节 · 本地环境安装 · 万标",
    season: "S2",
    tag: "Workshop · Apr 2",
    desc: "Step-by-step setup of Rust, Solana CLI, Anchor, and local validator for development.",
  },
];

function getEmbedSrc(video: Video): string | null {
  if (video.type === "bilibili")
    return `https://player.bilibili.com/player.html?bvid=${video.id}&high_quality=1&autoplay=0&danmaku=0`;
  if (video.type === "gdrive")
    return `https://drive.google.com/file/d/${video.id}/preview`;
  return null;
}

type EmbeddableVideo = Extract<Video, { type: "bilibili" | "gdrive" }>;

const TAG_COLORS: Record<string, string> = {
  Intro: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  AMA: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Workshop: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Lecture: "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

function tagColor(tag: string) {
  const key = Object.keys(TAG_COLORS).find((k) => tag.startsWith(k));
  return key ? TAG_COLORS[key] : "bg-white/5 text-zinc-400 border-white/10";
}

export default function VideoPlayer() {
  const embeddable = videos.filter((v): v is EmbeddableVideo => v.type !== "link");
  const [active, setActive] = useState<EmbeddableVideo>(embeddable[0]);

  const activeIndex = videos.findIndex(
    (v) => v.type !== "link" && "id" in v && "id" in active && v.id === active.id
  );

  return (
    <div className="space-y-0">
      <div className="grid lg:grid-cols-[1fr_340px] gap-0 rounded-2xl overflow-hidden border border-white/10">
        {/* Main player */}
        <div className="flex flex-col bg-black">
          <div className="aspect-video w-full">
            <iframe
              key={active.type + ("id" in active ? active.id : "")}
              src={getEmbedSrc(active) ?? ""}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>

          {/* Now playing info */}
          <div className="px-6 py-5 border-t border-white/10 bg-[#0f0f0f]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className={`text-xs font-medium rounded-full px-2.5 py-0.5 border ${tagColor(active.tag)}`}
                  >
                    {active.tag}
                  </span>
                  <span className="text-xs text-zinc-600">{active.season}</span>
                </div>
                <h3 className="text-base font-semibold text-white">{active.title}</h3>
                <p className="text-sm text-zinc-500 mt-0.5">{active.subtitle}</p>
                {active.desc && (
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed max-w-xl">{active.desc}</p>
                )}
              </div>
              <div className="text-xs text-zinc-600 shrink-0 mt-1">
                {activeIndex + 1} / {videos.length}
              </div>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="border-l border-white/10 bg-[#0d0d0d] flex flex-col">
          <div className="px-4 py-3.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Course Videos
            </span>
            <span className="text-xs text-zinc-600">{videos.length} sessions</span>
          </div>

          <div className="overflow-y-auto flex-1 divide-y divide-white/5">
            {videos.map((v, i) => {
              const isLink = v.type === "link";
              const isActive =
                !isLink &&
                active.type === v.type &&
                "id" in active &&
                "id" in v &&
                active.id === v.id;

              const inner = (
                <div className="flex items-start gap-3 px-4 py-4">
                  {/* Index / play indicator */}
                  <div
                    className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-cyan-400 to-purple-500 text-white"
                        : "bg-white/5 text-zinc-600"
                    }`}
                  >
                    {isLink ? (
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                        <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                      </svg>
                    ) : isActive ? (
                      <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                        <path d="M3 2.5l10 5.5-10 5.5V2.5z" />
                      </svg>
                    ) : (
                      <span>{i + 1}</span>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-sm font-medium leading-snug truncate ${
                        isActive ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {v.title}
                    </p>
                    <p className="text-xs text-zinc-600 mt-0.5 truncate">{v.subtitle}</p>
                    <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                      <span
                        className={`text-xs rounded-full px-2 py-0.5 border ${tagColor(v.tag)}`}
                      >
                        {v.tag}
                      </span>
                      {isLink && (
                        <span className="text-xs text-zinc-500 rounded-full px-2 py-0.5 bg-white/5">
                          ↗ External
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );

              if (isLink) {
                return (
                  <a
                    key={i}
                    href={(v as Extract<Video, { type: "link" }>).href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left transition-all hover:bg-white/5"
                  >
                    {inner}
                  </a>
                );
              }

              return (
                <button
                  key={i}
                  onClick={() => setActive(v as EmbeddableVideo)}
                  className={`w-full text-left transition-all ${
                    isActive ? "bg-white/8" : "hover:bg-white/5"
                  }`}
                >
                  {inner}
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 py-3.5 border-t border-white/10">
            <a
              href="https://www.hackquest.io/zh-cn/co-learning/2026-Solana-%E6%8A%80%E6%9C%AF%E8%AE%AD%E7%BB%83%E8%90%A5-S2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs text-zinc-500 hover:text-zinc-300 transition-colors group"
            >
              <span>Full schedule on HackQuest</span>
              <span className="group-hover:translate-x-0.5 transition-transform">↗</span>
            </a>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-600 pt-3 px-1">
        New videos published as each session concludes. More videos added as the bootcamp progresses.
      </p>
    </div>
  );
}
