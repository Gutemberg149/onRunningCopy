import { createContext, useState } from "react";

export const conatctUsContext = createContext();
//context to make the b utton to sen dthe form able or disable
const ContactUsProvider = ({ children }) => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [messageSent, setMessageSent] = useState(false);

  return (
    <conatctUsContext.Provider
      value={{ disabledButton, setDisabledButton, messageSent, setMessageSent }}
    >
      {children}
    </conatctUsContext.Provider>
  );
};

export default ContactUsProvider;
