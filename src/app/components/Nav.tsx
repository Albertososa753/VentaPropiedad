"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, ImageIcon, FileText, Phone, MapPin } from "lucide-react"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Control de visibilidad
      if (currentScrollY < 50) {
        setShow(true)
        setScrolled(false)
      } else {
        setScrolled(true)
        if (currentScrollY > lastScrollY) {
          setShow(false)
        } else {
          setShow(true)
        }
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { href: "#inicio", label: "Inicio", icon: Home },
    { href: "#galeria", label: "Galería", icon: ImageIcon },
    { href: "#descripcion", label: "Descripción", icon: FileText },
    { href: "#contacto", label: "Contacto", icon: Phone },
  ]

  const handleNavClick = (href: string) => {
    setOpen(false)
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`navbar-modern ${show ? "visible" : "hidden"} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo/Brand */}
        <div className="nav-brand">
          <div className="brand-icon">
            <MapPin className="brand-logo" />
          </div>
          <div className="brand-text">
            <span className="brand-subtitle">San Nicolás de los Arroyos</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button key={item.href} className="nav-link-desktop" onClick={() => handleNavClick(item.href)}>
                <IconComponent className="nav-icon" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="hamburger-modern" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="hamburger-icon" /> : <Menu className="hamburger-icon" />}
        </button>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${open ? "open" : ""}`}>
          <div className="mobile-nav-content">
            <div className="mobile-header">
              <div className="mobile-brand">
                <MapPin className="mobile-brand-icon" />
                <div>
                  <div className="mobile-brand-name">Pringles al 100</div>
                  <div className="mobile-brand-subtitle">San Nicolás de los Arroyos</div>
                </div>
              </div>
            </div>

            <div className="mobile-nav-links">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.href}
                    className="nav-link-mobile"
                    onClick={() => handleNavClick(item.href)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="nav-icon-mobile" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="mobile-footer">
              <div className="contact-info">
                <Phone className="contact-icon" />
                <span>¿Consultas? ¡Contáctanos!</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Overlay */}
        {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
      </div>
    </header>
  )
}
