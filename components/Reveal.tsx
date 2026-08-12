"use client";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 12,
  className = "",
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`reveal-block ${className}`}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -4% 0px",
      }}
      transition={{
        duration: reduceMotion
          ? 0
          : 0.42,

        delay: reduceMotion
          ? 0
          : delay,

        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}