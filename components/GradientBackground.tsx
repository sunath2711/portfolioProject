"use client";

import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/40 to-fuchsia-500/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-[-120px] h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-sky-500/30 to-cyan-400/20 blur-3xl"
      />
    </div>
  );
}
