function CartItem ({item, onRemoveFromCart, onIncreaseQty,onDecreaseQty}){
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />

            <div className="cart-item-info">
                <p className="cart-item-name">{item.name}</p>
                <p className="cart-item-price"> {item.price * item.quantity} MAD</p>
            </div>

             <div className="cart-item-controls">
        <button className="btn-qty" onClick={() => onDecreaseQty(item.id)}>−</button>
        <span className="cart-item-qty">{item.quantity}</span>
        <button className="btn-qty" onClick={() => onIncreaseQty(item.id)}>+</button>
      </div>
      <button className="btn-remove" onClick={() => onRemoveFromCart(item.id)}>
        🗑️
      </button>
        </div>

    )
}
export default CartItem
