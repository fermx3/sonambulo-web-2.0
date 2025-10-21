"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Typewriter effect with customizable speed
export function TypewriterText({
  text,
  speed = 50,
  className = "",
  cursor = true,
  cursorClassName = "",
  onComplete,
}: {
  text: string;
  speed?: number;
  className?: string;
  cursor?: boolean;
  cursorClassName?: string;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        if (onComplete) onComplete();

        // Hide cursor after completion if desired
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {cursor && showCursor && (
        <motion.span
          className={`inline-block ${cursorClassName}`}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: isComplete ? 0 : Infinity,
            repeatType: "reverse"
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

// Character-by-character reveal with advanced animations
export function CharacterReveal({
  text,
  delay = 0.03,
  className = "",
  animation = "fade-up",
}: {
  text: string;
  delay?: number;
  className?: string;
  animation?: "fade-up" | "scale" | "rotate" | "glitch" | "wave";
}) {
  const characters = text.split("");

  const getCharacterAnimation = () => {
    switch (animation) {
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        };
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -180 },
          visible: { opacity: 1, rotate: 0 },
        };
      case "glitch":
        return {
          hidden: {
            opacity: 0,
            x: Math.random() * 20 - 10,
            y: Math.random() * 20 - 10,
            skew: Math.random() * 20 - 10
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            skew: 0
          },
        };
      case "wave":
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      default: // fade-up
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getCharacterAnimation();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          custom={index}
          variants={variants}
          transition={{
            delay: index * delay,
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

// Word-by-word reveal with morphing effect
export function WordReveal({
  text,
  delay = 0.1,
  className = "",
  stagger = true,
}: {
  text: string;
  delay?: number;
  className?: string;
  stagger?: boolean;
}) {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotateX: -90,
              scale: 0.8
            },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              transition: {
                delay: stagger ? index * delay : 0,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
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

// Glitch text effect
export function GlitchText({
  text,
  className = "",
  intensity = 5,
  duration = 2,
}: {
  text: string;
  className?: string;
  intensity?: number;
  duration?: number;
}) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, duration * 1000);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <motion.div
      className={`relative ${className}`}
      animate={isGlitching ? {
        x: [0, intensity, -intensity, intensity, 0],
        y: [0, -intensity, intensity, -intensity, 0],
      } : {}}
      transition={{
        duration: 0.2,
        ease: "easeInOut"
      }}
    >
      {/* Main text */}
      <span className="relative z-10">{text}</span>

      {/* Glitch layers */}
      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-[var(--color-blue)] mix-blend-multiply"
            animate={{
              x: [-2, 2, -2],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{ duration: 0.1, repeat: 2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-[var(--color-teal)] mix-blend-multiply"
            animate={{
              x: [2, -2, 2],
              opacity: [0.8, 0.3, 0.8],
            }}
            transition={{ duration: 0.1, repeat: 2, delay: 0.05 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </motion.div>
  );
}

// Morphing text that changes between different strings
export function MorphingText({
  texts,
  interval = 3000,
  className = "",
}: {
  texts: string[];
  interval?: number;
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <motion.div className={className}>
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 1.1 }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        {texts[currentIndex]}
      </motion.span>
    </motion.div>
  );
}

// Text highlight effect that runs on scroll
export function TextHighlight({
  children,
  highlightColor = "var(--color-lime)",
  className = "",
}: {
  children: string;
  highlightColor?: string;
  className?: string;
}) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      whileInView="visible"
      initial="hidden"
      viewport={{ once: true, amount: 0.5 }}
    >
      {/* Background highlight */}
      <motion.span
        className="absolute inset-0 z-0"
        style={{ backgroundColor: highlightColor }}
        variants={{
          hidden: { scaleX: 0, originX: 0 },
          visible: {
            scaleX: 1,
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }
          },
        }}
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.span>
  );
}
