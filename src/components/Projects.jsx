import React from 'react';
import { ExternalLink, Rocket } from 'lucide-react';

const projects = [
  {
    title: 'Design System Starter',
    description: 'A reusable, accessible design system with tokens, components, and theming.',
    link: '#',
    tag: 'UI/UX'
  },
  {
    title: 'Interactive Portfolio',
    description: 'A fast, animated portfolio template with delightful micro-interactions.',
    link: '#',
    tag: 'Frontend'
  },
  {
    title: 'Realtime Dashboard',
    description: 'Lightweight dashboard with streaming charts and responsive layout.',
    link: '#',
    tag: 'Web App'
  }
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">Projects</p>
          <h2 className="mt-1 text-3xl font-semibold md:text-4xl">Selected Work</h2>
        </div>
        <Rocket className="text-fuchsia-400/90" />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 p-5 transition hover:border-fuchsia-400/30"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-300">{p.tag}</span>
              <ExternalLink className="h-4 w-4 opacity-60 transition group-hover:opacity-100" />
            </div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{p.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
