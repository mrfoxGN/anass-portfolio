"use client";

import {
  motion,
  MotionConfig,
  useReducedMotion,
} from "motion/react";

import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({
  children,
}: PageTransitionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <div className="page-transition-wrapper">
        {!reduceMotion && (
          <motion.div
            className="page-transition-wash"
            initial={{
              opacity: 0.45,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}

        <motion.div
          className="page-transition-content"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: reduceMotion
              ? 0
              : 0.3,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          {children}
        </motion.div>
      </div>
    </MotionConfig>
  );
}