import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
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
        <Outlet />
      </div>
    </>
  );
}

export default App;
