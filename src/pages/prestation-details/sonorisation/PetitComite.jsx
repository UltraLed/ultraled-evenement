import "../../../styles/PrestationDetail.css";

export default function PetitComite() {
  return (
    <div className="prestation-detail-page">

      {/* HERO */}
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-main.jpg`}
            alt="Sonorisation petit comité"
          />
        </div>

        <div className="prestation-detail-intro">
          <h1>Sonorisation – Petit Comité</h1>
          <p>
            Une solution compacte, élégante et parfaitement adaptée aux petits
            événements : anniversaires, réunions, cocktails, cérémonies ou
            soirées privées jusqu’à 70-80 personnes.
          </p>
        </div>
      </section>

      {/* IDÉAL POUR + CARACTÉRISTIQUES */}
      <section className="prestation-detail-content">

        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Événements de 20 à 70-80 personnes</li>
            <li>Petites salles (20 à 80 m²)</li>
            <li>Discours, fond musical, ambiance douce</li>
            <li>Soirées privées et cocktails</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Caractéristiques</h2>
          <ul>
            <li>System HK AUDIO 1450 W 2 enceintes et un caisson de basse</li>
            <li>Micro filaire ou HF</li>
            <li>Table de mixage simple</li>
            <li>Installation rapide et discrète</li>
            <li>Possibilité de prendre une autre prestation avec</li>
          </ul>
        </div>

      </section>

      {/* GALERIE */}
      <section className="prestation-detail-gallery">
        <div className="prestation-detail-thumb">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-1.jpg`}
            alt="Sonorisation petit comité"
          />
        </div>
        <div className="prestation-detail-thumb">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-2.jpg`}
            alt="Sonorisation petit comité"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="prestation-detail-cta">
        <h2>Besoin d’un système discret et efficace ?</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>

    </div>
  );
}
