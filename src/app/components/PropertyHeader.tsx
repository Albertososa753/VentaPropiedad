"use client"

import { Ruler, Home, Bath, Car, Hammer, MapPin, Star } from "lucide-react"

export default function PropertyHeader() {
  const features = [
    { icon: Ruler, text: "Terreno 10x40", highlight: true },
    { icon: Home, text: "2 Dormitorios" },
    { icon: Bath, text: "1 Baño" },
    { icon: Car, text: "Garage 2 Autos" },
    { icon: Hammer, text: "Preparado para una futura ampliación superior.", highlight: true },
  ]

  return (
    <section className="property-header-modern">
      <div className="header-container">
        {/* Badge */}
        <div className="property-badge">
          <Star className="badge-icon" />
          <span>OPORTUNIDAD ÚNICA</span>
        </div>

        {/* Title */}
        <div className="property-title-container">
          <div className="location-indicator">
            <MapPin className="location-icon" />
          </div>
          <h2 className="property-main-title">
            <span className="address-line">ZONA CÉNTRICA</span>
            <span className="city-line">SAN NICOLÁS DE LOS ARROYOS</span>
            <span className="price-line">Consultar precio</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid-modern">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className={`feature-card ${feature.highlight ? "highlight" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon-container">
                  <IconComponent className="feature-icon" />
                </div>
                <span className="feature-text">{feature.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
