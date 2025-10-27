import CapabilityItem from "./CapabilityItem";
import { StaggeredFadeIn } from "@/lib/anim/StaggeredFadeIn";

export default function Capabilities() {
  const items = [
    {
      titulo: "SNMBL CHANNEL DEVELOPMENT*",
      colorClass: "border-[var(--color-lime)]",
      description:
        "Desarrollamos metodologías propias para asegurar el crecimiento de las marcas en todos los canales: tradicional, digital y cross media.",
      bullets: [
        "Business Strategy",
        "Trade Marketing Strategy",
        "Cross Channel Solutions",
        "Brand Experiences",
        "Loyalty Plans",
      ],
    },
    {
      titulo: "SNMBL DATA & INTELLIGENCE CENTER*",
      colorClass: "border-[var(--color-blue)]",
      description:
        "Creamos soluciones tailor made usando la tecnología para entender cuáles son las necesidades de nuestros clientes y, con base en ello, crear soluciones reales para ganar.",
      bullets: [
        "Data Dashboards",
        "Special data reports",
        "MUTE method",
        "Web & Mobile Development",
        "Sites & apps Development",
        "Full Funnel Digital Strategies",
      ],
    },
    {
      titulo: "SNMBL IDEAS LAB*",
      colorClass: "border-[var(--color-teal)]",
      description:
        "Transformamos marcas usando el poder de la creatividad, la fuerza de los insights para construir relevancia cultural.",
      bullets: [
        "Creative Core Idea",
        "Creative Strategy",
        "Content & Storytelling",
        "Comms Planning",
        "Brand Building",
        "Brand Positioning Strategy",
        "Brand Architecture",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen md:min-h-[130dvh] mt-0 md:-mt-54 md:py-50 flex flex-col justify-start items-start py-20 px-6 lg:px-24 bg-[url('/sections/capabilities/fondo-capabilities.png')] bg-no-repeat bg-cover">
      <h2 className="text-[var(--color-white)] text-4xl md:text-5xl mb-24 font-(family-name:--font-alfarn)">
        CAPABILITIES
      </h2>

      <StaggeredFadeIn
        staggerDelay={0.15}
        direction="left"
        distance={60}
        className="w-full space-y-8"
      >
        {items.map((it) => (
          <CapabilityItem
            key={it.titulo}
            titulo={it.titulo}
            colorClass={it.colorClass}
            description={it.description}
            bullets={it.bullets}
          />
        ))}
      </StaggeredFadeIn>
      <div
        className="absolute w-vw left-0 right-0 bottom-0 h-[51vh] pointer-events-none bg-[url('/sections/clients/recorte-clientes.png')] bg-no-repeat bg-bottom bg-contain overflow-hidden"
        aria-hidden
      />
    </div>
  );
}
