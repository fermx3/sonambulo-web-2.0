export default function Process() {
  return (
    <div className="relative min-h-screen bg-[var(--color-ink)] overflow-hidden">
      {/* Three slanted strips (all use the same image) */}
      <div className="relative w-full h-[78vh] flex items-center justify-center">
        {/* Top strip */}
        <div
          className="absolute left-0 right-0 flex justify-center z-20"
          style={{ transform: "translateY(-22vh) rotate(2deg)" }}
          aria-hidden
        >
          <div className="relative w-[120vw] max-w-[1600px]">
            <div className="absolute w-dvw left-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-6 bg-[var(--color-teal)]">
              <span className="text-[2.5rem] md:text-[4rem] font-extrabold">1 -</span>
              <div className="text-[2rem] md:text-[3.5rem] font-extrabold">
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
              <span className="text-[2.5rem] md:text-[4rem] font-extrabold text-[var(--color-white)]">2 -</span>
              <div className="text-[2rem] md:text-[3.5rem] font-extrabold text-[var(--color-white)]">
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
              <span className="text-[2.5rem] md:text-[4rem] font-extrabold">3 -</span>
              <div className="text-[2rem] md:text-[3.5rem] font-extrabold">
                <span className="block">Llegando al CONSUMIDOR FINAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom torn paper + blue band */}
      <div className="absolute bottom-6 left-0 right-0 h-[28vh]">
        <div
          className="w-full h-[30vh] bg-[url('/sections/how/recorte-2.png')] bg-no-repeat bg-[length:100%_100%] pointer-events-none"
          aria-hidden
        />
      </div>
    </div>
  );
}
