import styled from "styled-components";
import { BiRuler } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { listProduct } from "../../../utils/APIArray";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartToggleContex";
import { ProdDetailContetx } from "../../../contexts/ProdetailContext";
import SizeTable from "./SizeTable";
import { SizeChosenContext } from "../../../contexts/SizeChosenContex";

const CartShop = () => {
  const [toggleGender, setToggleGender] = useState(false);

  const { id } = useParams();

  //context to send and delete itens from the cart.
  const { addProduct } = useContext(ProdDetailContetx);

  //context to move cart shop in and out.
  const { showCartFunction } = useContext(CartContext);

  //contetx to able or disable add to cart button.
  const { ableBtn, lessenedHighlit } = useContext(SizeChosenContext);

  return (
    <Wrapper>
      <div className="cartShopConatiner">
        {/* context to move cart shop in and out  */}
        <div className="hiddenTag" onClick={() => showCartFunction()}>
          <p>Shop here</p>
        </div>
        <div className="cartBody">
          <div className="topGender">
            {!toggleGender && <span className="gender">MENS</span>}
            {toggleGender && <span className="gender">WOMEN</span>}

            <div className="dot">
              <GoDotFill />
            </div>
            <span>SHOES</span>
          </div>

          <main>
            <div className="topMain">
              <h3>{listProduct[id].title} </h3>
              <p className="price">R${listProduct[id].price},00 </p>
            </div>

            <p className="mainDescription">{listProduct[id].description}</p>
            <div className="btnGenders">
              <div className="backContainer">
                <p onClick={() => setToggleGender(!toggleGender)}>Men's</p>
                <p onClick={() => setToggleGender(!toggleGender)}>Women's</p>
              </div>
              {!toggleGender && (
                <button className="buttonLeft">
                  <p>Men's</p>
                </button>
              )}

              {toggleGender && (
                <button className="buttonRight">
                  <p>Women's</p>
                </button>
              )}
            </div>

            <div className="tableSizeContainer">
              <SizeTable />
              <div className="rulerContainer">
                <BiRuler className="rulerIcon" />
                <p>Size chart</p>
              </div>
            </div>
            <div className="btnShop">
              <button
                className="addToCart"
                onClick={() => {
                  addProduct(listProduct[id]);
                  showCartFunction();
                  lessenedHighlit();
                }}
                disabled={ableBtn}
              >
                Add to cart
              </button>
            </div>
          </main>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cartShopConatiner {
    width: 48rem;
    display: flex;
    justify-content: end;
    .hiddenTag {
      width: 8rem;
      height: 3rem;
      left: 1.8rem;
      top: 0.5rem;
      background-color: #770202;
      display: flex;
      align-items: center;
      justify-content: start;
      color: white;
      border-top-left-radius: 2rem;
      border-bottom-left-radius: 2rem;
      margin-top: 0.3rem;
      position: absolute;
      transition: 4s ease;
      animation: pulse 2s infinite;
      cursor: pointer;
      p {
        margin-left: 0.6rem;
      }
    }

    @keyframes pulse {
      0% {
        transform: scaleX(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }

      70% {
        transform: scaleX(1.05);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scaleX(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
    .cartBody {
      width: 40rem;
      height: 58rem;
      padding: 2rem;
      background-color: white;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      margin-bottom: 10rem;
      z-index: 99;
      .topGender {
        display: flex;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
        span {
          font-size: 0.9rem;
          color: #353434;
        }
        .dot {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.2rem;
          margin: 0 0.5rem;
          color: #353434;
        }
      }
      .topMain {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;
        h3 {
          font-size: 2.6rem;
          color: #343333;
        }
        p {
          font-size: 1.8rem;
        }
      }
      .mainDescription {
        width: 24rem;
        font-size: 1rem;
        color: #343333;
        margin-bottom: 2rem;
      }
      .btnGenders {
        position: relative;
        width: 20rem;
        height: 4rem;
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
            font-size: 1rem;
            width: 9rem;
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
          width: 9.9rem;
          height: 100%;
          border-radius: 10rem;
          font-size: 1.1rem;
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
          width: 9.9rem;
          height: 100%;
          border-radius: 10rem;
          font-size: 1.1rem;
          font-weight: 500;
          z-index: 98;

          cursor: pointer;
        }
        .backContainer {
          position: absolute;
          z-index: 95;
          display: flex;
          justify-content: space-around;
          align-items: center;

          width: 20rem;
          height: 4rem;
          border-radius: 10rem;
          font-size: 1.2rem;
        }
      }
      .tableSizeContainer {
        .rulerContainer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 8.5rem;
          margin-top: 1rem;
          margin-left: 0.5rem;
          .rulerIcon {
            font-size: 1.4rem;
          }
          p {
            font-size: 1.2rem;
          }
        }
      }
      .btnShop {
        height: 4.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 3rem;
        .addToCart {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30rem;
          height: 4.5rem;
          background-color: black;
          color: white;
          border-radius: 3rem;
          border: 2px solid black;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          cursor: pointer;
          &:hover {
            font-size: 1.4rem;
            background-color: #292929;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartShopConatiner {
      width: 80%;
      display: flex;
      justify-content: end;
      .hiddenTag {
        width: 8rem;
        height: 3rem;
        left: 1.8rem;
        top: 0.5rem;
        background-color: #770202;
        display: flex;
        align-items: center;
        justify-content: start;
        color: white;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        margin-top: 0.3rem;
        position: absolute;
        transition: 4s ease;
        animation: pulse 2s infinite;
        cursor: pointer;
        p {
          margin-left: 0.6rem;
        }
      }

      @keyframes pulse {
        0% {
          transform: scaleX(0.95);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        70% {
          transform: scaleX(1.05);
          box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }

        100% {
          transform: scaleX(0.95);
          box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
      }
      .cartBody {
        width: 40rem;
        height: 58rem;
        padding: 2rem;
        background-color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        margin-bottom: 10rem;
        z-index: 99;
        .topGender {
          display: flex;
          margin-bottom: 0.5rem;
          margin-left: 0.5rem;
          span {
            font-size: 0.9rem;
            color: #353434;
          }
          .dot {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.2rem;
            margin: 0 0.5rem;
            color: #353434;
          }
        }
        .topMain {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          h3 {
            font-size: 2.6rem;
            color: #343333;
          }
          p {
            font-size: 1.8rem;
          }
        }
        .mainDescription {
          width: 24rem;
          font-size: 1rem;
          color: #343333;
          margin-bottom: 2rem;
        }
        .btnGenders {
          position: relative;
          width: 20rem;
          height: 4rem;
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
              font-size: 1rem;
              width: 9rem;
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
            width: 9.9rem;
            height: 100%;
            border-radius: 10rem;
            font-size: 1.1rem;
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
            width: 9.9rem;
            height: 100%;
            border-radius: 10rem;
            font-size: 1.1rem;
            font-weight: 500;
            z-index: 98;

            cursor: pointer;
          }
          .backContainer {
            position: absolute;
            z-index: 95;
            display: flex;
            justify-content: space-around;
            align-items: center;

            width: 20rem;
            height: 4rem;
            border-radius: 10rem;
            font-size: 1.2rem;
          }
        }
        .tableSizeContainer {
          .rulerContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 8.5rem;
            margin-top: 1rem;
            margin-left: 0.5rem;
            .rulerIcon {
              font-size: 1.4rem;
            }
            p {
              font-size: 1.2rem;
            }
          }
        }
        .btnShop {
          height: 4.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 3rem;
          .addToCart {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30rem;
            height: 4.5rem;
            background-color: black;
            color: white;
            border-radius: 3rem;
            border: 2px solid black;
            font-size: 1.2rem;
            transition: all 0.2s ease;
            cursor: pointer;
            &:hover {
              font-size: 1.4rem;
              background-color: #292929;
            }
          }
        }
      }
    }
  }
`;
export default CartShop;
