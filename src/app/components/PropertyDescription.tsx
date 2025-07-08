export default function PropertyDetails() {
  const characteristics = [
    "Dueño directo, sin comisiones",
    "Apta crédito y escritura al día",
    "Cañerías nuevas de gas y agua en baño, cocina y lavadero",
    "Boca de gas adicional junto al termotanque para posible quincho",
    "Sobre techo en dormitorio principal y living (4 años antigüedad)",
    "Aberturas de aluminio nuevas (5 años antigüedad)",
    "Parte nueva (dormitorio chico, resto cocina, baño y lavadero) preparada para construir arriba",
    "Tanque de agua nuevo",
    "Terreno de 10x40 con espacio para piscina",
    "Quincho con parrilla",
    "Cocina comedor integrada",
    "Zona residencial tranquila y cómoda",
  ];

  return (
    <div id="descripcion" className="property-details">
      <div className="details-container">
        <div>
          <h3 className="section-title sale">Casa en Venta</h3>
          <h2 className="main-title">Hermosa Propiedad en Barrio Los Cedros, San Nicolás</h2>
        </div>

        <div>
          <h4 className="section-subtitle">Distribución</h4>
          <p className="section-content">
            Propiedad con dos dormitorios, baño completo renovado, cocina comedor integrada, lavadero independiente, quincho con parrilla y garage para dos autos. La propiedad está preparada para una futura ampliación superior.
          </p>
        </div>

        <div>
          <h4 className="section-subtitle">Superficie</h4>
          <p className="section-content">
            <strong>Superficie total:</strong> Terreno de 10x40 metros.
          </p>
        </div>

        <div>
          <h4 className="section-subtitle">Entorno</h4>
          <p className="section-content">
            Situada en Barrio Los Cedros, una zona tranquila y cómoda de San Nicolás, cerca de todos los servicios esenciales. Ideal para vivir en familia o como inversión.
          </p>
        </div>

        <div className="detail-section">
          <h4 className="section-subtitle">Potencial</h4>
          <p className="section-content">
            Excelente potencial para ampliaciones gracias a la estructura preparada y amplio terreno disponible para colocar una piscina y otros espacios recreativos.
          </p>
        </div>

        <div className="characteristics-section">
          <h4 className="section-subtitle">Características destacadas</h4>
          <div className="characteristics-grid">
            {characteristics.map((characteristic, index) => (
              <div key={index} className="characteristic-item">
                <span className="check-icon">✓</span>
                <span>{characteristic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
