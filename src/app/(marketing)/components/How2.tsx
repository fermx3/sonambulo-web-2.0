import { FadeUp } from "@/lib/anim/FadeUp";

export default function Process() {
  return (
    <div className="relative min-h-[50vh] md:min-h-[80dvh] bg-[var(--color-ink)] overflow-hidden">
      {/* Three slanted strips (all use the same image) */}
      <FadeUp>
        <div className="relative w-full h-[60vh] flex items-center justify-center font-(family-name:--font-montserrat) font-bold italic">
          {/* Top strip */}
          <div
            className="absolute left-0 right-0 flex justify-center z-20 -translate-y-[8vh] md:-translate-y-[20vh] rotate-[2deg]"
            aria-hidden
        >
          <div className="relative w-[200vw] max-w-none">
            <div className="absolute w-[200vw] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3 lg:gap-6 bg-[var(--color-teal)] px-4">
              <span className="text-[1.2rem] md:text-[2.5rem] lg:text-[4rem] xl:text-[4.5rem] flex-shrink-0">
                1 <span className="hidden sm:inline-block">-</span>
              </span>
              <div className="text-[1rem] md:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-center lg:text-left">
                <span className="block">Desde la <span className="font-extrabold">CONSTRUCCIÓN</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle strip */}
        <div
          className="absolute left-0 right-0 flex justify-center z-10 -translate-y-[2vh] md:-translate-y-[6vh] -rotate-[2deg]"
          aria-hidden
        >
          <div className="relative w-[200vw] max-w-none">
            <div className="absolute w-[200vw] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3 lg:gap-6 bg-[var(--color-blue)] px-4">
              <span className="text-[1.2rem] md:text-[2.5rem] lg:text-[4rem] xl:text-[4.5rem] text-[var(--color-white)] flex-shrink-0">
                2 <span className="hidden sm:inline-block">-</span>
              </span>
              <div className="text-[1rem] md:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-[var(--color-white)] text-center lg:text-left">
                <span className="block">Pasando por el <span className="font-extrabold">ROUTE TO MARKET</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="absolute left-0 right-0 flex justify-center translate-y-[4vh] md:translate-y-[12vh] rotate-[5deg]"
          aria-hidden
        >
          <div className="relative w-[200vw] max-w-none">
            <div className="absolute w-[200vw] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center gap-3 lg:gap-6 bg-[var(--color-lime)] px-4">
              <span className="text-[1.2rem] md:text-[2.5rem] lg:text-[4rem] xl:text-[4.5rem] flex-shrink-0">
                3 <span className="hidden sm:inline-block">-</span>
              </span>
              <div className="text-[1rem] md:text-[2rem] lg:text-[3.5rem] xl:text-[4rem] text-center lg:text-left">
                <span className="block">Llegando al <span className="font-extrabold">CONSUMIDOR FINAL</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeUp>
    </div>
  );
}
