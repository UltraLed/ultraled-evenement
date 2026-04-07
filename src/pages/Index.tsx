import { Link } from "react-router-dom";
import { ArrowRight, Music, Lightbulb, PartyPopper, Sparkles, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import NeonCard from "@/components/NeonCard";
import heroBg from "@/assets/hero-bg.jpg";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";

const services = [
  {
    icon: Music,
    title: "Sonorisation",
    description: "Systèmes audio professionnels adaptés à tout type d'événement, de l'intime au grand public.",
    glow: "blue" as const,
  },
  {
    icon: Lightbulb,
    title: "Éclairage",
    description: "Jeux de lumières performants pour une ambiance sur mesure.",
    glow: "purple" as const,
  },
  {
    icon: PartyPopper,
    title: "Effets spéciaux",
    description: "Machines à fumée, lasers et effets visuels pour des moments inoubliables.",
    glow: "pink" as const,
  },
];

const stats = [
  { icon: Star, value: "200+", label: "Événements réalisés" },
  { icon: Users, value: "100%", label: "Clients satisfaits" },
  { icon: Sparkles, value: "5+", label: "Années d'expérience" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="UltraLed événement" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
            <span className="text-foreground">Illuminez vos</span>
            <br />
            <span className="gradient-text">événements</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Son & lumière pour vos soirées. Sonorisation professionnelle et éclairages pour tous vos événements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:scale-105 glow-blue"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/prestations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-base transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              Nos prestations
            </Link>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services */}
      <Section>
        <SectionHeader
          title="Nos prestations"
          subtitle="Des solutions complètes de sonorisation et d'éclairage pour tous vos événements."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <NeonCard key={service.title} glowColor={service.glow} className="group text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </NeonCard>
          ))}
        </div>
      </Section>

      {/* Gallery preview */}
      <Section gradient>
        <SectionHeader
          title="Nos réalisations"
          subtitle="Découvrez quelques-uns de nos événements récents."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {[event1, event2, event3].map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={img}
                alt={`Réalisation ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Voir toutes nos réalisations
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="text-primary mx-auto mb-3" size={32} />
              <div className="font-display font-black text-4xl lg:text-5xl gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section gradient>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Prêt à <span className="gradient-text">illuminer</span> votre événement ?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 hover:scale-105 glow-blue"
          >
            Nous contacter
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
