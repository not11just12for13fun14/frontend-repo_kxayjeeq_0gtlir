import { Rocket, Github, FileDown, Linkedin } from "lucide-react";

export default function Navbar() {
  const resumeUrl =
    "https://drive.google.com/file/d/1WbnSUS8kpuVoXtuEG6fq1DKRsDhsuPsX/view?usp=sharing";

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-white">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 grid place-items-center rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-wide">Naman Sinha</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/85">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/get2naman-bit"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/naman-sinha-986511248"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition"
            >
              <FileDown className="h-4 w-4" /> <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
