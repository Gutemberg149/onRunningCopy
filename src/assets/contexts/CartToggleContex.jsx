import { useEffect } from "react";
import { useRef } from "react";
import { createContext, useState } from "react";

//context to move cart shop in and out
export const CartContext = createContext();

const CartToggleProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(`0`);

  const screenSizeMethodMethod = useRef(window.innerWidth);

  //to get the current size of the screen
  const screenSizeMethod = screenSizeMethodMethod.current;

  //use effect to handle the positioning of the cart off screen when the user access the screen.
  useEffect(() => {
    if (screenSizeMethod <= 600) {
      setShowCart(-screenSizeMethod + screenSizeMethod / 100);
    } else {
      setShowCart(-700 + (700 / 100) * 15);
      console.log(showCart);
    }
  }, []);

  //function to handle the cart in and out from hidding.
  const showCartFunction = () => {
    if (screenSizeMethod <= 600) {
      if (parseInt(showCart) >= -screenSizeMethod + screenSizeMethod / 100) {
        setShowCart(0);
      }
      if (parseInt(showCart) === parseInt(0)) {
        setShowCart(-screenSizeMethod + screenSizeMethod / 100);
      }
    } else if (screenSizeMethod <= 900) {
    } else if (screenSizeMethod <= 1300) {
    } else {
      if (parseInt(showCart) >= -700 + (700 / 100) * 15) {
        setShowCart(40);
      }
      if (parseInt(showCart) === 40) {
        setShowCart(-700 + (700 / 100) * 15);
      }
    }
  };

  return (
    <CartContext.Provider value={{ showCart, setShowCart, showCartFunction }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartToggleProvider;
