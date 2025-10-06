import Image from 'next/image';

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Cargando recursos"
      className="fixed inset-0 z-0 flex h-screen w-screen items-center justify-center bg-transparent backdrop-blur-sm pointer-events-none transition-opacity duration-300"
    >
      <div className="flex items-center justify-center pointer-events-none">
        <Image
          src="/asterisco-verde.png"
          alt=""
          aria-hidden
          width={128}
          height={128}
          priority
          className="block motion-safe:animate-pulse"
          style={{ width: 'clamp(72px, 12vw, 128px)', height: 'auto' }}
        />
      </div>

      {/* accessible, invisible text for screen readers */}
      <span className="sr-only">Cargando recursos</span>
    </div>
  );
}
