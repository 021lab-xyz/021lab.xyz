"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const cases = [
  {
    id: "hashkey",
    role: "Organized by 021Lab",
    roleColor: "text-green-400",
    date: "April 2026",
    location: "Hong Kong",
    recapUrl: "https://x.com/i/status/2049006918107341292",
    title: "HashKey Chain Horizon Hackathon",
    subtitle: "DeFi · PayFi · AI · ZKID",
    description:
      "28 finalist teams across four tracks at the AWS Hong Kong office. 021Lab put together the competition structure, handled submissions and judging, and ran the day.",
    heroImage: { src: "/images/hashkey/hk-10.jpg", alt: "Demo day presentations at HashKey Chain Horizon Hackathon" },
    stats: [
      { value: "60+", label: "Eco-Partners" },
      { value: "220+", label: "Submissions" },
      { value: "200K+", label: "Views on X" },
      { value: "5", label: "Events" },
    ],
    tracks: ["DeFi", "PayFi", "AI", "ZKID"],
    // 5 grid photos: most people, demo, socializing, audience, working
    photos: [
      { src: "/images/hashkey/hk-06.jpg", alt: "Teams at HashKey Horizon Hackathon" },
      { src: "/images/hashkey/hk-15.jpg", alt: "Teams presenting on stage at Demo Day" },
      { src: "/images/hashkey/hk-13.jpg", alt: "Networking at HashKey Horizon Hackathon" },
      { src: "/images/hashkey/hk-01.jpg", alt: "Audience watching demo day presentations" },
      { src: "/images/hashkey/hk-02.jpg", alt: "Builders collaborating on their project" },
    ],
    allPhotos: [
      { src: "/images/hashkey/hk-01.jpg", alt: "Audience at HashKey Horizon" },
      { src: "/images/hashkey/hk-02.jpg", alt: "Builders collaborating" },
      { src: "/images/hashkey/hk-03.jpg", alt: "Presenter on stage" },
      { src: "/images/hashkey/hk-04.jpg", alt: "Winner teams" },
      { src: "/images/hashkey/hk-05.jpg", alt: "Teams at HashKey Horizon" },
      { src: "/images/hashkey/hk-06.jpg", alt: "Group photo" },
      { src: "/images/hashkey/hk-07.jpg", alt: "Attendees" },
      { src: "/images/hashkey/hk-08.jpg", alt: "Audience" },
      { src: "/images/hashkey/hk-09.jpg", alt: "Presentation" },
      { src: "/images/hashkey/hk-10.jpg", alt: "Demo Day full room" },
      { src: "/images/hashkey/hk-11.jpg", alt: "Builders" },
      { src: "/images/hashkey/hk-12.jpg", alt: "Team working" },
      { src: "/images/hashkey/hk-13.jpg", alt: "Networking" },
      { src: "/images/hashkey/hk-14.jpg", alt: "Teams with props" },
      { src: "/images/hashkey/hk-15.jpg", alt: "Stage presentation" },
      { src: "/images/hashkey/hk-16.jpg", alt: "Presenter" },
      { src: "/images/hashkey/hk-17.jpg", alt: "AWS speaker" },
    ],
    partners: [
      { name: "HashKey Chain", logo: "/logos/hashkey.png", invert: false, screen: false },
      { name: "AWS", logo: "/logos/aws.png", invert: false, screen: false },
      { name: "DoraHacks", logo: null, invert: false, screen: false },
    ],
  },
  {
    id: "solana",
    role: "Co-Organizer",
    roleColor: "text-emerald-400",
    date: "April 28–29, 2026",
    location: "Singapore",
    recapUrl: "https://x.com/i/status/2053259310625403384",
    title: "Solar Mini Hacker House × 021Lab",
    subtitle: "Singapore 2026",
    description:
      "A 2-day in-person hackathon co-organized with Solar (Solana's Chinese builder community), SafePal, and the Solana Foundation. 38 teams submitted. 25 demoed live on day two.",
    heroImage: { src: "/images/solana/sol-16.jpg", alt: "Presenter at Solar Mini Hacker House Singapore" },
    stats: [
      { value: "50+", label: "Eco-Partners" },
      { value: "38", label: "Submissions" },
      { value: "136K", label: "Views on X" },
      { value: "2", label: "Days" },
    ],
    tracks: ["DeFi", "RWA", "Consumer Apps", "Stablecoins", "Infrastructure", "Open"],
    // 5 grid photos: most people, demo, socializing, audience, working
    photos: [
      { src: "/images/solana/sol-09.jpg", alt: "Builders at Solar Mini Hacker House Singapore" },
      { src: "/images/solana/sol-05.jpg", alt: "Demo presentation at Solar Mini Hacker House" },
      { src: "/images/solana/sol-15.jpg", alt: "Networking at Solar Mini Hacker House" },
      { src: "/images/solana/sol-10.jpg", alt: "Full audience at Solar Mini Hacker House" },
      { src: "/images/solana/sol-13.jpg", alt: "Group photo at Solar Mini Hacker House" },
    ],
    allPhotos: [
      { src: "/images/solana/sol-01.jpg", alt: "Networking" },
      { src: "/images/solana/sol-02.jpg", alt: "Networking" },
      { src: "/images/solana/sol-03.jpg", alt: "Presentation" },
      { src: "/images/solana/sol-04.jpg", alt: "Presentation" },
      { src: "/images/solana/sol-05.jpg", alt: "Demo day" },
      { src: "/images/solana/sol-06.jpg", alt: "Presenter" },
      { src: "/images/solana/sol-07.jpg", alt: "Networking" },
      { src: "/images/solana/sol-08.jpg", alt: "Organizer team" },
      { src: "/images/solana/sol-09.jpg", alt: "Group photo" },
      { src: "/images/solana/sol-10.jpg", alt: "Audience" },
      { src: "/images/solana/sol-11.jpg", alt: "Networking" },
      { src: "/images/solana/sol-12.jpg", alt: "Group photo" },
      { src: "/images/solana/sol-13.jpg", alt: "Closing group photo" },
      { src: "/images/solana/sol-14.jpg", alt: "Networking" },
      { src: "/images/solana/sol-15.jpg", alt: "Community networking" },
      { src: "/images/solana/sol-16.jpg", alt: "Presenter with brand banner" },
    ],
    partners: [
      { name: "Solana", logo: "/logos/solana.svg", invert: false, screen: false },
      { name: "SafePal", logo: "/logos/safepal.png", invert: false, screen: false },
      { name: "AWS", logo: "/logos/aws.png", invert: false, screen: false },
    ],
  },
];

type Case = typeof cases[0];

function Lightbox({ c, onClose }: { c: Case; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-7xl mx-auto px-4 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-zinc-500 text-sm">{c.allPhotos.length} photos</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-zinc-400 hover:text-white hover:border-white/40 transition-all text-xl"
          >
            ×
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {c.allPhotos.map((photo, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const [activeGallery, setActiveGallery] = useState<Case | null>(null);

  return (
    <>
      <section id="hackathons" className="px-6 md:px-12 max-w-7xl mx-auto py-16 md:py-32 border-t border-white/5">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Track Record</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-6">From Zero to Demo</motion.h2>
          <motion.p variants={fadeUp} className="text-zinc-400 text-lg max-w-2xl mb-10 md:mb-20">
            Every hackathon we run is a full production. Here&apos;s the work.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-12 md:gap-20">
          {cases.map((c, idx) => (
            <motion.div
              key={c.id}
              className="border border-white/10 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >

              {/* Header */}
              <div className="px-5 sm:px-8 md:px-10 pt-6 sm:pt-8 pb-5 sm:pb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`text-xs font-medium uppercase tracking-widest ${c.roleColor}`}>
                    {c.role}
                  </span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-xs text-zinc-500">{c.date}</span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-xs text-zinc-500">{c.location}</span>
                </div>
                {c.recapUrl && (
                  <a
                    href={c.recapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-zinc-400 border border-white/10 rounded-full px-4 py-1.5 hover:border-white/25 hover:text-white transition-all"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Recap
                  </a>
                )}
              </div>

              {/* Title */}
              <div className="px-5 sm:px-8 md:px-10 pb-6 sm:pb-8">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{c.title}</h3>
                <p className="text-zinc-500 text-sm mt-1">{c.subtitle}</p>
              </div>

              {/* Hero image + details */}
              <div className="grid md:grid-cols-[3fr_2fr]">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={c.heroImage.src}
                    alt={c.heroImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </div>

                <div className="bg-white/[0.02] border-t md:border-t-0 md:border-l border-white/5 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {c.stats.map((s) => (
                      <div key={s.label} className="border border-white/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-white">{s.value}</div>
                        <div className="text-zinc-500 text-xs mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.description}</p>

                  <div className="mb-6">
                    <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Tracks</p>
                    <div className="flex flex-wrap gap-2">
                      {c.tracks.map((t) => (
                        <span key={t} className="text-xs border border-white/10 rounded-full px-3 py-1 text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Partners</p>
                    <div className="flex flex-wrap items-center gap-4">
                      {c.partners.map((p) =>
                        p.logo ? (
                          <div key={p.name} className="h-6 flex items-center">
                            <img
                              src={p.logo}
                              alt={p.name}
                              className="h-full w-auto object-contain max-w-[80px]"
                              style={{
                                filter: p.invert ? "brightness(0) invert(1)" : undefined,
                                mixBlendMode: p.screen ? "screen" : undefined,
                                opacity: 0.8,
                              }}
                            />
                          </div>
                        ) : (
                          <span key={p.name} className="text-xs border border-white/15 rounded-full px-3 py-1 text-zinc-300 font-medium">
                            {p.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo strip — 4 equal photos below the hero */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5">
                {c.photos.slice(0, 4).map((photo, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden group border-l border-white/5 first:border-l-0">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                ))}
              </div>

              {/* View all photos */}
              <div className="px-5 sm:px-8 md:px-10 py-4 border-t border-white/5 flex justify-end">
                <button
                  onClick={() => setActiveGallery(c)}
                  className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  View all {c.allPhotos.length} photos
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {activeGallery && (
        <Lightbox c={activeGallery} onClose={() => setActiveGallery(null)} />
      )}
    </>
  );
}
