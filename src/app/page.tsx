"use client";

import { useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">021Lab</a>

          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#hackathons" className="hover:text-white transition-colors">Hackathons</a>
            <a href="#builders" className="hover:text-white transition-colors">For Builders</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-block text-sm bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors"
          >
            Run a Hackathon →
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 py-5 flex flex-col gap-5 text-sm">
            <a href="#hackathons" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white transition-colors">Hackathons</a>
            <a href="#builders" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white transition-colors">For Builders</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-white font-medium">Run a Hackathon →</a>
          </div>
        )}
      </nav>

      {/* Gradient accent bar */}
      <div className="gradient-bar fixed top-16 left-0 right-0 z-50" />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-24">
        <div className="dot-grid absolute inset-0 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative animate-fade-in-up opacity-0">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            AI + Web3 · Hackathon Platform
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl">
            The Hackathon Platform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              for AI + Web3.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            We design and run hackathons that launch the next generation of builders — and we&apos;re building the infrastructure to do it at scale.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Run a Hackathon →
            </a>
            <a
              href="#builders"
              className="border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Join as a Builder
            </a>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold">50+</div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">Hackathons</div>
          </div>
          <div className="border-x border-white/5">
            <div className="text-3xl md:text-4xl font-bold">5,000+</div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">Builders</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">30+</div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">Projects Launched</div>
          </div>
        </div>
      </div>

      {/* What We Do */}
      <section id="services" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Hackathon Infrastructure</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="mb-5">
              <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Full-Service Hackathon</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              End-to-end design, operations, marketing, judging, and prizes. You bring the vision — we handle everything else.
            </p>
          </div>

          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="mb-5">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Developer Distribution</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Tap into 5,000+ AI and Web3 builders across our community network. Your hackathon reaches the right people — not just anyone.
            </p>
          </div>

          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="mb-5">
              <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Track & Prize Design</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              We structure your tracks, judging criteria, and prize flow to attract serious builders and produce projects that ship beyond the event.
            </p>
          </div>
        </div>
      </section>

      {/* Past Hackathons */}
      <section id="hackathons" className="px-6 md:px-12 max-w-7xl mx-auto py-32 border-t border-white/5">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Track Record</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Past Hackathons</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="hackathon-card relative rounded-2xl p-8 md:p-10 overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
            <div className="relative">
              <p className="text-xs text-cyan-400 uppercase tracking-widest mb-2">Ecosystem Partner</p>
              <h3 className="text-xl font-semibold mb-5">HashKey Chain Horizon Hackathon</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["DeFi", "PayFi", "AI", "ZKID"].map(track => (
                  <span key={track} className="text-xs border border-white/10 rounded-full px-3 py-1 text-zinc-400">{track}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">$40,000</div>
                  <div className="text-zinc-500 text-xs mt-0.5">Prize Pool (USDT)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-zinc-500 text-xs mt-0.5">Tracks</div>
                </div>
              </div>
              <p className="text-xs text-zinc-600 mt-5">With HSK Chain · DoraHacks · AWS Cloud</p>
            </div>
          </div>

          <div className="hackathon-card relative rounded-2xl p-8 md:p-10 overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-600/5" />
            <div className="relative">
              <p className="text-xs text-purple-400 uppercase tracking-widest mb-2">Co-Organizer</p>
              <h3 className="text-xl font-semibold mb-5">Solana Mini Hacker House Singapore</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Singapore", "Apr 28–29, 2026", "In-Person"].map(tag => (
                  <span key={tag} className="text-xs border border-white/10 rounded-full px-3 py-1 text-zinc-400">{tag}</span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">In-Person</div>
                  <div className="text-zinc-500 text-xs mt-0.5">Format</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">2026</div>
                  <div className="text-zinc-500 text-xs mt-0.5">Year</div>
                </div>
              </div>
              <p className="text-xs text-zinc-600 mt-5">With Solana · SafePal · HackQuest · OpenBuild</p>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Network */}
      <section id="builders" className="px-6 md:px-12 max-w-7xl mx-auto py-32 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Builder Network</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              5,000+ builders
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                across AI + Web3.
              </span>
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg mb-8">
              Behind every hackathon we run is a curated community of developers, founders, and researchers. When you run a hackathon with 021Lab, this is the audience you reach.
            </p>
            <a
              href="mailto:hello@021lab.xyz?subject=Join the Builder Network"
              className="inline-block border border-white/20 px-7 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Join the Builder Network →
            </a>
          </div>

          <div id="about" className="grid grid-cols-2 gap-4 text-center">
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-zinc-500 text-sm mt-2">Hackathons Run</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">5K+</div>
              <div className="text-zinc-500 text-sm mt-2">Builders</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-zinc-500 text-sm mt-2">Projects Launched</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-2xl font-bold leading-tight">AI +<br />Web3</div>
              <div className="text-zinc-500 text-sm mt-2">Focus Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to run your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"> next hackathon?</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
              Tell us about your project. We&apos;ll handle the rest.
            </p>
            <a
              href="mailto:hello@021lab.xyz?subject=Run a Hackathon with 021Lab"
              className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              hello@021lab.xyz
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
          <div className="text-xs text-zinc-700 hidden md:block">
            Building the hackathon infrastructure for AI + Web3.
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="https://x.com/021labxyz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              X / Twitter
            </a>
            <a href="mailto:hello@021lab.xyz" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
