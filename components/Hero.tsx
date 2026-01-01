"use client";

import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <GradientBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
          Engineering{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            products
          </span>
          ,<br />
          not just code
        </h1>

        <p className="mt-6 text-base leading-relaxed text-gray-400 md:text-lg">
          I’m Sunath — a software engineer focused on building thoughtful,
          scalable and intelligent digital experiences.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
