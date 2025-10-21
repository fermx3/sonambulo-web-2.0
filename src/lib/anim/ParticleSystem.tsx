"use client";
import { motion, useMotionValue, useSpring, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
};

// Floating particles that respond to mouse movement
export function AmbientParticles({
  count = 50,
  colors = ["#d9ff03", "#33ffc2", "#0606ff"],
  mouseInfluence = 100,
  className = "",
}: {
  count?: number;
  colors?: string[];
  mouseInfluence?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 15 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 15 });

  // Initialize particles
  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 1000,
        maxLife: Math.random() * 2000 + 1000,
      });
    }
    setParticles(newParticles);
  }, [count, colors]);

  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Animation frame loop
  useAnimationFrame(() => {
    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        const currentMouseX = smoothMouseX.get();
        const currentMouseY = smoothMouseY.get();

        // Distance from mouse
        const dx = particle.x - currentMouseX;
        const dy = particle.y - currentMouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse influence
        let newVx = particle.vx;
        let newVy = particle.vy;

        if (distance < mouseInfluence) {
          const force = (mouseInfluence - distance) / mouseInfluence;
          newVx += (dx / distance) * force * 0.02;
          newVy += (dy / distance) * force * 0.02;
        }

        // Update position
        let newX = particle.x + newVx;
        let newY = particle.y + newVy;

        // Boundary bouncing
        const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
        const height = typeof window !== 'undefined' ? window.innerHeight : 1000;

        if (newX < 0 || newX > width) newVx *= -0.8;
        if (newY < 0 || newY > height) newVy *= -0.8;

        newX = Math.max(0, Math.min(width, newX));
        newY = Math.max(0, Math.min(height, newY));

        // Life cycle
        const newLife = particle.life + 1;
        const lifeRatio = newLife / particle.maxLife;
        const newOpacity = particle.opacity * (1 - lifeRatio);

        // Respawn if dead
        if (newLife > particle.maxLife) {
          return {
            ...particle,
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 0,
            opacity: Math.random() * 0.6 + 0.2,
          };
        }

        return {
          ...particle,
          x: newX,
          y: newY,
          vx: newVx * 0.99,
          vy: newVy * 0.99,
          life: newLife,
          opacity: newOpacity,
        };
      })
    );
  });

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.id * 0.1,
          }}
        />
      ))}
    </div>
  );
}

// Asteroid field effect
export function AsteroidField({
  count = 15,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            rotate: Math.random() * 360,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current text-lime-400">
            <path d="M10 0l3 7h7l-5.5 4 2 6.5L10 13l-6.5 4.5 2-6.5L0 7h7z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// Cursor trail particles
export function CursorTrail({
  trailLength = 20,
  colors = ["#d9ff03", "#33ffc2"],
}: {
  trailLength?: number;
  colors?: string[];
}) {
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };


      setTrail((prevTrail) => {
        const newTrail = [newPoint, ...prevTrail.slice(0, trailLength - 1)];
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [trailLength]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute rounded-full"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            width: 4,
            height: 4,
            backgroundColor: colors[index % colors.length],
          }}
          initial={{
            opacity: 1,
            scale: 1
          }}
          animate={{
            opacity: 1 - index / trailLength,
            scale: 1 - index / trailLength * 0.5
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

// Floating bubbles with physics
export function FloatingBubbles({
  count = 8,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-white/10 bg-white/5"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 100,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 0.6, 0],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Energy waves effect
export function EnergyWaves({
  centerX = 50,
  centerY = 50,
  waveCount = 3,
  className = "",
}: {
  centerX?: number;
  centerY?: number;
  waveCount?: number;
  className?: string;
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {Array.from({ length: waveCount }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border-2 border-lime-400/30"
          style={{
            left: `${centerX}%`,
            top: `${centerY}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            width: ["0px", "200px", "400px"],
            height: ["0px", "200px", "400px"],
            opacity: [0.8, 0.4, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
