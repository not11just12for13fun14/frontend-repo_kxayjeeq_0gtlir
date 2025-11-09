import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[Portfolio] ${data.get("name")} — ${data.get("subject")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    const mailto = `mailto:get2naman@gmail.com?subject=${subject}&body=${body}`;

    setStatus("sending");
    // Open default mail client
    window.location.href = mailto;
    setTimeout(() => setStatus("idle"), 1200);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s collaborate</h2>
        <p className="mt-2 text-white/80 max-w-2xl">
          Have an idea or want to build something delightful? Send a message directly or reach me on socials.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Translucent form card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-white/80">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border border-white/15 bg-white text-black px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border border-white/15 bg-white text-black px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/80">Subject</label>
                <input
                  name="subject"
                  required
                  className="mt-1 w-full rounded-md border border-white/15 bg-white text-black px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="Project idea, collaboration..."
                />
              </div>
              <div>
                <label className="text-sm text-white/80">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-md border border-white/15 bg-white text-black px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500"
                  placeholder="Tell me a bit about your idea"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 font-medium shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] disabled:opacity-70"
              >
                <Send className="h-4 w-4" /> {status === "sending" ? "Sending…" : "Send Email"}
              </button>
            </form>
          </div>

          {/* Social links card */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="grid gap-4">
              <a href="mailto:get2naman@gmail.com" className="group flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-4 hover:border-fuchsia-500/50">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white/80 group-hover:text-white" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-white/70">get2naman@gmail.com</p>
                  </div>
                </div>
              </a>
              <a href="tel:+918925474810" className="group flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-4 hover:border-fuchsia-500/50">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white/80 group-hover:text-white" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-white/70">+91 8925474810</p>
                  </div>
                </div>
              </a>
              <a href="https://github.com/get2naman-bit" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-4 hover:border-fuchsia-500/50">
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-white/80 group-hover:text-white" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-white/70">github.com/get2naman-bit</p>
                  </div>
                </div>
              </a>
              <a href="https://linkedin.com/in/naman-sinha-986511248" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-lg border border-white/10 bg-black/40 p-4 hover:border-fuchsia-500/50">
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-white/80 group-hover:text-white" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-white/70">naman-sinha-986511248</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
