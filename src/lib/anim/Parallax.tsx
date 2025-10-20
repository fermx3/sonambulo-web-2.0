"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  start?: number;
  end?: number;
};

export function Parallax({ children, start = -20, end = 20 }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
