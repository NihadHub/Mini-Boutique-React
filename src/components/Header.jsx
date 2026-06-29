function Header ({cartCount, darkMode, toggleDarkMode}){
    return(
        <header className="header">
            <div className="header-brand">
                <span className="header-logo"> </span>
                <h1 className="header-title">Boutique</h1>
            </div>

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