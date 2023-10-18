import { createContext, useState } from "react";

export const OpensignUpContext = createContext();

const OpensignUpProvider = ({ children }) => {
  const [togglevisibilitySignUp, setTogglevisibilitySignUp] = useState("");
  const [allowToggleVisibility, setAllowToggleVisibility] = useState(false);

  return (
    <OpensignUpContext.Provider
      value={{
        togglevisibilitySignUp,
        setTogglevisibilitySignUp,
        allowToggleVisibility,
        setAllowToggleVisibility,
      }}
    >
      {children}
    </OpensignUpContext.Provider>
  );
};

export default OpensignUpProvider;
