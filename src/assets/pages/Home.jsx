import styled from "styled-components";
import { useEffect, useState } from "react";
import Navbar from "../componentes/navbar/Navbar";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import backpic2 from "../images/homeImg/section1/backpic2.jpeg";
import logo from "../images/logoImg/logo.jpeg";
import shoes from "../images/homeImg/section2/shoes.avif";
import accessories from "../images/homeImg/section2/accessories.avif";
import apparel from "../images/homeImg/section2/apparel.avif";
import sec3img1 from "../images/homeImg/section3/sec3img1.avif";
import sec3img2 from "../images/homeImg/section3/sec3img2.avif";
import sec3img3 from "../images/homeImg/section3/sec3img3.avif";
import sec3img4 from "../images/homeImg/section3/sec3img4.avif";
import sec3img5 from "../images/homeImg/section3/sec3img5.avif";
import apparelSec4 from "../images/homeImg/section4/apparelSec4.avif";
import cloudultra2 from "../images/homeImg/section4/cloudultra2.avif";
import centerCourt from "../images/homeImg/section4/centerCourt.jpeg";
import shorts from "../images/homeImg/section4/shorts.avif";
import runningImg from "../images/homeImg/section6/runningImg.avif";
import tennis from "../images/homeImg/section6/tennis.avif";
import writter from "../images/homeImg/section6/writter.avif";
import couple from "../images/homeImg/section6/couple.avif";
import woman from "../images/homeImg/section6/woman.avif";
import shoe from "../images/homeImg/section6/shoe.avif";
import hiking from "../images/homeImg/section6/hiking.avif";
import Footer from "../componentes/footer/Footer";
import CarrosselProdSugested from "../componentes/CarrosselProdSugested";
import { Link } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
const Home = () => {
  const { user, logOut } = useUserAuth();

  const [cardPosition1, setCardPosition1] = useState(5);
  const [cardPosition2, setCardPosition2] = useState(0);
  const [cardPosition3, setCardPosition3] = useState(0);
  const [cardPosition4, setCardPosition4] = useState(0);
  const [cardPosition5, setCardPosition5] = useState(0);

  const [moveFunction, setMoveFunction] = useState(false); //section 6
  const [moveBcgImg, setMoveBcgImg] = useState(false); //section 6
  const [moveboxMission, setMoveboxMission] = useState(false); //section 6
  const [moveOverlayContainer, setMoveOverlayContainer] = useState(0); //section 6

  //função para empilhar cards na seção 3
  const functionCardPosition = (event) => {
    const id = event.target.id;
    if (id === "1") {
      setCardPosition1("5");
      setCardPosition2("1");
      setCardPosition3("1");
      setCardPosition4("1");
      setCardPosition5("1");
    } else if (id === "2") {
      setCardPosition1("1");
      setCardPosition2("5");
      setCardPosition3("1");
      setCardPosition4("1");
      setCardPosition5("1");
    } else if (id === "3") {
      setCardPosition1("1");
      setCardPosition2("1");
      setCardPosition3("5");
      setCardPosition4("1");
      setCardPosition5("1");
    } else if (id === "4") {
      setCardPosition1("1");
      setCardPosition2("1");
      setCardPosition3("1");
      setCardPosition4("5");
      setCardPosition5("1");
    } else if (id === "5") {
      setCardPosition1("1");
      setCardPosition2("1");
      setCardPosition3("1");
      setCardPosition4("1");
      setCardPosition5("5");
    }
  };

  // ----------------------------------------------------------------
  //funções para movimentações das divs OverlayContainer na seção 6

  const moveOverlayLeft = () => {
    if (moveOverlayContainer > -1500) {
      setMoveOverlayContainer(moveOverlayContainer - 700);
    } else {
      return;
    }
  };

  const moveOverlayRight = () => {
    if (moveOverlayContainer < 0) {
      setMoveOverlayContainer(moveOverlayContainer + 700);
    } else {
      return;
    }
  };

  // const handleLogOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (moveFunction) {
      const moveDivFunction1 = () => {
        setMoveboxMission(!moveboxMission);
        setMoveOverlayContainer(-700);
        setTimeout(() => {
          setMoveBcgImg(!moveBcgImg);
        }, 500);
      };
      moveDivFunction1();
    } else {
      const moveDivFunction2 = () => {
        setMoveBcgImg(!moveBcgImg);
        setMoveOverlayContainer(0);
        setTimeout(() => {
          setMoveboxMission(!moveboxMission);
        }, 500);
      };
      moveDivFunction2();
    }
  }, [moveFunction]);

  return (
    <Wrapper>
      <section className="section1">
        <nav>
          <img src={logo} alt="" className="logo" />
          <Navbar />
        </nav>

        <div className="infocontainer">
          <h1>Built to go the distance</h1>
          <h3>
            Fan favorites across footwear and apparel.
            <br /> See how they run.
          </h3>
          <div className="btnsContainer">
            <Link to={"/ShoesPage"}>
              <button>Shop here</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="section2Title">
          <h4>Shop</h4>
        </div>

        <div className="pagesLinkContainer">
          <Link to={"/ShoesPage"}>
            <div className="linkBox">
              <img src={shoes} alt="" />
              <div className="bottomDiv">
                <p>Shoes</p>
                <button>
                  <AiOutlineArrowRight />
                </button>
              </div>
              <div className="shadow"></div>
            </div>
          </Link>

          <Link to={"/ShoesPage"}>
            <div className="linkBox">
              <img src={apparel} alt="" />
              <div className="bottomDiv">
                <p>Shoes</p>
                <button>
                  <AiOutlineArrowRight />
                </button>
              </div>
              <div className="shadow"></div>
            </div>
          </Link>

          <Link to={"/ShoesPage"}>
            <div className="linkBox">
              <img src={accessories} alt="" />
              <div className="bottomDiv">
                <p>Shoes</p>
                <button>
                  <AiOutlineArrowRight />
                </button>
              </div>
              <div className="shadow"></div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section3">
        <div className="cards">
          <p className="transversal">ACTIVITIES</p>

          <div className="cardsList">
            <p id="1" onMouseEnter={(id) => functionCardPosition(id)}>
              ROAD RUNNING
            </p>
            <p id="2" onMouseEnter={(id) => functionCardPosition(id)}>
              TRAIL RUNNING
            </p>
            <p id="3" onMouseEnter={(id) => functionCardPosition(id)}>
              LIFE STYLE
            </p>
            <p id="4" onMouseEnter={(id) => functionCardPosition(id)}>
              HIKING AND OUTDOORS
            </p>
            <p id="5" onMouseEnter={(id) => functionCardPosition(id)}>
              TENNIS
            </p>
          </div>

          <div className="cardsContainer">
            <img
              src={sec3img1}
              alt=""
              className="cardImg cardImg1"
              style={{ zIndex: `${cardPosition1}` }}
            />

            <img
              src={sec3img2}
              alt=""
              className="cardImg cardImg2"
              style={{ zIndex: `${cardPosition2}` }}
            />
            <img
              src={sec3img3}
              alt=""
              className="cardImg cardImg3"
              style={{ zIndex: `${cardPosition3}` }}
            />

            <img
              src={sec3img4}
              alt=""
              className="cardImg cardImg4"
              style={{ zIndex: `${cardPosition4}` }}
            />

            <img
              src={sec3img5}
              alt=""
              className="cardImg cardImg5"
              style={{ zIndex: `${cardPosition5}` }}
            />
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="containerSec4">
          <Link to={"/singleproduct/4"}>
            <div className="boxContainer sec4Backgroundimg1">
              <h4>The new Cloudultra 2</h4>
              <button className="bttnShop">Shop now</button>
              <div className="shadowSec4"></div>
            </div>
          </Link>

          <Link to={"/ShoesPage"}>
            <div className="boxContainer sec4Backgroundimg2">
              <h4>Tops and t-shirts</h4>
              <button className="bttnShop">Shop now</button>
              <div className="shadowSec4"></div>
            </div>
          </Link>

          <Link to={"/ShoesPage"}>
            <div className="boxContainer sec4Backgroundimg3">
              <h4>Shorts</h4>
              <button className="bttnShop">Shop now</button>
              <div className="shadowSec4"></div>
            </div>
          </Link>

          <Link to={"/singleproduct/10"}>
            <div className="boxContainer sec4Backgroundimg4">
              <h4>Center Court</h4>
              <button className="bttnShop">Shop now</button>
              <div className="shadowSec4"></div>
            </div>
          </Link>
        </div>
      </section>

      <section className="section5">
        <CarrosselProdSugested />
      </section>

      <section className="section6">
        <div className="sec6Container">
          <div
            className="leftBcgSec6"
            style={
              !moveBcgImg
                ? { transform: `translateX(${-25}rem)` }
                : { transform: `translateX(${0}px)` }
            }
          >
            <img src={runningImg} alt="" />
            <div className="shadowLayer"></div>
          </div>

          <div
            className="rightBcgSec6"
            style={
              !moveBcgImg
                ? { transform: `translateX(${-25}rem)` }
                : { transform: `translateX(${0}px)` }
            }
          >
            <img src={hiking} alt="" />
          </div>

          <div
            className="boxMission"
            onClick={() => setMoveFunction(!moveFunction)}
            style={
              moveFunction
                ? { transform: `translateX(${-62.5}rem)`, opacity: "0.5" }
                : { transform: `translateX(${0}px)`, opacity: "1" }
            }
          >
            <h4>Our mission</h4>
            <p>Ignite the power of the human spirit through movement</p>
            <button
              className="containerReadMore"
              onClick={() => setMoveFunction(!moveFunction)}
            >
              <div className="btnReadMore">
                <div className="redmoreImg"></div>
                <p>Read more</p>
              </div>
            </button>
          </div>
        </div>

        <div
          className="OverlayContainer"
          style={
            moveBcgImg
              ? { transform: `translateX(${moveOverlayContainer}px)` }
              : { transform: `translateX(${moveOverlayContainer}px)` }
          }
        >
          <div className="bigBox">
            <h4>Inspired by athletes.</h4>
            <img src={tennis} alt="" />
            <div className="shadowLayerBigBox"></div>
          </div>

          <div className="smallBox">
            <h4>Powered by swiss engineering</h4>
            <img src={writter} alt="" />
            <div className="shadowLayerSmallBox"></div>
          </div>
          <div className="bigBox">
            <h4>We belive in amzing things happen when we move.</h4>
            <img src={couple} alt="" />
            <div className="shadowLayerBigBox"></div>
          </div>
          <div className="smallBox">
            <h4>Whether that is breaking records on the track...</h4>
            <img src={woman} alt="" />
            <div className="shadowLayerSmallBox"></div>
          </div>
          <div className="bigBox">
            <h4>
              ...Or developing innovative new technologies for a more
              sustainable future.
            </h4>
            <img src={shoe} alt="" />
            <div className="shadowLayerBigBox"></div>
          </div>
          <div className="smallBox">
            <img src={logo} alt="" className="logsmallbox" />
            <div className="shadowLayerSmallBox"></div>
          </div>
        </div>
        {moveFunction && (
          <div className="sec6Btns">
            <button
              className="ClickVolta"
              onClick={() => setMoveFunction(!moveFunction)}
            >
              <AiOutlineClose className="iconX" />
            </button>

            <div className="divbtn">
              <div className="sec6BtnLeft" onClick={() => moveOverlayLeft()}>
                <FiArrowLeft
                  className="arowLefet"
                  style={{ fontSize: "1.875rem" }}
                />
              </div>
              <div className="sec6BtnRight" onClick={() => moveOverlayRight()}>
                <FiArrowRight
                  className="arowRight"
                  style={{ fontSize: "1.875rem" }}
                />
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .section1 {
    position: relative;
    background: url(${backpic2}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    nav {
      padding: 0 4rem;
      position: absolute;
      .logo {
        width: 5.25rem;
        margin: 2.55rem 3.75rem;
      }
    }
    .logo {
      mix-blend-mode: color-dodge;
      width: 6.25rem;
      margin: 1.25rem 3.75rem;
    }
    .infocontainer {
      position: absolute;
      bottom: 10.625rem;
      left: 6.875rem;
      width: 1000px;
      color: white;
      z-index: 1;
      h1 {
        font-size: 3.75rem;
        font-weight: 500;
        margin-bottom: 1.563rem;
      }
      h3 {
        font-size: 2.188rem;
        font-weight: 500;
        margin-bottom: 1.563rem;
      }
      .btnsContainer {
        button {
          width: 13.75rem;
          height: 5rem;
          border-radius: 2.5rem;
          border: none;
          background-color: white;
          font-size: 1.25rem;
          font-weight: 500;
          margin-right: 1.25rem;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          &:hover {
            background-color: #d0cfcf;
          }
        }
      }
    }
  }
  .section2 {
    min-height: 56.25rem;
    width: 100vw;
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    .section2Title {
      width: 86%;

      h4 {
        font-size: 3.75rem;
        font-weight: 500;
      }
    }

    .pagesLinkContainer {
      height: 900;
      display: flex;
      justify-content: center;
      align-items: center;
      .linkBox {
        position: relative;
        width: 34.375rem;
        height: 53.125rem;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: 0.625rem;
        border-radius: 0.938rem;
        img {
          object-fit: contain;
          width: 43.438rem;
          transition: all 0.3s ease-in-out;
          border-radius: 0.938rem;
          &:hover {
            width: 40rem;
          }
        }
        .bottomDiv {
          position: absolute;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0 2.5rem;
          bottom: 4.375rem;
          z-index: 99;
          p {
            font-size: 2.188rem;
            font-weight: 500;
            color: white;
            cursor: pointer;
            &:hover {
              color: gray;
            }
          }
          button {
            width: 3.438rem;
            height: 3.438rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: transparent;
            border: 0.125rem solid white;
            color: white;
            font-size: 1.875rem;
            cursor: pointer;
            &:hover {
              background-color: white;
              color: gray;
            }
          }
        }
        .shadow {
          width: 100%;
          position: absolute;
          bottom: 0;
          height: 15.625rem;
          background-image: linear-gradient(to top, #000000a2, transparent);
          z-index: 98;
        }
      }
    }
  }
  .section3 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 46.875rem;

    .cards {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 88%;
      position: relative;
      .transversal {
        position: absolute;
        transform: rotate(-90deg);
        top: 5rem;
        left: -1.063rem;
        font-size: 1.063rem;
        letter-spacing: 0.375rem;
        font-weight: 500;
      }
      .cardsList {
        height: 40.625rem;
        width: auto;
        margin-left: 6.25rem;
        p {
          width: fit-content;
          font-size: 3.25rem;
          font-weight: 500;
          color: #323131;
          margin-bottom: 1.875rem;
          margin-left: 6.25rem;
          position: relative;
          cursor: pointer;

          &:after {
            content: "";
            position: absolute;
            width: 105%;
            height: 0.25rem;
            background-color: #323131;
            bottom: 0;
            transform-origin: bottom left;
            transform: scaleX(0);
            left: 0;
            transition: all 0.3s ease-in-out;
          }
          &:hover::after {
            transform: scaleX(1);
          }
        }
      }
      .cardsContainer {
        position: relative;
        width: 29.375rem;
        height: 38.75rem;
        margin-right: 6.25rem;

        .cardImg {
          top: 0;
          position: absolute;
          width: 28.125rem;
          border-radius: 2.5rem;
          cursor: pointer;
        }

        .cardImg1 {
          transform: rotate(3deg);
        }
        .cardImg2 {
          transform: rotate(5.5deg);
        }
        .cardImg3 {
          transform: rotate(7.5deg);
        }
        .cardImg4 {
          transform: rotate(9.5deg);
        }
        .cardImg5 {
          transform: rotate(11.5deg);
        }
      }
    }
  }
  .section4 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 53.125rem;

    .containerSec4 {
      display: flex;
      .boxContainer {
        position: relative;
        overflow: hidden;
        width: 26.25rem;
        height: 43.75rem;
        border-radius: 1.563rem;
        margin: 0.938rem;
        cursor: pointer;

        h4 {
          position: absolute;
          color: white;
          bottom: 8.75rem;
          font-size: 1.875rem;
          font-weight: 500;
          left: 2.188rem;
          z-index: 99;
        }
        .bttnShop {
          position: absolute;
          width: 11.25rem;
          height: 3.75rem;
          background-color: white;
          border: none;
          border-radius: 2.5rem;
          font-size: 1.25rem;
          font-weight: 500;
          color: #3e3d3d;
          bottom: 3.125rem;
          left: 2.188rem;
          z-index: 99;
          border: 0.125rem solid #3e3d3d;
          cursor: pointer;
          &:hover {
            background-color: #d0cfcf;
          }
        }
      }
      .sec4Backgroundimg1 {
        background-image: url(${cloudultra2});
        background-position: center;
        background-size: cover;
      }
      .sec4Backgroundimg2 {
        background-image: url(${apparelSec4});
        background-position: center;
        background-size: cover;
      }
      .sec4Backgroundimg3 {
        background-image: url(${shorts});
        background-position: center;
        background-size: cover;
      }
      .sec4Backgroundimg4 {
        background-image: url(${centerCourt});
        background-position: center;
        background-size: cover;
      }
      .shadowSec4 {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 18.75rem;
        background-image: linear-gradient(to top, #000000a2, transparent);
        z-index: 98;
      }
    }
  }
  .section6 {
    position: relative;
    height: 100vh;
    overflow: hidden;

    .sec6Container {
      display: grid;
      grid-template-columns: 70% 30%;
      height: 100vh;
    }
    .leftBcgSec6 {
      height: 100vh;
      transition: all 0.4s ease-in;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .shadowLayer {
        width: 100%;
        height: 31.25rem;
        position: absolute;
        bottom: 0;
        z-index: 95;
        background-image: linear-gradient(
          to top,
          #000000a2,
          #000000a2,
          transparent
        );
      }
    }
    .rightBcgSec6 {
      width: 62.5rem;
      transition: all 0.4s ease-in;
      img {
        width: 90.375rem;
        object-fit: cover;
      }
    }
    .boxMission {
      position: absolute;
      width: 46rem;
      margin-bottom: 1.25rem;
      bottom: 8.125rem;
      left: 3.125;
      z-index: 97;
      transition: all ease-in 0.5s;
      padding-left: 1.7rem;
      h4 {
        font-size: 4.688rem;
        color: white;
        font-weight: 500;
        margin-bottom: 1.25rem;
      }
      p {
        font-size: 2.813rem;
        color: white;
        font-weight: 400;
        line-height: 3.125rem;
      }
      .containerReadMore {
        width: 17.5rem;
        height: 6.25rem;
        display: flex;
        align-items: center;
        margin-top: 1.25rem;
        border-radius: 3.125rem;
        border: none;
        background-color: transparent;

        .btnReadMore {
          display: flex;
          width: 17.5rem;
          height: 6.25rem;
          background-color: #dcad03;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border-radius: 3.125rem;
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
            width: 16.25rem;
            height: 6.563rem;
          }
          .redmoreImg {
            width: 5.25rem;
            height: 5.25rem;
            border-radius: 50%;
            background-image: url(${tennis});
            background-size: cover;
            background-position: 0;
          }
          p {
            font-size: 1.563rem;
            margin-right: 0.938rem;
            color: black;
          }
        }
      }
    }
    .OverlayContainer {
      height: 50rem;
      position: absolute;
      display: flex;
      top: 12.5rem;
      z-index: 98;
      left: 56.25rem;
      transition: all 0.3s ease-in;

      .bigBox {
        position: relative;
        width: 31.25rem;
        height: 41.688rem;
        margin: 0 1.9rem;
        border-radius: 0.7rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
          rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
        cursor: pointer;
        h4 {
          position: absolute;
          color: white;
          font-size: 1.875rem;
          bottom: 1.875rem;
          padding: 0 1.5rem;
          z-index: 98;
          font-weight: 500;
        }

        img {
          width: 31.25rem;
          border-radius: 0.7rem;
        }
        .shadowLayerBigBox {
          width: 100%;
          height: 9.4rem;
          position: absolute;
          bottom: 0;
          z-index: 96;
          background-image: linear-gradient(to top, #000000a2, transparent);
          border-radius: 0.6rem;
          cursor: pointer;
        }
      }
      .smallBox {
        position: relative;
        width: 28.125rem;
        height: 37.5rem;
        border-radius: 0.7rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0 0.375rem 0.75rem -0.125rem,
          rgba(0, 0, 0, 0.3) 0 0.188rem 0.438rem -0.188rem;
        cursor: pointer;
        h4 {
          position: absolute;
          color: white;
          font-size: 1.563rem;
          bottom: 1.875rem;
          padding: 0 1.5rem;
          z-index: 98;
          font-weight: 400;
          width: 100%;
        }

        img {
          width: 28.1rem;
          border-radius: 0.625rem;
        }
        .shadowLayerSmallBox {
          width: 100%;
          height: 9rem;
          position: absolute;
          bottom: 0;
          z-index: 95;
          border-radius: 0.5rem;
          background-image: linear-gradient(to top, #000000a2, transparent);
        }
      }
      .logsmallbox {
        width: fit-content;
        background-color: black;
        height: 37.5rem;
        object-fit: cover;
      }
    }

    .sec6Btns {
      width: 100rem;
      height: 110px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 100;
      position: absolute;
      z-index: 99;
      bottom: 2rem;
      left: 15rem;
      padding: 0 6.25rem 0 0;
      .ClickVolta {
        width: 6.875rem;
        height: 6.875rem;
        background-color: black;
        border-radius: 50%;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease-in;
        cursor: pointer;

        .iconX {
          color: white;
          font-size: 1.563rem;
          font-weight: 500;
          transition: all ease-in-out 0.3s;
        }
        &:hover > .iconX {
          font-size: 2.5rem;
          font-weight: 900;
        }
      }
      .divbtn {
        display: flex;
        width: 20rem;
        justify-content: space-between;
        .sec6BtnLeft,
        .sec6BtnRight {
          width: 6.875rem;
          height: 6.875rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: black;
          color: white;
          border-radius: 50%;
          cursor: pointer;
          &:hover {
            background-color: #191818;
            border: 0.125rem solid black;
          }
        }
      }
    }
  }
`;
export default Home;
