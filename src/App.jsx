import { useState } from "react"
import productsData from "./data/products.json"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"

function App() {
  const [products, setProducts] = useState(productsData)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

 const handleDeleteProduct = (id) => {
  setProducts(products.filter((p) => p.id !== id))
  setCartItems(cartItems.filter((item) => item.id !== id))
}

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id)
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const handleIncreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const handleDecreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Header
        cartCount={cartCount}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="main-content">
        <ProductList
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={handleAddToCart}
          onDeleteProduct={handleDeleteProduct}
        />
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onIncreaseQty={handleIncreaseQty}
          onDecreaseQty={handleDecreaseQty}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App