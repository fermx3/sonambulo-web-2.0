import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import SmoothScroll from "./(marketing)/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sonámbulo Estudio Creativo",
  description: "Sonámbulo Website - Creativity without rest",
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: { title: "Sonámbulo Estudio Creativo", type: "website" }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
