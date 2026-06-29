import ProductCard from "./ProductCard"
import CategoryFilter from "./CategoryFilter"

function ProductList({ products, onAddToCart, onDeleteProduct, onSelectCategory, selectedCategory }) {
  const categories = [...new Set(products.map((p) => p.category))]

  const filteredProducts =
    selectedCategory === "Tous"
      ? products
      : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="product-list-section">
      <h2 className="section-title">Nos Produits</h2>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />

      {filteredProducts.length === 0 ? (
        <p className="empty-message">Aucun produit dans cette catégorie.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onDeleteProduct={onDeleteProduct}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default ProductList