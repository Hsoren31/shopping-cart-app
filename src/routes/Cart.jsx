import { Link } from "react-router-dom";
import styles from "../styles/Cart.module.css";
import CartItem from "../components/CartItem.jsx";
import OrderSummary from "../components/OrderSummary.jsx";
import { ShopContext } from "../components/ShopContext.jsx";
import { useContext } from "react";

function Cart() {
  const { cartContents } = useContext(ShopContext);
  const shippingCost = 10;

  if (cartContents.quantity > 0) {
    return (
      <div className={styles.cart}>
        <ul className={styles.cartItems}>
          {cartContents.items.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </ul>
        <OrderSummary shippingCost={shippingCost} />
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
