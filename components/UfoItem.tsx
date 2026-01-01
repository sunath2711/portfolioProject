"use client";

import { motion } from "framer-motion";

interface UFOItemProps {
  label: string;
  onClick?: () => void;
}

export default function UFOItem({ label, onClick }: UFOItemProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      className="relative flex flex-col items-center focus:outline-none"
    >
      {/* UFO BODY */}
      <div className="relative h-16 w-44">
        {/* Dome */}
        <div className="absolute left-1/2 top-0 h-6 w-16 -translate-x-1/2 rounded-t-full bg-gradient-to-b from-zinc-400 to-zinc-700 opacity-90 blur-[0.3px]" />

        {/* Saucer */}
        <div className="absolute inset-x-0 top-4 h-10 rounded-full bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-300 shadow-[0_18px_35px_rgba(0,0,0,0.7)]" />

        {/* Neon ring */}
        <div className="absolute inset-x-3 top-[28px] h-1 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)]" />

        {/* Neon dots */}
        <div className="absolute inset-x-6 bottom-3 flex justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,1)] animate-pulse"
              style={{ animationDelay: `${i * 120}ms` }}
            />
          ))}
        </div>
      </div>

      {/* TRACTOR BEAM */}
      <div className="pointer-events-none absolute top-[60px] h-40 w-32 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100">
        <div
          className="h-full w-full bg-gradient-to-b from-cyan-300/40 to-transparent"
          style={{
            clipPath: "polygon(50% 0%, 62% 0%, 100% 100%, 0% 100%, 38% 0%)",
          }}
        />
      </div>

      {/* LABEL */}
      <span className="mt-3 text-xs tracking-widest text-white/70">
        {label}
      </span>
    </motion.button>
  );
}

