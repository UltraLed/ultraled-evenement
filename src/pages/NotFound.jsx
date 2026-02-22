import "../styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <p>Page introuvable</p>
      <a href="/" className="notfound-btn">Retour à l'accueil</a>
    </div>
  );
}
