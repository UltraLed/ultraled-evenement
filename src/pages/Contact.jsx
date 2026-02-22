import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact & Devis</h1>
        <p>Parlez-nous de votre événement.</p>
      </section>

      <form className="contact-form">
        <input type="text" placeholder="Votre Nom" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Type d'événement (soirée privée, mariage, anniversaire, etc...)" />
        <textarea placeholder="Votre message (dites-nous en plus sur votre événement, plus vous nous donnerez de details, plus nous pourrons vous satisfaire)" rows="5" />

        <button type="submit" className="contact-btn">
          Envoyer la demande
        </button>
      </form>
    </div>
  );
}
