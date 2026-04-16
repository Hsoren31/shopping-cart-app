import PropTypes from "prop-types";
import styles from "../styles/Cart.module.css";
import { ShopContext } from "./ShopContext";
import { useContext } from "react";

function OrderSummary({ shippingCost }) {
  const { cartContents, formatPrice } = useContext(ShopContext);
  return (
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
  );
}

OrderSummary.propTypes = {
  shippingCost: PropTypes.number,
};

export default OrderSummary;
