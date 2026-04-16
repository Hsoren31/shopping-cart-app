import { Outlet } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { ShopContext } from "./components/ShopContext";

const useProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((response) => {
        let results = response.map((item) => {
          return {
            ...item,
            quantity: 0,
            priceInCart: 0,
          };
        });
        setProducts(results);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

function App() {
  const [cartContents, setCartContents] = useState({
    items: [],
    quantity: 0,
    price: 0,
  });

  const { products, error, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  const formatPrice = (num) => {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const addToCart = ({ product }) => {
    const newValue = {
      items: [...cartContents.items, product],
      quantity: cartContents.quantity + 1,
      price: cartContents.price + product.price,
    };
    setCartContents(newValue);
  };

  return (
    <ShopContext.Provider
      value={{
        cartContents,
        setCartContents,
        products,
        addToCart,
        formatPrice,
      }}
    >
      <Navbar />
      <Outlet />
    </ShopContext.Provider>
  );
}

export default App;
