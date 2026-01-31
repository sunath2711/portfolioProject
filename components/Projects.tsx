"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Github, Layers, ShieldCheck, 
  Terminal, Activity, Zap, Cpu, X, FileText, 
  ChevronDown, Cloud, Code, Lock
} from "lucide-react";

// Updated project data with WIP flags
const projects = [
  {
    id: 1,
    title: "Cloud-Native Pipeline",
    tag: "CICD",
    icon: Activity,
    isWIP: false,
    desc: "This project is a complete, production-style CI/CD implementation built around a Spring Boot application to demonstrate real-world DevOps and platform engineering practices. The application is containerized using a multi-stage Docker build and deployed to a Kubernetes cluster with controlled rollouts and versioned images. A Jenkins pipeline automates the entire lifecycle, starting from a GitHub code push and progressing through build, test, static code analysis with SonarQube, container image security scanning using Trivy, and deployment to Kubernetes. The pipeline enforces quality gates and vulnerability thresholds to prevent unsafe or low-quality code from reaching production. To improve operational visibility, the application exposes a /release endpoint that reflects the exact build version running inside the cluster, making deployments fully traceable. Email notifications provide immediate feedback on pipeline success or failure, improving observability and response time. The project also addresses real-world challenges such as Docker-in-Docker permissions, container-to-cluster networking, webhook exposure using Ngrok, and safe Kubernetes rollbacks. Overall, this project showcases a robust, secure, and automated CI/CD system designed with scalability, reliability, and engineering rigor in mind.",
    tech: ["K8s", "Jenkins", "Docker", "Springboot"],
    features: ["Event-Driven Automation", "Multi-Stage Builds", "K8s Rollouts", "Security-First"],
    links: { github: "https://github.com/sunath2711/ci-cd-springboot", docs: "https://dev.to/sunath2711/building-an-end-to-end-cicd-pipeline-with-spring-boot-jenkins-kubernetes-security-scans-28e0" }
  },
  {
    id: 2,
    title: "K8s API Ecosystem",
    tag: "platform",
    icon: Zap,
    isWIP: false,
    desc: "This project demonstrates a resilient, containerized ecosystem designed to mirror real-world DevOps standards using FastAPI and PostgreSQL. It showcases advanced orchestration patterns, including StatefulSets for persistent data and InitContainers to manage complex service dependencies. The infrastructure evolved from raw manifests to a modular Helm deployment, integrating Kubernetes Jobs for automated, idempotent database migrations. With custom health probes and secure secret management, this platform serves as a blueprint for deploying high-availability, stateful applications in production.",
    tech: ["Kubernetes", "Helm", "FastAPI", "PostgreSQL"],
    features: ["Automated Helm Orchestration","Stateful DB management", "Idempotent Schema migrations","Resilient Health Probing"],
    links: { github: "https://github.com/sunath2711/k8s_helm", docs: "https://github.com/sunath2711/k8s_helm/blob/master/DESIGN.md" }
  },
  {
    id: 3,
    title: "Demo-2-Wiki Generator",
    tag: "Agentic AI",
    icon: Cpu,
    isWIP: false,
    desc: "Vibranium Wiki is an AI-powered knowledge extraction platform that converts long-form video demos and training sessions into clean, structured wiki documentation. It uses multimodal AI to transcribe speech, identify key visual moments, and automatically summarize content into clear, actionable insights. The platform extracts critical workflows, screenshots, and highlights, transforming unstructured recordings into reusable technical documentation. With seamless integration into HTML pages and enterprise wiki tools like Confluence, all knowledge becomes searchable, shareable, and easy to maintain. Vibranium Wiki significantly reduces the time spent watching lengthy videos while preserving essential technical context. The result is faster onboarding, improved collaboration, and a scalable system for long-term knowledge retention.",
    tech: ["Whisper AI", "BART CNN AI", "Opencv", "Agentic"],
    features: ["Multimodal content extraction", "AI-Generated Structured Wikis", "Agentic solution"],
    links: { github: "#", docs: "#" }
  },
  {
    id: 4,
    title: "AWS Project",
    tag: "Cloud",
    icon: Cloud,
    isWIP: true, // Mark as WIP
    desc: "Initializing encrypted uplink...",
    tech: ["Python", "AWS SDK", "C++", "OpenSSL"],
    features: ["Lattice-based Crypto", "Relativistic Sync", "Multi-Sig Verification"],
    links: { github: "#", docs: "#" }
  },
  {
    id: 5,
    title: "SK's Blog",
    tag: "Python",
    icon: Code,
    isWIP: true, // Mark as WIP
    desc: "Gathering training data...",
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

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[220px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`card-${project.id}`}
            onClick={() => !project.isWIP && setSelectedId(project.id)}
            className={`
              relative cursor-pointer group border border-white/10 bg-blue-950/20 backdrop-blur-md p-8 overflow-hidden
              ${index === 0 ? "md:col-span-8" : "md:col-span-4"}
              ${project.isWIP ? "cursor-not-allowed opacity-80" : "hover:border-cyan-400/50"}
              transition-all duration-500 flex flex-col justify-start
            `}
          >
            <div className="z-10">
              <p className="text-[10px] font-mono text-cyan-500 mb-1 uppercase tracking-[0.3em]">
                {project.isWIP ? "Status: Loading..." : project.tag}
              </p>
              <h4 className="text-2xl md:text-3xl font-bold text-white uppercase font-orbitron tracking-tight group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h4>
            </div>

            {/* WIP Overlay Logic */}
            {project.isWIP && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] z-20">
                <div className="flex flex-col items-center gap-2">
                   <Lock size={20} className="text-cyan-500/50 animate-pulse" />
                   <span className="text-[9px] font-mono text-cyan-500/50 tracking-[0.2em]">ACCESS_RESTRICTED</span>
                </div>
              </div>
            )}

            <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 group-hover:text-cyan-400 transition-all group-hover:scale-110">
              <project.icon size={28} />
            </div>

            <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_cyan]" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && activeProject && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-blue-950/60 backdrop-blur-xl cursor-zoom-out" 
            />

            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full h-[90vh] md:max-w-6xl bg-[#030712] border border-cyan-500/30 backdrop-blur-3xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)]"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_cyan] z-[60] animate-scan-slow pointer-events-none" />

              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 z-[70] p-2 text-cyan-500 hover:text-white border border-cyan-500/20 bg-white/5 transition-all"
              >
                <X size={24} />
              </button>

              {/* MAIN CONTENT AREA: Now Fixed in height with scrollable description */}
              <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 overflow-hidden">
                
                {/* LEFT COLUMN: Info & Actions */}
                <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col h-full overflow-hidden">
                  <div className="mb-6">
                     <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter font-orbitron">{activeProject.title}</h2>
                  </div>
                  
                  {/* SCROLLABLE DESCRIPTION SECTION */}
                  <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
                    <p className="text-blue-100/90 text-lg md:text-xl leading-relaxed font-light mb-8">
                      {activeProject.desc}
                    </p>
                  </div>

                  {/* FIXED ACTION BUTTONS AT BOTTOM */}
                  <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4 max-w-md shrink-0">
                    <a href={activeProject.links.github} target="_blank" className="flex items-center justify-center gap-3 py-4 px-6 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-orbitron">
                      <Github size={16} /> GitHub_Repo
                    </a>
                    <a href={activeProject.links.docs} target="_blank" className="flex items-center justify-center gap-3 py-4 px-6 border border-cyan-500/30 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-orbitron">
                      <FileText size={16} /> Mission_Docs
                    </a>
                  </div>
                </div>

                {/* RIGHT COLUMN: Sidebar (Fixed) */}
                <div className="lg:col-span-5 bg-cyan-500/5 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-cyan-500/20 h-full flex flex-col shrink-0">
                  <div className="flex-1 overflow-y-auto">
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

                  <div className="mt-auto pt-8 border-t border-cyan-500/10">
                    <h5 className="text-[10px] text-cyan-500 uppercase tracking-widest mb-6 font-mono font-bold">TECH_INVENTORY</h5>
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
          100% { transform: translateY(90vh); opacity: 0; }
        }
        .animate-scan-slow {
          animation: scan-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(6, 182, 212, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
      `}</style>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="relative mt-8 mb-8 flex flex-col items-center gap-2 cursor-pointer z-30"
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-[0.4em]">Penultimate_Sector</span>
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