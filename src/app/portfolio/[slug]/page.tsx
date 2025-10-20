import Link from "next/link";
import Image from "next/image";

import PortfolioHero from "../[slug]/components/PortfolioHero";
import Insights from "./components/Insights";
import PortfolioCarousel from "./components/PortfolioCarousel";

export const revalidate = 60;

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const client =
    slug === "companeros-en-ruta"
      ? {
          name: "Compañeros en Ruta",
          portada: "/clientes/companeros-en-ruta/portada.png",
          insights: [
            {
              title: "El Problema",
              description:
                "Iberia estaba perdiendo terreno desde su estrategia de road to market, impactando en todo su desarrollo.",
              imageSrc: "/clientes/companeros-en-ruta/1.png",
              imageAlt: "Persona con delantal",
              imagePosition: "right",
              borderColor: "teal",
            },
            {
              title: "El Insight",
              description:
                "Necesitaban dejar de ser percibidos como un jugador más y convertirse en un aliado estratégico integral que brinda soluciones e incentivos tangibles",
              imageSrc: "/clientes/companeros-en-ruta/2.png",
              imageAlt: "Tienda con productos",
              imagePosition: "left",
              borderColor: "blue",
            },
            {
              title: "La Solución",
              description:
                "Compañeros un Ruta. Una estrategia que surge del trade y se extiende hasta el consumidor final.",
              imageSrc: "/clientes/companeros-en-ruta/3.png",
              imageAlt: "Posters de la campaña",
              imagePosition: "right",
              borderColor: "lime",
            },
          ],
          carousel_images: [
            {
              url: "/clientes/companeros-en-ruta/carousel-1.png",
              alt: "Pin",
            },
            {
              url: "/clientes/companeros-en-ruta/carousel-2.png",
              alt: "Pines",
            },
          ],
        }
      : null;

  if (!client) {
    return (
      <main className="min-h-screen flex items-center flex-col justify-center bg-[var(--color-ink)] text-white">
        <div className="max-w-3xl p-8 text-center">
          <Image
            src="/logo-compact-dark-bg.svg"
            alt="Sonámbulo Estudio Creativo"
            width={150}
            height={150}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-black italic font-(family-name:--font-montserrat) uppercase text-[var(--color-white)] mb-4">
            Sin información disponible
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-4">
            Aún no hay información sobre este cliente:
          </p>

          <p className="mb-6 font-mono text-sm text-white/80">{slug}</p>

          <div className="flex justify-center gap-4">
            <Link
              href="/#clients"
              className="inline-block bg-white text-[var(--color-blue)] px-5 py-2 rounded-md font-semibold"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center flex-col justify-center bg-[var(--color-ink)] text-white">
      <PortfolioHero name={client.name} portada={client.portada} />
      <Insights insights={client.insights} />
      <PortfolioCarousel images={client.carousel_images} />
    </main>
  );
}
