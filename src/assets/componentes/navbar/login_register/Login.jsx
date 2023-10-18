import styled from "styled-components";
import { useState } from "react";
import { useUserAuth } from "../../../contexts/UserAuthContext";
import { useContext } from "react";
import { OpensignUpContext } from "../../../contexts/OpenSigUpContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { logIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
    } catch (error) {
      setErrorMessage(error.message);
      console.log(errorMessage);
    }
  };

  return (
    <Wrapper>
      <div className="innerUserContainer">
        <h4>Log in to your On account</h4>
        <p className="pInnercontainer">
          For faster checkout, managing orders and account-only exclusives.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="fildeHolder">
            <input
              className="inputRegister"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email"> email *</label>
          </div>
          <div className="fildeHolder">
            <input
              className="inputRegister"
              type="password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password"> Password *</label>
          </div>
          <div className="btnContainer">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .alertToLogin {
    margin-bottom: 2rem;
    border: 1px solid #cc0303;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    .pAlert {
      font-size: 1.5rem;
      font-family: "poppins";
      font-weight: 600;
      color: #cc0303;
    }
  }
  h4 {
    font-size: 2.7rem;
    font-weight: 500;
    color: #302f2f;
    margin-bottom: 2rem;
  }
  .pInnercontainer {
    font-size: 1.75rem;
    font-weight: 400;
    color: #302f2f;
    margin-bottom: 3rem;
  }
  .fildeHolder {
    position: relative;
    margin-bottom: 3rem;
    border-bottom: 1px solid gray;
    width: 50rem;
    .inputRegister {
      position: relative;
      width: 100%;
      outline: none !important;
      border: 0;
      font-size: 1.2rem;
      &:focus ~ label,
      &:valid ~ label {
        position: absolute;
        left: 0;
        bottom: 2rem;
      }
    }
    label {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .subscribeContainer {
    display: flex;
    justify-content: space-between;
    margin-top: 4rem;
    .subscribeCheckbox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.9rem;
      height: 1.8rem;
      border: 2px solid gray;
      border-radius: 0.3rem;
      margin-right: 1rem;
      margin-top: 0.3rem;
      cursor: pointer;
      .blackBox {
        width: 1.1rem;
        height: 1.1rem;
        background-color: #302f2f;
        transition: all ease 0.4s;
      }
    }
    p {
      font-size: 1.4rem;
      color: #393737;
      font-weight: 400;
    }
  }
  .btnContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
      width: 35rem;
      height: 4rem;
      border: none;
      background-color: black;
      color: white;
      font-size: 1.1rem;
      border-radius: 3rem;
      cursor: pointer;
    }
  }
`;

export default Login;
