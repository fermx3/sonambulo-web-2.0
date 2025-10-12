// app/(marketing)/components/AboutSticky.tsx
"use client";
import React, { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const STEPS = [
  {
    id: "step-1",
    eyebrow: "Somos un",
    title: "SÚPER GRUPO",
    subtitle: "de creativos, publicistas, marketeros y nerds de las ideas.",
  },
  {
    id: "step-2",
    eyebrow: "Convertirnos en verdaderos",
    title: "PARTNERS",
    subtitle: "valiosos de nuestros clientes",
  },
];

// Config: how much extra scroll progress the final step should hold (0-1 range)
// Tune this value to adjust how long the last step remains visible before transition
const EXTRA_HOLD = 0.2;
// Additional fixed viewport height (vh) to add to the section to allow extra hold
// Increase this if you need the final step to have more physical scroll space.
const EXTRA_VH = 200; // 20vh extra by default

// compute an inclusive window for each step inside [0,1] scroll progress
function windowFor(index: number, total: number) {
  const slice = 1 / total;
  const start = index * slice;
  let end = (index + 1) * slice;
  // small pad to crossfade
  let pad = Math.min(0.06, slice / 4);
  // If this is the final step, give it more visible time before fading out
  if (index === total - 1) {
    // make the fade pad very small so the 'out' point is very close to the end (visible longer)
    pad = Math.min(0.005, pad / 12);
    // explicit extra hold for the last step (cap so end <= 1)
    const extraHold = Math.min(EXTRA_HOLD, slice * 0.5);
    end = Math.min(1, end + extraHold);
  }
  return { start, in: start + pad, out: end - pad, end };
}

export default function About() {
  const stepsCount = STEPS.length;
  // wrapper height: N * 100vh
  // add EXTRA_HOLD (fraction) converted to vh plus a fixed EXTRA_VH so the final step can hold longer
  const totalVh = useMemo(
    () => stepsCount * 100 + EXTRA_HOLD * 100 + EXTRA_VH,
    [stepsCount]
  );

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // child component: hooks inside allowed

  function Step({
    step,
    index,
    total,
    progress,
  }: {
    step: (typeof STEPS)[number];
    index: number;
    total: number;
    progress: MotionValue<number>;
  }) {
    const { start, in: inStart, out: outEnd, end } = windowFor(index, total);

    // opacity: fade in at inStart, stay visible until outEnd
    const opacity = useTransform(
      progress,
      [start, inStart, outEnd, end],
      [0, 1, 1, 0]
    );

    // y translate: slide slightly up as it enters, and up when leaving
    const y = useTransform(
      progress,
      [start, inStart, outEnd, end],
      [24, 0, 0, -24]
    );

    // scale for subtle effect
    const scale = useTransform(progress, [inStart, outEnd], [1.02, 1]);

    return (
      <motion.div
        style={{ opacity, y, scale }}
        className="absolute bottom-20 mx-auto px-6 text-center pointer-events-none flex flex-col items-center"
      >
        {/* Eyebrow: fixed-width block so long lines wrap into two balanced lines */}
        <p className="mx-auto mb-3 w-[170px] md:w-[220px] lg:w-[210px] px-3 py-2 bg-[var(--color-ink)] text-[var(--color-white)] leading-snug text-start text-wrap text-[14px] sm:text-[14px] md:text-[21px] lg:text-[32px]">
          {step.eyebrow}
        </p>

        <h3 className="text-[36px] md:text-[64px] font-extrabold leading-tight tracking-tight text-[var(--color-ink)]">
          {step.title}
        </h3>

        {step.subtitle && (
          <p className="mt-3 text-[var(--color-ink)] text-base md:text-lg">
            {step.subtitle}
          </p>
        )}
      </motion.div>
    );
  }

  return (
    <div
      ref={sectionRef}
      style={{ minHeight: `${totalVh}vh` }}
      className="relative bg-[var(--color-lime)]"
    >
      {/* Sticky container that occupies the viewport while scrolling through the section */}
      <div className="sticky top-0 h-screen">
        {/* Centered background image (keeps visual fixed in the sticky block) */}
          <div className="absolute inset-x-0 top-0 -z-10 flex justify-center h-[76dvh] w-full overflow-hidden">
          <Image
            src="/sections/about/medio-asterisco-negro.png"
            alt="decorative"
            fill
            className="object-contain object-top"
            priority
          />
        </div>

        {/* Layer that holds the stacked step texts */}
        <div className="relative flex justify-center z-10 h-full">
          {STEPS.map((s, i) => (
            <Step
              key={s.id}
              step={s}
              index={i}
              total={stepsCount}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
