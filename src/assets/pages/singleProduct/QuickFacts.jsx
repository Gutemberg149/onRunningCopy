import styled from "styled-components";
import { FiFeather } from "react-icons/fi";
import { WiCloudy } from "react-icons/wi";
import { PiSneakerLight } from "react-icons/pi";
import { GiMountainRoad } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
const QuickFacts = () => {
  const [toggleFact1, setToggelFact1] = useState(false);
  const [toggleFact2, setToggelFact2] = useState(false);
  const [toggleFact3, setToggelFact3] = useState(false);
  const [toggleFact4, setToggelFact4] = useState(false);

  return (
    <Wrapper>
      <h1>Quick facts</h1>
      <div className="factsContainer">
        <div className="fact">
          <>
            <div className="top">
              <p>Weight</p>
              <p className="i" onClick={() => setToggelFact1(!toggleFact1)}>
                i
              </p>
            </div>
            <div className="middle">
              <p>295 &#103;</p>
              <FiFeather className="iconSec3" />
            </div>
          </>
          {toggleFact1 && (
            <div className="blackBox">
              <div
                className="iconConatiner"
                onClick={() => setToggelFact1(!toggleFact1)}
              >
                <TfiClose className="iconBlackBox" />
              </div>

              <div className="container">
                <p>How heavy an individual shoe or product is.</p>
              </div>
            </div>
          )}
        </div>

        <div className="fact">
          <>
            <div className="top">
              <p>Cushioning</p>
              <p className="i" onClick={() => setToggelFact2(!toggleFact2)}>
                i
              </p>
            </div>
            <div className="middle">
              <p>Plush</p>
              <WiCloudy className="iconSec3" />
            </div>
          </>
          {toggleFact2 && (
            <div className="blackBox">
              <div
                className="iconConatiner"
                onClick={() => setToggelFact2(!toggleFact2)}
              >
                <TfiClose className="iconBlackBox" />
              </div>

              <div className="container">
                <p>
                  The level of cushioning in a shoe will determine how it feels
                  when your foot lands. More cushioning means less impact and
                  extra comfort. Less cushioning means a faster and more
                  responsive running experience.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="fact">
          <>
            <div className="top">
              <p>Heel To Toe Drop</p>
              <p className="i" onClick={() => setToggelFact3(!toggleFact3)}>
                i
              </p>
            </div>
            <div className="middle">
              <p>9.5mm</p>
              <PiSneakerLight className="iconSec3" />
            </div>
          </>
          {toggleFact3 && (
            <div className="blackBox">
              <div
                className="iconConatiner"
                onClick={() => setToggelFact3(!toggleFact3)}
              >
                <TfiClose className="iconBlackBox" />
              </div>

              <div className="container">
                <p>
                  Heel to toe drop is the difference in height between the heel
                  and the forefoot. In a shoe with a drop of 7mm, your heel will
                  sit 7mm higher than your forefoot.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="fact">
          <>
            <div className="top">
              <p>Road Running Style</p>
              <p className="i" onClick={() => setToggelFact4(!toggleFact4)}>
                i
              </p>
            </div>
            <div className="middle">
              <p>Resistent</p>
              <GiMountainRoad className="iconSec3" />
            </div>
          </>
          {toggleFact4 && (
            <div className="blackBox">
              <div
                className="iconConatiner"
                onClick={() => setToggelFact4(!toggleFact4)}
              >
                <TfiClose className="iconBlackBox" />
              </div>

              <div className="container">
                <p>
                  Every shoe offers a unique running sensation or 'ride'
                  depending on its design. Stable: A supportive feel for added
                  stability.
                  <br />
                  <br />
                  Suitable for runners of any level.How heavy an individual shoe
                  or product is.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    font-size: 5rem;
    font-weight: 400;
    color: #272727;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }
  height: 45rem;
  .factsContainer {
    height: 35rem;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    .fact {
      position: relative;
      width: 100%;
      margin-left: 0.1rem;
      border-left: 1px solid gray;
      .top {
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
        p {
          font-size: 1.4rem;
        }
        .i {
          width: 2.3rem;
          height: 2.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: #f5c1033a;
          transition: all ease 0.3s;
          cursor: pointer;
          &:hover {
            width: 2.6rem;
            height: 2.6rem;
          }
        }
      }
      .middle {
        height: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          font-size: 3.6rem;
          font-weight: 300;
        }

        .iconSec3 {
          font-size: 2.4rem;
          font-weight: 300;
          margin-top: 2rem;
        }
      }
    }
    .fact:last-child {
      border-right: 1px solid gray;
    }
    .blackBox {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100.5%;
      height: 100%;
      background-color: black;
      top: 0;
      .iconConatiner {
        width: 88%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 2.2rem;
        margin-top: 0.4rem;
        .iconBlackBox {
          color: white;
          font-size: 1.1rem;
          cursor: pointer;
        }
      }

      .container {
        height: 70%;
        width: 80%;
        margin-top: 4rem;
        p {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
`;
export default QuickFacts;
