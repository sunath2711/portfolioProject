"use client";

import { motion } from "framer-motion";
import UFOItem from "./UfoItem";

const items = ["Education", "Skills", "Projects", "Contact"];

export default function UfoNav() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      {items.map((label, index) => {
        const isLeft = index < 2;
        const finalX = isLeft ? -260 : 260;
        const finalY = index % 2 === 0 ? -90 : 90;

        return (
          <motion.div
            key={label}
            className="pointer-events-auto absolute"
            initial={{
              x: -520,
              y: -160 + index * 90,
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [
                -520,
                -120,
                0,
                finalX,
              ],
              y: [
                -160 + index * 90,
                -40,
                0,
                finalY,
              ],
            }}
            transition={{
              duration: 3.2,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
          >
            <UFOItem label={label} />
          </motion.div>
        );
      })}
    </div>
  );
}
