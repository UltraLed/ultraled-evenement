import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/ultraled-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">

          {/* LOGO + TITRE CLIQUABLES */}
          <Link to="/" className="header-left" onClick={closeMenu}>
            <img src={logo} alt="UltraLed Événement" className="header-logo" />
            <div className="header-title">
              <span className="header-name">UltraLed Événement</span>
              <span className="header-tagline">Son & lumière pour vos soirées</span>
            </div>
          </Link>

          {/* NAVIGATION DESKTOP */}
          <nav className="nav-links">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/prestations" className="nav-link">Prestations</Link>
            <Link to="/realisations" className="nav-link">Réalisations</Link>
            <Link to="/about" className="nav-link">À propos</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* CTA */}
          <Link to="/contact" className="nav-link cta-highlight">
            Demander un devis
          </Link>

          {/* BURGER */}
          <button
            className={`burger ${open ? "open" : ""}`}
            type="button"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="burger-lines">
              <div className="burger-line" />
              <div className="burger-line" />
              <div className="burger-line" />
            </div>
          </button>
        </div>
      </header>

      {/* MENU MOBILE */}
      {open && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <Link to="/" className="mobile-link" onClick={closeMenu}>
              <span>Accueil</span>
              <span>Présentation</span>
            </Link>

            <Link to="/prestations" className="mobile-link" onClick={closeMenu}>
              <span>Prestations</span>
              <span>Son & lumière</span>
            </Link>

            <Link to="/realisations" className="mobile-link" onClick={closeMenu}>
              <span>Réalisations</span>
              <span>Nos événements</span>
            </Link>

            <Link to="/about" className="mobile-link" onClick={closeMenu}>
              <span>À propos</span>
              <span>Qui sommes-nous</span>
            </Link>

            <Link to="/contact" className="mobile-link" onClick={closeMenu}>
              <span>Contact</span>
              <span>Devis & infos</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
