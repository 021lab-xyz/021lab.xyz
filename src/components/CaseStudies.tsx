import Image from "next/image";

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
      "28 finalist teams competed across four tracks at the AWS Hong Kong office. 021Lab designed the competition structure, managed submissions, coordinated the judge panel, and ran all day-of operations.",
    heroImage: { src: "/images/hashkey/hk-10.jpg", alt: "Demo day presentations at HashKey Chain Horizon Hackathon" },
    stats: [
      { value: "28", label: "Finalist Teams" },
      { value: "145", label: "Demo Day Attendees" },
      { value: "$40K", label: "USDT Prize Pool" },
      { value: "4", label: "Tracks" },
    ],
    tracks: ["DeFi", "PayFi", "AI", "ZKID"],
    photos: [
      { src: "/images/hashkey/hk-06.jpg", alt: "Teams at HashKey Horizon Hackathon" },
      { src: "/images/hashkey/hk-04.jpg", alt: "Winner teams at HashKey Horizon Hackathon" },
      { src: "/images/hashkey/hk-14.jpg", alt: "Participants at HashKey Horizon Hackathon" },
      { src: "/images/hashkey/hk-01.jpg", alt: "Audience watching demo day presentations" },
    ],
    partners: [
      { name: "HashKey Chain", logo: "/logos/hashkey.png", invert: false },
      { name: "AWS", logo: "/logos/aws.png", invert: false },
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
      "A 2-day in-person hackathon co-organized with Solar (Solana's Chinese builder community), SafePal, and the Solana Foundation. 38 teams submitted projects — 25 demoed live on day two.",
    heroImage: { src: "/images/solana/sol-16.jpg", alt: "Presenter at Solar Mini Hacker House Singapore" },
    stats: [
      { value: "155", label: "Registered" },
      { value: "38", label: "Teams Submitted" },
      { value: "25", label: "Teams Demoed" },
      { value: "2", label: "Days" },
    ],
    tracks: ["DeFi", "RWA", "Consumer Apps", "Stablecoins", "Infrastructure", "Open"],
    photos: [
      { src: "/images/solana/sol-09.jpg", alt: "Builders at Solar Mini Hacker House Singapore" },
      { src: "/images/solana/sol-13.jpg", alt: "Group photo at Solar Mini Hacker House" },
      { src: "/images/solana/sol-15.jpg", alt: "Networking at Solar Mini Hacker House" },
      { src: "/images/solana/sol-10.jpg", alt: "Full audience at Solar Mini Hacker House" },
    ],
    partners: [
      { name: "Solana", logo: "/logos/solana.svg", invert: false },
      { name: "SafePal", logo: "/logos/safepal.png", invert: false },
      { name: "MagicBlock", logo: "/logos/magicblock.svg", invert: false },
      { name: "AWS", logo: "/logos/aws.png", invert: false },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="hackathons" className="px-6 md:px-12 max-w-7xl mx-auto py-32 border-t border-white/5">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Track Record</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">From Zero to Demo</h2>
      <p className="text-zinc-400 text-lg max-w-2xl mb-20">
        Every hackathon we run is a full production. Here&apos;s the work.
      </p>

      <div className="flex flex-col gap-20">
        {cases.map((c) => (
          <div key={c.id} className="border border-white/10 rounded-3xl overflow-hidden">

            {/* Header */}
            <div className="px-8 md:px-10 pt-8 pb-6 flex flex-wrap items-center justify-between gap-3">
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
            <div className="px-8 md:px-10 pb-8">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{c.title}</h3>
              <p className="text-zinc-500 text-sm mt-1">{c.subtitle}</p>
            </div>

            {/* Hero image + details — split on desktop */}
            <div className="grid md:grid-cols-[3fr_2fr]">

              {/* Hero image */}
              <div className="relative aspect-[4/3] md:aspect-auto">
                <Image
                  src={c.heroImage.src}
                  alt={c.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>

              {/* Details panel */}
              <div className="bg-white/[0.02] border-l border-white/5 p-8 md:p-10 flex flex-col justify-between">

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {c.stats.map((s) => (
                    <div key={s.label} className="border border-white/10 rounded-xl p-4">
                      <div className="text-2xl font-bold text-white">{s.value}</div>
                      <div className="text-zinc-500 text-xs mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{c.description}</p>

                {/* Tracks */}
                <div className="mb-6">
                  <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3">Tracks</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tracks.map((t) => (
                      <span
                        key={t}
                        className="text-xs border border-white/10 rounded-full px-3 py-1 text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Partners */}
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
                              filter: p.invert
                                ? "brightness(0) invert(1)"
                                : undefined,
                              opacity: 0.8,
                            }}
                          />
                        </div>
                      ) : (
                        <span
                          key={p.name}
                          className="text-xs border border-white/15 rounded-full px-3 py-1 text-zinc-300 font-medium"
                        >
                          {p.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 md:grid-cols-4">
              {c.photos.map((photo, i) => (
                <div key={i} className="relative aspect-square border-t border-white/5 first:border-l-0 overflow-hidden group">
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

          </div>
        ))}
      </div>
    </section>
  );
}
