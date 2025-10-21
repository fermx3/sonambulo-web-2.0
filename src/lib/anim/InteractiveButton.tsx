"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type InteractiveButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "default" | "glow" | "morphing" | "magnetic" | "scale";
  glowColor?: string;
};

export function InteractiveButton({
  children,
  className = "",
  onClick,
  href,
  variant = "default",
  glowColor = "var(--color-lime)"
}: InteractiveButtonProps) {

  if (href) {
    return (
      <motion.a
        href={href}
        className={`cursor-pointer ${className}`}
        whileHover={(() => {
          switch (variant) {
            case "glow":
              return {
                scale: 1.05,
                boxShadow: `0 0 20px ${glowColor}`,
                transition: { duration: 0.2 }
              };
            case "morphing":
              return {
                borderRadius: "25px",
                scale: 1.02,
                rotate: 1,
                transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
              };
            case "magnetic":
              return {
                y: -3,
                transition: {
                  type: "spring" as const,
                  stiffness: 400,
                  damping: 10
                }
              };
            case "scale":
              return {
                scale: 1.08,
                transition: {
                  type: "spring" as const,
                  stiffness: 300,
                  damping: 15
                }
              };
            default:
              return {
                scale: 1.02,
                transition: { duration: 0.2 }
              };
          }
        })()}
        whileTap={{ scale: 0.98 }}
        style={{ willChange: "transform" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`cursor-pointer ${className}`}
      whileHover={(() => {
        switch (variant) {
          case "glow":
            return {
              scale: 1.05,
              boxShadow: `0 0 20px ${glowColor}`,
              transition: { duration: 0.2 }
            };
          case "morphing":
            return {
              borderRadius: "25px",
              scale: 1.02,
              rotate: 1,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
            };
          case "magnetic":
            return {
              y: -3,
              transition: {
                type: "spring" as const,
                stiffness: 400,
                damping: 10
              }
            };
          case "scale":
            return {
              scale: 1.08,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 15
              }
            };
          default:
            return {
              scale: 1.02,
              transition: { duration: 0.2 }
            };
        }
      })()}
      whileTap={{ scale: 0.98 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.button>
  );
}

// Componente específico para enlaces con efectos sofisticados
export function InteractiveLink({
  children,
  className = "",
  href = "#",
  underlineColor = "var(--color-lime)"
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  underlineColor?: string;
}) {
  return (
    <motion.a
      href={href}
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Texto principal */}
      <motion.span
        variants={{
          initial: { y: 0 },
          hover: { y: -2 }
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10 inline-block"
      >
        {children}
      </motion.span>

      {/* Línea animada debajo */}
      <motion.span
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 }
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-0 bottom-0 w-full h-0.5 origin-left"
        style={{ backgroundColor: underlineColor }}
      />

      {/* Efecto de glow sutil */}
      <motion.span
        variants={{
          initial: { scale: 0, opacity: 0 },
          hover: { scale: 1, opacity: 0.3 }
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 rounded-md blur-sm"
        style={{ backgroundColor: underlineColor }}
      />
    </motion.a>
  );
}

// Componente para imágenes con hover interactivo
export function InteractiveImage({
  src,
  alt,
  className = "",
  effect = "zoom"
}: {
  src: string;
  alt: string;
  className?: string;
  effect?: "zoom" | "tilt" | "glow" | "float";
}) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      whileHover={(() => {
        switch (effect) {
          case "tilt":
            return {
              scale: 1.05,
              rotateZ: 2,
              transition: { duration: 0.3 }
            };
          case "glow":
            return {
              scale: 1.03,
              filter: "brightness(1.1) drop-shadow(0 0 20px rgba(217, 255, 3, 0.5))",
              transition: { duration: 0.3 }
            };
          case "float":
            return {
              y: -8,
              transition: {
                type: "spring" as const,
                stiffness: 300,
                damping: 20
              }
            };
          default: // zoom
            return {
              scale: 1.08,
              transition: { duration: 0.3 }
            };
        }
      })()}
      style={{ willChange: "transform" }}
    />
  );
}
