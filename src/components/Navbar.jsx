import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../components/ShopContext.jsx";

function Navbar() {
  const { cartContents } = useContext(ShopContext);
  return (
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
  );
}

Navbar.propTypes = {
  cartContents: PropTypes.object,
};

export default Navbar;
