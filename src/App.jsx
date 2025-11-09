import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <div className="min-h-screen relative text-white selection:bg-fuchsia-500 selection:text-white">
      {/* Cosmic purple-to-black gradient background */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-[#1a0028] via-[#0b0014] to-black" />
      {/* Starfield overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.7) 50%, transparent 51%)," +
            "radial-gradient(1.5px 1.5px at 70% 40%, rgba(255,255,255,0.6) 50%, transparent 51%)," +
            "radial-gradient(1.2px 1.2px at 40% 80%, rgba(255,255,255,0.5) 50%, transparent 51%)," +
            "radial-gradient(1.8px 1.8px at 85% 75%, rgba(255,255,255,0.7) 50%, transparent 51%)," +
            "radial-gradient(1px 1px at 15% 65%, rgba(255,255,255,0.5) 50%, transparent 51%)," +
            "radial-gradient(1.4px 1.4px at 55% 15%, rgba(255,255,255,0.6) 50%, transparent 51%)",
          backgroundRepeat: "repeat",
          backgroundSize: "800px 800px",
        }}
      />

      <Navbar />

      <main className="relative z-10 space-y-10 sm:space-y-12">
        <ErrorBoundary fallback={<SectionCrash /> }>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrash title="Projects" /> }>
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrash title="About" /> }>
          <About />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrash title="Skills" /> }>
          <Skills />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrash title="Experience" /> }>
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary fallback={<SectionCrash title="Contact" /> }>
          <Contact />
        </ErrorBoundary>
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} — Designed & built by Naman Sinha.
        </div>
      </footer>
    </div>
  );
}

function SectionCrash({ title = "This section" }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-200">
        {title} failed to load. Please refresh the page.
      </div>
    </div>
  );
}
