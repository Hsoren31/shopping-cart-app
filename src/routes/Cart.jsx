import { Link } from "react-router-dom";
import styles from "../styles/Cart.module.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { cartContents } = useOutletContext();
  const shippingCost = 10;

  if (cartContents.quantity > 0) {
    return (
      <div className={styles.cart}>
        <div className={styles.cartItems}>
          {cartContents.items.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.row}>
            <p>{cartContents.quantity + " items"}</p>
            <p>{"$" + cartContents.price}</p>
          </div>
          <div className={styles.row}>
            <p>Standard Shipping</p>
            <p>{"$" + shippingCost}</p>
          </div>
          <div className={styles.row}>
            <p>Subtotal</p>
            <p>{"$" + (shippingCost + cartContents.price)}</p>
          </div>
          <button className={styles.checkout}>Checkout</button>
        </div>
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
