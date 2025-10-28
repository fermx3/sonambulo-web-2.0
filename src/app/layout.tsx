import type { Metadata } from "next";
import "@/styles/globals.css";
import { ReactNode } from "react";
import SmoothScroll from "./(marketing)/components/SmoothScroll";
import { Montserrat, Darker_Grotesque } from "next/font/google";
import Nav from "./(marketing)/components/Nav";
import { CustomCursor } from "@/lib/anim/CustomCursor";
import { CursorTrail } from "@/lib/anim/ParticleSystem";
import Footer from "./(marketing)/components/Footer";

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
  title: {
    default: "Sonámbulo Estudio Creativo | Creativity without rest",
    template: "%s | Sonámbulo Estudio Creativo",
  },
  description:
    "Súper grupo de creativos que blindamos marcas desde la construcción hasta el consumidor final. Especialistas en Channel Development, Data & Intelligence Center e Ideas Lab. Desarrollamos estrategias de branding, route to market y experiencias digitales que generan crecimiento real. Partners estratégicos en business strategy, desarrollo web, contenido y storytelling en México.",
  keywords: [
    "estudio creativo",
    "branding estratégico",
    "route to market",
    "channel development",
    "data intelligence",
    "ideas lab",
    "business strategy",
    "trade marketing",
    "construcción de marca",
    "experiencias digitales",
    "storytelling",
    "desarrollo web",
    "partners estratégicos",
    "cross channel solutions",
    "brand positioning",
    "creative strategy",
    "México",
    "agencia creativa",
    "marketing digital",
  ],
  authors: [{ name: "Sonámbulo Estudio Creativo" }],
  creator: "Sonámbulo Estudio Creativo",
  publisher: "Sonámbulo Estudio Creativo",
  metadataBase: new URL("https://www.estudiosonambulo.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sonámbulo Estudio Creativo | Creativity without rest",
    description:
      "Súper grupo de creativos que blindamos marcas desde la construcción hasta el consumidor final. Channel Development, Data Intelligence e Ideas Lab para crecimiento real.",
    url: "https://www.estudiosonambulo.com/",
    siteName: "Sonámbulo Estudio Creativo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sonámbulo Estudio Creativo - Creativity without rest",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonámbulo Estudio Creativo | Creativity without rest",
    description:
      "Blindamos marcas desde la construcción hasta el consumidor final. Partners estratégicos en branding, route to market y experiencias digitales.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-google-search-console", // Actualizar cuando tengamos el código
  },
  category: "Design Studio",
  other: {
    "msapplication-TileColor": "#201f1f",
    "msapplication-config": "/browserconfig.xml",
  },
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
        {/* Favicons - Orden importa para compatibilidad */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-title" content="SNMBL" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="max-w-screen">
        <DesktopCursor />
        <CursorTrail
          trailLength={15}
          colors={["rgba(217, 255, 3, 0.6)", "rgba(51, 255, 194, 0.4)"]}
        />
        <Nav />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
