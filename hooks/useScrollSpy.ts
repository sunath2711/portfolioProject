"use client";

import { useEffect } from "react";

export const useScrollSpy = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Triggers when section is roughly in the middle
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            // Update URL hash without jumping the page or adding to history stack
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler to be used by all buttons/nav links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for fixed navbar (approx 80px)
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return { scrollToSection };
};