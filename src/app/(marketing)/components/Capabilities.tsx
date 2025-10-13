import CapabilityItem from "./CapabilityItem";

export default function Capabilities() {
  const items = [
    { titulo: "SNMBL CHANNEL DEVELOPMENT*", colorClass: "border-[var(--color-lime)]" },
    { titulo: "SNMBL DATA & INTELLIGENCE CENTER*", colorClass: "border-[var(--color-blue)]" },
    { titulo: "SNMBL IDEAS LAB*", colorClass: "border-[var(--color-teal)]" },
  ];

  return (
    <div className="min-h-[120dvh] -mt-54 pt-50 flex flex-col justify-start items-start py-20 px-6 lg:px-24 bg-[url('/sections/capabilities/fondo-capabilities.png')] bg-no-repeat bg-cover" >
      <h2 className="text-[var(--color-white)] font-extrabold text-4xl md:text-5xl mb-24">CAPABILITIES</h2>

      <div className="w-full space-y-8">
        {items.map((it) => (
          <CapabilityItem key={it.titulo} titulo={it.titulo} colorClass={it.colorClass} />
        ))}
      </div>
      <div
        className="absolute w-vw left-0 right-0 -bottom-[50dvh] h-full pointer-events-none bg-[url('/sections/clients/recorte-clientes.png')] bg-no-repeat bg-center bg-contain overflow-hidden"
        aria-hidden
      />
    </div>
  );
}
