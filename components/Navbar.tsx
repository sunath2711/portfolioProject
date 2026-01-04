"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
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
    <nav className="fixed top-6 left-1/2 z-[100] -translate-x-1/2">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          flex items-center gap-2 px-6 py-3 rounded-full 
          border border-cyan-500/30 bg-blue-950/20 
          backdrop-blur-xl transition-all duration-500
          ${scrolled ? "shadow-[0_0_20px_rgba(6,182,212,0.2)]" : ""}
        `}
      >
        {/* Decorative HUD "Scanner" Light */}
        <motion.div 
          animate={{ x: [-10, 10, -10], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
        />

        <div className="flex items-center gap-6 px-4">
          {navLinks.map((link) => (
            <NavLink key={link.name} link={link} />
          ))}
        </div>

        {/* Closing HUD Detail */}
        <div className="h-1 w-4 rounded-full bg-cyan-900/50" />
      </motion.div>
    </nav>
  );
}

function NavLink({ link }: { link: { name: string; href: string } }) {
  return (
    <motion.a
      href={link.href}
      whileHover={{ scale: 1.05, color: "#22d3ee" }}
      className="relative text-xs font-medium uppercase tracking-[0.2em] text-blue-100/70 transition-colors hover:text-cyan-400"
    >
      {link.name}
      {/* Animated Underline "Energy" */}
      <motion.span
        className="absolute -bottom-1 left-0 h-[1px] bg-cyan-400"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.a>
  );
}