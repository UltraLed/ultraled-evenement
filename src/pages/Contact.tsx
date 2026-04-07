import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import NeonCard from "@/components/NeonCard";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",      // <-- corrigé ici
    message: "",
  });

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xzk7r2n",
        "template_da0j7as",
        formRef.current,
        "dee5mlAdpvx0DesLC"
      )
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          type: "",   // <-- reset cohérent
          message: "",
        });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet ? Contactez-nous pour en discuter et obtenir un devis gratuit.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">Nos coordonnées</h2>

            {[
              { icon: Mail, label: "Email", value: "contact@ultraled-evenement.fr", href: "mailto:contact@ultraled-evenement.fr" },
              { icon: Phone, label: "Téléphone", value: "06 00 00 00 00", href: "tel:+33600000000" },
              { icon: MapPin, label: "Localisation", value: "France", href: undefined },
            ].map((info) => (
              <NeonCard key={info.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-foreground text-sm hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-sm">{info.value}</p>
                  )}
                </div>
              </NeonCard>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <NeonCard glowColor="purple" className="p-8">
              <h2 className="font-display font-bold text-2xl text-foreground mb-6">Demander un devis</h2>

              {/* Message de succès / erreur */}
              {status === "success" && (
                <p className="mb-4 text-green-400 font-medium">
                  ✔ Votre message a bien été envoyé !
                </p>
              )}
              {status === "error" && (
                <p className="mb-4 text-red-400 font-medium">
                  ✖ Une erreur est survenue. Réessayez plus tard.
                </p>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Nom complet *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm"
                      placeholder="votre@email.fr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm"
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Type d'événement</label>
                    <select
                      name="type"   // <-- corrigé ici
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm"
                    >
                      <option value="">Sélectionner...</option>
                      <option value="mariage">Mariage</option>
                      <option value="anniversaire">Anniversaire</option>
                      <option value="corporate">Événement corporate</option>
                      <option value="festival">Festival</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm resize-none"
                    placeholder="Décrivez votre événement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-[1.02] glow-blue"
                >
                  <Send size={18} />
                  Envoyer ma demande
                </button>
              </form>
            </NeonCard>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Contact;
