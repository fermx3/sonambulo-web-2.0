"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeUp } from "@/lib/anim/FadeUp";

const STEPS = [
	{
		id: "step-1",
		eyebrow: "Somos un",
		title: "SÚPER GRUPO",
		subtitle:
			"de creativos, publicistas, marketeros y nerds de las ideas, unidos bajo una misma visión:",
	},
	{
		id: "step-2",
		eyebrow: "Convertirnos en verdaderos",
		title: "PARTNERS",
		subtitle: "valiosos de nuestros clientes",
	},
];

export default function AboutMobile() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// Subtle background asterisk parallax
	const asteriskY = useTransform(scrollYProgress, [0, 1], [0, -50]);

	return (
		<div
			ref={sectionRef}
			className="relative bg-[var(--color-lime)] min-h-screen lg:hidden py-12"
		>
			{/* Background asterisk - subtle parallax */}
			<motion.div
				style={{ y: asteriskY }}
				className="absolute inset-x-0 top-0 z-0 flex justify-center h-[40vh] w-full"
			>
				<Image
					src="/sections/about/medio-asterisco-negro.png"
					alt="decorative asterisk background"
					fill
					className="object-contain object-top"
					priority
				/>
			</motion.div>

			{/* Content container */}
			<div className="relative z-10 max-w-sm mx-auto px-6 space-y-24 flex flex-col h-[80vh] justify-center items-center mt-30">
				{STEPS.map((step, index) => (
					<FadeUp key={step.id}>
						<div className="text-center space-y-4 text-[1.5rem]">
							{/* Eyebrow */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.3,
									duration: 0.6,
									ease: "easeOut",
								}}
								viewport={{ once: true }}
								className="space-y-1"
							>

									<motion.p>{step.eyebrow}</motion.p>
							</motion.div>

							{/* Main title with staggered letter animation */}
							<motion.h2
								className="text-[2rem] font-(family-name:--font-alfarn) leading-tight tracking-tight text-[var(--color-ink)]"
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								transition={{ delay: index * 0.3 + 0.2 }}
								viewport={{ once: true }}
							>
								{step.title.split("").map((char, i) => (
									<motion.span
										key={i}
										initial={{ opacity: 0, rotateY: 90 }}
										whileInView={{ opacity: 1, rotateY: 0 }}
										transition={{
											delay: index * 0.3 + 0.3 + i * 0.03,
											duration: 0.4,
											ease: "easeOut",
										}}
										viewport={{ once: true }}
										className="inline-block"
										style={{ transformOrigin: "center" }}
									>
										{char === " " ? "\u00A0" : char}
									</motion.span>
								))}
							</motion.h2>

							{/* Subtitle */}
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									delay: index * 0.3 + 0.6,
									duration: 0.6,
									ease: "easeOut",
								}}
								viewport={{ once: true }}
								className="text-[var(--color-ink)] text-[1.2rem] leading-thight"
							>
								{step.subtitle}
							</motion.p>
						</div>
					</FadeUp>
				))}
			</div>
		</div>
	);
}
