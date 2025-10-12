export default function Process() {
  return (
    <div className="relative min-h-screen bg-[var(--color-ink)] overflow-hidden">
      {/* Three slanted strips (all use the same image) */}
      <div className="relative lg:w-[80dvw] w-full h-[78vh] flex items-center justify-center">
        {/* Top strip */}
        <div
          className="absolute left-0 right-0 flex justify-center z-20"
          style={{ transform: "translateY(-22vh) rotate(2deg)" }}
          aria-hidden
        >
          <div className="relative w-[120dvw] max-w-[1600px]">
            <div className="absolute w-dvw left-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-6 bg-[var(--color-teal)]">
              <span className="text-[2rem] md:text-[4rem] font-extrabold">1 -</span>
              <div className="text-[1.5rem] md:text-[3.5rem] font-extrabold">
                <span className="block">Desde la CONSTRUCCIÓN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle strip */}
        <div
          className="absolute left-0 right-0 flex justify-center z-10"
          style={{ transform: "translateY(-6vh) rotate(-2deg)" }}
          aria-hidden
        >
          <div className="relative w-[120vw] max-w-[1600px]">
            <div className="absolute w-dvw left-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-6 bg-[var(--color-blue)]">
              <span className="text-[1.8rem] md:text-[4rem] font-extrabold text-[var(--color-white)]">2 -</span>
              <div className="text-[1.3rem] md:text-[3.5rem] font-extrabold text-[var(--color-white)]">
                <span className="block">Pasando por el ROUTE TO MARKET</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="absolute left-0 right-0 flex justify-center"
          style={{ transform: "translateY(12vh) rotate(5deg)" }}
          aria-hidden
        >
          <div className="relative w-[120vw] max-w-[1600px]">
            <div className="absolute w-dvw left-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-6 bg-[var(--color-lime)]">
              <span className="text-[2rem] md:text-[4rem] font-extrabold">3 -</span>
              <div className="text-[1.5rem] md:text-[3.5rem] font-extrabold">
                <span className="block">Llegando al CONSUMIDOR FINAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn paper */}
        <div
          className="absolute left-0 right-0 lg:-bottom-[15dvw] -bottom-[80dvw] w-dvw h-full bg-[url('/sections/how/recorte-2.png')] bg-no-repeat bg-center bg-contain overflow-hidden"
          aria-hidden
        />
      </div>
  );
}
