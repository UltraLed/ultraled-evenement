import { useNavigate } from "react-router-dom";
import "../styles/CardLink.css";

export default function CardLink({ title, description, target }) {
  const navigate = useNavigate();

  return (
    <div className="card-link" onClick={() => navigate(`/${target}`)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
