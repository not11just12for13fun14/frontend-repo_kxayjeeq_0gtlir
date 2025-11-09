export default function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Work Experience */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Work</h3>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">UI/UX Designer & Frontend Developer — Youth India Foundation</p>
                  <span className="text-xs text-white/60">May 2025 – July 2025</span>
                </div>
                <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                  <li>Assisted in designing, modifying, and shipping improvements to the organization’s website.</li>
                  <li>Collaborated on UI/UX enhancements and front‑end implementation for new features.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hackathons */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Hackathons</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <span className="font-medium text-white">SIH 2025:</span> Cleared internal round; ranked Top 30 of 220 teams as Frontend Lead on a mental health counselling platform.
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

        {/* Contact summary */}
        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <a href="mailto:get2naman@gmail.com" className="hover:text-white">📧 get2naman@gmail.com</a>
            <a href="tel:+918925474810" className="hover:text-white">📱 +91 8925474810</a>
            <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="hover:text-white">🐙 github.com/get2naman-bit</a>
            <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="hover:text-white">🔗 linkedin.com/in/naman-sinha-986511248</a>
          </div>
        </div>
      </div>
    </section>
  );
}
