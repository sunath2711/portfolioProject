"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Globe } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Footer() {
  const { scrollToSection } = useScrollSpy();
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: "Github", icon: Github, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:your@email.com" },
  ];

  return (
    <footer className="relative w-full px-6 pb-12 z-50">
      {/* GLASSMORPHISM CONTAINER */}
      <div className="mx-auto max-w-6xl border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-2xl p-8 md:p-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* COLUMN 1: IDENTITY (Left) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-1.5 w-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#06b6d4]" />
              <span className="font-orbitron text-xs font-bold text-white tracking-[0.2em] uppercase">
                Sunath Khadikar
              </span>
            </div>
            <p className="text-blue-100/30 font-mono text-[10px] tracking-widest leading-loose uppercase">
              Operational Status: Active <br />
              Location: 22.9598° N, 76.0740° E
            </p>
          </div>

          {/* COLUMN 2: SYSTEM INFO (Parallel to Column 1) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-[10px] text-cyan-500/50 tracking-[0.2em] uppercase">System_Logs</span>
            <p className="text-blue-100/30 font-mono text-[10px] tracking-widest leading-loose uppercase">
              V2026.4.0 // STABLE_BUILD <br />
              Last_Sync: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* COLUMN 3: SOCIALS & ACTION (Right) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end gap-6">
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -3, color: "#22d3ee" }}
                  className="text-white/40 hover:text-cyan-400 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={() => scrollToSection("hero")}
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 211, 238, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-5 py-2 border border-white/10 bg-white/5 rounded-full transition-all"
            >
              <span className="text-[9px] font-mono text-white/60 uppercase tracking-widest">Return_to_Orbit</span>
              <ArrowUp size={12} className="text-cyan-400 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
            <Globe size={10} />
            <span>Deployment_Node: Vercel_Edge</span>
          </div>
          <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">
            © {currentYear} All_Rights_Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}