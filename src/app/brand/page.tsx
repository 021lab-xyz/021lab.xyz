"use client";

import { useState } from "react";

const GREEN = "#90FF7C";

function DL({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      download
      className="font-mono text-[11px] tracking-wide uppercase text-zinc-400 hover:text-white border border-white/12 hover:border-white/30 rounded-full px-3 py-1.5 transition-colors"
    >
      {children}
    </a>
  );
}

function Asset({
  tone,
  label,
  img,
  imgClass,
  svg,
  png,
}: {
  tone: "light" | "dark";
  label: string;
  img: string;
  imgClass: string;
  svg: string;
  png: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]">
      <div
        className="flex items-center justify-center px-8 py-14"
        style={{ background: tone === "light" ? "#ffffff" : "#0e0f10" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={label} className={imgClass} />
      </div>
      <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-white/10">
        <span className="text-sm text-zinc-400">{label}</span>
        <div className="flex items-center gap-2">
          <DL href={svg}>SVG</DL>
          <DL href={png}>PNG</DL>
        </div>
      </div>
    </div>
  );
}

function Swatch({ name, hex, ring }: { name: string; hex: string; ring?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard?.writeText(hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      className="text-left rounded-2xl border border-white/10 overflow-hidden hover:border-white/25 transition-colors"
    >
      <div
        className="h-24"
        style={{ background: hex, boxShadow: ring ? "inset 0 0 0 1px rgba(255,255,255,.12)" : undefined }}
      />
      <div className="px-4 py-3">
        <div className="text-sm text-white">{name}</div>
        <div className="font-mono text-xs text-zinc-500 mt-0.5">
          {copied ? "Copied" : hex.toUpperCase()}
        </div>
      </div>
    </button>
  );
}

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* top bar */}
      <header className="border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="021Lab" className="h-7 w-auto" />
          </a>
          <a href="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
            ← Back to site
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* intro */}
        <p className="font-mono text-xs tracking-[0.28em] uppercase" style={{ color: GREEN }}>
          Brand
        </p>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">Logo &amp; brand assets</h1>
        <p className="mt-5 text-lg text-zinc-400 max-w-2xl leading-relaxed">
          Everything you need to feature 021Lab on your site, deck, or event materials. Please keep
          the logo as-is, don&apos;t recolor, rotate, or stretch it, and leave a little breathing room
          around it.
        </p>
        <div className="mt-8">
          <a
            href="/brand/021lab-brand-assets.zip"
            download
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#04120a] transition-transform hover:-translate-y-0.5"
            style={{ background: GREEN }}
          >
            Download all assets (.zip)
          </a>
        </div>

        {/* wordmark */}
        <section className="mt-20">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl font-semibold">Logo</h2>
            <span className="font-mono text-[11px] tracking-wide uppercase text-zinc-500">
              Primary wordmark
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <Asset
              tone="light"
              label="On light backgrounds"
              img="/brand/021lab-wordmark-color.svg"
              imgClass="h-9 md:h-10 w-auto"
              svg="/brand/021lab-wordmark-color.svg"
              png="/brand/021lab-wordmark-color.png"
            />
            <Asset
              tone="dark"
              label="On dark backgrounds"
              img="/brand/021lab-wordmark-white.svg"
              imgClass="h-9 md:h-10 w-auto"
              svg="/brand/021lab-wordmark-white.svg"
              png="/brand/021lab-wordmark-white.png"
            />
          </div>
        </section>

        {/* mark */}
        <section className="mt-16">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl font-semibold">Icon</h2>
            <span className="font-mono text-[11px] tracking-wide uppercase text-zinc-500">
              For avatars &amp; favicons
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <Asset
              tone="light"
              label="On light backgrounds"
              img="/brand/021lab-mark-color.svg"
              imgClass="h-16 w-auto"
              svg="/brand/021lab-mark-color.svg"
              png="/brand/021lab-mark-color.png"
            />
            <Asset
              tone="dark"
              label="On dark backgrounds"
              img="/brand/021lab-mark-white.svg"
              imgClass="h-16 w-auto"
              svg="/brand/021lab-mark-white.svg"
              png="/brand/021lab-mark-white.png"
            />
          </div>
        </section>

        {/* colors */}
        <section className="mt-16">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
            <h2 className="text-xl font-semibold">Colors</h2>
            <span className="font-mono text-[11px] tracking-wide uppercase text-zinc-500">
              Click to copy
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
            <Swatch name="Signal Green" hex="#90ff7c" />
            <Swatch name="Ink" hex="#1f2937" />
            <Swatch name="Black" hex="#0a0a0a" ring />
          </div>
        </section>

        <p className="mt-16 text-sm text-zinc-500">
          Need another format or a lockup we don&apos;t have here? Email{" "}
          <a href="mailto:hello@021lab.xyz" className="text-zinc-300 hover:text-white underline underline-offset-4">
            hello@021lab.xyz
          </a>
          .
        </p>
      </main>
    </div>
  );
}
