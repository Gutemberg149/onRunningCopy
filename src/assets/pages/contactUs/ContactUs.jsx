import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logoImg/logo.jpeg";
import img2 from "../../images/contactus/image2.jpeg";
import Footer from "../../componentes/footer/Footer";
import Message from "./Message";
import { conatctUsContext } from "../../contexts/ContactUsContext";
import MessageSent from "./MessageSent";
import { useContext } from "react";

const ContactUs = () => {
  const { messageSent } = useContext(conatctUsContext);
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <Navbar />
      </nav>

      <main>
        <div className="contactContainer">
          <div className="leftSideContainer">
            <h4>Contact us</h4>
            <div className="contactInfo">
              <div className="containerInfo">
                <span>ADDRESS:</span>
                <p>Rua Oscar Freire, 725</p>
                <p>Jardim Paulis</p>
                <p>Sao Paulo, 01426-003</p>
              </div>
              <div className="containerInfo">
                <span>EMAIL:</span>
                <p>info@onruning.com</p>
              </div>
              <div className="containerInfo">
                <span>PHONE:</span>
                <p>11 99733-8978</p>
              </div>
            </div>
            <Message />
            <div className="glassMessage">
              {messageSent ? <MessageSent /> : " "}
            </div>
          </div>
          <div className="rightSideContainer"></div>
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  nav {
    padding: 0 4rem;
    .logo {
      width: 6.5rem;
      margin: 2rem 3rem;
      mix-blend-mode: difference;
      cursor: pointer;
    }
  }
  main {
    margin-bottom: 5rem;

    .contactContainer {
      display: flex;
      justify-content: center;
      align-items: center;

      .leftSideContainer {
        position: relative;
        width: 40%;
        height: 60rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 4rem;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        h4 {
          font-size: 3rem;
          font-weight: 500;
          color: #363535;
          margin-bottom: 2rem;
        }
        .contactInfo {
          display: flex;
          justify-content: space-between;
          height: 10rem;
          .containerInfo {
            span {
              font-size: 0.9rem;
              font-weight: 500;
              color: #939393;
            }
            p {
              font-size: 1.1rem;
              font-weight: 600;
              color: #7d7c7c;
            }
            P:nth-child(2) {
              margin-top: 0.3rem;
            }
          }
        }
        .glassMessage {
          position: absolute;
          top: 20rem;
        }
      }
      .rightSideContainer {
        width: 40%;
        height: 60rem;
        background-image: url(${img2});
        background-size: cover;
        background-position: 75%;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0 0rem;
      .logo {
        width: 3.25rem;
        margin: 0;
        margin-top: 7rem;
        border-radius: 50%;
      }
    }
    main {
      margin-bottom: 1rem;

      .contactContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .leftSideContainer {
          position: relative;
          width: 100%;
          height: 110vh;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          padding: 0.5rem;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          margin-bottom: 4rem;
          h4 {
            font-size: 1.2rem;
            font-weight: 500;
            color: #363535;
            margin-bottom: 2rem;
          }
          .contactInfo {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 40vh;
            padding-left: 0.5rem;
            .containerInfo {
              span {
                font-size: 0.9rem;
                font-weight: 500;
                color: #939393;
              }
              p {
                font-size: 1.1rem;
                font-weight: 600;
                color: #7d7c7c;
              }
              P:nth-child(2) {
                margin-top: 0.3rem;
              }
            }
          }
          .glassMessage {
            position: absolute;
            top: 20rem;
          }
        }
        .rightSideContainer {
          width: 100%;
          height: 40vh;
          background-image: url(${img2});
          background-size: cover;
          background-position: 75%;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-top-right-radius: 2rem;
          border-bottom-right-radius: 2rem;
        }
      }
    }
  }
`;
export default ContactUs;
