import styled from "styled-components";
import logo from "../../images/logoImg/logowhite.png";
import mountain2 from "../../images/orderStatus/mountain2.avif";
import { Link } from "react-router-dom";
import { useReducer } from "react";
import ReducerBcg from "./ReducerBcg";
import { initialState } from "./ReducerBcg";
import Order from "./order/Order";
import Returns from "./returns/Return";
import Shipping from "./shipping/Shipping";
import ProductInfo from "./info/ProductInfo";
import Sustainability from "./sustainability/Sustainability";
import Cyclon from "./cyclon/Cyclon";
import Security from "./securityandprivacy/ArraySecurity ";
import Accessibility from "./accessibility/Accessibility";
import TermsAndCondition from "./termsAndCondition/TermsAndCondition";
import { useState } from "react";
import Order_ReturnTracker from "./Order_ReturnTracker";
import ReturnExchangeForm from "./return _exchange_form/ReturnExchangeForm";

const Orderstatus = () => {
  const [state, dispatch] = useReducer(ReducerBcg, initialState);
  const [trackerData, setTrackerData] = useState(true);
  const [returnData, setReturnData] = useState(false);

  const handleTracker = () => {
    setTrackerData(true);
    setReturnData(false);
  };
  const handleReturn = () => {
    setTrackerData(false);
    setReturnData(true);
  };

  return (
    <Wrapper>
      <div className="topMessage">
        <p>
          If your Tracking number is like MISSING_1, don’t worry. We are still
          waiting for the Correios to provide your tracking code.
        </p>
      </div>

      <section className="sec1">
        <nav>
          <Link to={"/"}>
            <img src={logo} alt="" className="logo" />
          </Link>
          <Link to={"/"}>
            <button className="homeBtn">back to homepage</button>
          </Link>
        </nav>

        <div className="contaText">
          <p className="topText">HOME * HELP CENTER</p>
          <h3>How can we help you?</h3>
          <div className="btns">
            <button className="btn btn1" onClick={() => handleTracker()}>
              Looking fro your order?
            </button>
            <button className="btn btn2" onClick={() => handleReturn()}>
              Need to return a product?
            </button>
            <Link to={"/stores"}>
              <button className="btn btn3">Where to buy</button>
            </Link>
          </div>
        </div>
      </section>
      <main>
        <section className="sec2">
          <div className="leftList">
            <ul>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li1" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li1 === "Li1" ? "orange" : "liBcgDynamic"}
              >
                Orders
              </li>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li2" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li2 === "Li2" ? "orange" : "liBcgDynamic"}
              >
                Returns and exchanges
              </li>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li3" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li3 === "Li3" ? "orange" : "liBcgDynamic"}
              >
                Shipping
              </li>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li4" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li4 === "Li4" ? "orange" : "liBcgDynamic"}
              >
                Product info
              </li>

              <li
                onClick={() =>
                  dispatch(
                    { type: "li5" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li5 === "Li5" ? "orange" : "liBcgDynamic"}
              >
                Sustainability
              </li>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li6" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li6 === "Li6" ? "orange" : "liBcgDynamic"}
              >
                Cyclon™
              </li>

              <li
                onClick={() =>
                  dispatch(
                    { type: "li7" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li7 === "Li7" ? "orange" : "liBcgDynamic"}
              >
                Security and privacy
              </li>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li8" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li8 === "Li10" ? "orange" : "liBcgDynamic"}
              >
                Accessibility
              </li>
              <li
                onClick={() =>
                  dispatch(
                    { type: "li9" },
                    setTrackerData(false),
                    setReturnData(false)
                  )
                }
                className={state.Li9 === "Li11" ? "orange" : "liBcgDynamic"}
              >
                Terms and conditions
              </li>
            </ul>
          </div>
          {trackerData ? (
            <Order_ReturnTracker />
          ) : returnData ? (
            <ReturnExchangeForm />
          ) : (
            <div className="RightInfo">
              {state.Li1 === "Li1" && <Order />}
              {state.Li2 === "Li2" && <Returns />}
              {state.Li3 === "Li3" && <Shipping />}
              {state.Li4 === "Li4" && <ProductInfo />}
              {state.Li5 === "Li5" && <Sustainability />}
              {state.Li6 === "Li6" && <Cyclon />}
              {state.Li7 === "Li7" && <Security />}
              {state.Li8 === "Li8" && <Accessibility />}
              {state.Li9 === "Li9" && <TermsAndCondition />}
            </div>
          )}
        </section>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .topMessage {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #22826aeb;
    height: 3rem;
    color: #f2f2f2;
  }

  .sec1 {
    position: relative;
    background-image: url(${mountain2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50rem;
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 5rem;
      .logo {
        mix-blend-mode: darken;
        width: 6.25rem;
        margin: 1.25rem 3.75rem;
        width: 7rem;
        z-index: 96;
        cursor: pointer;
      }
      .homeBtn {
        width: 18rem;
        height: 5rem;
        border: white 4px solid;
        color: white;
        background-color: transparent;
        border-radius: 3rem;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover {
          background-color: #ffffff35;
        }
      }
    }
    .contaText {
      height: 85%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10rem;
      z-index: 96;

      .topText {
        width: 60rem;
        font-size: 1.6rem;
        font-weight: 300;
        letter-spacing: 4px;
        color: white;
        z-index: 96;
      }
      h3 {
        font-size: 6rem;
        color: white;
        z-index: 96;
        margin-bottom: 3rem;
      }
      .btns {
        .btn {
          width: 22rem;
          height: 5rem;
          background-color: #000000e1;
          border: none;
          color: white;
          margin-right: 1rem;
          border-radius: 5rem;
          font-size: 1.2rem;
          cursor: pointer;

          &:hover {
            background-color: #000000b5;
          }
        }
      }
    }
  }
  main {
    .sec2 {
      height: auto;
      display: flex;
      padding: 10rem;
      background-color: #f8f6f6;
      .leftList {
        margin-right: 2rem;
        background-color: white;
        width: 40%;
        height: 60rem;
        display: flex;
        padding-left: 3rem;
        border-radius: 1em;
        box-shadow: rgba(149, 157, 165, 0.064) 0px 8px 24px;
        ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .liBcgDynamic {
            width: fit-content;
            height: fit-content;
            font-size: 2.3rem;
            font-weight: 400;
            margin-bottom: 2rem;
            background: linear-gradient(to right, #ffc250 50%, white 50%);
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 0.5s ease-out;

            cursor: pointer;
            &:hover {
              background-position: left bottom;
            }
          }
          .orange {
            width: fit-content;
            height: fit-content;
            font-size: 2.3rem;
            font-weight: 400;
            margin-bottom: 1.5rem;
            background: #ffc250;
            background-size: 200% 100%;
            background-position: right bottom;
            transition: all 0.5s ease-out;
            cursor: pointer;
          }
        }
      }
      .RightInfo {
        background-color: #f8f6f6;
        border-radius: 1em;
        width: 60%;
        padding: 0 0.5rem;
      }
    }
  }
`;
export default Orderstatus;
