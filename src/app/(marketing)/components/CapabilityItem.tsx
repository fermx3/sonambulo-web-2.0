"use client";
import { useEffect, useState } from "react";

type Props = {
  titulo: string;
  colorClass?: string; // p.ej. "border-[var(--color-lime)]"
  description?: string;
  bullets?: string[];
};

export default function CapabilityItem({
  titulo,
  colorClass = "border-[var(--color-lime)]",
  description = "Aqui va una breve descripción de esta capability cuando se expanda.",
  bullets = ["Bullet 1", "Bullet 2", "Bullet 3"],
}: Props) {
  const [active, setActive] = useState(false);
  const [isHoverable, setIsHoverable] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    } catch {
      return false;
    }
  });

  // Detect devices that support hover (desktop) vs coarse pointer (mobile)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      setIsHoverable(Boolean(mq.matches));
      const handler = (e: MediaQueryListEvent) => setIsHoverable(Boolean(e.matches));
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    } catch {
      setIsHoverable(false);
    }
  }, []);

  const handleMouseEnter = () => {
    if (isHoverable) setActive(true);
  };
  const handleMouseLeave = () => {
    if (isHoverable) setActive(false);
  };
  const handleClick = () => {
    // on mobile toggle on click; on desktop clicking should not collapse if hoverable
    if (!isHoverable) setActive((s) => !s);
  };
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive((s) => !s);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <article
        className={`w-full max-w-[980px] border-4 ${colorClass} rounded-[40px] overflow-hidden transition-all duration-300 cursor-pointer bg-transparent
          ${active ? "bg-black/40 px-10 py-8 md:py-10" : "px-8 py-6 md:py-8"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}
        aria-expanded={active}
        aria-label={titulo}
      >
        <div className="flex flex-col items-start w-full">
          <div className="w-full flex items-center justify-between">
            <h3 className="text-[var(--color-white)] font-(family-name:--font-montserrat) italic font-black uppercase text-lg md:text-2xl lg:text-3xl tracking-wide flex-1">
              {titulo}
            </h3>

            {/* triangle / chevron indicator */}
            <span
              className="ml-4 flex items-center justify-center pointer-events-none"
              aria-hidden="true"
            >
              <svg
                className={`h-5 w-5 text-[var(--color-white)] transform transition-transform duration-200 ease-out ${
                  active ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.23 7.21a.75.75 0 011.06-.02L10 10.94l3.71-3.75a.75.75 0 111.08 1.04l-4.25 4.3a.75.75 0 01-1.08 0L5.25 8.23a.75.75 0 01-.02-1.06z" />
              </svg>
            </span>
          </div>

          {/* expanded content */}
          <div
            className={`transition-opacity duration-200 ease-out transform-gpu origin-top text-[var(--color-white)] font-medium max-w-xl text-xl overflow-hidden ${
              active
                ? "opacity-100 scale-y-100 max-h-[800px] mt-4 md:mt-0"
                : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
            }`}
            style={{ willChange: "opacity, transform" }}
            aria-hidden={!active}
          >
            {description && <p className="mb-3">{description}</p>}
            {bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {bullets.map((b, i) => (
                  <li key={i} className="text-[var(--color-white)]">
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
