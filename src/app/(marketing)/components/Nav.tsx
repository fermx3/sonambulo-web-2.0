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
    <div ref={containerRef} className="fixed flex flex-col items-end top-5 right-5 md:top-12 md:right-14 z-[99999] pointer-events-auto">
      <div className="relative">
        {/* Botón MENÚ siempre visible */}
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
          className="relative z-10 uppercase font-black tracking-wide text-base md:text-lg lg:text-xl focus:outline-none rounded bg-transparent px-3 py-2"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          animate={{
            color: open ? "var(--color-lime)" : "var(--color-blue)"
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          ( MENÚ )
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
                  className={`flex flex-col text-right space-y-0 h-full pt-7 justify-evenly ${isMobile ? 'py-4' : 'py-2'}`}
                  role="none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
                >
                  {MENU_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        role="menuitem"
                        onClick={closeMenu}
                        className={`block ps-3 text-white/90 font-black hover:text-[var(--color-lime)] hover:bg-[rgba(255,255,255,0.05)] rounded transition-all duration-200 ease-out ${
                          isMobile
                            ? 'py-3 text-lg'
                            : 'py-1 text-xl'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
