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
      initial={{ scale: 0.8 }}
      animate={{ scale: 0.8 }}
      whileHover={{ scale: 0.86 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col items-center focus:outline-none"
    >
      {/* UFO WRAPPER */}
      <div className="relative flex h-[220px] w-[200px] flex-col items-center">
        {/* Glass Dome */}
        <div
          className="relative z-20 h-[30px] w-[120px] rounded-t-full border border-white/30"
          style={{
            background: "rgba(135,206,250,0.2)",
            backdropFilter: "blur(5px)",
            boxShadow:
              "inset 0 10px 15px rgba(255,255,255,0.4), 0 0 20px rgba(0,255,255,0.4)",
            marginBottom: "-10px",
          }}
        />

        {/* Saucer Body */}
        <div
          className="relative z-30 h-[60px] w-[200px] rounded-full transition-all duration-300"
          style={{
            background: "linear-gradient(to bottom, #444, #222, #000)",
            boxShadow:
              "inset 0 2px 5px rgba(255,255,255,0.2), 0 10px 20px rgba(0,0,0,0.8)",
            borderBottom: "2px solid #111",
          }}
        >
          {/* Neon Ring */}
          <div
            className="absolute left-1/2 top-1/2 h-[30px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 border-2 border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_#00f3ff]"
          />

          {/* Windows */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ff00ff 2px, transparent 4px)",
              backgroundSize: "25px 50px",
              backgroundPosition: "center",
              animation: "ufoPulse 1.5s infinite",
            }}
          />
        </div>

        {/* Bottom Glow */}
        <div
          className="z-40 mt-[-2px] h-[15px] w-[50px] rounded-full transition-all duration-300 group-hover:shadow-[0_0_35px_#00f3ff]"
          style={{
            background: "#fff",
            filter: "blur(5px)",
            boxShadow: "0 0 18px #00f3ff",
          }}
        />

        {/* Tractor Beam */}
        <div
          className="pointer-events-none mt-[-10px] h-[120px] w-[140px] opacity-20 transition-all duration-300 group-hover:opacity-40"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,243,255,0.5), rgba(0,243,255,0))",
            clipPath:
              "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* FUTURISTIC HUD LABEL */}
      <div className="relative mt-2">
        {/* Left Bracket */}
        <div className="absolute -left-4 -top-1 bottom-1 w-2 border-l border-t border-b border-cyan-500/40 transition-all group-hover:border-cyan-300" />
        {/* Right Bracket */}
        <div className="absolute -right-4 -top-1 bottom-1 w-2 border-r border-t border-b border-cyan-500/40 transition-all group-hover:border-cyan-300" />
        
        <motion.span
          className="block px-2 text-[10px] font-bold tracking-[0.4em] text-cyan-400 drop-shadow-[0_0_5px_rgba(0,243,255,0.5)] transition-all group-hover:text-white group-hover:drop-shadow-[0_0_10px_#00f3ff]"
          style={{
            fontFamily: "'Orbitron', sans-serif",
          }}
        >
          {label.toUpperCase()}
        </motion.span>
        
        {/* HUD underline animation */}
        <div className="mx-auto mt-1 h-[1px] w-0 bg-cyan-400 opacity-50 transition-all duration-500 group-hover:w-full" />
      </div>

      <style jsx>{`
        @keyframes ufoPulse {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 4px #ff00ff);
          }
          50% {
            opacity: 0.35;
            filter: drop-shadow(0 0 2px #ff00ff);
          }
        }
      `}</style>
    </motion.button>
  );
}