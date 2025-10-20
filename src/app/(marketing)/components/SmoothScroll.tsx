'use client';

import { ReactNode, useEffect } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    type LenisInstance = {
      raf: (time: number) => void;
      destroy?: () => void;
    };
    type LenisConstructor = new (opts?: { lerp?: number; smoothWheel?: boolean }) => LenisInstance;

    let lenisInstance: LenisInstance | null = null;
    let rafId: number | null = null;

    (async () => {
      const { default: Lenis } = (await import('lenis')) as { default: LenisConstructor };
      lenisInstance = new Lenis({ lerp: 0.05, smoothWheel: true });
      function raf(time: number) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    })();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (lenisInstance?.destroy) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
