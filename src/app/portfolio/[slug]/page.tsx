import Link from "next/link";
import Image from "next/image";

export const revalidate = 60;

type Props = { params: { slug: string } };

export default function Page({ params }: Props) {
  const { slug } = params;

  return (
    <main className="min-h-screen flex items-center justify-center bg-[url('/sections/capabilities/fondo-capabilities.png')] text-white">
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
            href="/"
            className="inline-block bg-white text-[var(--color-blue)] px-5 py-2 rounded-md font-semibold"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
