import { useState, useContext, createContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

//CUSTOM HOOK
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
