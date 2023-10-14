import { createContext, useEffect, useState, useContext } from "react";
import { SizeChosenContext } from "./SizeChosenContex";
export const ProdDetailContetx = createContext();

const ProdDetailProvider = ({ children }) => {
  const initializeState = JSON.parse(localStorage.getItem("cartItems")) || [];

  const [cartItems, setCartItens] = useState(initializeState); //array of boject, cart.
  const [total, setTotal] = useState(0); //array of boject, cart.
  const [countShopBag, setCountShopBag] = useState(0);
  const { chosenSize } = useContext(SizeChosenContext); //pick to product's size

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProduct = (prod) => {
    const newID = Math.floor(Math.random() * 100); // to give a new Id for each product, this way it will change quantity only the one product with this ID.

    // using title instead of ID to identify the product, beacuse the ID changes every time addProduct is called but the title is not.
    const existingItem = cartItems.find(
      (item) => item.title === prod.title && item.size === chosenSize
    );

    if (existingItem) {
      // Update the quantity if the size is the same
      const sameItemType = (prevCart) =>
        prevCart.map((item) =>
          item.title === prod.title && item.size === chosenSize
            ? {
                ...item,
                qty: item.qty + 1,
                size: chosenSize,
              }
            : item
        );
      setCartItens(sameItemType);
    } else {
      // Add the shoe as a new product if the size is different
      setCartItens((prevCart) => [
        {
          ...prod,
          qty: 1,
          size: chosenSize,
          id: newID,
        },
        ...prevCart,
      ]);
    }
  };

  const removeProduct = (id) => {
    const exist = cartItems.find((item) => item.id === id);
    if (exist.qty === 1) {
      const newCartItem = cartItems.filter((item) => item.id !== id);
      setCartItens(newCartItem);
      setCountShopBag(0);
    } else {
      const newCartItem = cartItems.map((item) =>
        item.id === id ? { ...exist, qty: exist.qty - 1 } : item
      );
      setCartItens(newCartItem);
    }
  };

  //change product quantity-------------------------------
  const increaseProducQty = (id) => {
    const prodExist = cartItems.find((item) => item.id === id);
    if (prodExist) {
      const newCartItem = cartItems.map((item) =>
        item.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : item
      );
      setCartItens(newCartItem);
    }
  };

  const decreaseProducQty = (id) => {
    const exist = cartItems.find((item) => item.id === id);
    if (exist && exist.qty > 1) {
      const newCartItem = cartItems.map((item) =>
        item.id === id ? { ...exist, qty: exist.qty - 1 } : item
      );
      setCartItens(newCartItem);
    }
  };

  // calc the final
  useEffect(() => {
    const totalShop = cartItems.reduce((acc, currVal) => {
      return acc + currVal.qty * currVal.price;
    }, 0);
    setTotal(totalShop); //final bill
  }, [cartItems]);

  //calc the number o obejcts in the array of the cart
  useEffect(() => {
    const shopBagNumber = () => {
      if (cartItems.length > 0) {
        const sum = cartItems.reduce(
          (total, currVal) => total + currVal.qty,
          0
        );
        setCountShopBag(sum);
      }
    };
    shopBagNumber();
  }, [cartItems]);

  return (
    <>
      <ProdDetailContetx.Provider
        value={{
          addProduct,
          removeProduct,
          cartItems,
          setCartItens,
          increaseProducQty,
          decreaseProducQty,
          total,
          countShopBag,
        }}
      >
        {children}
      </ProdDetailContetx.Provider>
    </>
  );
};

export default ProdDetailProvider;
