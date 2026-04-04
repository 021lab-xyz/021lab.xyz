import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026 Solana 技术训练营 — 021Lab",
  description:
    "A six-month hands-on Solana developer bootcamp — from blockchain fundamentals to production-grade full-stack apps. Free, project-based, and community-driven.",
};

const seasons = [
  {
    number: "S1",
    title: "Blockchain 101",
    subtitle: "区块链技术基础",
    date: "Jan 6 – Feb 6, 2026",
    status: "completed",
    color: "from-cyan-400 to-blue-500",
    topics: [
      "Solana fundamentals & architecture",
      "Token & NFT development",
      "Anchor smart contract framework",
      "SPL Tokens & Token 2022",
      "Testing with LiteSVM & Mollusk",
      "Security best practices",
      "Solana Virtual Machine (SVM)",
    ],
    scholarship: "30 USDC",
  },
  {
    number: "S2",
    title: "Project Practice",
    subtitle: "区块链项目实战",
    date: "Mar 31 – Apr 30, 2026",
    status: "active",
    color: "from-blue-500 to-purple-500",
    topics: [
      "Voting & governance apps",
      "Escrow contract systems",
      "Privacy transfers",
      "Stablecoin implementation",
      "Prediction markets",
      "Real-world asset (RWA) apps",
      "Solana mobile development",
    ],
    scholarship: "50 USDC",
  },
  {
    number: "S3",
    title: "Enterprise Practice",
    subtitle: "Solana 企业级技术实践",
    date: "May 5 – Jun 5, 2026",
    status: "upcoming",
    color: "from-purple-500 to-pink-500",
    topics: [
      "Production-grade architecture",
      "Deployment & DevOps",
      "Performance optimization",
      "Enterprise integrations",
      "Advanced SVM internals",
      "Audit & security review",
      "Go-to-market for Solana projects",
    ],
    scholarship: "TBA",
  },
];

const instructors = [
  {
    name: "Mohanson",
    role: "Core Instructor",
    topics: ["Environment setup", "Program building", "Privacy transfers", "Production deployment"],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "国子",
    role: "Core Instructor",
    topics: ["Prediction markets", "Solana mobile development", "dApp architecture"],
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Tiny熊",
    role: "Core Instructor",
    topics: ["Stablecoin implementation", "Swap protocols", "AI × blockchain practices"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Mike Ma",
    role: "Core Instructor",
    topics: ["x402 client development", "RWA applications", "Mobile deployment"],
    gradient: "from-pink-500 to-orange-400",
  },
];

const rewards = [
  {
    icon: "💰",
    title: "Scholarships",
    desc: "Top performers earn 30 USDC (S1) and 50 USDC (S2) for completing projects.",
  },
  {
    icon: "🪪",
    title: "NFT Certificate",
    desc: "Receive an on-chain NFT graduation certificate upon completing the bootcamp.",
  },
  {
    icon: "🔑",
    title: "Hardware Wallet",
    desc: "SafePal × Solana co-branded hardware wallet for project teams that ship and submit.",
  },
  {
    icon: "🚀",
    title: "Job Pathways",
    desc: "Direct interview access and referrals to Solana ecosystem projects and startups.",
  },
  {
    icon: "🎯",
    title: "Hackathon Access",
    desc: "Join the Colosseum global hackathon in April as a cohort with community backing.",
  },
  {
    icon: "🌐",
    title: "Ecosystem Airdrops",
    desc: "Blueshift NFTs and partner token airdrops for top-ranked participants.",
  },
];

const faqs = [
  {
    q: "Who is this bootcamp for?",
    a: "Anyone curious about Solana — complete beginners, Web2 developers exploring Web3, or developers with Web3 experience who want to specialize in the Solana ecosystem.",
  },
  {
    q: "How much does it cost?",
    a: "Free. The bootcamp is fully sponsored by the Solana Foundation, Magic Block, and Solar. Scholarships are available for top performers.",
  },
  {
    q: "What is the weekly time commitment?",
    a: "Each season runs ~5 weeks with 2 development lectures, 1 workshop, and 2 office hours per week. Expect 6–10 hours per week to keep up with projects.",
  },
  {
    q: "Do I need prior blockchain experience?",
    a: "No. Season 1 starts from the very basics. A solid grasp of programming fundamentals (any language) is helpful.",
  },
  {
    q: "Can I join Season 2 without completing Season 1?",
    a: "Yes. Each season builds on the last, but intermediate developers can join S2 directly. Completion of the S1 material is recommended.",
  },
];

export default function BootcampPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight">
            021Lab
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="/#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="/#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="/#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <a
            href="https://openbuild.xyz/learn/challenges/2086624241/1774877400"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all"
          >
            Register Now
          </a>
        </div>
      </nav>

      {/* Gradient accent bar */}
      <div className="gradient-bar fixed top-16 left-0 right-0 z-50" />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-24">
        <div className="animate-fade-in-up opacity-0">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Community Bootcamp
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              S2 Active — Apr 2026
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl">
            2026 Solana
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              技术训练营
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            A six-month, project-based Solana developer bootcamp — from blockchain
            fundamentals to production-grade full-stack apps. Free, community-driven,
            and built for the next generation of Solana builders.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="https://openbuild.xyz/learn/challenges/2086624241/1774877400"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Join Season 2
            </a>
            <a
              href="#curriculum"
              className="border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              View Curriculum
            </a>
          </div>

          {/* Key stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "3", label: "Seasons" },
              { value: "12+", label: "Hands-on Projects" },
              { value: "Free", label: "Tuition" },
              { value: "6mo", label: "Program Length" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {stat.value}
                </div>
                <div className="text-zinc-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            About the Program
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            From zero to Solana
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              founder.
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                Co-organized by the Solana Foundation, Magic Block, and Solar — and supported
                by 22 developer communities and 21 university blockchain associations — this
                bootcamp brings structured, hands-on education to Chinese-speaking developers
                worldwide.
              </p>
              <p className="text-zinc-400 leading-relaxed text-lg">
                Every season is built around real projects, not slides. You will design,
                build, and deploy actual Solana applications using the latest tooling and
                best practices, finishing with a portfolio and a network inside the ecosystem.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: "🏫", text: "Supported by 21 university blockchain clubs" },
                { icon: "🤝", text: "22 developer community partners" },
                { icon: "📡", text: "Live lectures, workshops & office hours weekly" },
                { icon: "🌏", text: "Chinese-speaking cohort, global hackathon access" },
                { icon: "📜", text: "On-chain NFT certificate upon graduation" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 border border-white/10 rounded-2xl p-5"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-zinc-300 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Curriculum
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Three seasons,
            <br />one complete journey.
          </h2>
        </div>

        <div className="space-y-6">
          {seasons.map((season) => (
            <div
              key={season.number}
              className="service-card border border-white/10 rounded-2xl p-8 md:p-10 relative overflow-hidden"
            >
              {season.status === "active" && (
                <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  In Progress
                </div>
              )}
              {season.status === "completed" && (
                <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-medium bg-white/5 text-zinc-500 border border-white/10 rounded-full px-3 py-1.5">
                  Completed
                </div>
              )}
              {season.status === "upcoming" && (
                <div className="absolute top-6 right-6 flex items-center gap-2 text-xs font-medium bg-white/5 text-zinc-500 border border-white/10 rounded-full px-3 py-1.5">
                  Coming Soon
                </div>
              )}

              <div className="flex items-start gap-6">
                <div
                  className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${season.color} shrink-0 w-12`}
                >
                  {season.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-semibold mb-1">{season.title}</h3>
                  <p className="text-zinc-500 text-sm mb-1">{season.subtitle}</p>
                  <p className="text-zinc-500 text-sm mb-6">{season.date}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {season.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-zinc-400 text-sm">
                        <span
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${season.color} shrink-0`}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  {season.scholarship !== "TBA" && (
                    <div className="mt-6 inline-flex items-center gap-2 text-xs font-medium border border-white/10 rounded-full px-4 py-2 text-zinc-400">
                      🏆 Scholarship: {season.scholarship} for top performers
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Instructors
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Learn from the builders.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="service-card border border-white/10 rounded-2xl p-8"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${instructor.gradient} mb-5 flex items-center justify-center text-lg font-bold text-white`}
              >
                {instructor.name[0]}
              </div>
              <h3 className="text-xl font-semibold mb-1">{instructor.name}</h3>
              <p className="text-zinc-500 text-sm mb-4">{instructor.role}</p>
              <div className="flex flex-wrap gap-2">
                {instructor.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs bg-white/5 border border-white/10 text-zinc-400 rounded-full px-3 py-1"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rewards */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Rewards & Benefits
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Ship work. Get rewarded.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.title}
              className="service-card border border-white/10 rounded-2xl p-8"
            >
              <div className="text-3xl mb-4">{reward.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{reward.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{reward.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Common questions.
          </h2>
        </div>

        <div className="max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="border border-white/10 rounded-2xl p-7">
              <h3 className="font-semibold mb-3">{faq.q}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="border border-white/10 rounded-3xl p-10 md:p-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Season 2 — Open Now
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to build on
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              Solana?
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            Season 2 runs March 31 – April 30, 2026. Join the cohort, ship 12
            real projects, and connect with the Solana ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://openbuild.xyz/learn/challenges/2086624241/1774877400"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Register on OpenBuild
            </a>
            <a
              href="https://learnblockchain.cn/video/play/1875?course_id=94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 px-10 py-4 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Watch on 登链
            </a>
            <a
              href="https://www.hackquest.io/zh-cn/co-learning/2026-Solana-%E6%8A%80%E6%9C%AF%E8%AE%AD%E7%BB%83%E8%90%A5-S2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white/20 px-10 py-4 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Join on HackQuest
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 md:px-12 max-w-7xl mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} 021Lab. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a
              href="https://x.com/021lab45119"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              X
            </a>
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
