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
    <div className="relative min-h-[120dvh] w-full overflow-hidden bg-[var(--color-blue)]">
      <div className="relative min-h-[80dvh] flex flex-col justify-center items-center">
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
            {cards
              .map((c, idx) => (
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

        {/* bottom diagonal ribbons (repeated "CAPABILITIES") */}
        <div className="absolute lg:-bottom-70 bottom-0 left-0 right-0 pointer-events-none z-50">
          <Image
            src="/sections/process/capabilities-ribbon.png"
            alt="Capabilities"
            width={1920}
            height={200}
            className="w-[200vw] mx-auto"
            priority={false}
          />
        </div>
      </div>
    </div>
  );
}
