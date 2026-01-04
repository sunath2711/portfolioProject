"use client";

import { motion } from "framer-motion";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* --- 1. NEBULA & STARS (Static Layers) --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a66_0%,#020617_100%)]" />
      <div className="star-layer opacity-40" style={{ '--size': '100px', '--density': '1px' } as any} />
      
      {/* --- 2. THE VECTOR STREAKS (B to A with Impact at A) --- */}
      {/* Path 1: Top Right toward Center */}
      <StaticVectorStreak 
        delay={1.5} 
        originB={{ top: '15%', left: '85%' }} 
        angle={200} 
        finalLength="220px" 
      />
      
      {/* Path 2: Bottom Left toward Center */}
      <StaticVectorStreak 
        delay={5} 
        originB={{ top: '80%', left: '20%' }} 
        angle={-45} 
        finalLength="180px" 
      />

      {/* Path 3: Center Right toward Top Left */}
      <StaticVectorStreak 
        delay={8.5} 
        originB={{ top: '40%', left: '90%' }} 
        angle={165} 
        finalLength="350px" 
      />

      <style jsx>{`
        .star-layer {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--density) var(--density) at 20px 30px, #fff, transparent),
                            radial-gradient(var(--density) var(--density) at 70px 10px, #fff, transparent),
                            radial-gradient(var(--density) var(--density) at 40px 80px, #3b82f6, transparent);
          background-size: var(--size) var(--size);
        }
      `}</style>
    </div>
  );
}

function StaticVectorStreak({ 
  delay, 
  originB, 
  angle, 
  finalLength 
}: { 
  delay: number; 
  originB: { top: string; left: string }; 
  angle: number; 
  finalLength: string; 
}) {
  return (
    <div 
      className="absolute" 
      style={{ top: originB.top, left: originB.left }}
    >
      {/* The Origin B (Now just a faint anchor) */}
      <div className="absolute h-1 w-1 rounded-full bg-white/20" />

      {/* The Line extending from B to A */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ 
          width: ["0px", finalLength, finalLength], 
          opacity: [0, 1, 0] 
        }}
        transition={{ 
          duration: 2, 
          delay: delay, 
          repeat: Infinity, 
          repeatDelay: 6,
          ease: "easeOut" 
        }}
        className="absolute h-[1px] origin-left"
        style={{ 
          transform: `rotate(${angle}deg)`,
          background: "linear-gradient(90deg, rgba(255,255,255,0.1), #fff, rgba(59, 130, 246, 0.8))",
        }}
      >
        {/* THE IMPACT POINT A */}
        {/* This dot is attached to the END of the line (100% right) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 0, 1.5, 0], 
            opacity: [0, 0, 1, 0],
            boxShadow: ["0 0 0px #fff", "0 0 0px #fff", "0 0 12px #fff", "0 0 0px #fff"]
          }}
          transition={{ 
            duration: 2, 
            delay: delay, 
            repeat: Infinity, 
            repeatDelay: 6,
            times: [0, 0.4, 0.5, 1], // Ensures it only glows when the line reaches point A
            ease: "easeOut" 
          }}
          className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
}