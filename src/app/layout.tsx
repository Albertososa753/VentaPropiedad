// app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venta de casa en zona céntrica | San Nicolás | Dueño directo ",
  description:
    "Casa céntrica en venta en San Nicolás, terreno de 10x40 ideal para pileta. Excelente ubicación. Dueño directo, sin comisiones inmobiliarias.",
  keywords: [
    "casa céntrica en venta San Nicolás",
    "casa en venta San Nicolás dueño directo",
    "venta casa céntrica San Nicolás",
    "propiedad en venta con terreno San Nicolás",
    "casa con terreno para pileta San Nicolás",
  ],
  verification: {
    google: "rdUUjjF90FasOrDutboztFNSPi9dcf9AY6iavEZYlik",
  },
  openGraph: {
    title:
      "Venta de casa en zona céntrica | San Nicolás | Dueño Directo",
    description:
      "Oportunidad única: Venta de casa en zona céntrica. Dueño directo, sin comisiones.",
    type: "website",
    locale: "es_AR",
    url: "https://venta-propiedad1.vercel.app",
  },
  metadataBase: new URL("https://venta-propiedad1.vercel.app"),
  alternates: {
    canonical: "https://venta-propiedad1.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="rdUUjjF90FasOrDutboztFNSPi9dcf9AY6iavEZYlik"
        />
        <link rel="canonical" href="https://venta-propiedad1.vercel.app/" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
