import styled from "styled-components";
import SignUp from "./Register";
import Login from "./Login";
import { useEffect, useRef } from "react";
import { useUserAuth } from "../../../contexts/UserAuthContext";

const Login_SignUp = ({ handleSignUp }) => {
  let { btnToggle, setBtnToggle } = useUserAuth();

  //this snipt of code is to always make the drop dowm menu from navabar be on sign up mode.
  //when the bottom sign up is pressed.
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current === true) {
      setBtnToggle(false);
    }
    return () => {
      effectRan.current = true;
    };
  }, [handleSignUp]);

  return (
    <Wrapper>
      <main>
        <div className="togglebutton">
          <div className="login_signUp">
            <div className="backContainer">
              <p onClick={() => setBtnToggle(!btnToggle)}>Sign up</p>
              <p onClick={() => setBtnToggle(!btnToggle)}>Log in</p>
            </div>
            {!btnToggle && (
              <button className="buttonLeft">
                <p>Sign up</p>
              </button>
            )}

            {btnToggle && (
              <button className="buttonRight">
                <p>Log in </p>
              </button>
            )}
          </div>
        </div>
        <aside className="UserContainer">
          {btnToggle ? <Login /> : <SignUp btnToggle={btnToggle} />}
        </aside>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  main {
    margin: 3rem 12rem 6rem 12rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;

    .togglebutton {
      margin-bottom: 2rem;

      .login_signUp {
        position: relative;
        width: 38rem;
        height: 4.5rem;
        background-color: #edecec;
        border-radius: 10rem;
        margin-bottom: 2rem;

        .backContainer {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 97;

          cursor: pointer;
          p {
            font-size: 1.2rem;
            width: 19rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .buttonLeft {
          position: absolute;
          left: 0;
          border: 2px solid gray;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          width: 20rem;
          height: 100%;
          border-radius: 10rem;
          font-size: 1.3rem;
          font-weight: 500;
          z-index: 98;
          cursor: pointer;
        }
        .buttonRight {
          position: absolute;
          right: 0;
          border: 2px solid gray;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          width: 20rem;
          height: 100%;
          border-radius: 10rem;
          font-size: 1.2rem;
          font-weight: 500;
          z-index: 98;

          cursor: pointer;
        }
        .backContainer {
          position: absolute;
          width: 38rem;
          z-index: 95;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 5rem;
          border-radius: 10rem;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
export default Login_SignUp;
