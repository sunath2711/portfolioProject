"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, X, Eye, FileText, Menu } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navLinks = [
  { name: "Home", id: "hero" },
  { name: "Professional", id: "professional" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isProjectModalActive, setIsProjectModalActive] = useState(false); // NEW STATE
  const { scrollToSection } = useScrollSpy();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleSectionChange = (e: Event) => setActiveSection((e as CustomEvent).detail);
    window.addEventListener("sectionChange", handleSectionChange);

    // --- NEW: Observer to hide navbar when Project Modal is active ---
    const observer = new MutationObserver(() => {
      const isActive = document.body.getAttribute("data-modal-active") === "true";
      setIsProjectModalActive(isActive);
    });

    observer.observe(document.body, { attributes: true });

    // Lock scroll for Resume Preview, Mobile Menu, or Project Modal
    if (isPreviewOpen || isMobileMenuOpen || isProjectModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("sectionChange", handleSectionChange);
      observer.disconnect();
    };
  }, [isPreviewOpen, isMobileMenuOpen, isProjectModalActive]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 md:top-8 left-0 md:left-1/2 w-full md:w-auto z-[100] md:-translate-x-1/2 transition-all duration-500 
          ${(isProjectModalActive || isPreviewOpen) ? "opacity-0 -translate-y-20 pointer-events-none" : "opacity-100 translate-y-0"}
        `}
      >
        {/* MOBILE HEADER */}
        <div className={`md:hidden flex items-center justify-between px-6 py-4 w-full backdrop-blur-xl border-b border-white/10 transition-colors ${scrolled ? 'bg-blue-950/80' : 'bg-transparent'}`}>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="font-orbitron text-[10px] font-bold text-white tracking-widest uppercase">Entity_OS</span>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-cyan-400 border border-cyan-400/20 rounded-lg"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* DESKTOP PILL */}
        <div className="relative flex items-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`
              hidden md:flex items-center gap-6 px-8 py-3.5 rounded-full 
              border border-cyan-500/30 bg-blue-950/40 
              backdrop-blur-2xl transition-all duration-500
              ${scrolled ? "border-cyan-500/60 bg-blue-950/80 shadow-[0_0_20px_rgba(6,182,212,0.15)]" : ""}
            `}
          >
            <div className="flex items-center gap-8 px-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`
                    relative text-[13px] font-bold uppercase tracking-[0.25em] transition-all duration-300 font-orbitron
                    ${activeSection === link.id ? "text-cyan-400" : "text-blue-100/60 hover:text-blue-100"}
                  `}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div className="absolute pl-4 left-full flex items-center hidden lg:flex">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 border border-cyan-400/40 bg-cyan-500/5 rounded-tl-[18px] rounded-br-[18px] transition-all duration-300 group hover:border-cyan-400 hover:bg-cyan-400/10 shadow-[inset_0_0_10px_rgba(34,211,238,0.05)]"
            >
              <Eye size={13} className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 font-orbitron">RESUME</span>
            </button>
          </motion.div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY & RESUME MODAL remain the same... */}
    </>
  );
}