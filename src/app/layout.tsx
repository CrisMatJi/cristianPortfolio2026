import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const SITE_URL = "https://cristianmateos.es";

export const metadata: Metadata = {
  title: {
    default: "Cristian Mateos — Full-Stack Developer Freelance",
    template: "%s — Cristian Mateos",
  },
  description:
    "Full-stack developer con más de 12 años de experiencia. Desarrollo software a medida, landing pages que convierten, automatizaciones IA y apps móviles. Freelance disponible en Cádiz, España.",
  keywords: [
    "full-stack developer",
    "desarrollador freelance",
    "desarrollador freelance Cádiz",
    "next.js",
    "react",
    "desarrollo web",
    "landing page",
    "automatización IA",
    "app móvil",
    "software a medida",
    "React Native",
    "España",
  ],
  authors: [{ name: "Cristian Mateos", url: SITE_URL }],
  creator: "Cristian Mateos",
  publisher: "Cristian Mateos",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: SITE_URL,
    title: "Cristian Mateos — Full-Stack Developer Freelance",
    description:
      "Full-stack developer con más de 12 años. Software a medida, landing pages, automatizaciones IA y apps móviles. Freelance disponible.",
    siteName: "Cristian Mateos Portfolio",
    images: [
      {
        url: "/images/cristian-hero.jpg",
        width: 640,
        height: 640,
        alt: "Cristian Mateos, desarrollador full-stack freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Mateos — Full-Stack Developer Freelance",
    description:
      "Full-stack developer con más de 12 años. Software a medida, landing pages, automatizaciones IA.",
    images: ["/images/cristian-hero.jpg"],
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
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "Cristian Mateos — Full-Stack Developer",
  image: `${SITE_URL}/images/cristian-hero.jpg`,
  url: SITE_URL,
  email: "c.mateos.jimenez@gmail.com",
  telephone: "+34635071241",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cádiz",
    addressCountry: "ES",
  },
  areaServed: "ES",
  sameAs: ["https://www.linkedin.com/in/cmateosjimenez88/"],
  founder: {
    "@type": "Person",
    name: "Cristian Mateos",
    jobTitle: "Full-Stack Developer",
    url: SITE_URL,
    sameAs: ["https://www.linkedin.com/in/cmateosjimenez88/"],
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Pages" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software a medida" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatizaciones IA" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apps móviles" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "APIs & Integraciones" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consultoría técnica" } },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${plexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
