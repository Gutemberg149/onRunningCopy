import React from "react";
import styled from "styled-components";
import { BsCreditCard2Back } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [checkCard, setCheckCard] = useState(false);
  return (
    <Wrapper>
      <div className="shipping">
        <p className="pShipping">Shipping</p>
        <div className="userInfo">
          <p className="pName">Gutemberg</p>
          <p className="pAddress">Rua caio prado 363</p>
          <p className="pCity">Sao paulo,SP 01303001</p>
        </div>
      </div>
      <div className="payment">
        <h5>Payment</h5>
        <div
          className={`${
            checkCard
              ? "credcardContainer"
              : "credcardContainer credcardContainerFull"
          }`}
        >
          {/* style={{ height: checkCard ? "33rem" : "6rem" }} */}
          <div className="credCarttop">
            <div
              className="checkCircle"
              onClick={() => setCheckCard(!checkCard)}
              style={{ backgroundColor: checkCard ? "#7fc655" : "white" }}
            >
              <div className="smallCircle"></div>
            </div>
            <div className="credCardBox">
              <BsCreditCard2Back className="creditCard" />
            </div>
            <p>Pay with card</p>
          </div>
          <form>
            <div className="cardInfoContainer">
              <label htmlFor="">Card number</label>
              <input type="text" placeholder="xxxx xxxx xxxx xxxx" />
            </div>
            <div className="cardInfoContainerDouble">
              <div className="infoCard infoCardMarginRight">
                <label>Expiry date</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="infoCard">
                <label>Expiry date</label>
                <input type="text" placeholder="3 digts" />
              </div>
            </div>
            <div className="cardInfoContainer">
              <label htmlFor="">Name on the card</label>
              <input type="text" placeholder="Name" />
            </div>
            <Link to={"/orderplaced"}>
              <button className="PlaceOrder">Place your order</button>
            </Link>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .shipping {
    display: flex;
    width: 36rem;
    justify-content: space-between;
    margin-top: 2rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.5px solid #a2a0a0;
    .pShipping {
      font-weight: 500;
      font-size: 1.3rem;
    }
    .userInfo {
      p {
        font-weight: 300;
        font-size: 1.15rem;
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0.3rem;
      }
    }
  }
  .payment {
    margin-top: 3rem;

    h5 {
      font-size: 1.8rem;
      font-weight: 400;
    }
    .credcardContainer {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      border: #c3c1c1 1px solid;
      height: 6rem;
      margin-top: 3rem;
      overflow: hidden;
      .credCarttop {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        .checkCircle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1.5rem;
          height: 1.5rem;
          border: #323131 1px solid;
          border-radius: 50%;
          margin: 0 1rem;
          cursor: pointer;
          .smallCircle {
            width: 0.6rem;
            height: 0.6rem;
            border-radius: 50%;
            background-color: white;
          }
        }
        .credCardBox {
          border: #323131 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 2.2rem;
          border-radius: 0.3rem;
          margin-right: 1rem;
          .creditCard {
            font-size: 1.5rem;
          }
        }
        p {
          font-size: 1.2rem;
          font-weight: 500;
        }
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .cardInfoContainer {
          width: 30rem;
          height: 5rem;
          margin: 0.5rem 0;
          input {
            border: #b9b9b9 1px solid;
            width: 30rem;
            height: 3.5rem;
            outline: none;
            padding-left: 2rem;
            font-size: 1.2rem;
            &:focus {
              border: #575656 1px solid;
            }
          }
          label {
            font-size: 0.8rem;
          }
        }
        .cardInfoContainerDouble {
          display: flex;
          .infoCard {
            width: 100%;
            height: 5rem;
            margin: 1rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            input {
              border: #b9b9b9 1px solid;
              width: 15rem;
              height: 3.3rem;
              outline: none;
              padding-left: 2rem;
              font-size: 1.2rem;
              &:focus {
                border: #575656 1px solid;
              }
            }
          }
          .infoCardMarginRight {
            margin-right: 0.5rem;
          }
          label {
            font-size: 0.8rem;
          }
        }
      }
      .PlaceOrder {
        margin: 2rem 0;
        width: 30rem;
        height: 4rem;
        color: white;
        font-size: 1.2rem;
        background-color: black;
        border: none;
        border-radius: 3rem;
        cursor: pointer;
        cursor: pointer;
      }
    }

    .credcardContainerFull {
      height: 33rem;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0rem;
    .shipping {
      display: flex;
      width: 100vw;
      padding: 0 1rem;
      justify-content: space-between;
      margin-top: 2rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.5px solid #a2a0a0;
      .pShipping {
        font-weight: 500;
        font-size: 1.3rem;
      }
      .userInfo {
        p {
          font-weight: 300;
          font-size: 1.15rem;
          display: flex;
          justify-content: flex-end;
          margin-bottom: 0.3rem;
        }
      }
    }
    .payment {
      margin-top: 1rem;
      width: 100vw;
      padding: 0rem;

      h5 {
        font-size: 1.2rem;
        font-weight: 400;
      }
      .credcardContainer {
        display: flex;
        flex-direction: column;
        border: transparent 1px solid;
        margin-top: 1rem;
        width: 100vw;
        overflow: hidden;
        padding: 0;
        overflow: visible;

        .credCarttop {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
          .checkCircle {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.2rem;
            height: 1.2rem;
            border: #323131 1px solid;
            border-radius: 50%;
            margin: 0 1rem;
            cursor: pointer;
            .smallCircle {
              width: 0.6rem;
              height: 0.6rem;
              border-radius: 50%;
              background-color: white;
            }
          }
          .credCardBox {
            border: #323131 1px solid;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3.5rem;
            height: 2.2rem;
            border-radius: 0.3rem;
            margin-right: 1rem;
            .creditCard {
              font-size: 1.5rem;
            }
          }
          p {
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
        form {
          width: 100vw;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .cardInfoContainer {
            width: 100vw;
            height: 5rem;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            input {
              border: #b9b9b9 1px solid;
              width: 99%;
              height: 3rem;
              outline: none;
              padding-left: 1rem;
              margin-left: 0.1rem;
              font-size: 1.1rem;
              &:focus {
                border: #575656 1px solid;
              }
            }
            label {
              font-size: 0.8rem;
            }
          }
          .cardInfoContainerDouble {
            display: flex;
            align-items: center;
            width: 100vw;
            .infoCard {
              width: 100%;
              height: 5rem;
              margin: 1rem 0;
              display: flex;
              flex-direction: column;
              justify-content: center;

              input {
                border: #b9b9b9 1px solid;
                width: 99%;
                height: 3rem;
                outline: none;
                padding-left: 2rem;
                font-size: 1.2rem;
                &:focus {
                  border: #575656 1px solid;
                }
              }
            }
            .infoCardMarginRight {
              margin-right: 0.2rem;
            }
            label {
              font-size: 0.9rem;
            }
          }
        }
        .PlaceOrder {
          margin: 2rem 0;
          width: 80vw;
          height: 3rem;
          color: white;
          font-size: 1.2rem;
          background-color: black;
          border: none;
          border-radius: 3rem;
          cursor: pointer;
        }
      }

      .credcardContainerFull {
        height: 65vh;
        background-color: lightcoral;
      }
    }
  }
`;
export default Payment;
