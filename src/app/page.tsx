export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            021Lab
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="/bootcamp" className="hover:text-white transition-colors">
              Bootcamp
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="text-sm border border-white/20 rounded-full px-5 py-2 hover:bg-white hover:text-black transition-all"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Gradient accent bar */}
      <div className="gradient-bar fixed top-16 left-0 right-0 z-50" />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-24">
        <div className="animate-fade-in-up opacity-0">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-6">
            Empowering Startups
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl">
            We help tech startups
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              build & grow.
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Events, hackathons, incubation, custom merch, and growth — everything
            your startup needs to launch and scale.
          </p>
          <div className="mt-12 flex gap-4">
            <a
              href="#services"
              className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="animate-fade-in-up opacity-0 animate-delay-1">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-3">Events & Hackathons</h3>
            <p className="text-zinc-400 leading-relaxed">
              We plan and execute tech events and hackathons that bring together
              developers, designers, and entrepreneurs to create, innovate, and
              connect.
            </p>
          </div>

          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-3">Incubation</h3>
            <p className="text-zinc-400 leading-relaxed">
              From idea to product-market fit — our incubation program provides
              mentorship, resources, and a community of founders to accelerate your
              startup journey.
            </p>
          </div>

          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="text-2xl font-semibold mb-3">Custom Merch</h3>
            <p className="text-zinc-400 leading-relaxed">
              Custom-designed merchandise and cultural products for your brand.
              From concept to delivery, we handle the entire process with premium
              quality.
            </p>
          </div>

          <div className="service-card border border-white/10 rounded-2xl p-8 md:p-10">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-2xl font-semibold mb-3">Marketing & Growth</h3>
            <p className="text-zinc-400 leading-relaxed">
              Data-driven marketing strategies and growth hacking tailored for
              early-stage startups. We help you find your audience, tell your
              story, and scale.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              From Zero to One,
              <br />
              built for builders.
            </h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              021Lab is a startup services studio. The "021"
              stands for "Zero to One" — the hardest and most exciting leap in
              building something new. But we don&apos;t stop there. From 0 to 1,
              and from 1 to 100, we empower tech startups with the tools,
              community, and expertise they need at every stage of growth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">50+</div>
              <div className="text-zinc-500 text-sm mt-2">Events Hosted</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">30+</div>
              <div className="text-zinc-500 text-sm mt-2">Startups Incubated</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">5K+</div>
              <div className="text-zinc-500 text-sm mt-2">Community Members</div>
            </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-4xl font-bold">∞</div>
              <div className="text-zinc-500 text-sm mt-2">Ideas Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 max-w-7xl mx-auto py-32">
        <div className="border border-white/10 rounded-3xl p-10 md:p-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let&apos;s build something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              {" "}
              together.
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            Whether you&apos;re launching a startup, planning a hackathon, or
            looking for growth — we&apos;d love to chat.
          </p>
          <a
            href="mailto:hello@021lab.xyz"
            className="inline-block bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            hello@021lab.xyz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 md:px-12 max-w-7xl mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} 021Lab. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="https://x.com/021lab45119" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
