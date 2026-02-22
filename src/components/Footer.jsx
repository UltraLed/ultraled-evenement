import "../styles/footer.css";
import logo from "../assets/ultraled-logo.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="site-footer">

        {/* Ligne LED animée */}
        <div className="footer-led-line"></div>

        <div className="footer-inner">

          {/* === COLONNE GAUCHE : LOGO + TEXTE === */}
          <div className="footer-col footer-col-brand">
            <div className="footer-logo-block">
              <img src={logo} alt="UltraLed Événement" className="footer-logo" />
              <span className="footer-brand-text">UltraLed Événement</span>
            </div>

            <p className="footer-desc">
              Sonorisation, éclairage et ambiance pour soirées privées,
              associatives et événements locaux.
            </p>

            <div className="footer-socials">
              <a 
                href="#" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                FB
              </a>

              <a 
                href="https://www.instagram.com/ultraledevenement/" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                IG
              </a>

              <a 
                href="#" 
                className="social-icon" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                YT
              </a>
            </div>

          </div>

          {/* === COLONNE NAVIGATION === */}
          <div className="footer-col">
            <h4 className="footer-section-title">Navigation</h4>
            <div className="footer-links">
              <a href="/">Accueil</a>
              <a href="/prestations">Prestations</a>
              <a href="/realisations">Réalisations</a>
              <a href="/about">À propos</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          {/* === COLONNE CONTACT === */}
          <div className="footer-col">
            <h4 className="footer-section-title">Contact</h4>
            <div className="footer-links">
              <span>Basé à Cluses (74)</span>
              <span>Vallée de l'arve & alentours</span>
              <span>Email : ultraled.evenement@gmail.com</span>
            </div>
          </div>
        </div>

        {/* === BAS DE PAGE === */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UltraLed Événement</span>
          <span>Association loi 1901</span>
        </div>
      </footer>
    </div>
  );
}
