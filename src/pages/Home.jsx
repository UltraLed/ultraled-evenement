import "../styles/Home.css";
import CardLink from "../components/CardLink.jsx";

export default function Home() {
  return (
    <section className="home">
      <div className="home-hero">
        <h1 className="home-title">
          Illuminez vos <span className="gradient">événements</span>
        </h1>
      </div>

      {/* IMAGE ENTRE LE TITRE ET LES CARDS */}
      <div className="home-hero-image">
        <img
          src={`${import.meta.env.BASE_URL}images/home/hero-image.jpg`}
          alt="Ambiance lumineuse UltraLed"
        />
      </div>

      <div className="home-cards">
        <CardLink
          title="Prestations"
          description="Sonorisation & éclairages LED"
          target="prestations"
        />

        <CardLink
          title="Réalisations"
          description="Nos événements passés"
          target="realisations"
        />

        <CardLink
          title="Contact"
          description="Demande de devis"
          target="contact"
        />
      </div>
    </section>
  );
}