"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // Subtle easing curve
        filter: {
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        },
        opacity: {
          duration: 0.5,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
