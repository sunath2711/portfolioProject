"use client";

import { motion } from "framer-motion";
import { User, Zap, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 px-6 z-40">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[10px] tracking-[0.8em] text-cyan-500 uppercase font-mono mb-2">Identification_File</h2>
          <h3 className="text-4xl font-bold text-white tracking-tighter uppercase">Entity Dossier</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side: Biometric Stats */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="border border-cyan-500/20 bg-cyan-500/5 p-8 backdrop-blur-md relative"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-cyan-500 uppercase tracking-widest">Subject_Name</p>
                  <p className="text-xl text-white font-bold font-orbitron">SUNATH</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-blue-400/50 flex items-center justify-center text-blue-400">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-blue-400 uppercase tracking-widest">Specialization</p>
                  <p className="text-lg text-white font-semibold">Full-Stack Architect</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-purple-400/50 flex items-center justify-center text-purple-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-purple-400 uppercase tracking-widest">Academic_Core</p>
                  <p className="text-lg text-white font-semibold">Computer Science Engineering</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border border-gray-400/50 flex items-center justify-center text-gray-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">Current_Orbit</p>
                  <p className="text-lg text-white font-semibold font-mono">22.96° N, 76.05° E</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <p className="text-blue-100/80 text-lg leading-relaxed font-light italic border-l-2 border-cyan-500/30 pl-6">
              An engineer who doesn't just write code, but constructs digital ecosystems that thrive under pressure.
            </p>
            <p className="text-blue-100/60 leading-relaxed text-sm md:text-base">
              I specialize in bridging the gap between complex backend architectures and immersive frontend experiences. My approach is rooted in **Product Thinking**, ensuring every line of code serves a mission-critical purpose.
            </p>
            <p className="text-blue-100/60 leading-relaxed text-sm md:text-base">
              Whether it's deploying secure Cloud-Native pipelines or building real-time visualizers, I focus on scalability, security, and high-performance engineering.
            </p>
            
            <div className="pt-6">
               <h5 className="text-[10px] text-cyan-500 uppercase tracking-[0.3em] mb-4">Core_Directives:</h5>
               <ul className="grid grid-cols-2 gap-3">
                 {['SCALABILITY', 'AI_INTEGRATION', 'UI_FIDELITY', 'SECURITY'].map((item) => (
                   <li key={item} className="text-[10px] text-white/40 border border-white/10 px-3 py-2 font-mono">
                     {`> ${item}`}
                   </li>
                 ))}
               </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}