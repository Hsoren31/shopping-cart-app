function ProductCard({ title, price, image }) {
  return (
    <div className="product">
      <img className="product_img" src={image} alt={title} />
      <div className="row">
        <p className="product_title">{title}</p>
        <p className="product_price">{price}</p>
      </div>
      <div className="row">
        <button>decrease</button>
        <input type="number" name="quantity" min="0" max="10" />
        <button>increase</button>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
