import "../../../styles/PrestationDetail.css";

export default function GrandeSalle() {
  return (
    <div className="prestation-detail-page">

      {/* HERO */}
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-2.jpg`}
            alt="Sonorisation grande salle"
          />
        </div>

        <div className="prestation-detail-intro">
          <h1>Sonorisation – Grande Salle</h1>
          <p>
            Une installation puissante et immersive, pensée pour les grands
            espaces, les événements publics, les galas, les spectacles ou les
            soirées de grande envergure.
          </p>
        </div>
      </section>

      {/* IDÉAL POUR + CARACTÉRISTIQUES */}
      <section className="prestation-detail-content">

        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Événements de 150 à 400 personnes</li>
            <li>Grandes salles ou extérieurs</li>
            <li>Concerts, DJ sets puissants</li>
            <li>Événements d’entreprise</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Caractéristiques</h2>
          <ul>
            <li>Line array ou enceintes 4000W</li>
            <li>2 à 4 caissons de basses</li>
            <li>Micros HF premium</li>
            <li>Technicien son obligatoire</li>
          </ul>
        </div>

      </section>

      {/* GALERIE */}
      <section className="prestation-detail-gallery">
        <div className="prestation-detail-thumb">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-main.jpg`}
            alt="Sonorisation"
          />
        </div>
        <div className="prestation-detail-thumb">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-1.jpg`}
            alt="Sonorisation"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="prestation-detail-cta">
        <h2>Une puissance adaptée aux grands événements</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>

    </div>
  );
}
