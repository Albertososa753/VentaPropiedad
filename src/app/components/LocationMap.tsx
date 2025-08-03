"use client";

import { useState } from "react";
import { MapPin, Clock, Shield } from "lucide-react";

const MapCard = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="map-card-modern">
      {/* Header */}
  <div className="map-header">
        <div className="map-title-container">
          <MapPin className="map-icon" />
          <div>
            <h3 className="map-title">Ubicación</h3>
            <p className="map-subtitle">Consultar dirección exacta</p>
          </div>
        </div>
      </div>

      {/* Map Container
        <div className="location-badge">
          <Navigation className="badge-icon" />
          <span>Barrio Los Cedros</span>
        </div>
      
      
      
      
      
      
      
      
      */}
      <div
        className="map-container"
        style={{ position: "relative", width: "100%", height: "400px" }}
      >
        {isLoading && (
          <div className="map-skeleton">
            <div className="skeleton-content">
              <div className="skeleton-icon">
                <MapPin size={32} />
              </div>
              <div className="skeleton-text">Cargando mapa...</div>
              <div className="skeleton-pulse"></div>
            </div>
          </div>
        )}
        <iframe
          width="100%"
          height="400px"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.310737640877!2d-60.21209341107349!3d-33.336830823194475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b75d7c44f1dd11%3A0x9544b1bcd2a77902!2sItalia%20%26%20Pringles%2C%20B2900%20San%20Nicol%C3%A1s%20de%20Los%20Arroyos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1753169776649!5m2!1ses-419!2sar"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Location Info */}
      <div className="location-info">
        <div className="info-row">
          <Clock className="info-icon" />
          <div className="info-content">
            <span className="info-label">Zona tranquila</span>
            <span className="info-description">Barrio residencial</span>
          </div>
        </div>
        <div className="info-row">
          <Shield className="info-icon" />
          <div className="info-content">
            <span className="info-label">Servicios completos</span>
            <span className="info-description">Agua, luz, gas, cloacas</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapCard;
