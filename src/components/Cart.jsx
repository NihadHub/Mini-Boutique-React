import CartItem from "./CartItem"

function Cart({ cartItems, onRemoveFromCart, onIncreaseQty, onDecreaseQty }) {

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <aside className="cart">
      <h2 className="cart-title">🛒 Panier</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Votre panier est vide.</p>
      ) : (
        <>
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
                onIncreaseQty={onIncreaseQty}
                onDecreaseQty={onDecreaseQty}
              />
            ))}
          </div>

          <div className="cart-summary">
            <p>Articles : <strong>{totalItems}</strong></p>
            <p>Total : <strong>{totalPrice} MAD</strong></p>
          </div>
        </>
      )}
    </aside>
  )
}

export default Cart