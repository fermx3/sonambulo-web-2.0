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
      <head>
        {/* preload / preconnect para mejorar carga de fonts */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/bms8ymp.css" />
        {/* Darker Grotesque desde Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        {/* Montserrat desde Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
