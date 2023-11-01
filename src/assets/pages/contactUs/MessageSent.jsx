import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { conatctUsContext } from "../../contexts/ContactUsContext";

const MessageSent = () => {
  const { setMessageSent } = useContext(conatctUsContext);
  return (
    <Wrapper>
      <div className="element">
        <h1>Message sent successfully</h1>
        <Link to={"/"}>
          <button onClick={() => setMessageSent(false)}>Back to home</button>
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30rem;
    width: 40rem;
    background: radial-gradient(
      75% 75% at 89% 10%,
      rgba(71, 170, 252, 0.1) 0%,
      rgba(69, 97, 255, 0.1) 100%
    );

    box-shadow: inset -5px 5px 5px 0px rgba(255, 255, 255, 0.1),
      inset 0px -5px 5px 0px rgba(26, 56, 227, 0.041);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    h1 {
      color: #047f83;
      font-size: 2.5rem;
      margin-bottom: 4rem;
    }
    button {
      width: 8rem;
      height: 3rem;
      border: none;
      border: 2px solid #06a4a9;
      background-color: transparent;
      border-radius: 1rem;
      font-size: 1rem;
      font-weight: 600;
      color: #047f83;
      cursor: pointer;
      &:hover {
        background-color: #00fbff18;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    .element {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 20rem;
      width: 100%;
      background: radial-gradient(
        75% 75% at 89% 10%,
        rgba(71, 171, 252, 0.229) 0%,
        rgba(69, 97, 255, 0.266) 100%
      );

      box-shadow: inset -5px 5px 5px 0px rgba(255, 255, 255, 0.201),
        inset 0px -5px 5px 0px rgba(26, 56, 227, 0.107);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      h1 {
        color: #047f83;
        font-size: 1.5rem;
        margin-bottom: 4rem;
      }
      button {
        width: 8rem;
        height: 3rem;
        border: none;
        border: 2px solid #06a4a9;
        background-color: transparent;
        border-radius: 1rem;
        font-size: 1rem;
        font-weight: 600;
        color: #047f83;
        cursor: pointer;
        &:hover {
          background-color: #00fbff18;
        }
      }
    }
  }
`;
export default MessageSent;
