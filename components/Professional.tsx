"use client";

import { motion } from "framer-motion";
import { Calendar, Rocket, Satellite, Cpu, ChevronDown } from "lucide-react";
import SpaceBackground from "./SpaceBackground";

const experiences = [
  {
    company: "Ericsson R&D, Gurgaon",
    role: "Software Engineer - Platform",
    period: "June, 2022 - Present",
    desc: "Architecting cloud-native infrastructure and AI-driven automation pipelines. Focused on scaling Kubernetes clusters and optimizing CI/CD workflows for high-availability systems.",
    skills: ["Kubernetes", "Docker", "Python", "Cloud-Native"],
    icon: Satellite,
    float: { y: [0, -12, 0], x: 0 } // Node 1: Up-Down
  },
  {
    company: "Persistent Systems, Pune",
    role: "Software Engineer",
    period: "Nov 2020 - Nov 2021",
    desc: "Delivered end-to-end Salesforce solutions for BFSI, maintaining a 100% sprint completion rate through expert Apex and LWC development. I automated complex workflows to boost efficiency by 20% and high-quality deployments.",
    skills: ["Salesforce", "Apex Classes", "JavaScript", ],
    icon: Satellite,
    float: { x: [-10, 10, -10], y: 0 } // Node 2: Left-Right
  },
  {
    company: "IIT Bombay",
    role: "Research Assistant",
    period: "Dec 2018 - June 2019",
    desc: "Worked as a Research Intern at Dept. of Humanities and Social Sciences for studies relating to Cognitive Sciences",
    skills: ["Python", "Data Analysis", "Research", "SPSS"],
    icon: Satellite,
    float: { x: [0, 10, 0], y: [0, -10, 0] } // Node 3: Right-Up
  }
];

export default function Professional() {
  return (
    <section id="professional" className="relative py-16 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      <div className="absolute inset-0 z-0">
        <SpaceBackground />
        <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        {/* Tightened Header Spacing */}
        <div className="mb-12 text-center">
          <h2 className="text-[11px] font-mono tracking-[0.8em] text-cyan-400 uppercase mb-3">_Operational_History</h2>
          <h3 className="text-4xl font-bold text-white tracking-tighter uppercase font-orbitron">Professional Dossier</h3>
        </div>

        {/* The Timeline Spine - Adjusted top alignment to sit closer to header */}
        <div className="relative before:absolute before:inset-0 before:left-5 md:before:left-1/2 before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/40 before:via-cyan-500/40 before:to-transparent pt-4 pb-12">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-16 last:mb-0">
              <div className={`flex items-center justify-between md:justify-normal w-full group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* SPACE SHIP NODE */}
                <div className="flex items-center justify-center w-12 h-12 border border-cyan-500/50 bg-blue-950/80 backdrop-blur-xl text-cyan-400 absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20 transition-all duration-500 group-hover:rotate-90 group-hover:shadow-[0_0_20px_cyan]">
                  <exp.icon size={22} className="group-hover:-rotate-90 transition-all duration-500" />
                  <div className="absolute inset-0 border border-cyan-400 animate-ping opacity-10" />
                </div>

                {/* CONNECTOR LINE */}
                <div className={`hidden md:block absolute top-1/2 h-[1px] bg-gradient-to-r from-cyan-500/60 to-transparent z-10 
                  ${idx % 2 === 0 ? 'left-1/2 w-16' : 'right-1/2 w-16 rotate-180'}`} 
                />

                {/* DATA TERMINAL CARD */}
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  animate={{ 
                    y: exp.float.y,
                    x: exp.float.x 
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 0.8 }
                  }}
                  className={`w-[calc(100%-4rem)] md:w-[42%] p-8 border border-white/10 bg-white/5 backdrop-blur-md relative group-hover:border-cyan-500/40 group-hover:bg-white/[0.08] transition-all duration-500
                    ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                >
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40" />
                  
                  <div className="flex flex-col mb-4">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2">
                      <h4 className="font-bold text-2xl md:text-3xl text-white font-orbitron tracking-tight">{exp.company}</h4>
                      <span className="text-[14px] font-mono text-cyan-400 border border-cyan-500/30 px-3 py-1 bg-cyan-500/5 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-cyan-400 text-sm font-bold uppercase tracking-[0.25em] mt-3 flex items-center gap-2">
                      <span className="w-3 h-3 bg-cyan-500 rounded-sm animate-pulse shadow-[0_0_8px_cyan]" />
                      {exp.role}
                    </p>
                  </div>
                  
                  <p className="text-base md:text-lg text-blue-100/80 leading-relaxed mb-6 font-light">
                    {exp.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map(s => (
                      <span key={s} className="px-3 py-1.5 text-[10px] md:text-[11px] font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider hover:bg-cyan-400/20 transition-colors">
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR - Positioned more tightly to the content */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative mt-8 mb-8 flex flex-col items-center gap-2 cursor-pointer z-30"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.4em]">Next_Sector</span>
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_cyan]"
          />
        </div>
        <ChevronDown size={16} className="text-cyan-500/40" />
      </motion.div>
    </section>
  );
}