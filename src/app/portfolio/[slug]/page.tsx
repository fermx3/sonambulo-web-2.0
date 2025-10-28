import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

import PortfolioHero from "../[slug]/components/PortfolioHero";
import Insights from "./components/Insights";
import PortfolioCarousel from "./components/PortfolioCarousel";
import clientsData from "@/lib/data/clients.json";
import { logoBlurDataURL } from "@/lib/utils/image-placeholders";

export const revalidate = 60;

type Props = { params: { slug: string } };

// Generate metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const client = clientsData[slug as keyof typeof clientsData];

  if (!client) {
    return {
      title: "Cliente no encontrado | Sonámbulo Estudio Creativo",
      description: "La información del cliente solicitado no está disponible.",
      robots: "noindex, nofollow",
    };
  }

  return {
    title: `${client.name} | Clientes | Sonámbulo Estudio Creativo`,
    description: `Descubre el proyecto de ${client.name}. ${client.insights?.[0]?.description?.slice(0, 150) || 'Proyecto creativo desarrollado por Sonámbulo Estudio Creativo.'}...`,
    openGraph: {
      title: `${client.name} | Sonámbulo Estudio Creativo`,
      description: `Portfolio: ${client.name}`,
      images: [
        {
          url: client.portada,
          width: 1200,
          height: 630,
          alt: `${client.name} - Sonámbulo Estudio Creativo`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${client.name} | Sonámbulo Estudio Creativo`,
      description: `Portfolio: ${client.name}`,
      images: [client.portada],
    },
  };
}

// Generate static params for ISR
export async function generateStaticParams() {
  return Object.keys(clientsData).map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const client = clientsData[slug as keyof typeof clientsData] || null;

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
            placeholder="blur"
            blurDataURL={logoBlurDataURL}
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
    <main
      className="min-h-screen flex items-center flex-col justify-center text-white relative"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, var(--color-ink) 0%, var(--color-ink) 30%, transparent 40%),
          linear-gradient(to top, var(--color-ink) 0%, var(--color-ink) 6%, transparent 20%),
          url('/sections/portfolio/fondo.png')
        `,
        backgroundSize: 'cover, cover, cover',
        backgroundPosition: 'center, center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat'
      }}
    >
      <PortfolioHero name={client.name} portada={client.portada} />
      <Insights insights={client.insights} />
      <PortfolioCarousel images={client.carousel_images} />
    </main>
  );
}
