"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Core_Engine",
    skills: ["React/Next.js", "TypeScript", "Node.js", "Python"]
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS/Vercel", "CI/CD"]
  },
  {
    category: "Neural_Net",
    skills: ["PyTorch", "OpenAI API", "Vector DBs", "LLMs"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 scroll-mt-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-[10px] tracking-[1em] text-cyan-500 uppercase font-mono mb-12">System_Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 h-8 w-8 border-t border-r border-cyan-500/30" />
              
              <h3 className="text-cyan-400 font-mono text-xs mb-6 uppercase tracking-widest">
                {`// ${group.category}`}
              </h3>
              
              <ul className="space-y-4">
                {group.skills.map(skill => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="h-1 w-1 bg-cyan-500" />
                    <span className="text-white/70 text-sm font-orbitron">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}