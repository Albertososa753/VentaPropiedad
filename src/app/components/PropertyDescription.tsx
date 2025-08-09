"use client"

import { Home, Ruler, TrendingUp, CheckCircle2, Layout, TreePine } from "lucide-react"

export default function PropertyDetails() {
  const characteristics = [
    "Dueño directo, sin comisiones",
    "Apta crédito y escritura al día",
    "Cañerías nuevas de gas y agua en baño, cocina y lavadero",
    "Boca de gas adicional junto al termotanque para posible quincho",
    "Sobre techo en dormitorio principal y living (4 años antigüedad)",
    "Aberturas de aluminio nuevas (5 años antigüedad)",
    "Parte nueva (dormitorio chico, resto cocina, baño y lavadero) preparada para futura ampliación",
    "Tanque de agua nuevo",
    "Terreno de 10x40 con espacio para piscina",
    "Quincho con parrilla",
    "Cocina comedor integrada",
    "Zona residencial tranquila y cómoda",
  ]

  const sections = [
    {
      icon: Layout,
      title: "Distribución",
      content:
        "Propiedad con dos dormitorios, baño completo renovado, cocina comedor integrada, lavadero independiente, quincho con parrilla y garage para dos autos. La propiedad está preparada para una futura ampliación superior.",
    },
    {
      icon: Ruler,
      title: "Superficie",
      content: "Superficie total: Terreno de 10x40 metros.",
    },
    {
      icon: TreePine,
      title: "Entorno",
      content:
        "Situada en Zona Céntrica, una zona tranquila y cómoda de San Nicolás, cerca de todos los servicios esenciales. Ideal para vivir en familia o como inversión.",
    },
    {
      icon: TrendingUp,
      title: "Potencial",
      content:
        "Excelente potencial para ampliaciones gracias a la estructura preparada y amplio terreno disponible para colocar una piscina y otros espacios recreativos.",
    },
  ]

  return (
    <div id="descripcion" className="property-details-modern">
      <div className="details-modern-container">
        {/* Header Section */}
        <div className="details-header">
          <div className="header-badge">
            <Home className="badge-icon" />
            <span>Casa en Venta</span>
          </div>
        </div>

        {/* Info Sections */}
        <div className="info-sections">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div key={index} className="info-card">
                <div className="card-header">
                  <div className="icon-container">
                    <IconComponent className="section-icon" />
                  </div>
                  <h4 className="card-title">{section.title}</h4>
                </div>
                <p className="card-content">
                  {section.title === "Superficie" ? (
                    <>
                      <strong>Superficie total:</strong> Terreno de 10x40 metros.
                    </>
                  ) : (
                    section.content
                  )}
                </p>
              </div>
            )
          })}
        </div>

        {/* Characteristics Section */}
        <div className="characteristics-modern">
          <div className="characteristics-header">
            <div className="icon-container">
              <CheckCircle2 className="section-icon" />
            </div>
            <h4 className="characteristics-title">Características destacadas</h4>
          </div>

          <div className="characteristics-grid-modern">
            {characteristics.map((characteristic, index) => (
              <div key={index} className="characteristic-modern">
                <div className="check-container">
                  <CheckCircle2 className="check-icon-modern" />
                </div>
                <span className="characteristic-text">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
