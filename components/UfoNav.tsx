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
const ORBIT_Y_OFFSET = 60; // lowered orbit by 20px
const TOP_OF_ORBIT_ANGLE = -Math.PI / 2;

// Safe off-screen left position (SSR-safe)
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

  const x = useTransform(angle, (a) => Math.cos(a) * ORBIT_RADIUS);
  const y = useTransform(
    angle,
    (a) => Math.sin(a) * ORBIT_RADIUS + ORBIT_Y_OFFSET
  );

  useEffect(() => {
    async function sequence() {
      /* -------- Phase 1: Straight entry from LEFT -------- */
      await animate(
        x,
        0,
        {
          duration: 1,
          delay: index * 0.35,
          ease: "easeOut",
        }
      ).finished;

      /* -------- Phase 2: Full 360 ORBIT -------- */
      await animate(
        angle,
        TOP_OF_ORBIT_ANGLE + Math.PI * 2,
        {
          duration: 4,
          ease: "linear",
        }
      ).finished;

      /* -------- Phase 3: Diverge to final positions -------- */
      const final =
        index < 2
          ? { x: -360, y: index === 0 ? -120 : 120 }
          : { x: 360, y: index === 2 ? -120 : 120 };

      await Promise.all([
        animate(x, final.x, {
          duration: 1.2,
          ease: "easeInOut",
        }),
        animate(y, final.y, {
          duration: 1.2,
          ease: "easeInOut",
        }),
      ]);
    }

    sequence();
  }, []);

  return (
    <motion.div
      className="pointer-events-auto absolute"
      initial={{
        x: OFFSCREEN_LEFT_X, // ✅ SSR-safe
        y: -ORBIT_RADIUS + ORBIT_Y_OFFSET,
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.35 }}
      style={{ x, y }}
    >
      <UFOItem label={label} />
    </motion.div>
  );
}
