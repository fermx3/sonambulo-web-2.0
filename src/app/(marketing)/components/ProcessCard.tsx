"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  titleNumber: 1 | 2 | 3;
  topClass?: string;
  bottomClass?: string;
  description?: string;
};

export default function ProcessCard({
  src,
  alt,
  titleNumber,
  description,
}: Props) {
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
    `Aquí va una breve explicación sobre este paso del proceso.`;

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
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-all duration-300 pointer-events-none ${active ? "brightness-20" : "brightness-100"}`}
          sizes="(max-width: 1024px) 100vw, 33vw"
          priority={false}
        />
      </div>
      <div className="relative w-full z-30 p-2 sm:p-3 md:p-4 flex flex-col justify-center items-center text-center h-full overflow-hidden pointer-events-none">
        {!active ? (
          <div className="flex flex-col justify-center items-center h-full w-full max-w-full gap-1 pointer-events-none">
            <Image
              src={`/sections/process/titulo-${titleNumber}.svg`}
              alt={alt}
              width={200}
              height={120}
              className="w-auto h-auto max-w-full object-contain pointer-events-none"
              priority={false}
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full w-full pointer-events-none">
            <p className="text-[var(--color-white)] text-xl sm:text-xs lg:text-xl font-medium leading-relaxed px-2 max-w-full pointer-events-none">
              {paragraph}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
