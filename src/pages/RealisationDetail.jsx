import { useParams, Link } from "react-router-dom";
import "../styles/Realisations.css";

const eventMedia = {
  1: {
    title: "Soirée du nouvel an - sonorisation, éclairage scénique & DJ",
    description: "Ambiance immersive avec éclairage dynamique et sonorisation premium.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event1.mp4`,
      `${import.meta.env.BASE_URL}videos/event1-1.mp4`,
      `${import.meta.env.BASE_URL}videos/event1-2.mp4`,
      `${import.meta.env.BASE_URL}videos/event1-3.mp4`,
      
    ],
    images: []
  },

  2: {
    title: "Soirée concert 14 juillet - Concert, sonorisation & éclairage",
    description: "Installation compacte pour une ambiance festive et une sonorisation premium.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event2.mp4`,
      `${import.meta.env.BASE_URL}videos/event2-1.mp4`
    ],
    images: [
      
      
    ]
  },

  3: {
    title: "Bal des internes organisé dans un lycée - DJ, sonorisation & éclairage",
    description: "Installation compacte pour une ambiance festive, une sonorisation premium, et un éclairage optimal entre l'ambiance et le scénique.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event3.mp4`,

    ],
    images: [
      
      
    ]
  },

  4: {
    title: "JDL (journée du lycéen) organisé dans un lycée - Concert, sonorisation & éclairage",
    description: "Installation compacte pour une ambiance festive et une sonorisation premium pour les musiciens comme pour le public.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event4.mp4`,
   
    ],
    images: [
      
      
    ]
  },

  5: {
    title: "Battle de break dance - Sonorisation & éclairage",
    description: "installation propre et efficace pour une sonorisation claire et un éclairage dynamique.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event5.mp4`,
    
    ],
    images: [
      
      
    ]
  },

  6: {
    title: "Bal de fin d'année organisé dans un lycée - DJ, sonorisation & éclairage",
    description: "une installation complète pour un bal de fin d'année réussi.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event6.mp4`,
      
    ],
    images: [
      
      
    ]
  },

  7: {
    title: "Soirée loto organisé pour le comité des fêtes de cluses - Sonorisation ",
    description: "sonorisation claire et puissante pour un millier de personnes.",
    videos: [
      `${import.meta.env.BASE_URL}videos/event7.mp4`,
      
    ],
    images: [
      
      
    ]
  },

  8: {
    title: "Soirée concert 14 juillet - Concert, sonorisation & éclairage",
    description: "Installation compacte pour une ambiance festive et une sonorisation premium.",
    videos: [
        
    ],
    images: [
      `${import.meta.env.BASE_URL}images/event8.JPG`,
      `${import.meta.env.BASE_URL}images/event8-1.JPG`,
      `${import.meta.env.BASE_URL}images/event8-2.JPG`,
      `${import.meta.env.BASE_URL}images/event8-3.JPG`,   
      
    ]
  },
  // Ajoute ici les autres événements (3 à 8)
};

export default function RealisationDetail() {
  const { id } = useParams();
  const event = eventMedia[id];

  if (!event) {
    return (
      <div className="realisations-page">
        <h2>Événement introuvable</h2>
        <Link to="/realisations" className="nav-link">← Retour aux réalisations</Link>
      </div>
    );
  }

  return (
    <div className="realisations-page">
      <section className="realisations-hero">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </section>

      {/* 🔥 NOUVELLE GRILLE DE CARDS */}
      <section className="realisation-detail-grid">
        {event.videos.map((src, i) => (
          <div className="media-card" key={`v-${i}`}>
            <video src={src} controls playsInline />
          </div>
        ))}

        {event.images.map((src, i) => (
          <div className="media-card" key={`i-${i}`}>
            <img src={src} alt={`Photo ${i + 1}`} />
          </div>
        ))}
      </section>

      <div className="realisations-back">
        <Link to="/realisations" className="nav-link">← Retour aux réalisations</Link>
      </div>
    </div>
  );
}
