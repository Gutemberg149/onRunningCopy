import { createContext, useState } from "react";

//context to move cart shop in and out
export const CartContext = createContext();

const CartToggleProvider = ({ children }) => {
  const [showCart, setShowCart] = useState("-40rem");

  const showCartFunction = () => {
    if (showCart === "-40rem") {
      setShowCart("3rem");
    } else {
      setShowCart("-40rem");
    }
  };

  return (
    <CartContext.Provider value={{ showCart, setShowCart, showCartFunction }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartToggleProvider;
