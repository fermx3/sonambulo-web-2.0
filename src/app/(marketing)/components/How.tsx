'use client';


export default function How() {
  return (
    <div className='relative overflow-hidden bg-[#222] min-h-screen flex items-center justify-center'>
      {/* Top decorative strip (neon + torn paper placeholder) */}
      <div className="absolute left-0 right-0 top-0 h-12 bg-[#d7ff1a]" aria-hidden />
      <div
        className="absolute left-0 right-0 top-12 h-20 bg-[url('/sections/hero/contorno-abajo-derecha.png')] bg-no-repeat bg-center opacity-30"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left column: text */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <span className="inline-block bg-white text-white px-4 py-2 rounded-md text-sm italic">
                Ok, pero todos dicen eso...
              </span>
              <div className="mt-2 text-sm text-white">- Tú, probablemente.</div>
            </div>

            <div className="mt-12">
              <p className="text-lg text-white/80 mb-3">Tenemos un gran diferenciador...</p>

              <h2 className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                <span className="block mt-2">BLINDAMOS</span>
                <span className="block text-2xl md:text-3xl font-medium mt-2 text-white/80">a las marcas desde el trade hasta el consumidor.</span>
              </h2>

              <p className="mt-6 text-base md:text-lg text-white/70 max-w-2xl">
                Resolvemos los puntos críticos del viaje del cliente, combinando creatividad estratégica, diseño y tecnología para marcas que quieren destacar.
              </p>

              {/* CTA placeholder (optional) */}
              <div className="mt-8">
                <button className="inline-flex items-center gap-3 bg-[#d7ff1a] text-black font-bold px-6 py-3 rounded-md shadow-lg">Ver casos</button>
              </div>
            </div>
          </div>

          {/* Right column: image + decorative shapes */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[520px] lg:max-w-[600px]">
              {/* neon outline */}
              <div className="absolute -left-6 -top-6 w-[calc(100%+48px)] h-[calc(100%+48px)] rounded-md border-8 border-[#2df0c0] transform rotate-3 pointer-events-none" aria-hidden />

              {/* placeholder image box */}
              <div className="relative bg-white/5 rounded-md overflow-hidden shadow-2xl" style={{ aspectRatio: '4/3' }}>
                {/* Replace the inner div with <Image src="/path/to/your.png" /> when you have the asset */}
                <div className="absolute inset-0 flex items-center justify-center text-white/40">Image placeholder</div>
              </div>

              {/* accent blob bottom-right */}
              <div className="absolute -right-6 bottom-[-20px] w-36 h-36 bg-[#d7ff1a] rounded-full filter blur-sm opacity-90 pointer-events-none" aria-hidden />

              {/* white circular stroke */}
              <svg className="absolute -right-10 -top-8 w-36 h-36" viewBox="0 0 100 100" fill="none" aria-hidden>
                <circle cx="50" cy="50" r="46" stroke="white" strokeWidth="2" opacity="0.7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn strip */}
      <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-[#d7ff1a] to-transparent pointer-events-none" aria-hidden />
    </div>
  );
}
