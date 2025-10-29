import { ReactNode } from "react";
export function Section({
  id,
  children,
  scrollOffset = false
}: {
  id: string;
  children: ReactNode;
  scrollOffset?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full overflow-y-visible ${
        scrollOffset ? '-scroll-mt-20 md:-scroll-mt-32' : ''
      }`}
    >
      {children}
    </section>
  );
}
