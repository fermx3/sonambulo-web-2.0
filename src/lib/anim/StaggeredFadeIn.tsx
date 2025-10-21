"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type StaggeredFadeInProps = {
  children: ReactNode[];
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  distance?: number;
  duration?: number;
  ease?: string;
  className?: string;
  viewportAmount?: number;
  once?: boolean;
};

export function StaggeredFadeIn({
  children,
  staggerDelay = 0.1,
  direction = "up",
  distance = 30,
  duration = 0.6,
  className = "",
  viewportAmount = 0.2,
  once = true,
}: StaggeredFadeInProps) {

  const getInitialState = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "scale":
        return { opacity: 0, scale: 0.8 };
      case "rotate":
        return { opacity: 0, rotate: -15, scale: 0.9 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "scale":
        return { opacity: 1, scale: 1 };
      case "rotate":
        return { opacity: 1, rotate: 0, scale: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: getInitialState(),
    visible: {
      ...getAnimateState(),
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount }}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Variante especial para grids responsivos
export function StaggeredGrid({
  children,
  staggerDelay = 0.08,
  columns = 3,
  className = "",
  itemClassName = "",
}: {
  children: ReactNode[];
  staggerDelay?: number;
  columns?: number;
  className?: string;
  itemClassName?: string;
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={itemClassName}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// Animación especial para texto que aparece palabra por palabra
export function StaggeredText({
  text,
  staggerDelay = 0.05,
  className = "",
  wordClassName = "",
}: {
  text: string;
  staggerDelay?: number;
  className?: string;
  wordClassName?: string;
}) {
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className={`inline-block mr-2 ${wordClassName}`}
          style={{
            transformOrigin: "50% 100%",
            transformStyle: "preserve-3d"
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
