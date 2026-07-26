import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Lightbox from "@/components/Lightbox";
import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";
import event7 from "@/assets/event-7.jpeg";
import event8 from "@/assets/event-8.jpeg";
import event9 from "@/assets/event-9.jpeg";
import event10 from "@/assets/event-10.jpeg";
import event11 from "@/assets/event-11.jpeg";
import event12 from "@/assets/event-12.jpeg";
import event13 from "@/assets/event-13.jpeg";

const gallery = [

  { src: event13, alt: "Sonorisation d'un concert suivis d'une soirée DJ avec éclairage professionnel", category: "Soirée"},
  { src: event12, alt: "Soirée DJ avec éclairage professionnel et annimation", category: "Soirée"},
  { src: event10, alt: "Sonorisation d'un tournois de foot sur 2 terrain en simultanée", category: "Sonorisation"},
  { src: event11, alt: "Sonorisation de 3 groupes à la suite pour un concert suivis ", category: "Festival"},
  { src: event9, alt: "Soirée DJ avec éclairage dynamique", category: "Soirée"},
  { src: event8, alt: "Anniversaire à domicile avec éclairage et DJ", category: "Anniversaire" },
  { src: event7, alt: "Sonorisation de la cérémonie du 8 mai à Cluses", category: "Sonorisation"},
  { src: event6, alt: "Système de sonorisation professionnel", category: "Sonorisation" },
  { src: event5, alt: "Anniversaire avec ambiance colorée", category: "Anniversaire" },
  { src: event3, alt: "Événement corporate avec scène ", category: "Corporate" },
  { src: event1, alt: "Soirée DJ avec éclairage ", category: "Soirée" },
  { src: event4, alt: "Festival en plein air avec éclairages", category: "Festival" },
  { src: event2, alt: "Mariage avec mise en lumière ", category: "Sonorisation" },
  
  
  
  
  
  
  
  
];

const categories = ["Tous", ...new Set(gallery.map((g) => g.category))];

const Realisations = () => {
  const [filter, setFilter] = useState("Tous");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === "Tous" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Nos réalisations</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos événements passés et laissez-vous inspirer pour votre prochain projet.
          </p>
        </div>
      </section>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground glow-blue"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filtered.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setLightboxIndex(gallery.indexOf(item))}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                  <p className="text-foreground text-sm mt-1">{item.alt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Realisations;
