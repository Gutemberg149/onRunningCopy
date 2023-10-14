import { createContext, useContext, useState } from "react";
// import { ProdDetailContetx } from "./ProdetailContext";
// import { sizeChoiceSolutionContext } from "./ChosenSizeSolution";

export const SizeChosenContext = createContext();

const SizeChosenProvider = ({ children }) => {
  const [chosenSize, setChosenSize] = useState(""); //pick to product's size

  const [selectedIndex, setSelectedIndex] = useState(); // to make the square select hilighted and the others not.

  const [ableBtn, setAbleBtn] = useState(true); //disable or able the button in the cart to send the product to the bag. But only if the product size is chosen.

  // to make only the square selected hilighted.
  const choseSizeFunction = (e, idx) => {
    const size = e.target.innerText;
    e.target.classList.add("active");

    setSelectedIndex(idx);
    setChosenSize(size);
    setAbleBtn(false);
  };

  const lessenedHighlit = () => {
    setSelectedIndex("");
    setChosenSize("");
    setAbleBtn(true);
  };

  return (
    <SizeChosenContext.Provider
      value={{
        chosenSize,
        setChosenSize,
        choseSizeFunction,
        selectedIndex,
        ableBtn,
        lessenedHighlit,
      }}
    >
      {children}
    </SizeChosenContext.Provider>
  );
};

export default SizeChosenProvider;
