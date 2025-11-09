import React from 'react';
import Spline from '@splinetool/react-spline';
import { FileDown, Github, Linkedin } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60">
      {/* Interactive minimalist Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(800px_200px_at_50%_10%,rgba(168,85,247,0.20),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-center text-white">
        <p className="mb-3 text-sm uppercase tracking-widest text-fuchsia-300/80">UI/UX Designer & Frontend Developer</p>
        <h1 className="text-4xl font-bold md:text-6xl">
          Naman Sinha
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-300">
          I blend clean design with performant frontends. Focused on modern React, delightful interactions, and accessible user experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
          >
            <FileDown size={18} />
            Download Resume
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
