import React from 'react';
import { Code, Palette, Layers, Wrench } from 'lucide-react';

const skills = [
  {
    title: 'Design',
    icon: Palette,
    items: ['Wireframing', 'Prototyping', 'Design Systems', 'User Flows']
  },
  {
    title: 'Frontend',
    icon: Code,
    items: ['HTML', 'CSS / Tailwind', 'JavaScript', 'React']
  },
  {
    title: 'Architecture',
    icon: Layers,
    items: ['Component Patterns', 'State Management', 'Accessibility', 'Performance']
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'Vite', 'Framer Motion', 'Lucide Icons']
  }
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 text-white">
      <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">Skills</p>
      <h2 className="mt-1 text-3xl font-semibold md:text-4xl">Technical Strengths</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ title, icon: Icon, items }) => (
          <div
            key={title}
            className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 p-5"
          >
            <div className="flex items-center gap-2 text-fuchsia-300">
              <Icon className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-zinc-300">
              {items.map((i) => (
                <li key={i} className="rounded-md bg-white/5 px-2 py-1 break-words whitespace-normal">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
