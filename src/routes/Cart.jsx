import { Link } from "react-router-dom";
import styles from "../styles/Cart.module.css";
import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem.jsx";

function Cart() {
  const { cartContents, formatPrice } = useOutletContext();
  const shippingCost = 10;

  if (cartContents.quantity > 0) {
    return (
      <div className={styles.cart}>
        <ul className={styles.cartItems}>
          {cartContents.items.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </ul>
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <div className={styles.row}>
            <p>{cartContents.quantity + " items"}</p>
            <p>{"$" + formatPrice(cartContents.price)}</p>
          </div>
          <div className={styles.row}>
            <p>Standard Shipping</p>
            <p>{"$" + formatPrice(shippingCost)}</p>
          </div>
          <div className={styles.row}>
            <p>Subtotal</p>
            <p>{"$" + formatPrice(shippingCost + cartContents.price)}</p>
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
