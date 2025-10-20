'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const year = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // TODO: Enviar a base de datos
    setEmail(''); // Limpiar el input después del envío
  };

  return (
    <footer className="relative bg-[var(--color-ink)] text-black z-50 -mt-10 md:h-auto h-[120vh]">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -top-12">
        <Image
          src="/sections/footer/fondo-footer.png"
          alt="Footer background"
          fill
          className="object-cover object-bottom"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          priority
          quality={90}
        />
      </div>

      {/* Contenido del footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 pt-20 sm:pt-24 md:pt-28 lg:pt-42 md:justify-start justify-end flex flex-col h-full">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-8 mb-8">
          {/* Logo */}
          <div className="md:col-span-1 md:mb-0 mb-6">
            <Image
              src="/logo-light-bg.svg"
              alt="Sonámbulo Estudio Creativo"
              width={160}
              height={60}
              className="h-auto"
            />
          </div>

          {/* COLUMNA 1 */}
          <div className="md:col-span-1 font-black">
            <ul className="">
              <li>
                <Link href="/" className="hover:text-[var(--color-blue)]">
                  INICIO
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[var(--color-blue)]">
                  ¿QUIÉNES SOMOS?
                </Link>
              </li>
              <li>
                <Link href="/#how" className="hover:text-[var(--color-blue)]">
                  ¿CÓMO LO HACEMOS?
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 2 */}
          <div className="md:col-span-1 font-black">
            <ul className="">
              <li>
                <Link
                  href="/#process"
                  className="hover:text-[var(--color-blue)]"
                >
                  PROCESO
                </Link>
              </li>
              <li>
                <Link
                  href="/#capabilities"
                  className="hover:text-[var(--color-blue)]"
                >
                  CAPABILITIES
                </Link>
              </li>
              <li>
                <Link
                  href="/#clients"
                  className="hover:text-[var(--color-blue)]"
                >
                  NUESTROS CLIENTES
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className="md:col-span-1 font-black">
            <ul className="">
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-[var(--color-blue)]"
                >
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>

          {/* SÍGUENOS y Newsletter */}
          <div className="md:col-span-1 font-black md:mt-0 mt-6">
            <div className="mb-3 flex gap-3">
              <h3 className="">SÍGUENOS</h3>
              <div className="flex space-x-2">
                <Link
                  href="#"
                  className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/icons/facebook-blue.png"
                    alt="fb"
                    width={35}
                    height={35}
                    priority
                    draggable={false}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/icons/instagram-blue.png"
                    alt="ig"
                    width={35}
                    height={35}
                    priority
                    draggable={false}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="#"
                  className="w-6 h-6 bg-blue-700 text-white rounded-full flex items-center justify-center"
                >
                  <Image
                    src="/icons/linkedin-blue.png"
                    alt="li"
                    width={35}
                    height={35}
                    priority
                    draggable={false}
                    className="hover:scale-110 transition-transform duration-200"
                  />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black mb-2">
                SUSCRÍBETE A NUESTRO NEWSLETTER
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="relative flex items-center border-b border-black">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="DEJA TU EMAIL AQUÍ"
                    required
                    className="flex-1 pt-1 font-bold bg-transparent placeholder-gray-500 focus:outline-none transition-colors"
                  />
                  {email && (
                    <button
                      type="submit"
                      className="text-blue-600 text-xs underline hover:text-[var(--color-blue)] transition-colors ml-2"
                    >
                      ENVIAR
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="mt-2">
              <p className="">
                ROMA NORTE, CUAUHTÉMOC, CDMX
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 max-w-[800px] mx-auto font-bold">
          <div>
            <Link href="#" className="hover:underline">
              TÉRMINOS Y CONDICIONES
            </Link>
          </div>
          <div className="text-center">
            <span>{year} SNMBL ESTUDIO CREATIVO DERECHOS RESERVADOS</span>
          </div>
          <div>
            <Link href="#" className="hover:underline">
              AVISO DE PRIVACIDAD
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
