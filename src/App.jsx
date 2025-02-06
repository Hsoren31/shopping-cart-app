import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [cartContents, setCartContents] = useState({
    items: [],
    quantity: 0,
    price: 0,
  });

  const addToCart = ({ product }) => {
    const newValue = {
      items: [...cartContents.items, product],
      quantity: cartContents.quantity + 1,
      price: cartContents.price + product.price,
    };
    setCartContents(newValue);
  };

  return (
    <>
      <nav>
        <h2>Shop Store Fake</h2>
        <ul>
          <li>
            <Link to={"home"}>Home</Link>
          </li>
          <li>
            <Link to={"shop"}>Shop</Link>
          </li>
          <li>
            <Link to={"cart"}>Cart ({cartContents.quantity})</Link>
          </li>
        </ul>
      </nav>
      <div id="pages">
        <Outlet
          context={{
            cartContents,
            setCartContents,
            addToCart,
          }}
        />
      </div>
    </>
  );
}

export default App;
