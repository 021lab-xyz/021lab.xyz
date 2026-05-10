"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import CaseStudies from "@/components/CaseStudies";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

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
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          className="relative"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            AI + Web3 · Hackathon Studio
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl">
            We Build Hackathons
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-emerald-400 to-green-400">
              for AI + Web3.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            021Lab designs and runs hackathons end to end — from track structure and submissions to demo day and prizes.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-4">
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
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <motion.div
        className="border-y border-white/5 bg-white/[0.02]"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-3 gap-4 text-center">
          <motion.div variants={fadeUp}>
            <div className="text-3xl md:text-4xl font-bold">50+</div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">Events</div>
          </motion.div>
          <motion.div variants={fadeUp} className="border-x border-white/5">
            <div className="text-3xl md:text-4xl font-bold">5,000+</div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">Builders</div>
          </motion.div>
          <motion.div variants={fadeUp}>
            <div className="text-3xl md:text-4xl font-bold">30+</div>
            <div className="text-zinc-500 text-xs md:text-sm mt-1">Projects Launched</div>
          </motion.div>
        </div>
      </motion.div>

      {/* What We Do */}
      <section id="services" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">What We Do</motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-16">How We Work</motion.h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={fadeUp} className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="mb-5">
              <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Full-Service Operations</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              We handle the entire event — structure, submissions, marketing, judge coordination, and day-of operations. You define the goal; we deliver the hackathon.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="mb-5">
              <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Builder Distribution</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              We bring 5,000+ AI and Web3 builders from our own community. Your hackathon reaches real developers — not a generic mailing list.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="mb-5">
              <svg className="w-7 h-7 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Track & Prize Design</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              We structure your tracks, judging criteria, and prize flow to attract serious builders and produce projects that ship beyond the event.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <CaseStudies />

      {/* Builder Network */}
      <section id="builders" className="px-6 md:px-12 max-w-7xl mx-auto py-32 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">The Builder Network</motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              5,000+ builders
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
                across AI + Web3.
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-zinc-400 leading-relaxed text-lg mb-8">
              Behind every hackathon we run is a curated community of developers, founders, and researchers across Asia. When you run a hackathon with 021Lab, this is the audience you reach.
            </motion.p>
            <motion.a
              variants={fadeUp}
              href="mailto:hello@021lab.xyz?subject=Join the Builder Network"
              className="inline-block border border-white/20 px-7 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Join the Builder Network →
            </motion.a>
          </motion.div>

          <motion.div
            id="about"
            className="grid grid-cols-2 gap-4 text-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-zinc-500 text-sm mt-2">Events Run</div>
            </motion.div>
            <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">5K+</div>
              <div className="text-zinc-500 text-sm mt-2">Builders</div>
            </motion.div>
            <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-zinc-500 text-sm mt-2">Projects Launched</div>
            </motion.div>
            <motion.div variants={fadeUp} className="border border-white/10 rounded-2xl p-8">
              <div className="text-2xl font-bold leading-tight">AI +<br />Web3</div>
              <div className="text-zinc-500 text-sm mt-2">Focus Areas</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32 border-t border-white/5 pt-20">
        <motion.div
          className="max-w-2xl"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">About</motion.p>
          <motion.p variants={fadeUp} className="text-zinc-300 text-lg leading-relaxed">
            021Lab is a lean, cross-timezone team — based across Asia and North America — that designs and runs hackathons for AI and Web3 ecosystems end to end. We&apos;ve operated events across multiple countries, built a 5,000-strong builder community spanning five continents, and move fast enough to go from brief to demo day without the usual overhead. We&apos;ve been building in this space long enough that the networks, the context, and the judgment come with us.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <motion.div
          className="border border-white/10 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Get Started</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to run your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400"> next hackathon?</span>
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
        </motion.div>
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
