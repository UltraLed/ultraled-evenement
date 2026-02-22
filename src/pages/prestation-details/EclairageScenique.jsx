import "../../styles/PrestationDetail.css";

export default function EclairageScenique() {
  const gallery = [
    `${import.meta.env.BASE_URL}images/prestations/eclairage-scenique-1.jpg`,
    `${import.meta.env.BASE_URL}images/prestations/eclairage-scenique-2.jpg`,
    `${import.meta.env.BASE_URL}images/prestations/eclairage-scenique-main.jpg`,
  ];

  return (
    <div className="prestation-detail-page">

      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media video-wrapper">
          <video
            src={`${import.meta.env.BASE_URL}videos/prestations/eclairage-scenique-main.mp4`}
            controls
            playsInline
          ></video>
        </div>

        <div className="prestation-detail-intro">
          <h1>Éclairage Scénique</h1>
          <p>
            Mise en lumière professionnelle pour scènes, concerts, spectacles,
            conférences ou événements d’entreprise.
          </p>
          <p>
            Nous utilisons des projecteurs puissants, des effets scéniques et
            des configurations adaptées à la taille de votre évènement.
          </p>
        </div>
      </section>

      <section className="prestation-detail-gallery">
        {gallery.map((src, i) => (
          <div className="prestation-detail-thumb" key={i}>
            <img src={src} alt={`Éclairage scénique vue ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="prestation-detail-content">
        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Concerts</li>
            <li>Scènes extérieures</li>
            <li>Conférences</li>
            <li>Événements professionnels</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Options disponibles</h2>
          <ul>
            <li>Projecteurs scéniques</li>
            <li>Effets dynamiques</li>
            <li>Contrôle DMX</li>
            <li>Technicien lumière</li>
          </ul>
        </div>
      </section>

      <section className="prestation-detail-cta">
        <h2>Besoin d’un éclairage scénique professionnel ?</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>

    </div>
  );
}
