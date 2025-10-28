"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  topText: string;
  bottomText: string;
  topClass?: string;
  bottomClass?: string;
  description?: string;
};

export default function ProcessCard({
  src,
  alt,
  topText,
  bottomText,
  description,
}: Props) {
  // Variables de tamaños para fácil modificación
  const TOP_TEXT_SIZES = {
    minSize: 1,      // rem - tamaño mínimo
    vwMultiplier: 20,  // vw calculation multiplier
    maxMultiplier: 4,  // max size calculation multiplier
  };

  const [active, setActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device following project patterns
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window);
  }, []);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive((s) => !s);
    }
  };

  const handleInteraction = () => {
    if (isTouchDevice) {
      setActive((s) => !s);
    }
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setActive(false);
    }
  };

  const paragraph =
    description ??
    `${topText} ${bottomText}. Aquí va una breve explicación sobre este paso del proceso.`;

  return (
    <article
      className="relative rounded-2xl overflow-hidden border-2 border-[var(--color-lime)] shadow-lg aspect-16/18 flex transition-all duration-200 touch-manipulation"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
      onKeyDown={handleKey}
      role="button"
      tabIndex={0}
      aria-pressed={active}
    >
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-300 ${active ? "brightness-20" : "brightness-100"}`}
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="relative w-full z-10 p-2 sm:p-3 md:p-4 flex flex-col justify-center items-center text-center h-full overflow-hidden">
        {!active ? (
          <div className="flex flex-col justify-center items-center h-full w-full max-w-full gap-1">
            <span
              className="text-[var(--color-white)] uppercase tracking-tight font-(family-name:--font-montserrat) italic font-black leading-none w-full block text-center"
              style={{
                fontSize: `clamp(${Math.max(TOP_TEXT_SIZES.minSize, TOP_TEXT_SIZES.minSize * 1.5 / Math.max(topText.length, 8))}rem, ${Math.max(4, TOP_TEXT_SIZES.vwMultiplier / Math.max(topText.length, 8))}vw, ${Math.max(2, TOP_TEXT_SIZES.maxMultiplier / Math.max(topText.length, 8))}rem)`,
                letterSpacing: topText.length > 12 ? '0.02em' : topText.length < 6 ? '0.1em' : '0.05em'
              }}
            >
              {topText}
            </span>
            <span
              className="text-[var(--color-white)] uppercase font-(family-name:--font-montserrat) italic font-black leading-none w-full block text-center"
              style={{
                fontSize: (() => {
                  // Casos específicos para mejor adaptación
                  switch (bottomText.toLowerCase()) {
                    case 'de marca':
                      return 'clamp(1.2rem, 3vw, 2.8rem)';
                    case 'road to\nmarket':
                      return 'clamp(1rem, 3vw, 3.2rem)';
                    case 'final':
                      return 'clamp(1.4rem, 5vw, 3.6rem)';
                    default:
                      // Fórmula general pero con valores más altos para bottom text
                      return `clamp(${Math.max(1.2, 4.5 / Math.max(bottomText.length, 6))}rem, ${Math.max(4, 45 / Math.max(bottomText.length, 6))}vw, ${Math.max(2, 8 / Math.max(bottomText.length, 6))}rem)`;
                  }
                })(),
                letterSpacing: (() => {
                  switch (bottomText.toLowerCase()) {
                    case 'final':
                      return '0.25em'; // Mucho más espaciado para "FINAL"
                    case 'de marca':
                      return '0.12em';
                    case 'road to market':
                      return '0.03em'; // Más compacto por ser largo
                    default:
                      return bottomText.length > 12 ? '0.02em' : bottomText.length < 6 ? '0.2em' : '0.08em';
                  }
                })()
              }}
            >
              {bottomText}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-[var(--color-white)] text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2 max-w-full">
              {paragraph}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
