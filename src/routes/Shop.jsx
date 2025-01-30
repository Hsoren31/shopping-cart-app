import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../styles/Shop.module.css";

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
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

function Shop() {
  const { products, error, loading } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
}

export default Shop;
