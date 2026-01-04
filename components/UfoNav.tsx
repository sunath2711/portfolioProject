"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import UFOItem from "./UfoItem";

// UPDATED: navItems now contains the label and the section ID it links to
const navItems = [
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const ORBIT_RADIUS = 280;
const ORBIT_Y_OFFSET = 60; 
const TOP_OF_ORBIT_ANGLE = -Math.PI / 2;
const OFFSCREEN_LEFT_X = -700;

export default function UfoNav() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {navItems.map((item, index) => (
        <OrbitingUFO 
          key={item.label} 
          index={index} 
          label={item.label} 
          href={item.href} 
        />
      ))}
    </div>
  );
}

function OrbitingUFO({
  index,
  label,
  href,
}: {
  index: number;
  label: string;
  href: string;
}) {
  const angle = useMotionValue(TOP_OF_ORBIT_ANGLE);

  // Independent x and y to allow Phase 1 and 3 to move freely
  const x = useMotionValue(OFFSCREEN_LEFT_X);
  const y = useMotionValue(-ORBIT_RADIUS + ORBIT_Y_OFFSET);

  // Orbit mathematical derivatives
  const orbitX = useTransform(angle, (a) => Math.cos(a) * ORBIT_RADIUS);
  const orbitY = useTransform(angle, (a) => Math.sin(a) * ORBIT_RADIUS + ORBIT_Y_OFFSET);

  // Smooth scroll handler
  const handleNavigation = () => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let active = true;

    async function sequence() {
      /* -------- Phase 1: Entry from LEFT -------- */
      await animate(x, 0, {
        duration: 1,
        delay: index * 0.35,
        ease: "easeOut",
      }).finished;

      if (!active) return;

      /* -------- Phase 2: Full 360 ORBIT -------- */
      const unbindX = orbitX.on("change", (v) => x.set(v));
      const unbindY = orbitY.on("change", (v) => y.set(v));

      await animate(angle, TOP_OF_ORBIT_ANGLE + Math.PI * 2, {
        duration: 4,
        ease: "linear",
      }).finished;

      unbindX();
      unbindY();

      if (!active) return;

      /* -------- Phase 3: Diverge to final positions -------- */
      // Spacious positioning to frame the Hero text
      const final =
        index < 2
          ? { x: -500, y: index === 0 ? -180 : 180 }
          : { x: 500, y: index === 2 ? -180 : 180 };

      await Promise.all([
        animate(x, final.x, {
          duration: 1.5,
          ease: "easeInOut",
        }).finished,
        animate(y, final.y, {
          duration: 1.5,
          ease: "easeInOut",
        }).finished,
      ]);
    }

    sequence();

    return () => {
      active = false;
      x.stop();
      y.stop();
      angle.stop();
    };
  }, [index, x, y, angle, orbitX, orbitY]);

  return (
    <motion.div
      className="pointer-events-auto absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.35 }}
      style={{ x, y }}
    >
      <UFOItem 
        label={label} 
        onClick={handleNavigation} 
      />
    </motion.div>
  );
}