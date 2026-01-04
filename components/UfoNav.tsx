"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect } from "react";
import UFOItem from "./UfoItem";

const labels = ["Education", "Skills", "Projects", "Contact"];

const ORBIT_RADIUS = 280;
const ORBIT_Y_OFFSET = 60; 
const TOP_OF_ORBIT_ANGLE = -Math.PI / 2;
const OFFSCREEN_LEFT_X = -700;

export default function UfoNav() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {labels.map((label, index) => (
        <OrbitingUFO key={label} index={index} label={label} />
      ))}
    </div>
  );
}

function OrbitingUFO({
  index,
  label,
}: {
  index: number;
  label: string;
}) {
  const angle = useMotionValue(TOP_OF_ORBIT_ANGLE);

  // x and y are independent to allow Phase 1 and 3 to move freely
  const x = useMotionValue(OFFSCREEN_LEFT_X);
  const y = useMotionValue(-ORBIT_RADIUS + ORBIT_Y_OFFSET);

  // Orbit mathematical derivatives
  const orbitX = useTransform(angle, (a) => Math.cos(a) * ORBIT_RADIUS);
  const orbitY = useTransform(angle, (a) => Math.sin(a) * ORBIT_RADIUS + ORBIT_Y_OFFSET);

  useEffect(() => {
    let active = true;

    async function sequence() {
      /* -------- Phase 1: Straight entry from LEFT -------- */
      await animate(x, 0, {
        duration: 1,
        delay: index * 0.35,
        ease: "easeOut",
      }).finished;

      if (!active) return;

      /* -------- Phase 2: Full 360 ORBIT -------- */
      // Bind x and y to follow the orbit math
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
      // Increased spacing to x: 500 and y: 180
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
      <UFOItem label={label} />
    </motion.div>
  );
}