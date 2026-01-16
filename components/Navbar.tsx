"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy"; // IMPORT HOOK

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Professional", id: "professional" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Track active section
  const { scrollToSection } = useScrollSpy(); // USE HOOK

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Listen for the custom event dispatched by our useScrollSpy hook
    const handleSectionChange = (e: Event) => {
      setActiveSection((e as CustomEvent).detail);
    };
    window.addEventListener("sectionChange", handleSectionChange);

    // Watch for project modal activation to hide navbar
    const observer = new MutationObserver(() => {
      setIsHidden(document.body.hasAttribute("data-modal-active"));
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("sectionChange", handleSectionChange);
      observer.disconnect();
    };
  }, []);

  return (
    <nav 
      className={`fixed top-8 left-1/2 z-[100] -translate-x-1/2 transition-all duration-500 ${
        isHidden ? "opacity-0 pointer-events-none -translate-y-10" : "opacity-100 translate-y-0"
      }`}
    >
      <div className="relative flex items-center">
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
          {/* Status Indicator */}
          <div className="relative w-12 h-2 border border-cyan-500/20 rounded-full overflow-hidden bg-black/20">
            <motion.div 
              animate={{ x: [-10, 40, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-3 bg-cyan-400 opacity-60 shadow-[0_0_10px_#22d3ee]"
            />
          </div>

          <div className="flex items-center gap-8 px-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`
                  relative text-[13px] font-bold uppercase tracking-[0.25em] transition-all duration-300 font-orbitron
                  ${activeSection === link.id ? "text-cyan-400" : "text-blue-100/60 hover:text-blue-100"}
                `}
              >
                {link.name}
                
                {/* PERSISTENT UNDERLINE FOR ACTIVE STATE */}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute pl-4 left-full flex items-center lg:flex hidden"
        >
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
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 whitespace-nowrap font-orbitron">
              RESUME
            </span>
          </motion.a>
        </motion.div>
      </div>
    </nav>
  );
}