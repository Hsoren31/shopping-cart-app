import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "../styles/Cart.module.css";
function CartItem({ product }) {
  const basePrice = product.price;
  const { cartContents, setCartContents, formatPrice } = useOutletContext();
  const [productValue, setProductValue] = useState({
    quantity: product.quantity,
    price: product.price,
  });

  const handleChange = (event) => {
    const value = Number(event.target.value);
    const difference = productValue.quantity - value;
    const newValue = { quantity: value, price: value * basePrice };
    const diffCost = newValue.price - productValue.price;
    setProductValue(newValue);
    setCartContents({
      ...cartContents,
      quantity: cartContents.quantity - difference,
      price: cartContents.price + diffCost,
    });
  };

  const decrease = () => {
    const newValue = {
      quantity: productValue.quantity - 1,
      price: (productValue.quantity - 1) * basePrice,
    };
    setProductValue(newValue);
    setCartContents({
      ...cartContents,
      quantity: cartContents.quantity - 1,
      price: cartContents.price - basePrice,
    });
  };

  const increase = () => {
    const newValue = {
      quantity: productValue.quantity + 1,
      price: (productValue.quantity + 1) * basePrice,
    };
    setProductValue(newValue);
    setCartContents({
      ...cartContents,
      quantity: cartContents.quantity + 1,
      price: cartContents.price + basePrice,
    });
  };

  const remove = () => {
    const filteredOut = cartContents.items.filter((item) => item !== product);

    setCartContents({
      items: filteredOut,
      quantity: cartContents.quantity - productValue.quantity,
      price: cartContents.price - productValue.price,
    });
  };

  return (
    <div className={styles.item}>
      <img className={styles.image} src={product.image} alt={product.title} />
      <h3 className={styles.title}>{product.title}</h3>
      <div className={styles.quantity}>
        <button onClick={decrease}>-</button>
        <input
          type="number"
          min="1"
          value={productValue.quantity}
          onChange={handleChange}
        />
        <button onClick={increase}>+</button>
      </div>
      <p>{"$" + formatPrice(productValue.price)}</p>
      <button onClick={remove}>Remove</button>
    </div>
  );
}

export default CartItem;
