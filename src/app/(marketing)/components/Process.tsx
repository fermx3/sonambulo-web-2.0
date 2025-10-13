import Image from "next/image";
import ProcessCard from "./ProcessCard";

export default function Process() {
  const cards = [
    {
      src: "/sections/process/proceso-1.png",
      alt: "Construcción de marca",
      topText: "Construcción",
      bottomText: "de marca",
    },
    {
      src: "/sections/process/proceso-2.png",
      alt: "Road to market",
      topText: "Blindaje del",
      bottomText: "Road to Market",
    },
    {
      src: "/sections/process/proceso-3.png",
      alt: "Consumidor final",
      topText: "Consumidor",
      bottomText: "Final",
    },
  ];

  return (
    <div className="relative min-h-[110dvh] w-full overflow-hidden bg-[var(--color-blue)]">
      <div
        className="absolute w-dvw left-0 right-0 -top-[38dvh] h-full bg-[url('/sections/how/recorte-2.png')] bg-no-repeat bg-center bg-contain overflow-hidden"
        aria-hidden
      />
      <div className="relative min-h-[110dvh] flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 lg:px-12 pt-20 pb-34 lg:pb-20">
          {/* Top title */}
          <h2
            className="text-white m font-extrabold text-4xl md:text-5xl"
            style={{
              marginBottom: "60px",
            }}
          >
            {/* stylized PR*CESO */}
            <span className="mr-1">PR</span>
            <span>
              <Image
                src="/asterisco-blanco.png"
                alt="Star"
                width={34}
                height={34}
                className="inline-block align-baseline"
                priority={false}
              />
            </span>
            <span className="ml-1">CESO</span>
          </h2>
          {/* Cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch mx-12">
            {cards.map((c, idx) => (
              <ProcessCard
                key={idx}
                src={c.src}
                alt={c.alt}
                topText={c.topText}
                bottomText={c.bottomText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
