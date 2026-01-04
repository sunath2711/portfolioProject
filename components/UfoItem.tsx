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
      // 'group' class allows the child span to react when the button is hovered
      className="group relative flex flex-col items-center focus:outline-none"
    >
      {/* UFO WRAPPER */}
      <div className="relative flex h-[250px] w-[200px] flex-col items-center">
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
            className="absolute left-1/2 top-1/2 h-[30px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 transition-all duration-300 group-hover:opacity-100"
            style={{
              border: "2px solid #00f3ff",
              boxShadow: "0 0 12px #00f3ff, inset 0 0 8px #00f3ff",
            }}
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
          className="pointer-events-none mt-[-10px] h-[140px] w-[140px] opacity-20 transition-all duration-300 group-hover:opacity-60"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,243,255,0.5), rgba(0,243,255,0.05))",
            clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* LABEL - Fixed Visibility */}
      <motion.span
        // Changed initial to 0.7 so it's visible but slightly dimmed until hover
        initial={{ opacity: 0.7, y: 0 }}
        // Now reacts to the button's hover state via the 'group' class
        className="pointer-events-none mt-4 text-xs tracking-[0.35em] text-cyan-300 transition-all duration-300 group-hover:opacity-100 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]"
        style={{
          fontFamily: "'Orbitron', 'Rajdhani', 'Space Grotesk', sans-serif",
        }}
      >
        {label.toUpperCase()}
      </motion.span>

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