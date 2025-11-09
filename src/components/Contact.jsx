import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s collaborate</h2>
        <p className="mt-2 text-white/80">
          Have an idea, a product, or just want to say hi? Drop a message and I’ll get back soon.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              placeholder="Your name"
              required
            />
            <input
              type="email"
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
              placeholder="Email address"
              required
            />
          </div>
          <textarea
            rows={5}
            className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
            placeholder="Tell me about your project"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-white/70">
          <Mail className="h-4 w-4" />
          <a href="mailto:you@example.com" className="hover:text-white">you@example.com</a>
        </div>
      </div>
    </section>
  );
}
