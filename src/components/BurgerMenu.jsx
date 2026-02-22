import { Link } from "react-router-dom";
import "../styles/header.css";

function BurgerMenu({ closeMenu }) {
  return (
    <nav className="burger-menu">
      <Link to="/" onClick={closeMenu}>Accueil</Link>
      <Link to="/about" onClick={closeMenu}>À propos</Link>
      <Link to="/realisations" onClick={closeMenu}>Réalisations</Link>
      <Link to="/prestations" onClick={closeMenu}>Prestations</Link>
      <Link to="/tarifs" onClick={closeMenu}>Tarifs</Link>
      <Link to="/contact" onClick={closeMenu}>Contact</Link>
    </nav>
  );
}

export default BurgerMenu;
