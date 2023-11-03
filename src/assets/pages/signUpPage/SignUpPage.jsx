import styled from "styled-components";
import video1 from "./003.mp4";
import Navbar from "../../componentes/navbar/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logoImg/logo.jpeg";
import { useState, useEffect, useRef } from "react";
import image1 from "../../images/signUpPage/image1.avif";
import image2 from "../../images/signUpPage/image2.avif";
import image3 from "../../images/signUpPage/image3.avif";
import image4 from "../../images/signUpPage/image4.avif";
import image5 from "../../images/signUpPage/image5.avif";
import Footer from "../../componentes/footer/Footer";
import AccordionQuestion from "./AccordionQuestion";

const SignUpPage = () => {
  //to open the sign up containe in the menu.
  const [signUp, setSingUp] = useState(false);

  //to handle video size in different screens sizes.
  const [videoSize, setVideoSize] = useState(false);

  const handleSignUp = () => {
    setSingUp(!signUp);
  };

  const screenSize = useRef(window.innerWidth);

  useEffect(() => {
    if (screenSize <= 600) {
      setVideoSize(true);
    } else {
      setVideoSize(false);
    }
  }, []);
  return (
    <Wrapper>
      <section className="sec1">
        <nav>
          <Link to={"/"}>
            <img src={logo} alt="" className="logo" />
          </Link>

          <Navbar
            signUp={signUp}
            handleSignUp={handleSignUp}
            setSingUp={setSingUp}
          />
        </nav>

        <div className="containerText">
          <h4>Join the On community</h4>
          <p>
            One free account, endless possibilities. Check out the benefits
            below. Because we've got your back. Even if it's sweaty.
          </p>

          <div className="btns">
            <button className="siginup" onClick={() => handleSignUp()}>
              Sign up
            </button>
          </div>
        </div>
        {videoSize ? (
          <video src={video1} width="190%" loop muted autoPlay />
        ) : (
          <video src={video1} width="100%" loop muted autoPlay />
        )}

        <div className="overlay"></div>
      </section>

      <section className="sec2">
        <div className="containerinfoSec2">
          <img src={image1} alt="" />
          <div className="textBox">
            <h4>Exclusive and early access to products</h4>
            <p>
              Joining the On community means account-only benefits. Like getting
              the first call on fresh gear and exclusive access to new launches.
            </p>
          </div>
        </div>
        <div className="containerinfoSec2">
          <div className="textBox">
            <h4>Last season's pieces. Special prices.</h4>
            <p>
              Get the inside track. Only account holders can shop key pieces
              from previous seasons before they're gone.
            </p>
          </div>
          <img src={image2} alt="" />
        </div>

        <div className="containerinfoSec2">
          <img src={image3} alt="" />
          <div className="textBox">
            <h4>Manage your Cyclon™ subscription</h4>
            <div className="p">
              Run. Recycle. Repeat. When you're in the loop, you can keep track
              of your product subscription. Only available in selected
              countries. <br />
              <Link to={"/featured"}>
                <span>Find out more</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="containerinfoSec2">
          <div className="textBox">
            <h4>Last season's pieces. Special prices.</h4>
            <p>
              Get the inside track. Only account holders can shop key pieces
              from previous seasons before they're gone.
            </p>
          </div>
          <img src={image4} alt="" />
        </div>
      </section>

      <section className="sec3">
        <img src={image5} alt="" />
        <div className="textBox">
          <p>Exclusive benefits that are miles ahead</p>
        </div>
        <div className="overlay"></div>
      </section>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sec1 {
    position: relative;
    width: 100%;
    height: 1082px;
    nav {
      position: absolute;
      padding: 0 4rem;
      z-index: 100;
      .logo {
        width: 6rem;
        margin: 2.55rem 3.75rem;
        z-index: 100;
        mix-blend-mode: exclusion;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .containerText {
      position: absolute;
      bottom: 10rem;
      left: 5rem;
      height: 20rem;
      z-index: 99;
      width: 50rem;
      h4 {
        font-size: 3.5rem;
        color: white;
        margin-bottom: 1rem;
        font-weight: 600;
      }

      p {
        font-size: 2rem;
        color: white;
      }
      .btns {
        width: 55%;
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
        button {
          width: 12rem;
          height: 5rem;
          background-color: white;
          border-radius: 3rem;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          &:hover {
            background-color: #d0cece;
          }
        }
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.797) 0%,
        rgba(0, 0, 0, 0.05) 50%
      );
      z-index: 94;
    }
  }
  .sec2 {
    margin-top: 3rem;
    .containerinfoSec2 {
      display: flex;
      padding: 2rem 6rem 2rem 6rem;
      justify-content: space-between;
      img {
        width: 53rem;
      }
      .textBox {
        padding: 0 5rem;
        h4 {
          font-size: 3.6rem;
          font-weight: 500;
          color: #363535;
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.4rem;
          font-weight: 300;
          color: #363535;
          margin-bottom: 2rem;
        }
        .p {
          font-size: 1.4rem;
          font-weight: 300;
          color: #363535;
          margin-bottom: 2rem;
          span {
            font-size: 1.5rem;
            font-weight: 600;
            color: #363535;
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
    }
  }
  .sec3 {
    position: relative;
    margin-bottom: 0rem;
    img {
      width: 100%;
    }
    .textBox {
      position: absolute;
      width: 100%;
      bottom: 4rem;
      color: white;
      font-size: 4rem;
      left: 4rem;
      z-index: 92;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 99.5%;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.797) 0%,
        rgba(0, 0, 0, 0.05) 40%
      );
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .sec1 {
      position: relative;
      width: 100%;
      height: 60vh;
      overflow: hidden;
      nav {
        position: absolute;
        padding: 0rem;
        z-index: 100;
        .logo {
          width: 2.5rem;
          margin: 0;
          margin-top: 7rem;
          margin-left: 1rem;
          z-index: 100;
          mix-blend-mode: exclusion;
          border-radius: 50%;
          cursor: pointer;
        }
      }

      .containerText {
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        height: 30%;
        width: 90%;
        z-index: 99;

        h4 {
          font-size: 1rem;
          color: white;
          margin-bottom: 0.1rem;
          font-weight: 600;
        }

        p {
          font-size: 0.8rem;
          color: white;
        }
        .btns {
          width: 25%;
          display: flex;
          justify-content: space-between;
          margin-top: 0.5rem;
          button {
            width: 100%;
            height: 2rem;
            background-color: white;
            border-radius: 3rem;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            &:hover {
              background-color: #d0cece;
            }
          }
        }
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.797) 0%,
          rgba(0, 0, 0, 0.05) 50%
        );
        z-index: 94;
      }
    }
    .sec2 {
      margin-top: 0.5rem;
      .containerinfoSec2 {
        display: flex;
        padding: 0.2rem;
        justify-content: space-between;
        img {
          max-width: 170px;
          max-height: 160px;
          width: auto;
          height: auto;
        }
        .textBox {
          padding: 0 0.4rem;

          h4 {
            font-size: 1.4rem;
            font-weight: 500;
            color: #363535;
            margin-bottom: 0.4rem;
          }
          p {
            font-size: 1rem;
            font-weight: 300;
            color: #363535;
            margin-bottom: 2rem;
          }
          .p {
            font-size: 1rem;
            font-weight: 300;
            color: #363535;
            margin-bottom: 2rem;
            span {
              font-size: 1rem;
              font-weight: 600;
              color: #363535;
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
      }
    }

    .sec3 {
      position: relative;
      margin-bottom: 0rem;
      img {
        width: 100%;
      }
      .textBox {
        position: absolute;
        width: 100%;
        bottom: 1rem;
        color: white;
        font-size: 1rem;
        left: 1rem;
        z-index: 92;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 99.5%;
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.797) 0%,
          rgba(0, 0, 0, 0.05) 40%
        );
      }
    }
  }
`;
export default SignUpPage;
