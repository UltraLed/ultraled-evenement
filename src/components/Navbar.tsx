import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo ultraled.png"; // <-- Import du logo

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Prestations", path: "/prestations" },
  { label: "Réalisations", path: "/realisations" },
  { label: "À propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50 bg-background/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="UltraLed Événement"
              className="w-10 h-10 rounded-lg object-contain glow-blue group-hover:scale-110 transition-transform"
            />
            <div>
              <span className="font-display font-bold text-foreground text-sm lg:text-base tracking-wide">
                ULTRALED
              </span>
              <span className="block text-xs text-muted-foreground -mt-0.5">
                ÉVÉNEMENT
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary text-glow-blue"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-105 glow-blue"
          >
            Demander un devis
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm text-center glow-blue"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
