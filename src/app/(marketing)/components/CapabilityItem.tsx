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
  const [isHoverable, setIsHoverable] = useState(false);

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
        <div className="flex flex-col items-start">
          <h3 className="text-white font-extrabold uppercase text-lg md:text-2xl lg:text-3xl tracking-wide flex-1">
            {titulo}
          </h3>

          {/* expanded content */}
          <div
            className={`transition-all duration-300 text-white text-sm md:text-base leading-relaxed max-w-xl ${
              active ? "opacity-100 max-h-[800px] mt-4 md:mt-0" : "opacity-0 max-h-0 pointer-events-none"
            }`}
            aria-hidden={!active}
          >
            {description && <p className="mb-3">{description}</p>}
            {bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {bullets.map((b, i) => (
                  <li key={i} className="text-white/90">
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
