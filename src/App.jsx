import { Outlet, Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = ({ product }) => {
    setCartItems([...cartItems, product]);
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
            <Link to={"cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
      <div id="pages">
        <Outlet context={{ cartItems, setCartItems, addToCart }} />
      </div>
    </>
  );
}

export default App;
