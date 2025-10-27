import Image from "next/image";

export default function RibbonImage() {
  return (
    <div className="relative -mt-8 lg:-mt-18 xl:-mt-24 pointer-events-none z-50">
      <Image
        src="/sections/process/capabilities-ribbon.png"
        alt="Capabilities"
        width={1920}
        height={200}
        className="mx-auto"
        priority={false}
      />
    </div>
  );
}
