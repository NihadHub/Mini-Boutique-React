import { NavLink } from "react-router-dom"

function Header({ cartCount, darkMode, toggleDarkMode }) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">🛍️</span>
        <h1 className="header-title">Boutique</h1>
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          Catalogue
        </NavLink>
        <NavLink
          to="/add-product"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
        >
          + Ajouter
        </NavLink>
      </nav>

      <div className="header-actions">
        <button className="btn-darkmode" onClick={toggleDarkMode}>
          {darkMode ? "Light" : "Dark"}
        </button>
        <div className="header-cart-icon">
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header