"use client";

import { useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function ClientScroller() {
  useScrollSpy(); // Initialize global scroll tracking

  useEffect(() => {
    // On refresh, force scroll to top and clear hash to prevent "halfway" loading
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}