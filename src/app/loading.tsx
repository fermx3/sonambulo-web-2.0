"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <motion.div
      role="status"
      aria-label="Cargando recursos"
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-[var(--color-ink)] backdrop-blur-sm pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-[var(--color-lime)] opacity-30 text-2xl font-black select-none pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            ✱
          </motion.div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Morphing logo with advanced animations */}
        <motion.div
          className="relative"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/asterisco-verde.png"
            alt=""
            aria-hidden
            width={80}
            height={80}
            priority
            className="relative z-10"
          />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-[var(--color-lime)] rounded-full blur-xl opacity-50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Progress bar */}
        {/* <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--color-lime)] to-[var(--color-teal)] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div> */}

        {/* Loading text with typewriter effect */}
        <motion.div className="text-center">
          <motion.h2
            className="text-[var(--color-lime)] font-bold text-xl tracking-wide"
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            CARGANDO...
          </motion.h2>
        </motion.div>
      </div>

      {/* Accessible text for screen readers */}
      <span className="sr-only">Cargando recursos del sitio web</span>
    </motion.div>
  );
}
