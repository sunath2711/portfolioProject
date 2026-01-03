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
      whileHover={{ scale: 1.04 }}
      className="relative flex flex-col items-center focus:outline-none"
      style={{ transform: "scale(0.8)" }} // 🔹 20% size reduction
    >
      <div className="relative flex h-[250px] w-[200px] flex-col items-center">
        {/* Glass Dome */}
        <div
          className="relative z-20 h-[45px] w-[70px] rounded-t-full border border-white/30"
          style={{
            background: "rgba(135,206,250,0.2)",
            backdropFilter: "blur(5px)",
            boxShadow:
              "inset 0 10px 15px rgba(255,255,255,0.4), 0 0 20px rgba(0,255,255,0.5)",
            marginBottom: "-15px",
          }}
        />

        {/* Saucer Body */}
        <div
          className="relative z-30 h-[60px] w-[200px] rounded-full"
          style={{
            background: "linear-gradient(to bottom, #444, #222, #000)",
            boxShadow:
              "inset 0 2px 5px rgba(255,255,255,0.2), 0 10px 20px rgba(0,0,0,0.8)",
            borderBottom: "2px solid #111",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 h-[30px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              border: "2px solid #00f3ff",
              boxShadow:
                "0 0 15px #00f3ff, inset 0 0 10px #00f3ff",
            }}
          />

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

        <div
          className="z-40 mt-[-2px] h-[15px] w-[50px] rounded-full"
          style={{
            background: "#fff",
            filter: "blur(5px)",
            boxShadow: "0 0 20px #00f3ff",
          }}
        />

        <div
          className="pointer-events-none mt-[-10px] h-[140px] w-[140px]"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,243,255,0.5), rgba(0,243,255,0.05))",
            clipPath:
              "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      <span className="mt-2 text-xs tracking-widest text-white/70">
        {label}
      </span>

      <style jsx>{`
        @keyframes ufoPulse {
          0%,
          100% {
            opacity: 1;
            filter: drop-shadow(0 0 5px #ff00ff);
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
