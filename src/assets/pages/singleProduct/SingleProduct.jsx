import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logo.jpeg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";
import Sizeguide from "./Sizeguide";
import { TfiClose } from "react-icons/tfi";
import Footer from "../../componentes/footer/Footer";
import QuickFacts from "./QuickFacts";
import CartShop from "./shopHere/ShopHere";
import { listProduct } from "../../utils/APIArray";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartToggleContex";

const SingleProduct = () => {
  const [moveCarroseel, setMoveCarrosel] = useState(0);
  const [toggleX, setToggleX] = useState(false);
  const [toggleShipping, setToggleShipping] = useState(false);
  const [toggleMaterials, setToggleMaterials] = useState(false);

  const moveRight = () => {
    if (moveCarroseel < -120) {
      setMoveCarrosel(0);
    } else {
      setMoveCarrosel(moveCarroseel - 60);
      console.log(moveCarroseel);
    }
  };

  const moveLeft = () => {
    if (moveCarroseel > -60) {
      return;
    } else {
      setMoveCarrosel(moveCarroseel + 60);
    }

    console.log(moveCarroseel);
  };

  const { id } = useParams();

  //context to move cart shop in and out
  const { showCart } = useContext(CartContext);

  return (
    <Wrapper>
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </div>

      <section className="section1">
        <div className="carrossel">
          <div
            className="innerCarrossel"
            style={{ transform: `translateX(${moveCarroseel}rem)` }}
          >
            <div className="prodContainer">
              <img src={listProduct[id].img01} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img02} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img03} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img04} alt="" />
            </div>
            <div className="prodContainer">
              <img src={listProduct[id].img05} alt="" />
            </div>
          </div>

          <div className="btnsCarroessel">
            <>
              <div className="btnCarrossel" onClick={() => moveLeft()}>
                <BsChevronLeft className=" btnLeft" />
              </div>
              <div className="btnCarrossel" onClick={() => moveRight()}>
                <BsChevronRight
                  className=" btnRight"
                  style={{ fontWeight: "700" }}
                />
              </div>
            </>
            <div className="dots">
              <div
                className="dot"
                style={{
                  backgroundColor: `${moveCarroseel === 0 ? "gray" : "white"}`,
                }}
              ></div>
              <div
                className="dot"
                style={{
                  backgroundColor: `${
                    moveCarroseel === -60 ? "gray" : "white"
                  }`,
                }}
              ></div>
              <div
                className="dot"
                style={{
                  backgroundColor: `${
                    moveCarroseel === -120 ? "gray" : "white"
                  }`,
                }}
              ></div>
              <div
                className="dot"
                style={{
                  backgroundColor: `${
                    moveCarroseel === -180 ? "gray" : "white"
                  }`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="infoContainer">
          <section className="sizeSection">
            <div className="dropContainer">
              <h4>Size & fit</h4>
              <TfiClose
                className="xToggle"
                onClick={() => setToggleX(!toggleX)}
                style={{
                  transform: `rotate(${toggleX ? "180deg" : "90deg"})`,
                }}
              />
            </div>
            {!toggleX ? (
              ""
            ) : (
              <div
                className="sizeGuideTable"
                style={{ transition: "all ease 0.4s" }}
              >
                <Sizeguide />
              </div>
            )}
          </section>
          <hr />
          <section className="Shipping">
            <div className="dropContainer">
              <h4>Shipping & Returns</h4>
              <TfiClose
                className="xToggle"
                onClick={() => setToggleShipping(!toggleShipping)}
                style={{
                  transform: `rotate(${toggleShipping ? "180deg" : "90deg"})`,
                }}
              />
            </div>
            {toggleShipping && (
              <div className="ShipContent">
                <p>Free shipping on all orders </p>
                <p>Free 30 days return period</p>
              </div>
            )}
          </section>
          <hr />
          <section className="materials">
            <div className="dropContainer">
              <h4>Shipping & Returns</h4>
              <TfiClose
                className="xToggle"
                onClick={() => setToggleMaterials(!toggleMaterials)}
                style={{
                  transform: `rotate(${toggleMaterials ? "180deg" : "90deg"})`,
                }}
              />
            </div>
            {toggleMaterials && (
              <div className="MaterialContainer">
                <div>
                  <h5>Materials</h5>
                  <p>Polyester: 100% recycled</p>
                </div>
                <div>
                  <h5>Supplier Transparency</h5>
                  <p>Diamond, Vietnam</p>
                </div>
              </div>
            )}
          </section>
        </div>
        <hr />
      </section>

      <section className="section3">
        <QuickFacts />
      </section>

      <div className="cartshop" style={{ right: `${showCart}` }}>
        <CartShop />
      </div>

      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  overflow-x: hidden;
  position: relative;

  .navbar {
    .logo {
      width: 6.25rem;
      margin: 1.25rem 3.75rem;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .section1 {
    .carrossel {
      position: relative;
      .innerCarrossel {
        display: flex;
        transition: all 0.6s ease;
        .prodContainer {
          width: 60rem;
          height: 60rem;
          background-color: #f6f4f3;
          margin: 0.4rem;
          img {
            width: 60rem;
          }
        }
      }
      .btnsCarroessel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 18rem;
        height: 5rem;
        position: absolute;
        bottom: 2rem;
        left: 5rem;

        .btnCarrossel {
          background-color: white;
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.5rem;
          border-radius: 50%;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          cursor: pointer;
          &:hover {
            background-color: #fafafa;
            font-size: 1.9rem;
          }
        }
        .dots {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 7rem;
          height: 3rem;

          .dot {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            border: 1px solid gray;
          }
        }
      }
    }
  }
  .section2 {
    width: 60rem;
    margin-left: 4rem;
    margin-top: 6rem;
    hr {
      margin: 2rem 0;
    }
    .sizeSection {
      margin-bottom: 2rem;
    }
    .infoContainer {
      .dropContainer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;

        h4 {
          font-size: 1.8rem;
          color: #302f2f;
          font-weight: 300;
          letter-spacing: 0.21rem;
          margin-left: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .xToggle {
          font-size: 1.1rem;
          font-weight: 700;
          width: 4rem;
          transition: all ease 0.4s;
          cursor: pointer;
        }
      }
      .ShipContent {
        margin-top: 2rem;
        margin-bottom: 4rem;
        p {
          font-size: 1.3rem;
          margin-left: 0.5rem;
          line-height: 2.7rem;
          font-weight: 300;
        }
      }
    }
    .materials {
      .MaterialContainer {
        display: flex;
        height: 16rem;
        div {
          margin-right: 11rem;
          margin-top: 3rem;
          h5 {
            font-size: 1.6rem;
            font-weight: 500;
          }
          p {
            font-size: 1.2rem;
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .section3 {
    margin: 8rem 0 10rem 0;
  }
  .cartshop {
    position: absolute;
    top: 11rem;
    transition: all ease-in 0.4s;
  }
`;
export default SingleProduct;
