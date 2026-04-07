import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo ultraled.png"; // <-- Import du logo

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50">
      {/* LED animated line */}
      <div className="led-line w-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="UltraLed Événement"
                className="w-12 h-12 rounded-lg object-contain glow-blue"
              />
              <div>
                <span className="font-display font-bold text-foreground tracking-wide">
                  ULTRALED
                </span>
                <span className="block text-xs text-muted-foreground -mt-0.5">
                  ÉVÉNEMENT
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Son & lumière pour vos soirées. Nous illuminons vos événements avec des prestations professionnelles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Accueil", path: "/" },
                { label: "Prestations", path: "/prestations" },
                { label: "Réalisations", path: "/realisations" },
                { label: "À propos", path: "/a-propos" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@ultraled-evenement.fr"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} />
                contact@ultraled-evenement.fr
              </a>

              <a
                href="tel:+33600000000"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} />
                06 11 68 29 92
              </a>

              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                France (Haute-savoie)
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Suivez-nous</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://www.facebook.com/share/1Ag91zDRgu/?mibextid=wwXIfr", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/ultraledevenement/", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 neon-border-hover transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UltraLed Événement. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
