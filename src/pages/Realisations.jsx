import { Link } from "react-router-dom";
import "../styles/Realisations.css";

const events = [
  {
    id: 1,
    video: `${import.meta.env.BASE_URL}videos/event1.mp4`,
  },
  {
    id: 2,
    video: `${import.meta.env.BASE_URL}videos/event2.mp4`,
  },
  {
    id: 3,
    video: `${import.meta.env.BASE_URL}videos/event3.mp4`,
  },
  {
    id: 4,
    video: `${import.meta.env.BASE_URL}videos/event4.mp4`,
  },
  {
    id: 5,
    video: `${import.meta.env.BASE_URL}videos/event5.mp4`,
  },
  {
    id: 6,
    video: `${import.meta.env.BASE_URL}videos/event6.mp4`,
  },
  {
    id: 7,
    video: `${import.meta.env.BASE_URL}videos/event7.mp4`,
  },
  {
    id: 8,
    
    image: `${import.meta.env.BASE_URL}images/event8.JPG`,
  },
];

export default function Realisations() {
  return (
    <div className="realisations-page">
      <section className="realisations-hero">
        <h1>Nos Réalisations</h1>
        <p>Un aperçu de nos événements son & lumière.</p>
      </section>

      <section className="realisations-grid">
        {events.map((event) => (
          <Link
            to={`/realisations/${event.id}`}
            className="real-card"
            key={event.id}
          >
            <div className="real-img">
              {event.video ? (
              <video src={event.video} muted playsInline />
              ) : (
                <img src={event.image} alt={`Événement ${event.id}`} />
              )}
            </div>
            <h3>Événement #{event.id}</h3>
            <p>Ambiance, sonorisation et mise en lumière.</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
