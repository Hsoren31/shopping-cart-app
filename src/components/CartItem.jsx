import PropTypes from "prop-types";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/Cart.module.css";

function getNewItemArr(oldProduct, newProduct, array) {
  const productIndex = array.findIndex((item) => item === oldProduct);
  array.splice(productIndex, 1);
  array.splice(productIndex, 0, newProduct);
  return array;
}

function CartItem({ product }) {
  const { cartContents, setCartContents, formatPrice } = useOutletContext();
  const handleChange = (event) => {
    const value = Number(event.target.value);
    const newPrice = value * product.price;
    const quantityDifference = product.quantity - value;
    const costDifference = newPrice - product.priceInCart;
    const newProductValue = {
      ...product,
      quantity: value,
      priceInCart: newPrice,
    };
    getNewItemArr(product, newProductValue, cartContents.items);
    setCartContents({
      items: cartContents.items,
      quantity: cartContents.quantity - quantityDifference,
      price: cartContents.price + costDifference,
    });
  };

  const decrease = () => {
    const newProductValue = {
      ...product,
      quantity: product.quantity - 1,
      priceInCart: (product.quantity - 1) * product.price,
    };
    getNewItemArr(product, newProductValue, cartContents.items);
    setCartContents({
      items: cartContents.items,
      quantity: cartContents.quantity - 1,
      price: cartContents.price - product.price,
    });
  };

  const increase = () => {
    const newProductValue = {
      ...product,
      quantity: product.quantity + 1,
      priceInCart: (product.quantity + 1) * product.price,
    };
    getNewItemArr(product, newProductValue, cartContents.items);
    setCartContents({
      items: cartContents.items,
      quantity: cartContents.quantity + 1,
      price: cartContents.price + product.price,
    });
  };

  const remove = () => {
    const filteredOut = cartContents.items.filter((item) => item !== product);

    setCartContents({
      items: filteredOut,
      quantity: cartContents.quantity - product.quantity,
      price: cartContents.price - product.priceInCart,
    });
  };
  return (
    <li className={styles.item}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.quantity}>
        <button onClick={decrease}>-</button>
        <input
          aria-label="quantity"
          type="number"
          min="1"
          value={product.quantity}
          onChange={handleChange}
        />
        <button onClick={increase}>+</button>
      </div>
      <p>{"$" + formatPrice(product.priceInCart)}</p>
      <button onClick={remove}>Remove</button>
    </li>
  );
}

CartItem.propTypes = {
  cartContents: PropTypes.object,
  product: PropTypes.object,
  formatPrice: PropTypes.func,
};

export default CartItem;
