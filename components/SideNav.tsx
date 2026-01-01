"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const leftItems = [
  { label: "Education", href: "#education" },
];

const rightItems = [
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function SideNav() {
  return (
    <>
      {/* Left side */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="fixed left-6 top-1/2 z-20 -translate-y-1/2 space-y-6"
      >
        {leftItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center gap-3 text-sm text-gray-400 hover:text-white transition"
          >
            <span className="h-px w-6 bg-gray-500 group-hover:bg-white transition" />
            {item.label}
          </Link>
        ))}
      </motion.div>

      {/* Right side */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="fixed right-6 top-1/2 z-20 -translate-y-1/2 space-y-6 text-right"
      >
        {rightItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex items-center justify-end gap-3 text-sm text-gray-400 hover:text-white transition"
          >
            {item.label}
            <span className="h-px w-6 bg-gray-500 group-hover:bg-white transition" />
          </Link>
        ))}
      </motion.div>
    </>
  );
}
