import styled from "styled-components";
import logo from "../../images/logoImg/logo.jpeg";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";
import { useContext } from "react";
import { ProdDetailContetx } from "../../contexts/ProdetailContext";
import Payment from "./Payment";
import Shipping from "./Shipping";
import { ShippingContext } from "../../contexts/ShippingContext";
import Footer from "../../componentes/footer/Footer";

const CheckOut = () => {
  //context to send and delete itens from the cart
  const { cartItems, total } = useContext(ProdDetailContetx);

  const { user } = useUserAuth();

  //context to change checout from shipping details to payment details, line 53
  const { movetoPayment } = useContext(ShippingContext);
  return (
    <Wrapper>
      <div className="topBar">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
      </div>

      <div className="paymentTrail">
        <div className="trailBall">
          <span className="span">1</span>
          <div className="trailBallTittle">EMAIL</div>
        </div>
        <div className="middleLine">
          <hr />
        </div>
        <div className="trailBall ">
          <span
            className="span current"
            style={{ backgroundColor: movetoPayment ? "gray" : "black" }}
          >
            2
          </span>
          <div className="trailBallTittle ">SHIPPING</div>
        </div>
        <div className="middleLine">
          <hr />
        </div>
        <div className="trailBall">
          <span
            className="span"
            style={{ backgroundColor: movetoPayment ? "black" : "gray" }}
          >
            3
          </span>
          <div className="trailBallTittle">PAYMENT</div>
        </div>
      </div>

      <main>
        <div className="rightCart">
          <h3>Your Cart</h3>
          {cartItems.map((item) => {
            return (
              <>
                <div className="containerRightSide">
                  <div className="prodInfo">
                    <div className="left">
                      <img src={item.img01} alt="image of the product" />
                      <div className="info">
                        <p className="prodName">{item.title}</p>
                        <p className="prodSize">Size: {item.size}</p>
                        <p className="prodQtd">QTD: {item.qty}</p>
                      </div>
                    </div>
                    <p className="prodPrice">R$ {item.price}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="totalContainer">
            <div className="container">
              <p className="text">Subtotal</p>
              <p className="price">R$ {total}</p>
            </div>
            <div className="container">
              <p className="text">Shipping</p>
              <p className="price">Freee</p>
            </div>
            <div className="total">
              <p className="totalText">Total</p>
              <p className="totalPrice">R$ {total}</p>
            </div>
          </div>
        </div>
        <div className="leftCart">
          <div className="UserEmailContainer">
            <p className="UserEmailTitle">Email</p>
            <p className="UserEmail">{user.email}</p>
          </div>

          {movetoPayment ? <Payment /> : <Shipping />}
        </div>
      </main>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .topBar {
    background-color: black;
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-bottom: 1rem;
    a {
      .logo {
        width: 5rem;
      }
    }
  }
  .paymentTrail {
    display: flex;

    .trailBall {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 3rem;

      .span {
        width: 2.5rem;
        height: 2.5rem;
        background-color: gray;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
      }
      .current {
        background-color: black;
      }
    }

    .middleLine {
      hr {
        width: 13.5rem;
        display: block;
        height: 0.5px;
        border: 0;
        border-top: 2px solid black;
        margin: 1.2rem 0;
        padding: 0;
      }
    }
  }
  main {
    width: 100vw;
    display: flex;

    .leftCart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5rem 12rem;
      width: 60rem;
      border-right: 2px solid gray;

      .UserEmailContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top: 4rem;
        padding-bottom: 0.5rem;
        border-bottom: 0.5px solid #a2a0a0;
        .UserEmailTitle {
          font-weight: 500;
          font-size: 1.3rem;
        }
        .UserEmail {
          font-weight: 300;
          font-size: 1.2rem;
        }
      }

      .goPayment {
        width: 100%;
        background-color: #747373;
        height: 3.5rem;
        color: #d8d6d6;
        font-size: 1.1rem;
        margin-top: 1.2rem;
        cursor: pointer;
        &:hover {
          background-color: #464545;
        }
      }
    }

    .rightCart {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 5rem;

      h3 {
        font-size: 1.8rem;
        font-weight: 500;
        border-bottom: 2px solid gray;
        margin-bottom: 1rem;
        width: 30rem;
      }
      .containerRightSide {
        height: auto;
        width: 30rem;

        .prodInfo {
          display: flex;
          justify-content: space-between;
          padding-top: 1rem;
          border-bottom: 1px solid lightgray;
          .left {
            display: flex;
            img {
              width: 150px;
              margin-right: 1.5rem;
            }
            .info {
              .prodName {
                font-size: 1.1rem;
                font-weight: 500;
                margin-bottom: 0.6rem;
              }
              .prodColor,
              .prodSize,
              .prodQtd {
                font-size: 1rem;
                color: #343333;
                font-weight: 300;
                margin-bottom: 0.3rem;
              }
            }
          }
        }
      }
      .totalContainer {
        width: 30rem;
        margin-top: 2rem;
        .container {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          .text {
            color: #606060;
            font-size: 0.9rem;
            font-weight: 300;
          }
          .price {
            color: #3b3b3b;
            font-size: 1rem;
            font-weight: 400;
          }
        }
        .total {
          margin-top: 1rem;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid darkgray;
          padding-top: 1.5rem;
          .totalText {
            color: #1b1b1b;
            font-size: 1.1rem;
            font-weight: 600;
          }
          .totalPrice {
            color: #1b1b1b;
            font-size: 1.1rem;
            font-weight: 600;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    .topBar {
      background-color: black;
      display: flex;
      justify-content: center;

      a {
        .logo {
          width: 2.5rem;
        }
      }
    }
    .paymentTrail {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      position: relative;
      .trailBall {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 2rem;

        .span {
          width: 2rem;
          height: 2rem;
          background-color: gray;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .current {
          background-color: black;
        }
      }

      .middleLine {
        margin-bottom: 1.5rem;
        hr {
          top: 0;
          width: 30vw;
          display: block;
          height: 0.2px;
          border: 0;
          border-top: 2px solid black;
          margin: 1.2rem 0;
          padding: 0;
          border: 2px solid;
        }
      }
    }
    main {
      display: flex;
      flex-direction: column;
      width: 100vw;
      .leftCart {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        width: 100%;
        border-right: 2px solid gray;

        .UserEmailContainer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 4rem;
          padding-bottom: 0.5rem;
          border-bottom: 0.5px solid #a2a0a0;
          .UserEmailTitle {
            font-weight: 500;
            font-size: 1.3rem;
          }
          .UserEmail {
            font-weight: 300;
            font-size: 1.2rem;
          }
        }

        .goPayment {
          width: 100%;
          background-color: #747373;
          height: 3.5rem;
          color: #d8d6d6;
          font-size: 1.1rem;
          margin-top: 1.2rem;
          cursor: pointer;
          &:hover {
            background-color: #464545;
          }
        }
      }

      .rightCart {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        padding: 1rem;

        h3 {
          font-size: 1.2rem;
          font-weight: 500;
          border-bottom: 2px solid gray;
          margin-bottom: 1rem;
          width: 100%;
        }
        .containerRightSide {
          height: auto;
          width: 100%;

          .prodInfo {
            display: flex;
            justify-content: space-between;
            padding-top: 1rem;
            border-bottom: 1px solid lightgray;

            .left {
              display: flex;

              img {
                width: 30vw;
                margin-right: 1.5rem;
              }
              .info {
                .prodName {
                  font-size: 1.1rem;
                  font-weight: 500;
                  margin-bottom: 0.6rem;
                }
                .prodColor,
                .prodSize,
                .prodQtd {
                  font-size: 1rem;
                  color: #343333;
                  font-weight: 300;
                  margin-bottom: 0.3rem;
                }
              }
            }
            .prodPrice {
              margin-right: 0.3rem;
            }
          }
        }
        .totalContainer {
          width: 100vw;
          margin-top: 1rem;
          padding: 0 1.5rem;
          .container {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
            .text {
              color: #606060;
              font-size: 0.9rem;
              font-weight: 300;
            }
            .price {
              color: #3b3b3b;
              font-size: 1rem;
              font-weight: 400;
            }
          }
          .total {
            margin-top: 1rem;
            display: flex;
            justify-content: space-between;
            border-top: 1px solid darkgray;
            padding-top: 1.5rem;
            .totalText {
              color: #1b1b1b;
              font-size: 1.1rem;
              font-weight: 600;
            }
            .totalPrice {
              color: #1b1b1b;
              font-size: 1.1rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;
export default CheckOut;
