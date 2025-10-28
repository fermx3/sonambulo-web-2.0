import Image from "next/image";
import React from "react";
import { FadeUp } from "@/lib/anim/FadeUp";

export default function Contact() {
  return (
    <div className="min-h-screen w-full relative bg-[var(--color-lime)] overflow-y-visible">
      {/* top neon strip */}
      <div className="absolute inset-x-0 top-0 h-24 bg-[var(--color-lime)] pointer-events-none" />
      {/* top-right megaphone decoration */}
      <div className="absolute right-6 -top-10 md:-top-18 w-36 h-36 md:w-68 md:h-68 pointer-events-none overflow-visible z-20">
        <Image
          src="/sections/contact/megafono.png"
          alt="megafono"
          fill
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
      {/* top-left form decoration */}
      <div className="absolute -left-10 md:-left-30 -top-40 md:-top-78 w-36 h-36 md:w-68 md:h-68 pointer-events-none overflow-visible z-0">
        <Image
          src="/sections/clients/forma-azul.png"
          alt="forma azul"
          fill
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
      {/* top-left form decoration */}
      <div className="absolute -left-10 md:-left-10 -top-35 md:-top-66 w-36 h-36 md:w-68 md:h-68 pointer-events-none overflow-visible z-10 rotate-12">
        <Image
          src="/sections/clients/contorno.png"
          alt="contorno"
          fill
          className="object-contain"
          priority
          draggable={false}
        />
      </div>
      <div className="h-screen min-h-[120vh] md:min-h-[140vh] w-full relative overflow-hidden bg-[url('/sections/contact/contacto-fondo.png')] bg-cover z-30">
        {/* "tienes un problema?" image */}
        <div className="absolute  w-[50vw] h-52 pointer-events-none right-0 md:top-40 md:h-72 lg:h-96 md:w-[50vw] lg:w-[40vw] lg:top-50 lg:right-0 top-12">
          <Image
            src="/sections/contact/tienes-un-problema.png"
            alt="tienes un problema?"
            fill
            className="object-contain absolute"
            priority={true}
          />
        </div>
        <div className="relative z-10 md:mx-auto py-54 md:py-24 flex flex-col md:flex-row items-end-safe h-[110vh] md:gap-12">
          {/* left: big CONTACT T* + phone image */}
          <div className="w-full flex items-center pe-10 md:pe-0 justify-end-safe md:justify-center gap-6">
            <div className="absolute bottom-0 left-0 flex-shrink-0 w-56 md:w-80 lg:w-96">
              <div className="relative bottom-20 md:-left-20 md:-bottom-10 aspect-3/4 lg:h-[80vh] md:h-[60vh] h-[40vh]">
                <Image
                  src="/sections/contact/telefono.png"
                  alt="phone"
                  fill
                  className="object-contain"
                  priority
                  draggable={false}
                />
              </div>
            </div>

            <FadeUp>
              <div className="relative lg:h-[60vh] ratio-1/1 md:h-[60vh] h-[35vh] w-48 md:w-60 lg:w-[60vh] md:transform md:-translate-y-16 lg:-translate-y-24">
                <Image
                  src="/sections/contact/contacto-text.png"
                  alt="Contacto"
                  fill
                  className="object-contain"
                  priority
                  draggable={false}
                />
              </div>
            </FadeUp>
          </div>

          {/* right: message, email, socials, location */}
          <div className="w-full flex flex-col items-end justify-end gap-6 md:gap-12 md:px-0 md:-translate-x-16 md:translate-y-12 lg:-translate-x-24 lg:translate-y-16">
            <FadeUp>
              <div className="pe-6 md:px-12 w-full md:w-full flex flex-col items-end md:items-center justify-end-safe md:justify-center text-white">
                <div className="py-8 max-w-md w-full text-center">
                  <a
                    href="mailto:hola@estudiosonambulo.com"
                    className="inline-block text-[var(--color-white)] px-5 md:py-3 rounded-md mb-6 hover:brightness-110 text-center text-sm md:text-base lg:text-3xl font-(family-name:--font-darker) font-semibold"
                  >
                    HOLA@ESTUDIOSONAMBULO.COM
                  </a>
                  <p className="text-center text-sm md:text-base lg:text-2xl font-(family-name:--font-darker) font-semibold md:hidden block">
                    ( ROMA NORTE, CUAUHTÉMOC, CDMX )
                  </p>

                  <div className="flex items-center justify-center gap-4 mb-6">
                    <a
                      href="#"
                      aria-label="facebook"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                    >
                      <Image
                        src="/icons/facebook.png"
                        alt="fb"
                        width={35}
                        height={35}
                        priority
                        draggable={false}
                        className={"pointer-events-none"}
                      />
                    </a>
                    <a
                      href="#"
                      aria-label="instagram"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                    >
                      <Image
                        src="/icons/instagram.png"
                        alt="ig"
                        width={35}
                        height={35}
                        priority
                        draggable={false}
                        className={"pointer-events-none"}
                      />
                    </a>
                    <a
                      href="#"
                      aria-label="linkedin"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                    >
                      <Image
                        src="/icons/linkedin.png"
                        alt="li"
                        width={35}
                        height={35}
                        priority
                        draggable={false}
                        className={"pointer-events-none"}
                      />
                    </a>
                  </div>

                  <p className="text-center text-sm md:text-base lg:text-2xl font-(family-name:--font-darker) font-semibold hidden md:block">
                    ( ROMA NORTE, CUAUHTÉMOC, CDMX )
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
