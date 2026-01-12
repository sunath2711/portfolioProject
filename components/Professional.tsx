"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Terminal } from "lucide-react";

const experiences = [
  {
    company: "Ericsson",
    role: "Senior Software Engineer (R&D)",
    period: "2022 - Present",
    desc: "Leading research and development for cloud-native telecommunication systems. Focused on optimizing microservices architecture and implementing automated CI/CD for global scale.",
    skills: ["Docker", "Kubernetes", "Microservices", "Go"]
  },
  {
    company: "Ericsson",
    role: "Software Engineer",
    period: "2021 - 2022",
    desc: "Contributed to core networking modules and system optimization. Improved API latency by 30% through strategic caching and logic refinement.",
    skills: ["Java", "Spring Boot", "REST APIs"]
  }
];

export default function Professional() {
  return (
    <section id="professional" className="relative py-32 px-6 bg-black">
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <h2 className="text-xs font-mono tracking-[0.8em] text-cyan-500 uppercase mb-4">_Mission_History</h2>
          <h3 className="text-4xl font-bold text-white tracking-tighter uppercase font-orbitron">Professional Experience</h3>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/50 before:to-transparent">
          
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-black text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)] absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 transition-transform group-hover:scale-125">
                <Briefcase size={16} />
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-xl text-white tracking-tight">{exp.company}</h4>
                  <span className="text-[10px] font-mono text-cyan-500 flex items-center gap-1">
                    <Calendar size={10} /> {exp.period}
                  </span>
                </div>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">{exp.role}</p>
                <p className="text-sm text-blue-100/60 leading-relaxed mb-6">{exp.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <span key={s} className="px-2 py-1 text-[9px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 tracking-tighter">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}