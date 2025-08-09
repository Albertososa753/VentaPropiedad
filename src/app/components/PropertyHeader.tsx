"use client";

import { Ruler, Home, Bath, Car, Hammer, MapPin, Star } from "lucide-react";

export default function PropertyHeader() {
  const features = [
    { icon: Ruler, text: "Terreno 10x40 metros", highlight: true },
    { icon: Home, text: "2 dormitorios amplios" },
    { icon: Bath, text: "1 baño completo" },
    { icon: Car, text: "Garage para 2 autos" },
    { icon: Hammer, text: "Preparada para futura ampliación superior", highlight: true },
  ];

  return (
    <header className="property-header-modern" aria-labelledby="property-title">
      <div className="header-container">
        
        {/* Badge */}
        <div className="property-badge" aria-label="Oportunidad destacada">
          <Star className="badge-icon" aria-hidden="true" />
          <span>Oportunidad Única</span>
        </div>

        {/* Title */}
        <div className="property-title-container">
          <div className="location-indicator" aria-hidden="true">
            <MapPin className="location-icon" />
          </div>
          <h1 id="property-title" className="property-main-title">
            <span className="address-line">Casa Céntrica en Venta</span>
            <span className="city-line">San Nicolás de los Arroyos</span>
            <span className="price-line">Consultar precio</span>
          </h1>
          <p className="property-subtitle">
            Propiedad ubicada en zona céntrica, ideal para vivienda familiar o inversión.
          </p>
        </div>

        {/* Features */}
        <ul className="features-grid-modern" role="list">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <li
                key={index}
                className={`feature-card ${feature.highlight ? "highlight" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-container">
                  <IconComponent className="feature-icon" aria-hidden="true" />
                </div>
                <span className="feature-text">{feature.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
