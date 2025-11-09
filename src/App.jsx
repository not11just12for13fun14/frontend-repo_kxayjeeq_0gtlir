import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500 selection:text-white">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} — Crafted with passion and photons.
        </div>
      </footer>
    </div>
  );
}
