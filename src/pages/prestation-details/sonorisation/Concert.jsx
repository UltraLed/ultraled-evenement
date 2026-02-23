import "../../../styles/PrestationDetail.css";

export default function Concert() {
  return (
    <div className="prestation-detail-page">

      {/* HERO */}
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-2.jpg`}
            alt="Sonorisation concert"
          />
        </div>

        <div className="prestation-detail-intro">
          <h1>Sonorisation – Concert & Scène</h1>
          <p>
            Une configuration professionnelle conçue pour les concerts, festivals,
            scènes ouvertes, showcases et événements nécessitant une puissance
            sonore exceptionnelle et une couverture parfaite.
          </p>
        </div>
      </section>

      {/* IDÉAL POUR + CARACTÉRISTIQUES */}
      <section className="prestation-detail-content">

        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Concerts live</li>
            <li>Festivals et scènes extérieures</li>
            <li>Showcases et performances artistiques</li>
            <li>Événements de 300 à 2000 personnes</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Caractéristiques</h2>
          <ul>
            <li>sonorisation professionnel</li>
            <li>Subs haute puissance</li>
            <li>Console numérique</li>
            <li>Technicien son + régisseur</li>
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
            src={`${import.meta.env.BASE_URL}images/prestations/sonorisation-2.jpg`}
            alt="Sonorisation"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="prestation-detail-cta">
        <h2>Une solution professionnelle pour vos concerts</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>

    </div>
  );
}
