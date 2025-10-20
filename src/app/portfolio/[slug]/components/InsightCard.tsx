import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export default function InsightCard({
  title = "title",
  description = "description",
  imageSrc = "",
  imageAlt = "",
  imagePosition = "right", // "left" or "right"
  borderColor = "lime", // "teal" | "blue" | "lime" | ...
}) {
  const colorVar = `var(--color-${borderColor})`;
  const isLeft = imagePosition === "left"; // imagen a la izquierda
  const shadow = `${isLeft ? "-10px 10px" : "10px 10px"} 0 0 ${colorVar}`;
  const paddingSide = isLeft ? "ps-24" : "pe-24";

  // Overlap control: acercar columnas y “meter” el texto bajo la imagen
  const textShift = isLeft ? "md:-ml-12 md:ps-12" : "md:-mr-12 md:pe-12";

  return (
    <div
      className={cn(
        "flex flex-col md:items-center w-full max-w-6xl mx-auto px-4",
        isLeft ? "md:flex-row-reverse" : "md:flex-row",
        "items-stretch md:gap-0"
      )}
    >
      {/* Text Content (queda por debajo) */}
      <div
        className={cn(
          "relative z-0 flex-1 bg-transparent backdrop-blur-sm border p-8 md:p-12 order-2 md:order-none rounded",
          textShift,
          paddingSide
        )}
        style={{ borderColor: colorVar }}
      >
        <h2 className="font-(family-name:--font-montserrat) text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase italic mb-6">
          {title}
        </h2>
        <p className="text-white text-base md:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image (por encima) */}
      <div
        className={cn(
          "relative z-10 flex-1 aspect-[4/3] w-full overflow-hidden order-1 md:order-none"
        )}
        style={{ boxShadow: shadow }}
      >
        <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
      </div>
    </div>
  );
}
