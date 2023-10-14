import { createContext, useState } from "react";

//context to change checout from shipping details to payment details
export const ShippingContext = createContext();

const ShippingProvider = ({ children }) => {
  const [movetoPayment, setMovetoPayment] = useState(false);

  return (
    <ShippingContext.Provider value={{ movetoPayment, setMovetoPayment }}>
      {children}
    </ShippingContext.Provider>
  );
};

export default ShippingProvider;
