import { createContext } from "react";
export const ShopContext = createContext({
  cartContents: {
    items: [],
    quantity: 0,
    price: 0,
  },
  products: [],
  addToCart: () => {},
  formatPrice: () => {},
});
