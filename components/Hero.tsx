"use client";

import { motion } from "framer-motion";
import GradientBackground from "./GradientBackground";
import SideNav from "./SideNav";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Animated Gradient Background */}
      <GradientBackground />

      {/* Side Navigation (AI-style peripheral nav) */}
      <SideNav />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        {/* Headline */}
        <h1 className="text-4xl font-medium leading-tight text-white md:text-6xl">
          Engineering{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            products
          </span>
          ,<br />
          not just code
        </h1>

        {/* Subheading (intentionally softer) */}
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          I’m Sunath — a software engineer focused on building thoughtful,
          scalable and intelligent digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href="#projects"
            className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </section>
  );
}
