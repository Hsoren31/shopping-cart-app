import styles from "../styles/Shop.module.css";

function ProductCard({ title, price, image }) {
  return (
    <div className={styles.product}>
      <div>
        <img className={styles.image} src={image} alt={title} />
      </div>
      <p className={styles.title}>{title}</p>

      <p className={styles.price}>{"$" + price}</p>

      <button className={styles.addToCartBtn}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
