"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ChevronRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Professional", href: "#professional" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 z-[100] -translate-x-1/2">
      <div className="relative flex items-center">
        
        {/* MAIN NAV PILL */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`
            flex items-center gap-6 px-8 py-3.5 rounded-full 
            border border-cyan-500/30 bg-blue-950/40 
            backdrop-blur-2xl transition-all duration-500
            ${scrolled ? "border-cyan-500/60 bg-blue-950/80 shadow-[0_0_20px_rgba(6,182,212,0.15)]" : ""}
          `}
        >
          {/* THE SCANNER LIGHT */}
          <div className="relative w-12 h-2 border border-cyan-500/20 rounded-full overflow-hidden bg-black/20">
            <motion.div 
              animate={{ x: [-10, 40, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-3 bg-cyan-400 opacity-60 shadow-[0_0_10px_#22d3ee]"
            />
          </div>

          <div className="flex items-center gap-8 px-2">
            {navLinks.map((link) => (
              <NavLink key={link.name} link={link} />
            ))}
          </div>
        </motion.div>

        {/* HELIX RESUME MODULE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute pl-4 left-full flex items-center lg:flex hidden"
        >
          {/* <ChevronRight size={20} className="text-cyan-400/70 -mr-0.5" /> */}
          
          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(34, 211, 238, 0.15)", borderColor: "#22d3ee" }}
            className="
              flex items-center gap-2 px-5 py-2.5 
              border border-cyan-400/40 bg-cyan-500/5 
              rounded-tl-[18px] rounded-br-[18px] rounded-tr-[4px] rounded-bl-[4px]
              transition-all duration-300 group cursor-pointer
              shadow-[inset_0_0_10px_rgba(34,211,238,0.05)]
            "
          >
            <Download size={13} className="text-cyan-400 group-hover:animate-bounce" />
            {/* Using Orbitron for Resume as well */}
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 whitespace-nowrap font-orbitron">
              RESUME
            </span>
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
}

function NavLink({ link }: { link: { name: string; href: string } }) {
  return (
    <motion.a
      href={link.href}
      whileHover={{ color: "#22d3ee", scale: 1.05 }}
      /* CHANGED: font-orbitron added, and tracking increased */
      className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-blue-100/90 transition-colors font-orbitron"
    >
      {link.name}
      <motion.span
        className="absolute -bottom-1 left-0 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.2 }}
      />
    </motion.a>
  );
}