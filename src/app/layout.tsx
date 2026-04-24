import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cristian Mateos — Full-Stack Developer Freelance",
  description:
    "Full-stack developer con más de 12 años de experiencia. Desarrollo software a medida, landing pages que convierten, automatizaciones IA y apps móviles. Freelance disponible.",
  keywords: [
    "full-stack developer",
    "desarrollador freelance",
    "next.js",
    "react",
    "desarrollo web",
    "landing page",
    "automatización IA",
    "app móvil",
    "software a medida",
    "España",
  ],
  authors: [{ name: "Cristian Mateos" }],
  creator: "Cristian Mateos",
  metadataBase: new URL("https://cristianmateos.es"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: "https://cristianmateos.es",
    title: "Cristian Mateos — Full-Stack Developer Freelance",
    description:
      "Full-stack developer con más de 12 años. Software a medida, landing pages, automatizaciones IA. Freelance disponible.",
    siteName: "Cristian Mateos Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Mateos — Full-Stack Developer Freelance",
    description:
      "Full-stack developer con más de 12 años. Software a medida, landing pages, automatizaciones IA.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={outfit.variable}>{children}</body>
    </html>
  );
}
