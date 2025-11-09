import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[radial-gradient(1000px_600px_at_70%_10%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_20%_0%,rgba(99,102,241,0.25),transparent)]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Grainy gradient overlay - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_80%_-10%,rgba(79,70,229,0.15),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<?xml version=\\'1.0\\' encoding=\\'UTF-8\\'?><svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100%\\' height=\\'100%\\' viewBox=\\'0 0 300 300\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.8\\'/></svg>')" }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Futuristic. Bold. You.
          </h1>
          <p className="mt-5 text-lg text-white/80">
            I craft immersive digital experiences with cutting-edge tech, sleek UI and playful 3D interactions. Welcome to my world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-3 rounded-md border border-white/20 text-white/90 hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
