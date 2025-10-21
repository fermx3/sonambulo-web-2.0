"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

// Advanced reveal with clip-path animations
export function ClipReveal({
  children,
  direction = "bottom",
  className = "",
  duration = 0.8,
}: {
  children: ReactNode;
  direction?: "top" | "bottom" | "left" | "right" | "center" | "diagonal";
  className?: string;
  duration?: number;
}) {
  const getClipPath = () => {
    switch (direction) {
      case "top":
        return {
          initial: "inset(0 0 100% 0)",
          animate: "inset(0 0 0% 0)",
        };
      case "bottom":
        return {
          initial: "inset(100% 0 0 0)",
          animate: "inset(0% 0 0 0)",
        };
      case "left":
        return {
          initial: "inset(0 100% 0 0)",
          animate: "inset(0 0% 0 0)",
        };
      case "right":
        return {
          initial: "inset(0 0 0 100%)",
          animate: "inset(0 0 0 0%)",
        };
      case "center":
        return {
          initial: "circle(0% at 50% 50%)",
          animate: "circle(150% at 50% 50%)",
        };
      case "diagonal":
        return {
          initial: "polygon(0 100%, 0 100%, 0 100%, 0 100%)",
          animate: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
        };
      default:
        return {
          initial: "inset(100% 0 0 0)",
          animate: "inset(0% 0 0 0)",
        };
    }
  };

  const clipPaths = getClipPath();

  return (
    <motion.div
      className={className}
      initial={{
        clipPath: clipPaths.initial,
        opacity: 0
      }}
      whileInView={{
        clipPath: clipPaths.animate,
        opacity: 1
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ willChange: "clip-path, opacity" }}
    >
      {children}
    </motion.div>
  );
}

// Sliding reveal with mask effects
export function SlideReveal({
  children,
  direction = "up",
  distance = 100,
  className = "",
  stagger = false,
}: {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "rotate";
  distance?: number;
  className?: string;
  stagger?: boolean;
}) {
  const getTransforms = () => {
    switch (direction) {
      case "up":
        return { y: distance, rotateX: 15 };
      case "down":
        return { y: -distance, rotateX: -15 };
      case "left":
        return { x: distance, rotateY: 15 };
      case "right":
        return { x: -distance, rotateY: -15 };
      case "rotate":
        return { scale: 0.8, rotate: -10, y: 20 };
      default:
        return { y: distance };
    }
  };

  const transforms = getTransforms();

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={{
          hidden: {
            ...transforms,
            opacity: 0,
          },
          visible: {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              ...(stagger && { delay: 0.2 })
            },
          },
        }}
        style={{
          willChange: "transform, opacity",
          transformOrigin: "50% 100%"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// Parallax reveal with depth effect
export function ParallaxReveal({
  children,
  speed = 0.5,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        scale,
        opacity,
        willChange: "transform, opacity"
      }}
    >
      {children}
    </motion.div>
  );
}

// Morphing reveal with shape transformation
export function MorphReveal({
  children,
  morphType = "square-to-circle",
  className = "",
}: {
  children: ReactNode;
  morphType?: "square-to-circle" | "diamond-to-square" | "star-to-circle";
  className?: string;
}) {
  const getMorphPath = () => {
    switch (morphType) {
      case "square-to-circle":
        return {
          initial: "M0,0 L100,0 L100,100 L0,100 Z",
          animate: "M50,0 A50,50 0 1,1 50,100 A50,50 0 1,1 50,0 Z",
        };
      case "diamond-to-square":
        return {
          initial: "M50,0 L100,50 L50,100 L0,50 Z",
          animate: "M0,0 L100,0 L100,100 L0,100 Z",
        };
      case "star-to-circle":
        return {
          initial: "M50,0 L61,35 L98,35 L68,57 L79,91 L50,70 L21,91 L32,57 L2,35 L39,35 Z",
          animate: "M50,0 A50,50 0 1,1 50,100 A50,50 0 1,1 50,0 Z",
        };
      default:
        return {
          initial: "M0,0 L100,0 L100,100 L0,100 Z",
          animate: "M50,0 A50,50 0 1,1 50,100 A50,50 0 1,1 50,0 Z",
        };
    }
  };

  const morphPaths = getMorphPath();

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{
          clipPath: `path("${morphPaths.initial}")`,
          scale: 0.8
        }}
        whileInView={{
          clipPath: `path("${morphPaths.animate}")`,
          scale: 1
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Split text reveal with advanced effects
export function SplitReveal({
  text,
  className = "",
  delay = 0.05,
  animation = "fade-up",
}: {
  text: string;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "rotate" | "scale" | "flip";
}) {
  const getAnimation = () => {
    switch (animation) {
      case "rotate":
        return {
          hidden: { opacity: 0, rotateY: -90 },
          visible: { opacity: 1, rotateY: 0 }
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 }
        };
      case "flip":
        return {
          hidden: { opacity: 0, rotateX: -90, y: 50 },
          visible: { opacity: 1, rotateX: 0, y: 0 }
        };
      default:
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  const variants = getAnimation();
  const letters = text.split("");

  return (
    <motion.div
      className={`inline-flex ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={variants}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="inline-block"
          style={{
            transformOrigin: "50% 100%",
            transformStyle: "preserve-3d"
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
