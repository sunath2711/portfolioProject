"use client";

import { motion } from "framer-motion";
import SpaceBackground from "./SpaceBackground";
import UfoNav from "./UfoNav";


export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Background stays deep in the stack */}
      <SpaceBackground />
      <UfoNav />

      {/* 1. HUD TARGETING RETICLE (Visual Frame) */}
      {/* <div className="absolute h-[290px] w-[90%] max-w-[640px] pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 h-12 w-12 border-t border-l border-cyan-400" />
        <div className="absolute top-0 right-0 h-12 w-12 border-t border-r border-cyan-400" />
        <div className="absolute bottom-0 left-0 h-12 w-12 border-b border-l border-cyan-400" />
        <div className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-cyan-400" />
      </div> */}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-30 mx-auto max-w-3xl text-center"
      >
        {/* Status Indicator */}
        <div className="mb-6 flex items-center justify-center gap-3 text-[10px] tracking-[0.5em] text-cyan-400/80">
          <span className="h-[1px] w-6 bg-cyan-400/20" />
          ENGINEERING_STATION_ACTIVE
          <span className="h-[1px] w-6 bg-cyan-400/20" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl font-bold leading-tight tracking-tighter text-white md:text-6xl">
          Building{" "}
          
          for the<br></br><span className="bg-gradient-to-b from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Future
          </span>
        </h1>

          {/* Subheading */}
          <p className="mx-auto mt-8 max-w-xl text-sm uppercase tracking-[0.15em] leading-relaxed text-blue-100/60 md:text-base">
            I’m <span className="text-white">Sunath</span> — a software engineer focused on building thoughtful,
            scalable and intelligent digital experiences.
          </p>

        {/* CTA Buttons (Updated to HUD Style) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            className="rounded-none border border-blue-400/30 bg-blue-400/5 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-blue-300 transition-all hover:bg-blue-400/20"
          >
            Know the Alien
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)" }}
            className="rounded-none border border-cyan-400 bg-cyan-400/10 px-8 py-3 text-xs font-bold uppercase tracking-widest text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
          >
            Initiate Scan [Projects]
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="rounded-none border border-white/20 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/10"
          >
            Establish Contact
          </motion.a>
        </div>
      </motion.div>

      {/* 2. TECHNICAL SIDEBARS (Desktop Metadata) */}
      <div className="absolute bottom-12 left-12 hidden flex-col gap-2 text-[9px] tracking-[0.3em] text-blue-100/20 lg:flex">
        <p>LOC: 22.9623° N, 76.0508° E</p>
        <p>SECTOR: IND_CENTRAL</p>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden flex-col gap-2 text-[9px] tracking-[0.3em] text-blue-100/20 lg:flex">
        <p>NODE: VERCEL_EDGE</p>
        <p>STATUS: MISSION_READY</p>
      </div>
    </section>
  );
}