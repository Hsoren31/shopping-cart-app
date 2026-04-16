import styles from "../styles/Shop.module.css";
import PropTypes from "prop-types";

function ProductCard({ product, addToCart, formatPrice }) {
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.image} src={product.image} alt={product.title} />
      </div>
      <p className={styles.title}>{product.title}</p>

      <p className={styles.price}>{"$" + formatPrice(product.price)}</p>

      <button
        onClick={() => {
          addToCart({ product });
          product.quantity += 1;
          product.priceInCart = product.price;
        }}
        className={styles.addToCartBtn}
      >
        Add to Cart
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  formatPrice: PropTypes.func,
};

export default ProductCard;
