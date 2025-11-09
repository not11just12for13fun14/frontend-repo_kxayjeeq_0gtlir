import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-fuchsia-300/80">Contact</p>
        <h2 className="mt-1 text-3xl font-semibold md:text-4xl">Let’s work together</h2>
        <p className="mt-3 text-zinc-300">
          Have a project in mind? Send a message and I’ll get back soon.
        </p>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-black/60 p-6"
      >
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Name</label>
          <input
            type="text"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none ring-fuchsia-400/40 placeholder:text-zinc-500 focus:border-fuchsia-400/40 focus:ring-2"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Email</label>
          <input
            type="email"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none ring-fuchsia-400/40 placeholder:text-zinc-500 focus:border-fuchsia-400/40 focus:ring-2"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-zinc-300">Message</label>
          <textarea
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none ring-fuchsia-400/40 placeholder:text-zinc-500 focus:border-fuchsia-400/40 focus:ring-2"
            placeholder="Tell me about your project..."
            required
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/50"
        >
          <Send size={18} />
          Send Message
        </button>

        <p className="mt-3 flex items-center justify-center gap-2 text-sm text-zinc-400">
          <Mail size={16} /> naman.sinha@example.com
        </p>
      </form>
    </section>
  );
}
