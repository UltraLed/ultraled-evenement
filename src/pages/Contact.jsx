import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzk7r2n",      // Ton Service ID EmailJS
        "template_da0j7as",     // Ton Template ID (celui que TU reçois)
        formRef.current,
        "dee5mlAdpvx0DesLC"         // Ta Public Key EmailJS
      )
      .then(
        () => {
          alert("Votre demande a bien été envoyée !");
          formRef.current.reset();
        },
        (error) => {
          alert("Erreur lors de l'envoi : " + error.text);
        }
      );
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact & Devis</h1>
        <p>Parlez-nous de votre événement.</p>
      </section>

      <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
        <input type="text" name="nom" placeholder="Votre Nom" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="text"
          name="type"
          placeholder="Type d'événement (soirée privée, mariage, anniversaire, etc...)"
        />
        <textarea
          name="message"
          placeholder="Votre message (dites-nous en plus sur votre événement, plus vous nous donnerez de détails, plus nous pourrons vous satisfaire)"
          rows="5"
          required
        />

        <button type="submit" className="contact-btn">
          Envoyer la demande
        </button>
      </form>
    </div>
  );
}
