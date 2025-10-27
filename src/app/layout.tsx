import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import SmoothScroll from "./(marketing)/components/SmoothScroll";
import { Montserrat, Darker_Grotesque } from "next/font/google";
import Nav from "./(marketing)/components/Nav";
import { CustomCursor } from "@/lib/anim/CustomCursor";
import { CursorTrail } from "@/lib/anim/ParticleSystem";

// Component wrapper for desktop-only cursor
function DesktopCursor() {
  return (
    <>
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: "Sonámbulo Estudio Creativo",
  description: "Sonámbulo Website - Creativity without rest",
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: { title: "Sonámbulo Estudio Creativo", type: "website" },
};

// next/font (optimized)
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});
const darker = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-darker",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${darker.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://use.typekit.net"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://use.typekit.net/bms8ymp.css" />
      </head>
      <body className="max-w-screen">
        <DesktopCursor />
        <CursorTrail
          trailLength={15}
          colors={["rgba(217, 255, 3, 0.6)", "rgba(51, 255, 194, 0.4)"]}
        />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
