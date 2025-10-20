"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
  const openRef = useRef(open);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // keep ref in sync via click handlers (no effect dependency array changes)
  const openMenu = () => {
    openRef.current = true;
    setOpen(true);
  };
  const closeMenu = () => {
    openRef.current = false;
    setOpen(false);
  };

  useEffect(() => {
    // attach listeners once — handler checks openRef.current
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
  }, []); // stable, length won't change between renders

  return (
    <div ref={containerRef} className="fixed flex flex-col items-end top-12 right-14 z-[99999] pointer-events-auto">
      {/* when closed show only the inline MENU button */}
      {!open && (
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={openMenu}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openMenu();
            }
          }}
          className="uppercase font-bold tracking-wide text-[var(--color-blue)] text-sm md:text-base lg:text-lg focus:outline-none rounded bg-transparent"
          aria-label="Abrir menú"
        >
          ( MENÚ )
        </button>
      )}

      {/* Panel: when open the MENU text is rendered inside the box and turns lime */}
      <div
        role="menu"
        aria-hidden={!open}
        className={`origin-top-right -mt-6 -mr-5 transform transition-all duration-200 ease-out pointer-events-auto ${
          open ? "opacity-100 scale-100 translate-y-2" : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="w-56 bg-[rgba(3,3,3,0.92)] border border-[var(--color-lime)] rounded-md shadow-lg py-3 px-3 text-left">
          {/* header: MENU inside the box and highlighted when open */}
          <div className="flex justify-end mb-2">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={open}
              onClick={closeMenu}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  closeMenu();
                }
              }}
              className="uppercase px-3 font-bold tracking-wide text-[var(--color-lime)] text-sm md:text-base lg:text-lg focus:outline-none rounded bg-transparent"
              aria-label="Cerrar menú"
            >
              ( MENÚ )
            </button>
          </div>

          <ul className="flex flex-col text-right" role="none">
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  role="menuitem"
                  onClick={closeMenu}
                  className="block px-3 py-1 text-white/90 font-black text-lg hover:text-[var(--color-lime)] hover:bg-[rgba(255,255,255,0.02)] rounded"
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
