"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SpaceBackground from "./SpaceBackground";
import { Zap, MapPin, Activity, GraduationCap, Code2, Cpu, Cloud, Brain, Container, Terminal, DatabaseIcon, Rocket, ChevronDown } from "lucide-react";

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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden py-20">
      <SpaceBackground />
      
      <div className="relative z-30 mx-auto max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: THE IDENTITY PANE */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 flex justify-center lg:justify-start pt-11"
        >
          <div className="relative border border-cyan-500/20 bg-blue-950/10 backdrop-blur-xl p-8 overflow-hidden group">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
            
            <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
              <div className="h-65 w-80 border border-cyan-500/30 p-1 relative overflow-hidden">
                <Image src="/profile1.jpeg" alt="Sunath" fill className="object-cover grayscale-75 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400 shadow-[0_0_10px_cyan] animate-scan" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white font-orbitron tracking-tighter uppercase">Sunath Khadikar</h2>
                <p className="text-cyan-400 font-mono text-[13px] tracking-[0.3em] mt-1">SENIOR_ENGINEER</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 font-mono">
              <div className="space-y-1">
                <p className="text-[13px] text-white/70 uppercase">Origin</p>
                <p className="text-l text-white flex items-center gap-2"><MapPin size={12} className="text-cyan-500"/> INDIA</p>
              </div>
              <div className="space-y-1">
                <p className="text-[13px] text-white/70 uppercase">Specialty</p>
                <p className="text-l text-white flex items-center gap-2"><Cpu size={12} className="text-cyan-500"/> DEVOPS / CLOUD / AI</p>
              </div>
              <div className="space-y-1">
                <p className="text-[13px] text-white/70 uppercase">Education</p>
                <p className="text-l text-white flex items-center gap-2"><GraduationCap size={12} className="text-cyan-500"/> M.TECH CSE - IIIT Jabalpur</p>
              </div>
              <div className="space-y-1">
                <p className="text-[13px] text-white/70 uppercase">Uptime</p>
                <p className="text-l text-cyan-400 tabular-nums font-bold">{uptime || "SYNCING..."}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: THE HEADLINE & TECH STACK */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 flex flex-col space-y-8"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-5xl font-bold text-white tracking-tighter leading-none pt-8">
              Meet the  
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic"> Entity !!</span>
            </h1>

            <p className="max-w-xl text-blue-100/90 text-xl leading-relaxed">
              An earthling who builds platforms that don’t break (most days) and pipelines that actually ship.<br></br>
              <span className="text-cyan-400"> DevOps & Platform Engineer</span> with a <span className="text-white font-bold">Master’s in AI/ML</span> , blending CI/CD, Kubernetes, and software engineering to solve real production problems.
              Actively building and learning how <span className="text-cyan-400"> AI & LLMs</span> can amplify automation, reliability, and the next generation of DevOps workflows. 
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { name: "Docker", icon: Container },
              { name: "Python", icon: Code2 },
              { name: "Linux", icon: Terminal },
              { name: "Kubernetes", icon: Cpu },
              { name: "CI/CD", icon: Activity },
              { name: "AWS", icon: Cloud },
              { name: "NoSQL", icon: DatabaseIcon },
              { name: "AI / ML", icon: Brain }
            ].map((tech) => (
              <motion.div 
                key={tech.name} 
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(6, 182, 212, 0.4)", borderColor: "rgba(6, 182, 212, 0.6)" }}
                className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 text-[13px] font-bold text-white tracking-widest uppercase hover:border-cyan-500/50 transition-all"
              >
                <tech.icon size={20} className="text-cyan-500" /> {tech.name}
              </motion.div>
            ))}
          </div>

          {/* CENTERED PROJECTS BUTTON */}
          <div className="flex justify-center lg:justify-center pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 py-3 w-fit bg-cyan-500/10 border border-cyan-400 text-cyan-400 font-orbitron text-sm font-bold tracking-[0.2em] uppercase overflow-hidden transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:text-white"
            >
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-10" />
              <span className="flex items-center gap-3 relative z-10">
                <Rocket size={16} className="group-hover:animate-bounce" />
                Launch Projects
              </span>
              {/* Lightning streak effect */}
              <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* SPACE THEMED SCROLL INDICATOR */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer z-30"
        onClick={() => document.getElementById('professional')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.4em]">Descent</span>
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"
          />
        </div>
        <ChevronDown size={16} className="text-cyan-500/40" />
      </motion.div>

      <style jsx>{`
        @keyframes scan { 0% { top: 0; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 3s linear infinite; }
      `}</style>
    </section>
  );
}