// app/(marketing)/components/AboutSticky.tsx
"use client";
import React, { useRef, useMemo } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import AboutMobile from "./AboutMobile";

const STEPS = [
	{
		id: "step-1",
		eyebrow: "Somos un",
		title: "SÚPER GRUPO",
		subtitle:
			"de creativos, publicistas, marketeros y nerds de las ideas, unidos bajo una misma visión:",
		one_line: true,
	},
	{
		id: "step-2",
		eyebrow: "Convertirnos en verdaderos",
		title: "PARTNERS",
		subtitle: "valiosos de nuestros clientes",
		one_line: false,
	},
];

// Config: how much extra scroll progress the final step should hold (0-1 range)
// Tune this value to adjust how long the last step remains visible before transition
const EXTRA_HOLD = 0.2;
// Additional fixed viewport height (vh) to add to the section to allow extra hold
// Increase this if you need the final step to have more physical scroll space.
const EXTRA_VH = 180; // 20vh extra by default

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

	// Keep scrolling indicator: fade out as we approach the end
	const scrollIndicatorOpacity = useTransform(
		scrollYProgress,
		[0, 0.1, 0.85, 1],
		[0, 1, 1, 0]
	);

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

		const opacity = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[0, 1, 1, 0]
		);

		const y = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[60, 0, 0, -60]
		);

		const scale = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[0.9, 1, 1, 1.05]
		);

		const rotate = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[2, 0, 0, -1]
		);

		// Enhanced 3D motion values for eyebrow - FASTER DISAPPEARANCE
		const eyebrowY = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[-300, 0, 50, 400] // Reduced middle value for faster initial movement
		);

		const eyebrowScale = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[0, 1, 1.05, 3] // Stays normal size longer, then grows fast
		);

		const eyebrowOpacity = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[0, 1, 0.2, 0] // Fades out much faster when movement starts
		);

		// Add perspective rotation for enhanced 3D effect - FASTER ROTATION
		const eyebrowRotateX = useTransform(
			progress,
			[start, inStart, outEnd, end],
			[-30, 0, 5, 30] // Less rotation in middle, faster at end
		);

		const subtitleY = useTransform(progress, [start, inStart], [30, 0]);

		return (
			<>
				{/* Eyebrow with 3D exit animation */}
				<motion.p
					style={{
						opacity: eyebrowOpacity,
						y: eyebrowY,
						scale: eyebrowScale,
						rotateX: eyebrowRotateX,
					}}
					className="absolute top-[40vh] left-1/2 -translate-x-1/2 z-10
          md:text-[var(--color-white)] text-center
          md:text-[2rem]
          px-3 py-2 pointer-events-none md:max-w-fit h-32 md:text-left items-left justify-end
          flex flex-col whitespace-pre-line object-left
          [transform-style:preserve-3d]"
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 25,
					}}
				>
					{step.one_line ? (
						<span>{step.eyebrow}</span>
					) : (
						step.eyebrow
							.split(" ")
							.map((word, i) => <span key={i}>{word}</span>)
					)}
				</motion.p>

				{/* Main content container */}
				<motion.div
					style={{ opacity, y, scale, rotate }}
					className="absolute bottom-18 mx-auto px-6 text-center pointer-events-none flex flex-col items-center overflow-hidden max-w-[90vw]
          md:top-[80vh] py-10 md:bottom-auto md:transform md:-translate-y-1/2"
					transition={{
						type: "spring",
						stiffness: 100,
						damping: 30,
					}}
				>
					<motion.h3
						style={{
							y: useTransform(progress, [start, inStart], [40, 0]),
							scale: useTransform(progress, [inStart, outEnd], [1.1, 1]),
						}}
						className="text-[36px] md:text-[64px] font-(family-name:--font-alfarn) leading-tight tracking-tight text-[var(--color-ink)]"
					>
						{step.title}
					</motion.h3>

					{step.subtitle && (
						<motion.p
							style={{
								y: subtitleY,
							}}
							className="text-[var(--color-ink)] md:text-[1.5rem] lg:text-[2rem] max-w-2xl mt-4"
						>
							{step.subtitle}
						</motion.p>
					)}
				</motion.div>
			</>
		);
	}

	return (
		<>
			{/* Mobile version */}
			<AboutMobile />

			{/* Desktop version */}
			<div
				ref={sectionRef}
				style={{ minHeight: `${totalVh}vh` }}
				className="relative bg-[var(--color-lime)] hidden lg:block"
			>
				{/* Sticky container that occupies the viewport while scrolling through the section */}
				<div className="sticky top-0 h-screen">
					{/* Centered background image (keeps visual fixed in the sticky block) */}
					<div className="absolute inset-x-0 top-0 z-0 flex justify-center h-[60dvh] w-full overflow-hidden">
						<Image
							src="/sections/about/medio-asterisco-negro.png"
							alt="decorative asterisk background"
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

					{/* Keep scrolling indicator - bottom center on mobile, right center on desktop */}
					<motion.div
						style={{ opacity: scrollIndicatorOpacity }}
						className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:bottom-auto md:right-8 md:top-1/2 md:-translate-y-1/2 md:left-auto md:translate-x-0 pointer-events-none z-20"
					>
						<div className="flex flex-col items-center gap-3 text-[var(--color-ink)]">
							<motion.p
								animate={{ y: [0, 8, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="text-sm font-medium uppercase tracking-wide md:[writing-mode:vertical-lr]"
							>
								Keep scrolling
							</motion.p>
							<motion.div
								animate={{ y: [0, 8, 0] }}
								transition={{
									duration: 2,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="w-5 h-4 border rounded-full border-black/10 flex items-center justify-center"
							>
								<motion.div
									animate={{ scale: [1, 1.2, 1] }}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="text-[var(--color-ink)] text-sm font-bold"
								>
									*
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}
