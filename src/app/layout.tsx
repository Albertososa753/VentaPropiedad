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
  title: "Casa Céntrica en Venta en San Nicolás | Dueño Directo con Terreno",
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
    google: "0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU",
  },
  openGraph: {
    title: "Casa Céntrica con Terreno para Pileta | San Nicolás | Dueño Directo",
    description:
      "Oportunidad única: casa céntrica en San Nicolás con terreno de 10x40 ideal para pileta. Dueño directo, sin comisiones.",
    type: "website",
    locale: "es_AR",
    url: "https://venta-propiedad.vercel.app",
  },
  metadataBase: new URL("https://venta-propiedad.vercel.app"),
  alternates: {
    canonical: "https://venta-propiedad.vercel.app",
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
          content="0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU"
        />
        <link
          rel="canonical"
          href="https://venta-propiedad.vercel.app/"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
