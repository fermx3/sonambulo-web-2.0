"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  start?: number;
  end?: number;
};

export function Parallax({ children, start = 0, end = 100 }: ParallaxProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  return <motion.div style={{ y }}>{children}</motion.div>;
}
