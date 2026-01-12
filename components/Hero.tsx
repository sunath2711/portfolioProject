"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SpaceBackground from "./SpaceBackground";
import { Zap, MapPin, Activity, GraduationCap, Code2, Cpu, Cloud, Brain } from "lucide-react";

export default function Hero() {
  const [uptime, setUptime] = useState("");

  useEffect(() => {
    const birthDate = new Date(1998, 10, 27, 21, 55, 0); 
    const calculateUptime = () => {
      const now = new Date();
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      if (days < 0) { months -= 1; const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate(); days += lastMonth; }
      if (months < 0) { years -= 1; months += 12; }
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setUptime(`${years}Y:${months}M:${days}D:${hours}H:${minutes}M:${seconds}S`);
    };
    const timer = setInterval(calculateUptime, 1000);
    calculateUptime();
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden py-20">
      <SpaceBackground />
      
      <div className="relative z-30 mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: THE IDENTITY PANE */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-5"
        >
          <div className="relative border border-cyan-500/20 bg-blue-950/10 backdrop-blur-xl p-8 overflow-hidden group">
            {/* HUD Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
            
            <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
              <div className="h-24 w-24 border border-cyan-500/30 p-1 relative overflow-hidden">
                <Image src="/profile.jpeg" alt="Sunath" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_10px_cyan] animate-scan" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white font-orbitron tracking-tighter uppercase">Sunath Khadikar</h2>
                <p className="text-cyan-400 font-mono text-[10px] tracking-[0.3em] mt-1 italic">SENIOR_ENGINEER // R&D</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 font-mono">
              <div className="space-y-1">
                <p className="text-[9px] text-white/30 uppercase">Origin</p>
                <p className="text-xs text-white flex items-center gap-2"><MapPin size={12} className="text-cyan-500"/> INDIA</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-white/30 uppercase">Uptime</p>
                <p className="text-[10px] text-cyan-400 tabular-nums font-bold">{uptime || "SYNCING..."}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-white/30 uppercase">Specialty</p>
                <p className="text-xs text-white flex items-center gap-2"><Cpu size={12} className="text-cyan-500"/> CLOUD/AI</p>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] text-white/30 uppercase">Education</p>
                <p className="text-xs text-white flex items-center gap-2"><GraduationCap size={12} className="text-cyan-500"/> M.TECH</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE HEADLINE & TECH STACK */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500/30 bg-cyan-500/5 text-[10px] tracking-[0.4em] text-cyan-400 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System_Status: Operational
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none">
            Architecting <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Intellectual Systems.</span>
          </h1>

          <p className="max-w-xl text-blue-100/60 text-lg leading-relaxed">
            Software Engineer at <span className="text-white font-bold">Ericsson R&D</span>. 
            I build high-performance distributed systems, focusing on the intersection of 
            <span className="text-cyan-400"> Cloud Infrastructure</span> and <span className="text-cyan-400"> Applied AI</span>.
          </p>

          {/* Quick Tech Highlights */}
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Kubernetes", icon: Cloud },
              { name: "DevOps", icon: Zap },
              { name: "Java/Python", icon: Code2 },
              { name: "MLOps", icon: Brain }
            ].map((tech) => (
              <div key={tech.name} className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 text-[11px] font-bold text-white tracking-widest uppercase hover:border-cyan-500/50 transition-colors">
                <tech.icon size={14} className="text-cyan-500" /> {tech.name}
              </div>
            ))}
          </div>

          <div className="flex gap-6 pt-4">
            <a href="#professional" className="text-xs font-bold uppercase tracking-[0.2em] text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors">View_Dossier ↓</a>
            <a href="#projects" className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">See_Projects</a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scan { 0% { top: 0; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </section>
  );
}