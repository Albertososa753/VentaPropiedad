"use client";

import PropertyHero from "./components/PropertyHero";
import PropertyHeader from "./components/PropertyHeader";
import Nav from "./components/Nav";
import PhotoGallery from "./components/PhotoGallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MapCard from "./components/LocationMap";
import PropertyDetails from "./components/PropertyDescription";
import useIsMobile from "./hooks/useIsMobile";
import "./styles/hero.css";
import "./styles/property-details-modern.css";
import "./styles/contact-modern.css";
import "./styles/photo-gallery-modern.css";
import "./styles/property-header-modern.css";
import "./styles/map-card-modern.css";
import "./styles/nav-modern.css";
import "./styles/footer-modern.css";

export default function HomePage() {
  const isMobile = useIsMobile();

  const sliderImages = [
    "/images/11.jpeg",
    "/images/5.jpeg",
    "/images/2.jpeg",
    "/images/4.jpeg",
    "/images/1.jpeg",
    "/images/3.jpeg",
    "/images/7.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
  ];

  const ocultarEnMobile = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
  ];

  return (
    <>
      <Nav />
      <main>
        <PropertyHero images={sliderImages} excludeOnMobile={ocultarEnMobile} />

        <div className="property" id="inicio">
          <PropertyHeader />

          <section className="property-container">
            <section className="property-gallery">
              <PhotoGallery images={sliderImages} />
            </section>

            {!isMobile && (
              <section id="descripcion" className="property-map">
                <MapCard />
              </section>
            )}
          </section>

          <div className="property-details-container">
            <PropertyDetails />
            {isMobile && (
              <section id="descripcion" className="property-map">
                <MapCard />
              </section>
            )}
            <section id="contacto" className="seccion-contacto">
              <div className="contact-container">
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
