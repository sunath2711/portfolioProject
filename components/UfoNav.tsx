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

  // FIX 1: x and y are now direct MotionValues so they can be animated 
  // freely in Phase 1 and 3 without being "locked" by the orbit math.
  const x = useMotionValue(OFFSCREEN_LEFT_X);
  const y = useMotionValue(-ORBIT_RADIUS + ORBIT_Y_OFFSET);

  // The mathematical orbit paths
  const orbitX = useTransform(angle, (a) => Math.cos(a) * ORBIT_RADIUS);
  const orbitY = useTransform(angle, (a) => Math.sin(a) * ORBIT_RADIUS + ORBIT_Y_OFFSET);

  useEffect(() => {
    // FIX 2: This 'active' flag prevents the "1 UFO" glitch caused by React Strict Mode 
    // trying to run the animation twice at the same time on startup.
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
      // FIX 3: We temporarily link x and y to the orbit math during this phase.
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
      const final =
        index < 2
          ? { x: -360, y: index === 0 ? -120 : 120 }
          : { x: 360, y: index === 2 ? -120 : 120 };

      await Promise.all([
        animate(x, final.x, {
          duration: 1.2,
          ease: "easeInOut",
        }).finished,
        animate(y, final.y, {
          duration: 1.2,
          ease: "easeInOut",
        }).finished,
      ]);
    }

    sequence();

    // Cleanup: Stops all animations if the component unmounts
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