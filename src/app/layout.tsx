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
  title:
    "Casa a la Venta, San Nicolás de los Arroyos | Dueño Directo",
  description:
    "Venta de , San Nicolás de los Arroyos. Dueño directo, terreno de 10x40, 2 dormitorios, garage para 2 autos, lista para ampliar. Oportunidad única.",
  keywords:
    "casa a la venta San Nicolás, propiedad en venta San Nicolás, dueño directo San Nicolás, venta casa , propiedades San Nicolás",
  verification: {
    google: "0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU",
  },
  openGraph: {
    title: "Casa a la Venta, San Nicolás | Dueño Directo",
    description:
      "Oportunidad de comprar casa, San Nicolás de los Arroyos. Terreno amplio, dos dormitorios, garage doble. Venta directa.",
    type: "website",
    locale: "es_AR",
    url: "https://venta-propiedad.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="0TGkKSIGTn_Zw6It3mBplTGrqZ3B8vy8EVDhA2UQqjU"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
