import { Link } from "react-router-dom";
import { Music, Lightbulb, PartyPopper, Speaker, Disc3, Camera, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import NeonCard from "@/components/NeonCard";

const prestations = [
  {
    icon: Speaker,
    title: "Sonorisation",
    description: "Systèmes audio professionnels de haute qualité adaptés à la taille de votre événement.",
    features: ["Enceintes professionnelles", "Table de mixage", "Microphones sans fil", "Retours scéniques"],
    glow: "blue" as const,
  },
  {
    icon: Lightbulb,
    title: "Éclairage LED",
    description: "Mise en lumière sur mesure avec les dernières technologies LED pour sublimer vos espaces.",
    features: ["Projecteurs LED RGBW", "Barres LED motorisées", "Uplighting architectural", "Gobos personnalisés"],
    glow: "purple" as const,
  },
  {
    icon: PartyPopper,
    title: "Effets spéciaux",
    description: "Des effets visuels spectaculaires pour rendre vos moments vraiment inoubliables.",
    features: ["Machine à fumée lourde", "Lasers multicolores", "Confettis & serpentins", "Bulles géantes"],
    glow: "pink" as const,
  },
  {
    icon: Disc3,
    title: "DJ & Animation",
    description: "Animation musicale professionnelle pour faire vibrer votre soirée du début à la fin.",
    features: ["DJ professionnel", "Playlist personnalisée", "Karaoké", "Jeux de lumières synchronisés"],
    glow: "blue" as const,
  },
  {
    icon: Camera,
    title: "Photobooth",
    description: "Un espace photo fun et interactif avec impressions instantanées pour vos invités.",
    features: ["Accessoires variés", "Impressions immédiates", "Galerie en ligne", "Fond personnalisable"],
    glow: "purple" as const,
  },
  {
    icon: Music,
    title: "Pack complet",
    description: "Une offre clé en main incluant son, lumière et animation pour un événement sans souci.",
    features: ["Sonorisation complète", "Éclairage LED intégral", "DJ & animation", "Installation & démontage"],
    glow: "pink" as const,
  },
];

const Prestations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Nos prestations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Des solutions professionnelles de sonorisation et d'éclairage LED adaptées à chaque événement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {prestations.map((presta) => (
            <NeonCard key={presta.title} glowColor={presta.glow} className="group flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <presta.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{presta.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{presta.description}</p>
              <ul className="mt-auto space-y-2">
                {presta.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </NeonCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section gradient>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Une prestation sur mesure ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Chaque événement est unique. Contactez-nous pour un devis personnalisé adapté à vos besoins.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 glow-blue"
          >
            Demander un devis
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Prestations;
