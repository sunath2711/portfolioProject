"use client";

import { motion } from "framer-motion";
import { Brain, ChevronDown, Code, Cpu, Globe, Zap } from "lucide-react";
import { platform } from "os";

const skillCategories = [
  {
    category: "CORE",
    icon: Code,
    skills: ["Python", "Django", "Algorithms", "System Design", "OOPS", "SQL/NoSQL", "Networking"]
  },
  {
    category: "Infrastructure",
    icon: Globe,
    skills: ["Linux","Docker", "Kubernetes", "Helm", "Cloud ~ AWS", "CI / CD", "Jenkins", "Prometheus"]
  },
  {
    category: "AI / ML",
    icon: Brain,
    skills: ["Machine Learning", "PyTorch", "Agentic AI", "RAGs , Transformers", "LLMs", "LangChain", "NLP"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* ANCHOR OFFSET FIX: 
         This invisible div sits above the section. When the Navbar link 
         points to #skills, it hits this div instead of the section top.
      */}
      <div className="absolute -top-32 left-0 w-full h-1 pointer-events-none" id="skills-anchor" />
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* CENTERED HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <h2 className="text-[11px] font-mono tracking-[0.8em] text-cyan-500 uppercase mb-4">
            Skill_Inventory // CAPABILITIES
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase font-orbitron">
            System_Specs
          </h3>
        </motion.div>

        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative border border-white/10 bg-blue-950/20 backdrop-blur-md p-8 md:p-10 h-full transition-all duration-500 hover:border-cyan-500/40 hover:bg-blue-950/40 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
                
                <div className="flex items-center gap-5 mb-12">
                  <div className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                    <group.icon size={22} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-orbitron text-base md:text-lg uppercase tracking-[0.15em]">
                    {group.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {group.skills.map((skill, index) => (
                    <motion.div 
                      key={skill}
                      whileHover={{ x: 8 }}
                      className="flex items-center justify-between group/item"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-[2px] w-4 bg-cyan-900 group-hover/item:w-8 group-hover/item:bg-cyan-400 transition-all duration-300" />
                        <span className="text-blue-50/90 text-[15px] md:text-base font-medium tracking-wide group-hover/item:text-cyan-400 transition-colors">
                          {skill}
                        </span>
                      </div>
                      
                      <div className="flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
                        <div className="h-1.5 w-1.5 bg-cyan-500 rounded-full animate-pulse" />
                        <div className={`h-1.5 w-1.5 rounded-full ${index % 2 === 0 ? 'bg-cyan-500' : 'bg-cyan-800'}`} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t border-white/5 flex justify-between font-mono text-[10px] text-cyan-500/40 uppercase tracking-[0.2em]">
                  <span>Ready_</span>
                  <span className="animate-pulse">Active_Node</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CENTERED SCROLL INDICATOR */}
      <div className="w-full flex justify-center mt-20 mb-8">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer z-30"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.4em]">FINAL_Sector</span>
          <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center p-1 relative">
            <motion.div 
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"
            />
          </div>
          <ChevronDown size={16} className="text-cyan-500/40" />
        </motion.div>
      </div>
    </section>
  );
}