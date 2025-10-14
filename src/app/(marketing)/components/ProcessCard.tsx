"use client";
import { useState } from "react";
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
  const [active, setActive] = useState(false);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive((s) => !s);
    }
  };

  const paragraph =
    description ??
    `${topText} ${bottomText}. Aquí va una breve explicación sobre este paso del proceso.`; // default

  return (
    <article
      className="relative rounded-2xl overflow-hidden border-2 border-[var(--color-lime)] shadow-lg aspect-16/18 flex transition-all duration-200"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((s) => !s)}
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
      <div className="relative w-full z-10 p-6 flex flex-col justify-center items-center text-center">
        {!active ? (
          <>
            <span className="text-[var(--color-white)] uppercase text-2xl md:text-2xl tracking-tight font-(family-name:--font-montserrat) italic font-black">
              {topText}
            </span>
            <span className="text-[var(--color-white)] uppercase text-3xl md:text-4xl -mt-1 font-(family-name:--font-montserrat) italic font-black">
              {bottomText}
            </span>
          </>
        ) : (
          <p className="text-[var(--color-white)] text-sm md:text-base leading-relaxed max-w-[18rem] font-medium">
            {paragraph}
          </p>
        )}
      </div>
    </article>
  );
}
