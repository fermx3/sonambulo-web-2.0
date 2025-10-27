"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS: { label: string; href: string }[] = [
  { label: "ÍNDICE", href: "/" },
  { label: "¿QUIÉNES SOMOS?", href: "/#about" },
  { label: "¿CÓMO LO HACEMOS?", href: "/#how" },
  { label: "CAPABILITIES", href: "/#capabilities" },
  { label: "NUESTROS CLIENTES", href: "/#clients" },
  { label: "CONTACTO", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const openRef = useRef(open);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Detectar si estamos en mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint es 768px
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // keep ref in sync via click handlers
  const openMenu = () => {
    openRef.current = true;
    setOpen(true);
  };
  const closeMenu = () => {
    openRef.current = false;
    setOpen(false);
  };

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current) return;
      if (!openRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        openRef.current = false;
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && openRef.current) {
        openRef.current = false;
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav ref={containerRef} className="fixed flex flex-col items-end top-5 right-5 md:top-12 md:right-14 z-[99999] pointer-events-auto max-w-screen">
      <div className="relative">
        {/* Botón MENÚ siempre visible con efectos avanzados */}
        <motion.button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={open ? closeMenu : openMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (open) {
                closeMenu();
              } else {
                openMenu();
              }
            }
          }}
          className="relative z-10 uppercase font-black tracking-wide text-base md:text-lg lg:text-xl focus:outline-none rounded bg-transparent px-3 py-2 overflow-hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          whileHover={{
            scale: 1.05,
            textShadow: open
              ? "0 0 12px rgba(217, 255, 3, 0.8)"
              : "0 0 12px rgba(6, 6, 255, 0.8)",
            transition: { duration: 0.2 }
          }}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1 }
          }}
          animate={{
            color: open ? "var(--color-lime)" : "var(--color-blue)",
            rotate: open ? 2 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Background glow effect */}
          <motion.span
            className="absolute inset-0 rounded opacity-20"
            animate={{
              background: open
                ? "radial-gradient(circle, rgba(217, 255, 3, 0.3) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(6, 6, 255, 0.3) 0%, transparent 70%)",
              scale: open ? 1.2 : 0.8
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Text with morphing effect */}
          <motion.span
            className="relative z-10"
            animate={{
              letterSpacing: open ? "0.15em" : "0.1em"
            }}
            transition={{ duration: 0.3 }}
          >
            ( MENÚ )
          </motion.span>

          {/* Animated border */}
          <motion.span
            className="absolute inset-0 border-2 rounded"
            animate={{
              borderColor: open ? "var(--color-lime)" : "transparent",
              scale: open ? 1 : 0.9
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Panel que se materializa alrededor del botón */}
        <AnimatePresence>
          {open && (
            <motion.div
              role="menu"
              aria-hidden={!open}
              className="absolute top-0 right-0 pointer-events-auto"
              initial={{
                scale: 0.9,
                opacity: 0,
                y: -10,
                borderRadius: "6px"
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                borderRadius: "6px"
              }}
              exit={{
                scale: 0.95,
                opacity: 0,
                y: -5,
                borderRadius: "6px"
              }}
              transition={{
                duration: 0.2,
                ease: [0.16, 1, 0.3, 1], // easeOutExpo para un efecto más natural
              }}
              style={{ willChange: "transform, opacity" }}
            >
              {/* Fondo que se expande */}
              <motion.div
                className="relative bg-[rgba(3,3,3,0.95)] border border-[var(--color-lime)] rounded-md shadow-2xl backdrop-blur-sm overflow-hidden"
                initial={{
                  width: isMobile ? "120px" : "140px",
                  height: "50px"
                }}
                animate={{
                  width: isMobile ? "90vw" : "280px", // Mobile: 320px, Desktop: 280px
                  height: isMobile ? "90vh" : "280px" // Mobile: 320px, Desktop: 280px
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{
                  padding: isMobile ? "16px" : "12px" // Más padding en móviles
                }}
              >
                {/* Lista de elementos del menú */}
                <motion.ul
                  className={`flex flex-col text-right space-y-0 h-full pt-8 justify-evenly ${isMobile ? 'py-4' : 'py-2'}`}
                  role="none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                  {MENU_ITEMS.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + (index * 0.1),
                        ease: "easeOut"
                      }}
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.05,
                          x: 8,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={item.href}
                          role="menuitem"
                          onClick={closeMenu}
                          className={`block ps-3 text-white/90 font-black relative overflow-hidden rounded group ${
                            isMobile
                              ? 'py-3 text-lg'
                              : 'py-1 text-xl'
                          }`}
                        >
                          {/* Background hover effect */}
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-[var(--color-lime)]/10 to-[var(--color-teal)]/10 rounded"
                            initial={{ scaleX: 0, originX: 0 }}
                            whileHover={{
                              scaleX: 1,
                              transition: { duration: 0.3, ease: "easeOut" }
                            }}
                          />

                          {/* Text with glow effect */}
                          <motion.span
                            className="relative z-10 inline-block pointer-events-none"
                            whileHover={{
                              color: "var(--color-lime)",
                              textShadow: "0 0 8px rgba(217, 255, 3, 0.6)",
                              transition: { duration: 0.2 }
                            }}
                          >
                            {item.label}
                          </motion.span>

                          {/* Decorative asterisk */}
                          <motion.span
                            className="inline-block ml-2 text-[var(--color-lime)]"
                            initial={{ opacity: 0, scale: 0 }}
                            whileHover={{
                              opacity: 1,
                              scale: 1,
                              rotate: 360,
                              transition: { duration: 0.5, ease: "easeOut" }
                            }}
                          >
                            ✱
                          </motion.span>
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
