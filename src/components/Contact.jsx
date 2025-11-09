import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s collaborate</h2>
        <p className="mt-2 text-white/80">
          Have an idea or want to build something delightful? I’d love to hear from you.
        </p>

        <div className="mt-8 grid gap-3 rounded-xl border border-white/10 bg-white/5 p-6 text-white/90">
          <a href="mailto:get2naman@gmail.com" className="flex items-center gap-3 hover:text-white">
            <Mail className="h-4 w-4" /> get2naman@gmail.com
          </a>
          <a href="tel:+918925474810" className="flex items-center gap-3 hover:text-white">
            <Phone className="h-4 w-4" /> +91 8925474810
          </a>
          <a
            href="https://github.com/get2naman-bit"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-white"
          >
            <Github className="h-4 w-4" /> github.com/get2naman-bit
          </a>
          <a
            href="https://linkedin.com/in/naman-sinha-986511248"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:text-white"
          >
            <Linkedin className="h-4 w-4" /> linkedin.com/in/naman-sinha-986511248
          </a>
        </div>
      </div>
    </section>
  );
}
