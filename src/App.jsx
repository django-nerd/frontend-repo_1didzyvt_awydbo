import { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="tracking-tight font-black text-xl">CREATOR</a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-black/70 hover:text-black transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full border border-black/10 px-4 py-1.5 text-sm font-semibold hover:bg-black hover:text-white transition-colors">Let’s talk</a>
          </nav>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10" aria-label="Toggle menu">
            <span className="block w-4 h-0.5 bg-black rounded" />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-black/10">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2">
            <a href="#work" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Work</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 text-sm font-medium">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(0,0,0,0.05)_0%,rgba(255,255,255,0)_60%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="py-24 md:py-0">
          <p className="uppercase tracking-[0.25em] text-xs text-black/50 mb-4">Content Creator</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Bold stories. Minimal frames. Smooth motion.
          </h1>
          <p className="text-black/70 text-base sm:text-lg leading-relaxed mb-8">
            I craft short-form videos and visuals that feel futuristic, clean, and scroll-stopping. Let’s build something magnetic.
          </p>
          <div className="flex items-center gap-3">
            <a href="#work" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">View work</a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold hover:bg-black hover:text-white transition-colors">Get in touch</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative h-[420px] sm:h-[520px] md:h-[640px]">
          <div className="absolute inset-0 rounded-2xl border border-black/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] overflow-hidden bg-white/40 backdrop-blur-xl">
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute -inset-8 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  )
}

function Work() {
  const projects = [
    {
      title: 'Neon Flow',
      tag: 'Motion Edit',
      cover: 'linear-gradient(135deg,#0ea5e9,#22d3ee)',
    },
    { title: 'Clean Frame', tag: 'Short Reel', cover: 'linear-gradient(135deg,#a78bfa,#60a5fa)' },
    { title: 'Future Grid', tag: 'Visual Pack', cover: 'linear-gradient(135deg,#f472b6,#f59e0b)' },
    { title: 'Mono Pulse', tag: 'Brand Tease', cover: 'linear-gradient(135deg,#34d399,#10b981)' },
  ]

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-black">Selected Work</h2>
          <a href="#contact" className="text-sm font-semibold text-black/70 hover:text-black">Request full portfolio →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group block rounded-2xl overflow-hidden border border-black/10 bg-white/60 backdrop-blur-xl hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] transition-shadow"
            >
              <div
                className="aspect-[16/10] w-full"
                style={{ backgroundImage: p.cover, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-xs uppercase tracking-widest text-black/50">{p.tag}</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full border border-black/10">Play</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-balance">
        <h3 className="text-2xl sm:text-3xl font-black mb-4">About</h3>
        <p className="text-lg leading-relaxed text-black/80">
          I’m a content creator focused on minimal, high-impact visuals with a futuristic edge. From fast edits to product teasers, I blend clarity with energy so every second counts. I’ve partnered with startups and creators to produce work that looks clean, scrolls smooth, and feels bold.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-white/70 backdrop-blur-xl p-8 sm:p-12 text-center">
          <h4 className="text-2xl sm:text-3xl font-black mb-4">Have a project in mind?</h4>
          <p className="text-black/70 mb-8">Tell me about your brand and timeline. I’ll reply within 24 hours.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:hello@creator.studio" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity">Email me</a>
            <a href="https://cal.com" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-black/15 px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition-colors">Book a call</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-black/60">© {new Date().getFullYear()} Creator Studio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-black/70 hover:text-black">Instagram</a>
          <a href="#" className="text-black/70 hover:text-black">TikTok</a>
          <a href="#" className="text-black/70 hover:text-black">YouTube</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Nav />
      <main className="pt-16">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
