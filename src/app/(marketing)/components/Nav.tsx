"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MENU_ITEMS: { label: string; href: string }[] = [
  { label: "ÍNDICE", href: "#" },
  { label: "¿QUIÉNES SOMOS?", href: "/#about" },
  { label: "¿CÓMO LO HACEMOS?", href: "/#how" },
  { label: "CAPABILITIES", href: "/#capabilities" },
  { label: "NUESTROS CLIENTES", href: "/#clients" },
  { label: "CONTACTO", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed flex flex-col items-end top-4 right-6 z-50 pointer-events-auto">
      <button
        ref={buttonRef}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((s) => !s);
          }
        }}
        className="uppercase font-extrabold tracking-wide text-[var(--color-blue)] text-sm md:text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]/40 rounded bg-transparent"
        aria-label="Abrir menú"
      >
        ( MENÚ )
      </button>

      {/* Panel */}
      <div
        role="menu"
        aria-hidden={!open}
        className={`origin-top-right transform transition-all duration-200 ease-out pointer-events-auto ${
          open ? "opacity-100 scale-100 translate-y-2" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="mt-3 w-56 bg-[rgba(3,3,3,0.92)] border border-[var(--color-lime)] rounded-md shadow-lg py-3 px-3 text-left">
          <ul className="space-y-2">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-1 text-sm text-white/90 hover:text-white hover:bg-[rgba(255,255,255,0.02)] rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
