import React from "react";

export default function FondoRecorte({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
      backgroundImage:
        "linear-gradient(to bottom, var(--color-lime) 0, var(--color-lime) 50%, var(--color-blue) 50%, var(--color-blue) 100%)",
      }}
    >
      <div className="relative w-full bg-[url('/sections/how/fondo-recorte.png')] bg-cover bg-center bg-no-repeat overflow-y-visible">
      {children}
      </div>
    </div>
  );
}
