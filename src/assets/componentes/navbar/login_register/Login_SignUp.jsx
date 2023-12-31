import styled from "styled-components";
import SignUp from "./SignUp";
import Login from "./Login";
import { useEffect, useRef } from "react";
import { useUserAuth } from "../../../contexts/UserAuthContext";

const Login_SignUp = ({ handleSignUp }) => {
  let { btnToggle, setBtnToggle } = useUserAuth();

  //this snipt of code is to always make the drop dowm menu from navbar be on sign up mode.
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
        <aside>
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
          color: black;
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
          color: black;
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
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      margin: 0;
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
      width: 100%;

      .togglebutton {
        margin-bottom: 0rem;
        height: 4rem;

        .login_signUp {
          position: relative;
          width: 18rem;
          height: 3rem;
          border-radius: 10rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          .backContainer {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 97;
            width: 90%;
            cursor: pointer;
            p {
              font-size: 1.1rem;
              width: 19rem;
              height: 4rem;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10rem;
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
            width: 9rem;
            height: 90%;
            border-radius: 10rem;
            font-size: 1.1rem;
            font-weight: 500;
            color: black;
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
            width: 9rem;
            height: 90%;
            border-radius: 10rem;
            font-size: 1.1rem;
            font-weight: 500;
            color: black;
            z-index: 98;

            cursor: pointer;
          }
          .backContainer {
            position: absolute;
            width: 20rem;
            z-index: 95;
            display: flex;
            justify-content: start;
            align-items: center;
            height: 5rem;
            border-radius: 10rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      margin: 0;
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
      width: 80vw;

      .togglebutton {
        margin-bottom: 0rem;
        height: 4rem;

        .login_signUp {
          position: relative;
          width: 18rem;
          height: 4rem;
          border-radius: 10rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          .backContainer {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 97;
            width: 90%;
            cursor: pointer;
            p {
              font-size: 1.3rem;
              width: 19rem;
              height: 4rem;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10rem;
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
            width: 9rem;
            height: 90%;
            border-radius: 10rem;
            font-size: 1.3rem;
            font-weight: 500;
            color: black;
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
            width: 9rem;
            height: 90%;
            border-radius: 10rem;
            font-size: 1.3rem;
            font-weight: 500;
            color: black;
            z-index: 98;

            cursor: pointer;
          }
          .backContainer {
            position: absolute;
            width: 20rem;
            z-index: 95;
            display: flex;
            justify-content: start;
            align-items: center;
            height: 5rem;
            border-radius: 10rem;
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    main {
      margin: 0;
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow-x: hidden;
      width: 100%;

      .togglebutton {
        margin-bottom: 0rem;
        height: 4rem;

        .login_signUp {
          position: relative;
          width: 18rem;
          height: 4rem;
          border-radius: 10rem;
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          color: black;
          .backContainer {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 97;
            width: 90%;
            cursor: pointer;
            p {
              font-size: 1.3rem;
              width: 19rem;
              height: 4rem;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 10rem;
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
            width: 9rem;
            height: 90%;
            border-radius: 10rem;
            font-size: 1.3rem;
            font-weight: 500;
            color: black;
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
            width: 9rem;
            height: 90%;
            border-radius: 10rem;
            font-size: 1.3rem;
            font-weight: 500;
            color: black;
            z-index: 98;

            cursor: pointer;
          }
          .backContainer {
            position: absolute;
            width: 20rem;
            z-index: 95;
            display: flex;
            justify-content: start;
            align-items: center;
            height: 5rem;
            border-radius: 10rem;
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;
export default Login_SignUp;
