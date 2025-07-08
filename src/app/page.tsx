"use client";

import Head from "next/head";
import Nav from "./components/Nav";
import ImageSlider from "./components/ImageSlider";
import PhotoGallery from "./components/PhotoGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { Ruler, Bath, Car, Navigation, Home, Hammer } from "lucide-react";
import MapCard from "./components/MapPhotoCard";
import useIsMobile from "./hooks/useIsMobile";
import PropertyDetails from "./components/PropertyDescription";

export default function HomePage() {
  const isMobile = useIsMobile();

  const sliderImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
 
  ];

  const ocultarEnMobile = [
    "/images/quinta3.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/quinta2.jpg",
    "/images/15.jpg",
  ];

  const latitude = "-33.378139";
  const longitude = "-60.285222";

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`,
      "_blank"
    );
  };

  return (
    <>
      <Head>
        <title>Propiedad en San Nicolás - Dueño Directo | Venta Casa San Nicolás</title>
        <meta
          name="description"
          content="Venta propiedad San Nicolás, dueño directo, sin intermediarios, cañerías nuevas, apta ampliación, terreno de 10x40. Oportunidad única."
        />
        <meta
          name="keywords"
          content="propiedad san nicolas, casa san nicolas dueño directo, venta propiedad san nicolas, casa en venta dueño directo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <main>
        <ImageSlider images={sliderImages} excludeOnMobile={ocultarEnMobile} />

        <div className="property" id="inicio">
          <section>
            <div className="property-header">
              <h2>PROPIEDAD, SAN NICOLÁS - Consultar precio</h2>
            </div>

            <div className="property-features">
              <span className="feature"><Ruler size={18} /> Terreno 10x40</span>
              <span className="feature"><Home size={18} /> 2 Dormitorios</span>
              <span className="feature"><Bath size={18} /> 1 Baño</span>
              <span className="feature"><Car size={18} /> Garage 2 Autos</span>
              <span className="feature"><Hammer size={18} /> Preparado para construir arriba</span>
            </div>
          </section>

          <section className="property-container">
            {!isMobile && (
              <section id="descripcion" className="property-map">
                <MapCard />
                <button className="maps-button" onClick={openGoogleMaps}>
                  Ver en Google Maps <Navigation size={20} />
                </button>
              </section>
            )}

            <section className="property-gallery">
              <PhotoGallery images={sliderImages} />
            </section>
          </section>

          <div className="property-details-container">
            <PropertyDetails />

            {isMobile && (
              <section id="descripcion" className="property-map">
                <MapCard />
                <button className="maps-button" onClick={openGoogleMaps}>
                  Ver en Google Maps <Navigation size={20} />
                </button>
              </section>
            )}

            <section id="contacto" className="seccion-contacto">
              <div className="contact-container">
                <h2>¿Te interesa esta propiedad?</h2>
                <p className="contact-subtitle">
                  Contactanos para más información o coordinar una visita
                </p>
                <ContactForm />
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}