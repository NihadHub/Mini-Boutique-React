import { useNavigate } from "react-router-dom"

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="notfound-page">
      <h1 className="notfound-code">404</h1>
      <p className="notfound-title">Page introuvable</p>
      <p className="notfound-msg">
        La page que vous cherchez n'existe pas ou a été déplacée.
      </p>
      <button className="btn-add" onClick={() => navigate("/")}>
        Retour à l'accueil
      </button>
    </div>
  )
}

export default NotFound