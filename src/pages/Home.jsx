import ProductList from "../components/ProductList"
import Cart from "../components/Cart"

function Home({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onDeleteProduct,
  cartItems,
  onRemoveFromCart,
  onIncreaseQty,
  onDecreaseQty,
}) {
  return (
    <>
      <ProductList
        products={products}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        onAddToCart={onAddToCart}
        onDeleteProduct={onDeleteProduct}
      />
      <Cart
        cartItems={cartItems}
        onRemoveFromCart={onRemoveFromCart}
        onIncreaseQty={onIncreaseQty}
        onDecreaseQty={onDecreaseQty}
      />
    </>
  )
}

export default Home