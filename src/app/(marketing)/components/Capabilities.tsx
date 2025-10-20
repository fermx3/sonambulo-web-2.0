import CapabilityItem from "./CapabilityItem";

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
    },
    { titulo: "SNMBL IDEAS LAB*", colorClass: "border-[var(--color-teal)]" },
  ];

  return (
    <div className="relative md:min-h-[130dvh] -mt-15 md:-mt-54 md:pt-50 flex flex-col justify-start items-start py-20 px-6 lg:px-24 bg-[url('/sections/capabilities/fondo-capabilities.png')] bg-no-repeat bg-cover">
      <h2 className="text-[var(--color-white)] text-4xl md:text-5xl mb-24 font-(family-name:--font-alfarn)">
        CAPABILITIES
      </h2>

      <div className="w-full space-y-8">
        {items.map((it) => (
          <CapabilityItem
            key={it.titulo}
            titulo={it.titulo}
            colorClass={it.colorClass}
            description={it.description}
            bullets={it.bullets}
          />
        ))}
      </div>
      <div
        className="absolute w-vw left-0 right-0 bottom-0 h-[51vh] pointer-events-none bg-[url('/sections/clients/recorte-clientes.png')] bg-no-repeat bg-bottom bg-contain overflow-hidden"
        aria-hidden
      />
    </div>
  );
}
