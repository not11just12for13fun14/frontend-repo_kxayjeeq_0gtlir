import { ExternalLink, Layers, Brain, Ticket } from "lucide-react";

const projects = [
  {
    title: "MindMate",
    description:
      "A mental health assistant and counselling platform with a resource hub, AI chatbot, and community groups.",
    tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
    link: "https://hpsc.tiiny.site",
    icon: Brain,
  },
  {
    title: "AI Credit Score Manager",
    description:
      "Estimates creditworthiness from utility bill behavior and delivers an AI‑approved score.",
    tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
    link: "https://creditscore-main.onrender.com",
    icon: Layers,
  },
  {
    title: "Bus/Train Ticket Booking System",
    description:
      "Smart ticketing with seat management, route search and mock payment integration.",
    tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
    link: "https://booksmmart.netlify.app",
    icon: Ticket,
  },
  {
    title: "TruthLensAI",
    description:
      "Detects misinformation and provides credibility scores with verified sources.",
    tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
    link: "https://truth-guard-ai-08a116dd.base44.app",
    icon: Brain,
  },
  {
    title: "Cricscard",
    description:
      "Live cricket and football scores with standings and league points tables.",
    tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
    link: "https://cricscard.netlify.app",
    icon: Layers,
  },
  {
    title: "Juswipe (Upcoming)",
    description:
      "Personalized news swiping app that learns preferences via left/right gestures across 10+ countries.",
    tags: ["React Native", "Flutter"],
    link: "#",
    icon: Layers,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Selected work spanning product concepts, AI‑assisted tools, and real‑time interfaces.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, link, icon: Icon }) => (
            <a
              key={title}
              href={link}
              target={link !== "#" ? "_blank" : undefined}
              rel={link !== "#" ? "noreferrer" : undefined}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 hover:border-fuchsia-500/50 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl group-hover:bg-fuchsia-500/30 transition" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
                    {Icon ? <Icon className="h-5 w-5 text-white" /> : null}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-white" />
              </div>
              <p className="mt-3 text-white/70">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
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
