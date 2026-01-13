"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe, Github, ExternalLink, Cpu, Layers, ShieldCheck } from "lucide-react";

// Detailed Project Data
const projects = [
  {
    id: 1,
    title: "MLOps",
    tag: "System Design",
    desc: "A decentralized kernel designed for space-time compute distribution. It handles massive parallel tasks across distributed satellite nodes with zero latency.",
    tech: ["Rust", "Wasm", "Zig", "gRPC"],
    features: ["Pre-emptive Multitasking", "Quantum-Safe Encryption", "Zero-Copy Networking"],
    links: { github: "#", live: "#" }
  },
  {
    id: 2,
    title: "Cloud-Native Pipeline",
    tag: "CICD",
    desc: "An end-to-end, production-ready CI/CD ecosystem that automates the lifecycle of a Spring Boot application from code push to Kubernetes deployment. It integrates automated quality gates, multi-stage container builds, and image security scanning to bridge the gap between development and enterprise-grade operations.",
    tech: ["K8s", "Jenkins", "Docker", "Springboot"],
    features: ["Event-Driven Automation", "Optimized Multi-Stage Builds", "Dynamic Kubernetes Rollouts","Security-First Pipeline","Real-Time Observability"],
    links: { github: "https://github.com/sunath2711/ci-cd-springboot", live: "https://dev.to/sunath2711/building-an-end-to-end-cicd-pipeline-with-spring-boot-jenkins-kubernetes-security-scans-28e0"}
  },
  {
    id: 3,
    title: "K8s Orchestration",
    tag: "Interface",
    desc: "Next-gen cockpit HUD for long-range explorers. Built with high-fidelity WebGL components to track orbital trajectories in real-time.",
    tech: ["React", "Three.js", "Framer", "GLSL"],
    features: ["Dynamic Trajectory HUD", "Gesture Recognition", "Low-Light Optimization"],
    links: { github: "#", live: "#" }
  },
  {
    id: 4,
    title: "AWS powered",
    tag: "Security",
    desc: "End-to-end quantum encryption for deep space communications, ensuring data integrity across light-year distances.",
    tech: ["Python", "Solidity", "C++", "OpenSSL"],
    features: ["Lattice-based Crypto", "Relativistic Sync", "Multi-Sig Verification"],
    links: { github: "https://github.com/sunath2711/ci-cd-springboot", live: "https://dev.to/sunath2711/building-an-end-to-end-cicd-pipeline-with-spring-boot-jenkins-kubernetes-security-scans-28e0" }
  },
  {
    id: 5,
    title: "Buddy - Sentiment Chatbot",
    tag: "Analytics",
    desc: "Real-time asteroid tracking system using machine learning clusters to predict collision probabilities with 99.9% accuracy.",
    tech: ["PyTorch", "FastAPI", "React", "D3.js"],
    features: ["TensorFlow Integration", "Real-time Visualization", "Predictive Alerts"],
    links: { github: "#", live: "#" }
  },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const activeProject = projects.find((p) => p.id === selectedId);

  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 z-40 scroll-mt-2">
      {/* 1. SECTION HEADER */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-20 text-center">
        <h2 className="text-[13px] tracking-[1em] text-cyan-500 uppercase font-mono mb-4">
          Project_Database // SITE_ENGINEER
        </h2>
        <h3 className="text-5xl font-bold text-white tracking-tighter md:text-6xl">
          MISSION_LOGS
        </h3>
      </motion.div>

      {/* 2. THE TACTICAL GRID (3 Top, 2 Bottom) */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-6 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            className={`
              relative cursor-pointer group border border-white/10 bg-white/5 backdrop-blur-md p-10
              ${index < 3 ? "md:col-span-2" : "md:col-span-3"}
              hover:border-cyan-400/50 transition-all duration-500
            `}
          >
            {/* Visual HUD Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 group-hover:text-cyan-400 transition-all">
              <Cpu size={16} />
            </div>

            <p className="text-[10px] font-mono text-cyan-500 mb-2 uppercase tracking-[0.3em]">
              {project.tag}
            </p>
            <h4 className="text-3xl font-bold text-white uppercase group-hover:tracking-widest transition-all">
              {project.title}
            </h4>
            
            <div className="mt-6 h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-700" />
          </motion.div>
        ))}
      </div>

      {/* 3. EXPANDED HUD PANE (The Deep Dive) */}
      <AnimatePresence>
        {selectedId && activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            {/* Backdrop Blur/Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl" 
            />

            {/* The Detailed Pane */}
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl bg-[#020617] border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] overflow-hidden"
            >
              {/* Header Scanner Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan" />

              <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* COLUMN 1: INTEL & LINKS */}
                <div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="mb-8 text-[10px] text-cyan-500 hover:text-white flex items-center gap-2 uppercase tracking-widest"
                  >
                    ← BACK_TO_STATION
                  </button>

                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-4">
                    {activeProject.title}
                  </h2>
                  <p className="text-blue-100/80 text-lg leading-relaxed mb-8 font-orbitron">
                    {activeProject.desc}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h5 className="text-[20px] text-cyan-500 uppercase tracking-widest mb-3">Tech_Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-[17px] text-white uppercase font-orbitron tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <a href={activeProject.links.github} className="flex items-center gap-2 bg-white text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                        <Github size={14} /> Repository
                      </a>
                      <a href={activeProject.links.live} className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                        <ExternalLink size={14} /> Blog
                      </a>
                    </div>
                  </div>
                </div>

                {/* COLUMN 2: KEY_FEATURES (HUD Style) */}
                <div className="bg-white/5 p-8 border-l border-cyan-500/20">
                  <h5 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                    <Layers size={12} /> Objectives
                  </h5>
                  
                  <div className="space-y-8">
                    {activeProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="mt-1">
                          <ShieldCheck size={18} className="text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-white font-bold uppercase text-xs tracking-wider mb-1">{feature}</p>
                          <p className="text-[10px] text-blue-100/40 uppercase">CICD : Active</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative Coordinate Grid */}
                  <div className="mt-12 opacity-10 pointer-events-none">
                    <div className="h-24 w-full border border-cyan-500 grid grid-cols-8 grid-rows-4">
                       {[...Array(32)].map((_, i) => <div key={i} className="border-[0.5px] border-cyan-500/20" />)}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(800px); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}