import { Briefcase, Trophy } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Experience & Achievements</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Work Experience Card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-fuchsia-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Work</h3>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-medium">UI/UX Designer & Frontend Developer — Youth India Foundation</p>
                  <span className="text-xs text-white/60">May 2025 – July 2025</span>
                </div>
                <ul className="mt-3 list-disc pl-5 text-white/80 space-y-1">
                  <li>Assisted in designing, modifying, and shipping improvements to the organization’s website.</li>
                  <li>Collaborated on UI/UX enhancements and front‑end implementation for new features.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hackathons Card */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-fuchsia-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-10 w-10 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-semibold">Hackathons</h3>
            </div>
            <ul className="space-y-3 text-white/85">
              <li>
                <span className="font-medium text-white">SIH 2025:</span> Cleared internal round; Top 30/220 teams as Frontend Lead on a mental health counselling platform.
              </li>
              <li>
                <span className="font-medium text-white">Riidl Incuverse 2025:</span> Built a personal finance app that tracks savings and offers intelligent recommendations.
              </li>
              <li>
                <span className="font-medium text-white">Google Gen AI Hackathon:</span> Enhanced the mental health platform with personalized AI‑driven features.
              </li>
              <li>
                <span className="font-medium text-white">VW Mobilothon 5.0 (Results Awaited):</span> Submitted a real‑time parking locator and booking concept; Team Lead.
              </li>
              <li>
                <span className="font-medium text-white">Mumbai Hacks 2025 (Upcoming Grand Finale):</span> Leading an Agentic AI system to combat misinformation with credibility signals.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
