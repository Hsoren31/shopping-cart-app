import ProductCard from "../components/ProductCard";
import styles from "../styles/Shop.module.css";
import { useContext } from "react";
import { ShopContext } from "../components/ShopContext.jsx";

function Shop() {
  const { products, addToCart, formatPrice } = useContext(ShopContext);
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
          addToCart={addToCart}
          formatPrice={formatPrice}
        />
      ))}
    </div>
  );
}

export default Shop;
