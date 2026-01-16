"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Github, Layers, ShieldCheck, 
  Terminal, Activity, Zap, Cpu, X, FileText 
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MLOps Distribution",
    tag: "System Design",
    icon: Cpu,
    desc: "A decentralized kernel designed for space-time compute distribution. It handles massive parallel tasks across distributed satellite nodes with zero latency.",
    tech: ["Rust", "Wasm", "Zig", "gRPC"],
    features: ["Pre-emptive Multitasking", "Quantum-Safe Encryption", "Zero-Copy Networking"],
    links: { github: "#", docs: "#" }
  },
  {
    id: 2,
    title: "Cloud-Native Pipeline",
    tag: "CICD",
    icon: Activity,
    desc: "An end-to-end, production-ready CI/CD ecosystem that automates the lifecycle of a Spring Boot application from code push to Kubernetes deployment.",
    tech: ["K8s", "Jenkins", "Docker", "Springboot"],
    features: ["Event-Driven Automation", "Multi-Stage Builds", "K8s Rollouts", "Security-First"],
    links: { github: "https://github.com/sunath2711/ci-cd-springboot", docs: "https://dev.to/sunath2711/building-an-end-to-end-cicd-pipeline-with-spring-boot-jenkins-kubernetes-security-scans-28e0" }
  },
  {
    id: 3,
    title: "K8s HUD Orchestrator",
    tag: "Interface",
    icon: Zap,
    desc: "Next-gen cockpit HUD for long-range explorers. Built with high-fidelity WebGL components to track orbital trajectories in real-time.",
    tech: ["React", "Three.js", "Framer", "GLSL"],
    features: ["Dynamic Trajectory HUD", "Gesture Recognition", "Low-Light Optimization"],
    links: { github: "#", docs: "#" }
  },
  {
    id: 4,
    title: "AWS Secure Node",
    tag: "Security",
    icon: ShieldCheck,
    desc: "End-to-end quantum encryption for communications, ensuring data integrity across light-year distances.",
    tech: ["Python", "AWS SDK", "C++", "OpenSSL"],
    features: ["Lattice-based Crypto", "Relativistic Sync", "Multi-Sig Verification"],
    links: { github: "#", docs: "#" }
  },
  {
    id: 5,
    title: "Buddy - Sentiment Bot",
    tag: "Analytics",
    icon: Terminal,
    desc: "Real-time NLP processing clusters to predict sentiment probabilities with 99.9% accuracy across high-volume data streams.",
    tech: ["PyTorch", "FastAPI", "React", "D3.js"],
    features: ["TensorFlow Integration", "Real-time Visualization", "Predictive Alerts"],
    links: { github: "#", docs: "#" }
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-modal-active", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-modal-active");
    }
  }, [selectedId]);

  const activeProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 z-40 scroll-mt-2 flex flex-col items-center overflow-hidden">
      
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-center">
        <h2 className="text-[11px] font-mono tracking-[0.8em] text-cyan-500 uppercase mb-4">Project_Database // ENTITY_LOGS</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase font-orbitron">Mission_Logs</h3>
      </motion.div>

      {/* ORIGINAL CLOSELY PACKED BENTO GRID */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className={`
              relative cursor-pointer group border border-white/10 bg-blue-950/20 backdrop-blur-md p-8 overflow-hidden
              ${index === 0 ? "md:col-span-8" : index === 1 ? "md:col-span-4" : index === 2 ? "md:col-span-4" : index === 3 ? "md:col-span-4" : "md:col-span-4"}
              hover:border-cyan-400/50 transition-all duration-500 flex flex-col justify-end
            `}
          >
            <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 group-hover:text-cyan-400 transition-all group-hover:scale-110">
              <project.icon size={28} />
            </div>
            <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase tracking-[0.3em]">{project.tag}</p>
            <h4 className="text-2xl md:text-3xl font-bold text-white uppercase font-orbitron tracking-tight group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h4>
            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_cyan]" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && activeProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            {/* Click Outside to Close with transparent space background */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-blue-950/40 backdrop-blur-xl cursor-zoom-out" 
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full h-full md:h-[85vh] md:max-w-6xl bg-blue-950/40 border border-cyan-500/30 backdrop-blur-3xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              {/* SCANNER LINE ANIMATION */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_cyan] z-[60] animate-scan-slow pointer-events-none" />

              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-[70] p-2 text-cyan-500 hover:text-white border border-cyan-500/20 bg-white/5 transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 overflow-y-auto lg:overflow-hidden">
                
                {/* LEFT CONTENT: Description & Links */}
                <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter font-orbitron mb-8">{activeProject.title}</h2>
                    <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed font-light mb-10 max-w-2xl">
                      {activeProject.desc}
                    </p>
                  </div>

                  {/* 2 COMPACT LINKS */}
                  <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                    <a href={activeProject.links.github} target="_blank" className="flex items-center justify-center gap-3 py-4 px-6 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-orbitron">
                      <Github size={16} /> GitHub_Repo
                    </a>
                    <a href={activeProject.links.docs} target="_blank" className="flex items-center justify-center gap-3 py-4 px-6 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-orbitron">
                      <FileText size={16} /> Mission_Docs
                    </a>
                  </div>
                </div>

                {/* RIGHT AREA: Features & Expanded Tech Inventory */}
                <div className="lg:col-span-5 bg-cyan-500/5 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-cyan-500/20 h-full flex flex-col">
                  
                  <div className="flex-1">
                    <h5 className="text-[10px] text-cyan-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-2 font-mono font-bold">
                      <Layers size={14} /> Mission_Parameters
                    </h5>
                    <div className="space-y-6">
                      {activeProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <ShieldCheck size={20} className="text-cyan-400 mt-1" />
                          <p className="text-white font-bold uppercase text-xs md:text-[13px] tracking-widest leading-tight font-orbitron">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* TECH INVENTORY (Size increased 10%) */}
                  <div className="mt-12 pt-8 border-t border-cyan-500/10">
                    <h5 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-6 font-mono font-bold">TECH_ARSENAL</h5>
                    <div className="flex flex-wrap gap-3">
                      {activeProject.tech.map(t => (
                        <span key={t} className="px-5 py-2.5 bg-blue-950/40 border border-cyan-500/30 text-[13px] text-white uppercase font-mono tracking-wider shadow-[inset_0_0_10px_rgba(34,211,238,0.1)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(85vh); opacity: 0; }
        }
        .animate-scan-slow {
          animation: scan-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}