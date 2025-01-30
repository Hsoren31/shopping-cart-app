import { Link } from "react-router-dom";
import styles from "../styles/Cart.module.css";

function Cart() {
  return (
    <div className={styles.empty}>
      <p className={styles.emptyText}>Looks like your cart is empty!</p>
      <br></br>
      <Link className={styles.shopLink} to="/shop">
        Start Shopping
      </Link>
    </div>
  );
}

export default Cart;
