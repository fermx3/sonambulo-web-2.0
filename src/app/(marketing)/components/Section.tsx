import { ReactNode } from "react";
export function Section({ id, children }: { id: string; children: ReactNode }) {
  return (
    <section id={id} className="relative mx-auto w-full px-4 py-24">
      {children}
    </section>
  );
}
