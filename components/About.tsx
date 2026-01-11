"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  User, 
  Zap, 
  GraduationCap, 
  MapPin, 
  Activity, 
  Target, 
  Shield, 
  Cpu, 
  Gauge 
} from "lucide-react";

export default function About() {
  const [uptime, setUptime] = useState("");

  useEffect(() => {
    // SET BIRTH DATE: Year, Month (0-indexed: 10 = Nov), Day, Hour, Minute
    const birthDate = new Date(1998, 10, 27, 21, 55, 0); 

    const calculateUptime = () => {
      const now = new Date();
      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      
      if (days < 0) {
        months -= 1;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonth;
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setUptime(
        `${years}: ${months.toString().padStart(2, '0')}: ${days.toString().padStart(2, '0')}: ` +
        `${hours.toString().padStart(2, '0')}: ${minutes.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}`
      );
    };

    const timer = setInterval(calculateUptime, 1000);
    calculateUptime();
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section id="about" className="relative min-h-screen py-24 px-6 z-40 scroll-mt-1 flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* SECTION HEADER */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] tracking-[0.8em] text-cyan-500 uppercase font-mono mb-2"
          >
            _INFO_
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white tracking-tighter uppercase font-orbitron"
          >
            Entity Dossier
          </motion.h3>
        </div>

        {/* MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: IDENTITY CORE & QUALITIES */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* GLASS ID PANE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-full border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 lg:p-10 overflow-hidden flex flex-col justify-between"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-500/50 animate-pulse" />
              
              {/* Profile Header */}
              <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
                {/* Image Box */}
                <div className="h-24 w-24 border border-cyan-500/30 p-1 flex-shrink-0 relative group">
                   <div className="h-full w-full bg-cyan-950/20 relative overflow-hidden">
                      {/* NOTE: Ensure your image is in /public/profile.jpg 
                          If using a different name/extension, update src=""
                      */}
                      <Image 
                        src="/profile.jpeg" 
                        alt="Sunath Khadikar"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        priority
                      />
                      {/* Image HUD Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent pointer-events-none" />
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/50 shadow-[0_0_10px_cyan] animate-scan-slow z-20" />
                   </div>
                   {/* HUD Corners */}
                   <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-cyan-400 z-10" />
                   <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-cyan-400 z-10" />
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-white font-orbitron tracking-widest leading-tight">
                    SUNATH<br/>KHADIKAR
                  </h4>
                  <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] mt-2 italic">
                    RANK: SENIOR ENGINEER
                  </p>
                </div>
              </div>

              {/* Data Grid Table */}
              <div className="grid grid-cols-2 gap-y-8 gap-x-4 flex-grow content-start">
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase font-mono tracking-tighter italic">Specialization</p>
                  <p className="text-xs text-white font-bold flex items-center gap-2">
                    <Zap size={12} className="text-cyan-400" /> DEVOPS / CLOUD / AI
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase font-mono tracking-tighter italic">Origin_Station</p>
                  <p className="text-xs text-white font-bold flex items-center gap-2">
                    <MapPin size={12} className="text-cyan-400" /> M.P. , INDIA
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase font-mono tracking-tighter italic">Education</p>
                  <p className="text-xs text-white font-bold flex items-center gap-2">
                    <GraduationCap size={12} className="text-cyan-400" /> M.TECH CSE
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-white/30 uppercase font-mono tracking-tighter italic">System_Uptime</p>
                  <p className="text-xs text-white font-bold flex items-center gap-2 tabular-nums">
                    <Activity size={12} className="text-cyan-400" /> {uptime || "SYNCING..."}
                  </p> 
                </div>
              </div>
            </motion.div>

            {/* DIRECTIVE GRID (4 Slots) */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: "Core_values", val: "TEAM PLAYER", icon: Target },
                 { label: "Core_values", val: "ADAPTIVE", icon: Cpu },
                 { label: "Core_values", val: "RESILIENT", icon: Shield },
                 { label: "Core_values", val: "DISCIPLINED", icon: Gauge }
               ].map((item, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: idx * 0.1 }}
                   className="p-4 border border-white/5 bg-white/[0.02] flex flex-col gap-1 group hover:border-cyan-500/30 transition-colors"
                 >
                    <p className="text-[9px] text-cyan-500/60 uppercase tracking-widest font-mono flex items-center gap-2 group-hover:text-cyan-400">
                      <item.icon size={10} /> {item.label}
                    </p>
                    <p className="text-[11px] text-white/80 uppercase font-bold tracking-wider">{item.val}</p>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* RIGHT COLUMN: THE NARRATIVE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <div className="text-blue-100/60 leading-relaxed text-base md:text-lg space-y-6 font-sans">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-500 first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                I am a Software Engineer currently driving innovation within the R&D team at Ericsson. With a Master’s in Computer Science and a deep-rooted passion for systems architecture, I specialize in bridging the gap between complex Software Development and high-performance DevOps.
              </p>
              
              <p>
                My engineering philosophy is simple: <span className="text-white font-bold">Build it Now.</span> I believe in moving fast without breaking things, favoring modularity and automation over manual overhead. Whether I am architecting CI/CD pipelines or training Machine Learning models, I focus on building resilient, production-ready systems that solve real-world problems.
              </p>

              <p>
                Originally from Madhya Pradesh, my professional drive is mirrored by my life outside the IDE. As a former district-level Table Tennis player, I bring a competitive spirit and extreme focus to every sprint. I am a <span className="text-cyan-400 italic">'multipotentialite'</span> at heart—you’ll just as easily find me performing football freestyle or playing the flute as you would find me trekking through remote trails. 
              </p>

              <p className="italic text-white/40 border-t border-white/5 pt-6 text-sm">
                I believe that the rhythm of music and the strategy of sports make me a more creative and disciplined engineer.
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* CUSTOM ANIMATION FOR PHOTO SCANNER */}
      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(96px); opacity: 0; }
        }
        .animate-scan-slow {
          animation: scan-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}