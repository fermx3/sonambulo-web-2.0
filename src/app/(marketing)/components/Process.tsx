import Image from "next/image";
import ProcessCard from "./ProcessCard";
import { StaggeredFadeIn } from "@/lib/anim/StaggeredFadeIn";

export default function Process() {
  const cards = [
    {
      src: "/sections/process/proceso-1.png",
      alt: "Construcción de marca",
      topText: "Construcción",
      bottomText: "de marca",
      description:
        "Definimos la identidad y la voz de las marcas a través de una rigurosa investigación, andlisis de mercado y entendimiento del contexto de cada cliente. Desarrollamos elementos visuales y de comunicación basados en nuestro diagnóstico para diferenciarnos de la competencia y conectar con la audiencia objetivo."
    },
    {
      src: "/sections/process/proceso-2.png",
      alt: "Road to market",
      topText: "Blindaje del",
      bottomText: "Road to Market",
      description:
        "Fortalecemos la presencia y desarrollo de nuestros clientes desde los canales de distribución, hasta transformadores a través de planes de crecimiento, desarrollo y fidelización."
    },
    {
      src: "/sections/process/proceso-3.png",
      alt: "Consumidor final",
      topText: "Consumidor",
      bottomText: "Final",
      description:
        "Hacemos que las marcas importen a través de estrategias poderosas basadas en la relevancia cultural."
    },
  ];

  return (
    <div className="relative min-h-[110vh] w-full bg-[var(--color-blue)] z-50 -mt-10">
      {/* Imagen de recorte que se superpone a la sección anterior */}
      <div className="absolute inset-x-0 -top-12 h-[40vh] z-10">
        <Image
          src="/sections/how/recorte-2.png"
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority={false}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 min-h-[110dvh] flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 lg:px-12 pt-50 md:pt-20 pb-34 lg:pb-20">
          {/* Top title */}
          <h2
            className="text-white text-4xl md:text-5xl font-(family-name:--font-alfarn)"
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
          {/* Cards row with staggered animation */}
          <StaggeredFadeIn
            staggerDelay={0.2}
            direction="up"
            distance={50}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-stretch mx-12"
          >
            {cards.map((c, idx) => (
              <ProcessCard
                key={idx}
                src={c.src}
                alt={c.alt}
                topText={c.topText}
                bottomText={c.bottomText}
                description={c.description}
              />
            ))}
          </StaggeredFadeIn>
        </div>
      </div>
    </div>
  );
}
