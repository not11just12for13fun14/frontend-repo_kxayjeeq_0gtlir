import { Code2, Sparkles, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Neon Dashboard",
    description: "A reactive analytics console with 3D microinteractions and real‑time streams.",
    tags: ["React", "WebGL", "Realtime"],
    link: "#",
  },
  {
    title: "Hologram Storefront",
    description: "Next‑gen ecommerce concept with immersive product exploration.",
    tags: ["Next.js", "Three.js", "Stripe"],
    link: "#",
  },
  {
    title: "AI Soundscapes",
    description: "Generative ambience composer powered by ML and DSP.",
    tags: ["Python", "FastAPI", "ML"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
                <Sparkles className="h-5 w-5" />
              </span>
              Featured Projects
            </h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A selection of experiments and products exploring motion, depth and playful UX.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-fuchsia-500/50 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl group-hover:bg-fuchsia-500/30 transition" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                </div>
                <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
              </div>
              <p className="mt-3 text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-white/80 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
