import styles from "../styles/Shop.module.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <p className={styles.title}>{product.title}</p>

      <p className={styles.price}>{"$" + product.price}</p>

      <button
        onClick={() => {
          addToCart({ product });
          product.quantity += 1;
        }}
        className={styles.addToCartBtn}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
