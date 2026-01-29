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
  const { scrollToSection } = useScrollSpy();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const handleSectionChange = (e: unknown) => setActiveSection(e.detail);
    window.addEventListener("sectionChange", handleSectionChange);

    // Lock scroll for both Resume Preview and Mobile Menu
    if (isPreviewOpen || isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("sectionChange", handleSectionChange);
    };
  }, [isPreviewOpen, isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false); // Close menu on click
  };

  return (
    <>
      {/* --- DESKTOP & MOBILE WRAPPER --- */}
      <nav className="fixed top-0 md:top-8 left-0 md:left-1/2 w-full md:w-auto z-[100] md:-translate-x-1/2 transition-all duration-500">
        
        {/* MOBILE HEADER (Visible only on small screens) */}
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

        {/* DESKTOP PILL (Hidden on mobile) */}
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

          {/* RESUME TRIGGER (Desktop Only) */}
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

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-blue-950/95 backdrop-blur-2xl md:hidden flex flex-col pt-32 px-10 gap-8"
          >
            <div className="space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block text-3xl font-orbitron font-bold tracking-widest uppercase text-left w-full transition-all
                    ${activeSection === link.id ? "text-cyan-400 translate-x-4" : "text-white/40"}
                  `}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); setIsPreviewOpen(true); }}
                className="flex items-center gap-4 text-cyan-400 font-orbitron text-sm tracking-widest"
              >
                <FileText size={20} /> VIEW_RESUME_CORE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- RESUME PREVIEW MODAL --- */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl h-[90vh] bg-[#020617] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-3">
                  <FileText className="text-cyan-400" size={18} />
                  <span className="font-orbitron text-[10px] font-bold text-white tracking-widest uppercase">DOC_VIEWER // RESUME.PDF</span>
                </div>
                <div className="flex items-center gap-4">
                  <a href="/resume.pdf" download className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-cyan-500 text-black text-[10px] font-black rounded-full hover:bg-white transition-colors uppercase tracking-tighter"><Download size={14} /> Download</a>
                  <button onClick={() => setIsPreviewOpen(false)} className="p-2 text-white/50 hover:text-white transition-colors"><X size={20} /></button>
                </div>
              </div>
              <div className="w-full h-full bg-[#0f172a]">
                <iframe src="/resume.pdf#toolbar=0" className="w-full h-full border-none" title="Resume Preview" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}