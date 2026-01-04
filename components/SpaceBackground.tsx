"use client";

import { motion } from "framer-motion";

export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* --- 1. NEBULA & ATMOSPHERE --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e3a8a66_0%,#020617_100%)]" />
      
      {/* --- 2. ASYMMETRIC STAR LAYERS --- */}
      
      {/* Layer 1: Dense Base Dust (Tiny stars) */}
      <div className="star-layer opacity-40" style={{ '--size': '137px', '--density': '0.8px', '--pos1': '5%', '--pos2': '90%', '--pos3': '35%' } as any} />
      
      {/* Layer 2: Mid-range Coverage */}
      <div className="star-layer opacity-50" style={{ '--size': '223px', '--density': '1.2px', '--pos1': '30%', '--pos2': '20%', '--pos3': '70%' } as any} />

      {/* Layer 3: Moving Deep Stars (Parallax) */}
      <motion.div
        animate={{ y: [0, -1000] }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="star-layer opacity-40"
        style={{ '--size': '431px', '--density': '1.5px', '--pos1': '85%', '--pos2': '45%', '--pos3': '15%' } as any}
      />

      {/* --- 3. NEW: NEON GLOW & BIG STARS --- */}
      {/* These use CSS drop-shadow for a neon bloom effect */}
      <div className="star-layer neon-stars" style={{ '--size': '571px' } as any} />

      {/* --- 4. THE THREE PLANETS --- */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[45%] h-[60px] w-[60px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, #4ade80 0%, #3b82f6 50%, #1d4ed8 100%)",
          boxShadow: "inset -10px -10px 20px rgba(0,0,0,0.8), 0 0 20px rgba(59, 130, 246, 0.2)",
        }}
      />

      <motion.div 
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -bottom-4 h-[140px] w-[140px] rounded-full opacity-40 z-0"
        style={{
          background: "linear-gradient(170deg, #b89a7b 0%, #e8d6b8 30%, #a48563 50%, #7a5c3d 100%)",
          boxShadow: "inset -15px -15px 30px rgba(0,0,0,0.9)",
        }}
      />

      <motion.div 
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[35%] top-[15%] h-[30px] w-[30px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, #fde047 0%, #ca8a04 100%)",
          boxShadow: "0 0 15px rgba(253, 224, 71, 0.3), inset -5px -5px 10px rgba(0,0,0,0.6)",
        }}
      />

      {/* --- 5. VECTOR STREAKS --- */}
      <StaticVectorStreak delay={1.5} originB={{ top: '25%', left: '75%' }} angle={190} finalLength="200px" />
      <StaticVectorStreak delay={6} originB={{ top: '70%', left: '85%' }} angle={220} finalLength="250px" />

      <style jsx>{`
        .star-layer {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(var(--density) var(--density) at var(--pos1) var(--pos2), #fff, transparent),
            radial-gradient(var(--density) var(--density) at var(--pos2) var(--pos3), #fff, transparent),
            radial-gradient(var(--density) var(--density) at var(--pos3) var(--pos1), #60a5fa, transparent);
          background-size: var(--size) var(--size);
        }

        .neon-stars {
          background-image: 
            radial-gradient(2.5px 2.5px at 20% 40%, #fff, transparent),
            radial-gradient(2px 2px at 75% 15%, #bae6fd, transparent),
            radial-gradient(3px 3px at 50% 80%, #60a5fa, transparent);
          background-size: var(--size) var(--size);
          filter: drop-shadow(0 0 3px #3b82f6) drop-shadow(0 0 8px rgba(96, 165, 250, 0.4));
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
}

function StaticVectorStreak({ delay, originB, angle, finalLength }: any) {
  return (
    <div className="absolute" style={{ top: originB.top, left: originB.left }}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: ["0px", finalLength, finalLength], opacity: [0, 1, 0] }}
        transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 6, ease: "easeOut" }}
        className="absolute h-[1px] origin-left"
        style={{ 
          transform: `rotate(${angle}deg)`,
          background: "linear-gradient(90deg, rgba(255,255,255,0.1), #fff, rgba(59, 130, 246, 0.8))",
        }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 0, 1.8, 0], opacity: [0, 0, 1, 0], boxShadow: ["0 0 0px #fff", "0 0 0px #fff", "0 0 15px #fff", "0 0 0px #fff"] }}
          transition={{ duration: 2, delay, repeat: Infinity, repeatDelay: 6, times: [0, 0.4, 0.6, 1], ease: "easeOut" }}
          className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-white"
        />
      </motion.div>
    </div>
  );
}