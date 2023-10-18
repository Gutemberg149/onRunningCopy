import { Navigate } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import { useContext } from "react";
import { OpensignUpContext } from "../contexts/OpenSigUpContext";

const ProtectedRoute = ({ children }) => {
  const {
    // togglevisibilitySignUp,
    setTogglevisibilitySignUp,
    setAllowToggleVisibility,
  } = useContext(OpensignUpContext);

  let { user } = useUserAuth();
  if (!user) {
    setTogglevisibilitySignUp(true);
    setAllowToggleVisibility(true);

    return <Navigate to={"/signUpPage"} />;
  }

  return children;
};

export default ProtectedRoute;
