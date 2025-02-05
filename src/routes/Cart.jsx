import { Link } from "react-router-dom";
import styles from "../styles/Cart.module.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { cartContents } = useOutletContext();

  if (cartContents.quantity > 0) {
    return (
      <div className={styles.cartItems}>
        {cartContents.items.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    );
  }
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
