function ProductCard ({product, onAddToCart, onDeleteProduct}){

    return(
        <div className="product-card">
            <img src={product.image}
             alt={product.name}
             className="product-image" 
             />

        <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} MAD</p>
        </div>
 <div className="product-actions">
        <button
          className="btn-add"
          onClick={() => onAddToCart(product)}
        >
          + Ajouter au panier
        </button>

        <button
          className="btn-delete"
          onClick={() => onDeleteProduct(product.id)}
        >
          🗑️
        </button>
      </div>
    </div>
 
        
        
    )



}
export default ProductCard