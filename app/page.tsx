"use client";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Professional from "@/components/Professional";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Backup: ensures it triggers even if the browser tries to auto-scroll
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Professional />
      <Skills />
      <Projects />
      <Contact />
      
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-medium text-white">Engineering</h3>
            <p className="mt-3 text-sm text-gray-400">
              Designing and building scalable software systems with strong
              fundamentals and real-world constraints.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Product Thinking</h3>
            <p className="mt-3 text-sm text-gray-400">
              Focusing on usability, clarity, and long-term maintainability —
              not just shipping code.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">Intelligence</h3>
            <p className="mt-3 text-sm text-gray-400">
              Exploring AI-driven systems and tools that enhance developer and
              user experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
