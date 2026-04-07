import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Zap, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NeonCard from "@/components/NeonCard";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Nous sommes passionnés par l'événementiel et mettons tout en œuvre pour créer des moments uniques.",
    glow: "pink" as const,
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Du matériel professionnel de haute qualité et une équipe rigoureuse pour garantir le succès de votre événement.",
    glow: "blue" as const,
  },
  {
    icon: Zap,
    title: "Réactivité",
    description: "Nous nous adaptons rapidement à vos besoins et proposons des solutions sur mesure en un temps record.",
    glow: "purple" as const,
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque prestation pour dépasser vos attentes.",
    glow: "blue" as const,
  },
];

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">À propos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            UltraLed Événement, c'est avant tout une équipe passionnée au service de vos plus beaux moments.
          </p>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-6">
            Notre histoire
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Fondée par des passionnés de son et de lumière, UltraLed Événement est née de la volonté de rendre chaque événement inoubliable. 
            Nous mettons à votre disposition notre expertise technique et notre créativité pour transformer vos idées en réalité.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Qu'il s'agisse d'un mariage, d'un anniversaire, d'un événement d'entreprise ou d'un festival, 
            nous vous accompagnons de la conception à la réalisation pour créer une atmosphère unique et mémorable.
          </p>
        </div>
      </Section>

      {/* Values */}
      <Section gradient>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-center gradient-text mb-12 lg:mb-16">
          Nos valeurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value) => (
            <NeonCard key={value.title} glowColor={value.glow} className="group flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <value.icon className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            </NeonCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-display font-bold text-3xl text-foreground mb-6">
            Envie de travailler avec nous ?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 glow-blue"
          >
            Contactez-nous
            <ArrowRight size={18} />
          </Link>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default APropos;
