import { createContext, useState } from "react";

//context to move cart shop in and out
export const CartContextSmallScreen = createContext();

const CartToggleProviderSmallScreen = ({ children }) => {
  const [ShowCartSmallScreen, setShowCartSmallScreen] = useState("-90%");

  const showCartFunctionSmallScreen = () => {
    if (ShowCartSmallScreen === "-90%") {
      setShowCartSmallScreen("0rem");
    } else {
      setShowCartSmallScreen("-90%");
    }
  };

  return (
    <CartContextSmallScreen.Provider
      value={{
        ShowCartSmallScreen,
        setShowCartSmallScreen,
        showCartFunctionSmallScreen,
      }}
    >
      {children}
    </CartContextSmallScreen.Provider>
  );
};

export default CartToggleProviderSmallScreen;
