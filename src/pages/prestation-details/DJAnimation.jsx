import "../../styles/PrestationDetail.css";

export default function DJAnimation() {
  const gallery = [
    `${import.meta.env.BASE_URL}images/prestations/dj-main.png`,
    `${import.meta.env.BASE_URL}images/prestations/dj-1.jpg`,
    `${import.meta.env.BASE_URL}images/prestations/dj-2.jpg`,
  ];

  return (
    <div className="prestation-detail-page">
      <section className="prestation-detail-hero">
        <div className="prestation-detail-main-media">
          <img src={gallery[0]} alt="DJ et animation" />
        </div>

        <div className="prestation-detail-intro">
          <h1>DJ & Animation</h1>
          <p>
            Ambiance musicale adaptée à votre événement, avec un DJ capable de
            s’adapter à tous les styles et toutes les générations.
          </p>
          <p>
            Idéal pour mariages, anniversaires, soirées privées ou événements
            d’entreprise.
          </p>
        </div>
      </section>

      <section className="prestation-detail-gallery">
        {gallery.slice(1).map((src, i) => (
          <div className="prestation-detail-thumb" key={i}>
            <img src={src} alt={`DJ vue ${i + 1}`} />
          </div>
        ))}
      </section>

      <section className="prestation-detail-content">
        <div className="prestation-detail-block">
          <h2>Idéal pour</h2>
          <ul>
            <li>Mariages</li>
            <li>Anniversaires</li>
            <li>Soirées privées</li>
            <li>Événements d’entreprise</li>
          </ul>
        </div>

        <div className="prestation-detail-block">
          <h2>Options disponibles</h2>
          <ul>
            <li>DJ professionnel</li>
            <li>Animation micro</li>
            <li>Playlist personnalisée</li>
            <li>Effets lumineux synchronisés</li>
          </ul>
        </div>
      </section>

      <section className="prestation-detail-cta">
        <h2>Envie d’une ambiance sur mesure ?</h2>
        <button className="prestation-detail-btn">Demander un devis</button>
      </section>
    </div>
  );
}
