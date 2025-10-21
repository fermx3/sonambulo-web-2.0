"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = "default" | "link" | "button" | "image" | "text" | "loading";

interface CursorConfig {
  size: number;
  backgroundColor: string;
  border: string;
  content: string;
  textColor: string;
  useIcon?: boolean;
}

export function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for cursor movement
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect element types and change cursor accordingly
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check for forced loading state first
      if (document.body.hasAttribute('data-cursor-loading')) {
        setCursorState("loading");
        return;
      }

      if (target.matches('a, [role="link"]')) {
        setCursorState("link");
      } else if (target.matches('button, [role="button"], input[type="submit"], input[type="button"]')) {
        setCursorState("button");
      } else if (target.matches('img, video, canvas, svg')) {
        setCursorState("image");
      } else if (target.matches('input, textarea, [contenteditable="true"]')) {
        setCursorState("text");
      } else if (target.matches('.loading, [data-loading="true"]')) {
        setCursorState("loading");
      } else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const getCursorConfig = (): CursorConfig => {
    switch (cursorState) {
      case "link":
        return {
          size: 45,
          backgroundColor: "transparent",
          border: "none",
          content: "cursor-icon",
          textColor: "#33ffc2",
          useIcon: true,
        };
      case "button":
        return {
          size: 35,
          backgroundColor: "rgba(6, 6, 255, 0.6)",
          border: "2px solid rgba(6, 6, 255, 1)",
          content: "✱",
          textColor: "#fff",
          useIcon: false,
        };
      case "image":
        return {
          size: 32,
          backgroundColor: "transparent",
          border: "none",
          content: "cursor-icon",
          textColor: "#33ffc2",
          useIcon: true,
        };
      case "text":
        return {
          size: 36,
          backgroundColor: "transparent",
          border: "none",
          content: "cursor-icon",
          textColor: "#d9ff03",
          useIcon: true,
        };
      case "loading":
        return {
          size: 32,
          backgroundColor: "transparent",
          border: "none",
          content: "loading-asterisk",
          textColor: "#fff",
          useIcon: true,
        };
      default:
        return {
          size: 32,
          backgroundColor: "transparent",
          border: "none",
          content: "cursor-icon",
          textColor: "#d9ff03",
          useIcon: true,
        };
    }
  };

  const config = getCursorConfig();

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999999] flex items-center justify-center font-bold rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
      }}
      animate={{
        width: config.size,
        height: config.size,
        backgroundColor: config.backgroundColor,
        border: config.border,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {config.content && (
        <motion.div
          className="flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: cursorState === "loading" ? 360 : 0
          }}
          transition={{
            scale: { type: "spring", stiffness: 500, damping: 15 },
            rotate: cursorState === "loading"
              ? { duration: 3, repeat: Infinity, ease: "linear" }
              : { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {config.useIcon ? (
            <motion.img
              src={cursorState === "loading" ? "/asterisco-blanco.png" : "/cursor-verde.png"}
              alt="Custom cursor"
              width={config.size * 0.8}
              height={config.size * 0.8}
              className="drop-shadow-lg pointer-events-none select-none"
              style={{
                filter: cursorState === "loading"
                  ? "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))"
                  : cursorState === "link"
                  ? "drop-shadow(0 0 8px rgba(51, 255, 194, 0.6))"
                  : "drop-shadow(0 0 6px rgba(217, 255, 3, 0.4))",
              }}
              animate={{
                filter: cursorState === "loading"
                  ? [
                      "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))",
                      "drop-shadow(0 0 12px rgba(255, 255, 255, 1))",
                      "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))"
                    ]
                  : cursorState === "link"
                  ? [
                      "drop-shadow(0 0 8px rgba(51, 255, 194, 0.6))",
                      "drop-shadow(0 0 16px rgba(51, 255, 194, 0.9))",
                      "drop-shadow(0 0 8px rgba(51, 255, 194, 0.6))"
                    ]
                  : [
                      "drop-shadow(0 0 6px rgba(217, 255, 3, 0.4))",
                      "drop-shadow(0 0 12px rgba(217, 255, 3, 0.6))",
                      "drop-shadow(0 0 6px rgba(217, 255, 3, 0.4))"
                    ],
                scale: cursorState === "link" ? [1, 1.1, 1] : 1,
                rotate: cursorState === "link" ? [0, 5, -5, 0] : 0
              }}
              transition={{
                filter: {
                  duration: cursorState === "loading" ? 1 : cursorState === "link" ? 1.5 : 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: cursorState === "link" ? {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {},
                rotate: cursorState === "link" ? {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                } : {}
              }}
            />
          ) : (
            <motion.span
              className="text-center font-black select-none"
              style={{ color: config.textColor }}
            >
              {config.content}
            </motion.span>
          )}
        </motion.div>
      )}

      {/* Glow effect for enhanced visibility */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          backgroundColor: config.backgroundColor,
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          backgroundColor: {
            type: "spring",
            stiffness: 500,
            damping: 28,
          },
        }}
      />
    </motion.div>
  );
}

// Hook para aplicar estados del cursor a componentes específicos
export function useCursor() {
  const setCursorLoading = () => {
    document.body.setAttribute('data-cursor-loading', 'true');
  };

  const setCursorDefault = () => {
    document.body.removeAttribute('data-cursor-loading');
  };

  return {
    setCursorLoading,
    setCursorDefault,
  };
}
