import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function StarfieldBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-black to-black opacity-90" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 80px 120px, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 130px 220px, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 300px 80px, rgba(255,255,255,0.5), transparent)', backgroundSize: '200px 200px' }} />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full text-white">
      <StarfieldBackground />

      <main className="relative mx-auto max-w-7xl space-y-16 px-4 py-10 md:space-y-24 md:px-6">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Naman Sinha — Crafted with React & Tailwind
      </footer>
    </div>
  );
}
