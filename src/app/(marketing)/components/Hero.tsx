'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { JSX } from 'react';
import classes from './Hero.module.scss';

export default function Hero(): JSX.Element {
  const MIN_VISIBLE_MS = 1000; // mantener logo grande al menos 1s durante el loader
  const [compact, setCompact] = useState<boolean>(false);
  const loadedRef = useRef<boolean>(false);
  const minElapsedRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);
  const compactedRef = useRef<boolean>(false); // evita llamadas repetidas a setCompact

  useEffect(() => {
    const tryCompact = () => {
      if (compactedRef.current) return;
      if (loadedRef.current && minElapsedRef.current) {
        compactedRef.current = true;
        // pequeña demora para permitir transiciones suaves
        window.setTimeout(() => setCompact(true), 90);
      }
    };

    const onLoad = () => {
      loadedRef.current = true;
      tryCompact();
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }

    timerRef.current = window.setTimeout(() => {
      minElapsedRef.current = true;
      tryCompact();
    }, MIN_VISIBLE_MS);

    return () => {
      window.removeEventListener('load', onLoad);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div id="hero" className={classes.mainContainer}>
        <div
          className={`${classes.logo} ${compact ? classes.logoCompact : ''}`}
          role="status"
          aria-live="polite"
        >
          <div className={classes.logoInner}>
            {compact ? (
              <div
                onClick={handleLogoClick}
                className="cursor-pointer"
                style={{
                  position: 'relative',
                  zIndex: 9999,
                  pointerEvents: 'auto'
                }}
              >
                <Image
                  src="/logo-compact-dark-bg.svg"
                  alt="Sonámbulo"
                  width={576}
                  height={216}
                  sizes="(min-width: 1200px) 576px, (min-width: 768px) 468px, 324px"
                  className={`${classes.logoImage} ${classes.logoCompact}`}
                  priority
                  draggable={false}
                />
              </div>
            ) : (
              <Image
                src="/logo-dark-bg.svg"
                alt="Sonámbulo"
                width={576}
                height={216}
                sizes="(min-width: 1200px) 576px, (min-width: 768px) 468px, 324px"
                className={classes.logoImage}
                priority
                draggable={false}
              />
            )}
          </div>
        </div>

        <div className={`${classes.canvas} ${compact ? classes.canvasInteractive : ''}`}>
          {/* Decorative shapes */}

          <div className={`${classes.shapeBlue} ${compact ? classes.shapeBlueSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeWhiteArc} ${compact ? classes.shapeWhiteArcSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeTopBlobContour} ${compact ? classes.shapeTopBlobContourSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeTopBlob} ${compact ? classes.shapeTopBlobSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeTopBlob2} ${compact ? classes.shapeTopBlob2Small : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeTopLines} ${compact ? classes.shapeTopLinesSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeRightRing} ${compact ? classes.shapeRightRingSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeTopCenterLeftContour} ${compact ? classes.shapeTopCenterLeftContourSmall : ""}`} aria-hidden="true" />
          <div className={`${classes.shapeTopCenterLeft} ${compact ? classes.shapeTopCenterLeftSmall : ""}`} aria-hidden="true" />

          {/* Imagen "Bienvenidos" centrada — aparece cuando compact */}
          <section
            className={`${classes.centerMessage} ${compact ? classes.centerMessageVisible : ''}`}
            aria-hidden={compact ? false : true}
          >
            <Image
              src="/sections/hero/bienvenidos.png"
              alt="Bienvenidos a Sonámbulo"
              width={648 * 0.8}
              height={202 * 0.8}
              sizes="(min-width: 1200px) 648px, (min-width: 768px) 468px, 324px"
              className={classes.welcomeImage}
              priority
            />
          </section>
          {/* Tagline bottom-right — se reduce cuando compact */}
            <div className={`${classes.tagline} ${compact ? classes.taglineSmall : ''}`}>
              ( Creativity without rest )
            </div>
        </div>
      </div>
    </>
  );
}
