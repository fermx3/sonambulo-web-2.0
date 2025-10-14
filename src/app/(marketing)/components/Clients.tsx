import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Clients() {
  const images: {
    link?: string; src: string; alt?: string
}[] = [
    { src: "/sections/clients/blends.png", alt: "Blends", link: "/portfolio/blends" },
    { src: "/sections/clients/cerveceria.png", alt: "Cerveceria el secreto", link: "/portfolio/cerveceria-el-secreto" },
    { src: "/sections/clients/colectivo.png", alt: "Colectivo Circular", link: "/portfolio/colectivo-circular" },
    { src: "/sections/clients/leales.png", alt: "Los leales", link: "/portfolio/los-leales" },
  ];

  // duplicamos para que el marquee se vea continuo
  const marqueeList = [...images, ...images, ...images, ...images, ...images];

  return (
    <div className="min-h-[90vh] w-full relative overflow-hidden bg-[var(--color-lime)]">

      <div className="relative inset-x-0 top-0 h-36 flex items-center justify-center md:pt-40">
        <h2 className="uppercase font-extrabold text-center text-[var(--color-blue)] text-4xl md:text-6xl lg:text-7xl tracking-wide leading-none">
          <span className="block whitespace-nowrap">NUESTR<span>
            <Image
              src="/asterisco-azul.png"
              alt="asterisco sonambulo"
              width={48}
              height={48}
              style={{ width: "0.8em", height: "0.8em" }}
              className="inline-block align-middle -mt-2 md:-mt-3 lg:-mt-4 mx-1"
              draggable={false}
              priority={true}
            />
          </span>S</span>
          <span className="block whitespace-nowrap">CLIENTES</span>
        </h2>
      </div>

      {/* contenido central: dejar espacio para el título */}
      <div className="relative md:pt-36 pb-24 flex flex-col items-center">
        <div className="w-full">
          {/* banda horizontal con carrusel tipo marquee */}
            <div
              className="flex marquee"
              aria-hidden="true"
            >
              {marqueeList.map((item, i) => (
                <div
                  key={i}
                  className="marquee-item flex-shrink-0 w-[9rem] aspect-103/267 bg-[var(--color-white)] overflow-hidden relative"
                >
                  <Link
                    href={item.link ?? "#"}
                    className="absolute inset-0 z-10"
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                  >
                    <span className="sr-only">{item.alt ?? `cliente-${i}`}</span>
                  </Link>
                  <Image
                    src={item.src}
                    alt={item.alt ?? `cliente-${i}`}
                    className="object-cover"
                    draggable={false}
                    fill
                    sizes="(max-width: 640px) 9rem, (max-width: 768px) 12rem, 14rem"
                    priority={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      {/* estilos inline para la animación marquee y hover/zoom */}
      <style>{`
        @keyframes marquee {
          to { translate: calc(-${images.length} * 9rem); }
        }
      `}</style>
    </div>
  );
}
