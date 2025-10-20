"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Función reutilizable para crear asteriscos flotantes con Framer Motion
const FloatingAsterisk = ({
  type,
  size,
  position,
  animationType,
  delay
}: {
  type: 'verde' | 'blanco';
  size: string;
  position: string;
  animationType: 'float' | 'emerge' | 'rotate' | 'circular' | 'spinFloat';
  delay: number;
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case 'float':
        return {
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 3,
            repeat: Infinity,
            delay
          }
        };
      case 'emerge':
        return {
          y: [20, -30],
          scale: [0.8, 1.1],
          opacity: [0, 1, 1, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            delay,
            times: [0, 0.2, 0.8, 1]
          }
        };
      case 'rotate':
        return {
          rotate: [0, 360],
          transition: {
            duration: 4,
            repeat: Infinity,
            delay
          }
        };
      case 'circular':
        return {
          x: [0, 21, 30, 21, 0, -21, -30, -21, 0],
          y: [0, -14, -20, -32, -40, -32, -20, -14, 0],
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          transition: {
            duration: 8,
            repeat: Infinity,
            delay
          }
        };
      case 'spinFloat':
        return {
          y: [0, -10, -5, 0],
          rotate: [0, 120, 240, 360],
          scale: [1, 1.1, 0.9, 1],
          transition: {
            duration: 5,
            repeat: Infinity,
            delay
          }
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      className={`absolute ${position} ${size}`}
      animate={getAnimation()}
    >
      <Image
        src={`/asterisco-${type}.png`}
        alt=""
        fill
        className="object-contain"
      />
    </motion.div>
  );
};

// Componente principal que contiene todos los asteriscos flotantes
export default function FloatingAsterisks() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible opacity-90">
      {/* Asteriscos que salen del centro hacia arriba-izquierda */}
      <FloatingAsterisk
        type="verde"
        size="w-6 h-6 md:w-10 md:h-10"
        position="top-[15%] left-[20%]"
        animationType="float"
        delay={0.2}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-4 h-4 md:w-7 md:h-7"
        position="top-[10%] left-[5%]"
        animationType="emerge"
        delay={0.5}
      />

      {/* Asteriscos que salen hacia arriba-derecha */}
      <FloatingAsterisk
        type="verde"
        size="w-5 h-5 md:w-8 md:h-8"
        position="top-[20%] right-[15%]"
        animationType="float"
        delay={0.8}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-7 h-7 md:w-12 md:h-12"
        position="top-[5%] right-[5%]"
        animationType="rotate"
        delay={1.0}
      />

      {/* Asteriscos que salen hacia los lados */}
      <FloatingAsterisk
        type="verde"
        size="w-4 h-4 md:w-6 md:h-6"
        position="top-[45%] left-[0%]"
        animationType="emerge"
        delay={1.3}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-6 h-6 md:w-9 md:h-9"
        position="top-[50%] right-[0%]"
        animationType="float"
        delay={1.6}
      />

      {/* Asterisco con trayectoria circular */}
      <FloatingAsterisk
        type="verde"
        size="w-5 h-5 md:w-8 md:h-8"
        position="top-[40%] left-[30%]"
        animationType="circular"
        delay={0.5}
      />

      {/* Asterisco con spin float */}
      <FloatingAsterisk
        type="blanco"
        size="w-6 h-6 md:w-10 md:h-10"
        position="top-[30%] right-[25%]"
        animationType="spinFloat"
        delay={1.2}
      />

      {/* Más asteriscos con nuevas animaciones */}
      <FloatingAsterisk
        type="verde"
        size="w-5 h-5 md:w-8 md:h-8"
        position="bottom-[25%] left-[25%]"
        animationType="float"
        delay={0.2}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-4 h-4 md:w-7 md:h-7"
        position="bottom-[20%] right-[30%]"
        animationType="emerge"
        delay={0.8}
      />

      <FloatingAsterisk
        type="verde"
        size="w-3 h-3 md:w-5 md:h-5"
        position="top-[35%] left-[10%]"
        animationType="rotate"
        delay={0.5}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-8 h-8 md:w-11 md:h-11"
        position="top-[30%] right-[8%]"
        animationType="circular"
        delay={1.3}
      />

      {/* Asteriscos adicionales para más densidad */}
      <FloatingAsterisk
        type="verde"
        size="w-4 h-4 md:w-7 md:h-7"
        position="top-[0%] left-[30%]"
        animationType="rotate"
        delay={0.3}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-5 h-5 md:w-8 md:h-8"
        position="top-[8%] right-[25%]"
        animationType="spinFloat"
        delay={0.9}
      />

      <FloatingAsterisk
        type="verde"
        size="w-6 h-6 md:w-10 md:h-10"
        position="bottom-[5%] left-[50%]"
        animationType="emerge"
        delay={0.4}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-4 h-4 md:w-6 md:h-6"
        position="top-[65%] right-[25%]"
        animationType="circular"
        delay={1.1}
      />

      {/* Asteriscos muy arriba para efecto de dispersión */}
      <FloatingAsterisk
        type="verde"
        size="w-4 h-4 md:w-7 md:h-7"
        position="top-[-5%] left-[60%]"
        animationType="float"
        delay={0.7}
      />

      <FloatingAsterisk
        type="blanco"
        size="w-5 h-5 md:w-8 md:h-8"
        position="top-[-8%] right-[40%]"
        animationType="rotate"
        delay={1.4}
      />
    </div>
  );
}
