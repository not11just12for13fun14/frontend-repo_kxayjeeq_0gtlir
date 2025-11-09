export default function Hero() {
  const resumeUrl =
    "https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing";

  return (
    <section
      id="home"
      className="relative min-h-[85vh] w-full overflow-hidden bg-black"
    >
      {/* Grainy purple/indigo aura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(168,85,247,0.18),transparent_60%),radial-gradient(700px_400px_at_80%_-10%,rgba(79,70,229,0.18),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<?xml version=\\'1.0\\' encoding=\\'UTF-8\\'?><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\' viewBox=\\'0 0 300 300\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.7\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.9\\'/></svg>')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-fuchsia-300/80">Portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Naman Sinha
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-medium text-white/90">
            UI/UX Designer & Frontend Developer
          </p>
          <p className="mt-4 text-white/75 max-w-2xl">
            I craft sleek, intuitive interfaces and build interactive products for the web and mobile. Always curious, always experimenting—pushing pixels and prototypes until they feel effortless.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
