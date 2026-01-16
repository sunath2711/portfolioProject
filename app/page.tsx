"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Professional from "@/components/Professional";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import SpaceBackground from "@/components/SpaceBackground";

export default function Home() {
  return (
    <div className="relative bg-[#020617] flex flex-col">
      {/* Background stays at the very bottom layer */}
      <SpaceBackground /> 
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Professional />
        <Projects />
        <Skills />
        <Contact />
        <div className="mt-20"></div>
        <Footer />
      </main>
    </div>
  );
}