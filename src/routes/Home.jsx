import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div id="welcome-page">
      <h2 className={styles.header}>Welcome to Shop Store Fake!</h2>
      <div className={styles.shopAll}>
        <button>Shop All</button>
      </div>
      <section className={styles.cardsFlex}>
        <div className={styles.womens}>
          <button>Shop All</button>
        </div>
        <div className={styles.mens}>
          <button>Shop Men's</button>
        </div>
        <div className={styles.electronics}>
          <button>Shop Electronic's</button>
        </div>
        <div className={styles.jewelry}>
          <button>Shop Jewelry</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
