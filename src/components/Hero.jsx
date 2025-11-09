import Spline from "@splinetool/react-spline";

export default function Hero() {
  const resumeUrl =
    "https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing";

  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          {/* Left: Text content */}
          <div className="relative z-10 text-white">
            <p className="text-xs uppercase tracking-[0.25em] text-fuchsia-300/90">Portfolio</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight">Naman Sinha</h1>
            <p className="mt-2 text-xl sm:text-2xl font-medium text-white/95">
              UI/UX Designer & Frontend Developer
            </p>
            <p className="mt-4 text-white/85 max-w-2xl">
              I craft sleek, intuitive interfaces and build interactive products for the web and mobile. Always curious, always experimenting—pushing pixels and prototypes until they feel effortless.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-md border border-white/20 text-white/95 backdrop-blur-sm bg-white/10 hover:bg-white/15 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Spline placed to the side so it doesn't obstruct text */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] md:ml-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0">
              <Spline
                scene="https://prod.spline.design/3cc55e31-19ce-434a-b567-48b1bdf05026/scene.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            {/* Soft vignette/shine that won't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
