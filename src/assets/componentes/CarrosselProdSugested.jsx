import styled from "styled-components";
import { prodArrayCarrossel } from "../utils/APIArray";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const ProductesSugested = () => {
  const [moveCarrossel, setMoveCarrossel] = useState(0);
  const [arrayLength, setArrayLength] = useState(prodArrayCarrossel.length);

  const screenSize = useRef(window.innerWidth);

  const moveRight = () => {
    if (screenSize.current <= 550) {
      if (arrayLength > 1) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 380);
      } else {
        return;
      }
    } else {
      if (arrayLength > 3) {
        setArrayLength(arrayLength - 1);
        setMoveCarrossel(moveCarrossel - 604);
      } else {
        return;
      }
    }
  };

  const moveLeft = () => {
    if (screenSize.current < 550) {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 380);
      } else {
        return;
      }
    } else {
      if (arrayLength < prodArrayCarrossel.length) {
        setArrayLength(arrayLength + 1);
        setMoveCarrossel(moveCarrossel + 600);
      } else {
        return;
      }
    }
  };

  return (
    <Wrapper>
      <h3>You may be interested in</h3>
      <div className="btnLeft" onClick={() => moveLeft()}>
        <FiArrowLeft />
      </div>
      <div className="btnRight" onClick={() => moveRight()}>
        <FiArrowRight />
      </div>
      <div className="itensSec5">
        {prodArrayCarrossel.map((item) => {
          return (
            <Link to={`/singleproduct/${item.id}`} key={item.id}>
              <div
                className="boxSec5"
                style={{ transform: `translateX(${moveCarrossel}px)` }}
                key={item.id}
              >
                <img src={item.img01} alt="" />
                <div className="infoBox">
                  <div className="innerInfobox">
                    <h4>{item.title}</h4>
                    <p className="description">{item.introduction}</p>
                    <p className="colors">{item.colors} Colors</p>
                    <span>R${item.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 56.25rem;
  width: auto;

  h3 {
    position: absolute;
    top: 0px;
    left: 6.25rem;
    font-size: 3.438rem;
    font-weight: 500;
    color: #2b2b2b;
  }
  .btnLeft {
    position: absolute;
    left: 2.5rem;
    top: 520px;
    font-size: 32.5rem;
    width: 5.313rem;
    height: 5.313rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: gray;
    box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
    z-index: 99;
    cursor: pointer;
    &:hover {
      background-color: #cdcbcb;
      color: white;
    }
  }
  .btnRight {
    position: absolute;
    right: 2.5rem;
    top: 32.5rem;
    font-size: 3.125rem;
    width: 5.313rem;
    height: 5.313rem;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: gray;
    box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
    z-index: 99;
    cursor: pointer;
    &:hover {
      background-color: #cdcbcb;
      color: white;
    }
  }
  a {
    color: #2b2b2b;
    object-fit: contain;
  }
  .itensSec5 {
    display: flex;
    align-items: center;
    width: 94%;
    overflow: hidden;
    .boxSec5 {
      margin: 1.563rem;
      height: 43.75rem;
      position: relative;
      background-color: #f5f3f3;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      img {
        width: 34.375rem;
      }
      .infoBox {
        position: absolute;
        background-color: white;
        bottom: 0;
        width: 100%;
        height: 25%;
        .innerInfobox {
          margin: 1.25rem;
          h4 {
            font-size: 1.375rem;
            font-weight: 600;
            margin-bottom: 0.625rem;
            letter-spacing: 0.063rem;
          }
          .description,
          .colors {
            font-size: 1.125;
            font-weight: 400;
            letter-spacing: 0.063rem;
            margin-bottom: 0.5rem;
          }
          span {
            font-size: 1.25rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30rem;
    width: 36rem;
    margin-top: 4rem;
    margin-bottom: 7rem;

    h3 {
      position: absolute;
      top: -3rem;
      left: 1.5rem;
      font-size: 1.7rem;
      font-weight: 500;
      color: #2b2b2b;
    }
    .btnLeft {
      position: absolute;
      left: 2.5rem;
      top: 31rem;
      font-size: 3rem;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    .btnRight {
      position: absolute;
      right: 2.5rem;
      top: 31rem;
      font-size: 3rem;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: gray;
      box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
      z-index: 99;
      cursor: pointer;
      &:hover {
        background-color: #cdcbcb;
        color: white;
      }
    }
    a {
      color: #2b2b2b;
      object-fit: contain;
    }
    .itensSec5 {
      display: flex;
      align-items: center;
      width: 94%;
      overflow: hidden;

      .boxSec5 {
        margin: 1.5rem;
        height: 28.5rem;
        position: relative;
        background-color: #f5f3f3;
        box-shadow: rgba(100, 100, 111, 0.2) 0 0.438rem 1.813rem 0;
        transition: all 0.5s ease-in-out;

        cursor: pointer;
        img {
          overflow: hidden;

          width: 22rem;
        }
        .infoBox {
          position: absolute;
          background-color: white;
          bottom: 0;
          width: 100%;
          height: 37%;
          padding: 0.6rem 1rem;
          .innerInfobox {
            margin: 0.25rem;
            h4 {
              font-size: 1rem;
              font-weight: 600;
              margin-bottom: 0.625rem;
              letter-spacing: 0.063rem;
            }
            .description,
            .colors {
              font-size: 1;
              font-weight: 400;
              letter-spacing: 0.063rem;
              margin-bottom: 0.5rem;
            }
            span {
              font-size: 1.25rem;
            }
          }
        }
      }
    }
  }
`;

export default ProductesSugested;
