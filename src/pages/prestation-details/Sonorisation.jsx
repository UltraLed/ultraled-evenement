import { Link } from "react-router-dom";
import "../../styles/PrestationDetail.css";

export default function Sonorisation() {
  const systems = [
    {
      id: "petit-comite",
      title: "Sonorisation de petit comité",
      img: `${import.meta.env.BASE_URL}images/prestations/sonorisation-2.jpg`,
      link: "/prestation/sonorisation/petit-comite",
    },
    {
      id: "salle-moyenne",
      title: "Sonorisation de salle moyenne (100–200 m²)",
      img: `${import.meta.env.BASE_URL}images/prestations/sonorisation-main.jpg`,
      link: "/prestation/sonorisation/salle-moyenne",
    },
    {
      id: "grande-salle",
      title: "Sonorisation de grande salle (200–500 m²)",
      img: `${import.meta.env.BASE_URL}images/prestations/sonorisation-3.jpg`,
      link: "/prestation/sonorisation/grande-salle",
    },
    {
      id: "concert",
      title: "Sonorisation de concert",
      img: `${import.meta.env.BASE_URL}images/prestations/sonorisation-1.jpg`,
      link: "/prestation/sonorisation/concert",
    },
  ];

  return (
    <div className="prestation-detail-page">

      {/* HERO */}
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-main.jpg`}
            alt="Sonorisation"
          />
        </div>

        <div className="prestation-detail-intro">
          <h1>Nos solutions de sonorisation</h1>
          <p>
            Découvrez nos différentes configurations de sonorisation adaptées à
            tous types d’événements : petits comités, salles moyennes, grandes
            salles ou concerts. Chaque système est optimisé pour offrir une
            qualité audio claire, puissante et homogène.
          </p>
        </div>
      </section>

      {/* CARDS DES SYSTÈMES */}
      <section className="prestation-detail-gallery cards-grid">
        {systems.map((sys) => (
          <Link to={sys.link} key={sys.id} className="sound-card">
            <div className="sound-card-img">
              <img src={sys.img} alt={sys.title} />
            </div>
            <h3 className="sound-card-title">{sys.title}</h3>
          </Link>
        ))}
      </section>

    </div>
  );
}
