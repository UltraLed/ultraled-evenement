import "../../../styles/PrestationDetail.css";

export default function SalleMoyenne() {
  return (
    <div className="prestation-detail-page">

      {/* HERO */}
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-1.jpg`}
            alt="Sonorisation salle moyenne"
          />
        </div>

        <div className="prestation-detail-intro">
          <h1>Sonorisation – Salle Moyenne</h1>
          <p>
            Une configuration polyvalente, idéale pour les événements de taille
            moyenne : mariages, soirées dansantes, conférences ou événements
            d’entreprise jusqu’à 150 personnes.
          </p>
        </div>
      </section>

      {/* IDÉAL POUR + CARACTÉRISTIQUES */}
      <section className="prestation-detail-content">

        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Événements de 60 à 150 personnes</li>
            <li>Salles de 80 à 200 m²</li>
            <li>DJ, discours, animations micro</li>
            <li>Mariages et soirées dansantes</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Caractéristiques</h2>
          <ul>
            <li>2 enceintes 1000W</li>
            <li>1 ou 2 caissons de basses</li>
            <li>2 micros HF</li>
            <li>Régie DJ ou mixage</li>
          </ul>
        </div>

      </section>

      {/* GALERIE */}
      <section className="prestation-detail-gallery">
        <div className="prestation-detail-thumb">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-2.jpg`}
            alt="Sonorisation salle moyenne"
          />
        </div>
        <div className="prestation-detail-thumb">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-main.jpg`}
            alt="Sonorisation salle moyenne"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="prestation-detail-cta">
        <h2>Une solution puissante et polyvalente</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>

    </div>
  );
}
