import Image from 'next/image';

export default function PortfolioHero({ name, portada }: { name: string; portada: string }) {
  return (
    <section className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden bg-zinc-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={portada}
          alt="Background"
          fill
          className="object-cover opacity-60 grayscale"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top torn paper effect */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <Image
          src="/sections/how/recorte-2.png"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-[var(--color-lime)] text-center leading-tight tracking-tight uppercase">
          {name}
        </h1>
      </div>

      {/* Bottom torn paper effect */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <Image
          src="/clientes/recorte-abajo.png"
          alt=""
          width={1920}
          height={200}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
