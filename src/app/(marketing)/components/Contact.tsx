import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen w-full relative overflow-hidden bg-[var(--color-blue)]">
      {/* top neon strip */}
      <div className="absolute inset-x-0 top-0 h-24 bg-[var(--color-lime)] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-20 py-24 flex flex-col md:flex-row items-start gap-12">
        {/* left: big CONTACT T* + phone image */}
        <div className="w-full md:w-1/2 flex items-start gap-6">
          <div className="relative flex-shrink-0 w-56 md:w-80 lg:w-96">
            <div className="absolute -left-6 -top-6 w-full h-full transform rotate-[-6deg]">
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

          <h1 className="text-[clamp(48px,6vw,140px)] leading-none font-extrabold text-white uppercase tracking-tight">
            <span className="block">CON</span>
            <span className="block">TAC</span>
            <span className="block">T
              <span className="inline-block ml-2 -mt-2 align-baseline">
                <Image
                  src="/asterisco-blanco.png"
                  alt="asterisco"
                  width={54}
                  height={54}
                  className=""
                  priority
                  draggable={false}
                />
              </span>
            </span>
          </h1>
        </div>

        {/* right: message, email, socials, location */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center text-white">
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-8 max-w-md w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">¿TIENES UN PROBLEMA?</h2>
            <p className="text-sm md:text-base text-white/90 mb-6">
              Escríbenos y platicamos cómo podemos ayudar.
            </p>

            <a href="mailto:hola@estudiosonambulo.com" className="inline-block text-white font-bold bg-white/6 px-5 py-3 rounded-md mb-6 hover:brightness-110">
              HOLA@ESTUDIOSONAMBULO.COM
            </a>

            <div className="flex items-center gap-4 mb-6">
              <a href="#" aria-label="facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <Image src="/icons/facebook.svg" alt="fb" width={20} height={20} priority draggable={false} />
              </a>
              <a href="#" aria-label="instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <Image src="/icons/instagram.svg" alt="ig" width={20} height={20} priority draggable={false} />
              </a>
              <a href="#" aria-label="linkedin" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <Image src="/icons/linkedin.svg" alt="li" width={20} height={20} priority draggable={false} />
              </a>
            </div>

            <p className="text-sm text-white/80">( ROMA NORTE, CUAUHTÉMOC, CDMX )</p>
          </div>
        </div>
      </div>

      {/* bottom-right megaphone decoration */}
      <div className="absolute right-6 bottom-6 w-36 h-36 md:w-48 md:h-48 pointer-events-none">
        <Image src="/sections/contact/megaphone.png" alt="megaphone" fill className="object-contain" priority draggable={false} />
      </div>
    </section>
  );
}
