"use client";

import Image from "next/image";

export default function How() {
  return (
    <div
      className="relative bg-transparent min-h-[180vh] -mt-20 flex items-center justify-center flex-col overflow-hidden"
      style={{
      backgroundImage:
        "linear-gradient(to bottom, var(--color-lime) 0, var(--color-lime) var(--how-lime-band, 30dvh), var(--color-ink) var(--how-lime-band, 18dvh), var(--color-ink) 100%)",
      }}
    >
      {/* Top decorative strip (torn paper) */}
        <div
          className="absolute w-dvw left-0 right-0 top-0 h-[51vh] bg-[url('/sections/how/recorte-papel.png')] bg-no-repeat bg-center bg-contain overflow-hidden"
          aria-hidden
        />
        {/* Frase "Ok, pero todos dicen eso" arriba a la izquierda */}
        <div className="relative self-start z-50 mt-50 pb-50 -mb-45 w-64 md:w-80 lg:w-96 aspect-4/2 pointer-events-none">
          <Image
            src="/sections/how/frase.png"
            alt="Ok, pero todos dicen eso... Tu probablemente."
            fill
            className="object-contain absolute"
            priority={true}
          />
        </div>
      <div className="relative lg:container mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column: text */}
          <div className="lg:col-span-7">
            <div className="mt-12">
              <p className="text-[2rem] text-[var(--color-white)] font-medium ">
                Tenemos un gran diferenciador...
              </p>

              <h2 className="font-extrabold text-5xl md:text-6xl lg:text-7xl">
                <span className="block mt-2 text-[var(--color-lime)] font-(family-name:--font-montserrat) font-black italic lg:translate-x-12">BLINDAMOS</span>
                <span className="block text-2xl md:text-3xl font-medium mt-2 text-[var(--color-white)] lg:translate-x-24">
                  a las marcas desde el{" "}
                  <span className="text-[var(--color-teal)]">trade</span> hasta
                  el{" "}
                  <span className="text-[var(--color-teal)]">consumidor</span>.
                </span>
              </h2>
            </div>
          </div>

          {/* Right column: image + decorative shapes */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[520px] lg:max-w-[600px]">
              {/* accent blob bottom-right */}
              <div
                className="absolute -right-6 bottom-[-20px] w-36 h-36 bg-[var(--color-lime)] rounded-full filter blur-sm opacity-90 pointer-events-none blob-pulse"
                aria-hidden
              />
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/sections/how/caja-fuerte.png"
                  alt="caja fuerte"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 520px"
                  priority={false}
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Second full-screen area to host the "manos" visual that overlaps the first section */}
      <div className="relative w-full h-[80dvh] flex">
        {/* place the hands image so it overlaps upward into the previous section */}
        <div className="absolute inset-0 -top-[35vh] w-full h-[140vh] pointer-events-none">
          <Image
            src="/sections/how/manos.png"
            alt="manos"
            fill
            className="object-contain"
            sizes="100vw"
            priority={false}
          />
        </div>

        {/* Centro: banner "como-lo-hacemos" sobre las manos */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[45vw] max-w-[600px] top-90 -mt-[8vh] pointer-events-none z-10 flex justify-center">
          <div className="relative w-full" style={{ aspectRatio: "6 / 2" }}>
            <Image
              src="/sections/how/como-lo-hacemos.png"
              alt="¿Qué como lo hacemos?"
              fill
              className="object-contain opacity-80"
              sizes="(max-width: 1024px) 92vw, 1000px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
