import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { BsBag, BsSearch } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchDropDown from "./SearchDropDown";
import Cart from "./cartCheckout/Cart";
import { ProdDetailContetx } from "../../contexts/ProdetailContext";
import CartEmpty from "./cartCheckout/cartempty/CartEmpty";
import { useRef } from "react";
import { useUserAuth } from "../../contexts/UserAuthContext";
import Login_SignUp from "./login_register/Login_SignUp";
import NavBarAccount from "./NavBarAccount";
import { OpensignUpContext } from "../../contexts/OpenSigUpContext";

const Navbar = ({ signUp, setSingUp, handleSignUp }) => {
  const [togglevisibility, setTogglevisibility] = useState(false);
  const [togglevisibility3, setTogglevisibility3] = useState(false);
  const [togglevisibilitySearch, setTogglevisibilitySearch] = useState(false);
  const [togglevisibilityCart, setTogglevisibilityCart] = useState(false);
  // const [togglevisibilitySignUp, setTogglevisibilitySignUp] = useState(false);

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { user } = useUserAuth(); //if the user is logged in, shows his profile

  const handleNAvbarShow = () => {
    if (window.scrollY < lastScrollY || window.scrollY <= 33) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  // ------------------------------------------------------
  //usecontext to set the number of itens at the top of item bag
  const { countShopBag, cartItems } = useContext(ProdDetailContetx);

  useEffect(() => {
    window.addEventListener("scroll", handleNAvbarShow);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", handleNAvbarShow);
    };
  }, [lastScrollY]);
  // ---------------------------------------------------
  //This is code snipt is to make the sign up container drop from navbar.
  //it takes info from signUpPage and  Login_signUp page.
  const effectRan = useRef(false);

  //this use context is to open and close the sigUp container in case we click on the sign up bottom or hover out of sign up container and in case there is no user logged in and the user try to check out the items, it will send the user to sign up page and open the sign up box automaticaly.
  const {
    togglevisibilitySignUp,
    setTogglevisibilitySignUp,
    allowToggleVisibility, //this code changes the togglevisibilitySignUp with user effect, line 76.
    setAllowToggleVisibility, //this code changes the togglevisibilitySignUp in every LINK in navbar.
  } = useContext(OpensignUpContext);

  useEffect(() => {
    if (effectRan.current === true) {
      signUp
        ? setTogglevisibilitySignUp(true)
        : setTogglevisibilitySignUp(false);
    }

    return () => {
      effectRan.current = true;
    };
  }, [handleSignUp]);

  useEffect(() => {
    if (allowToggleVisibility) {
      setTogglevisibilitySignUp(true);
    }
  }, [allowToggleVisibility]);
  //-----------------------------------------------------------------------------------------------

  return (
    <Wrapper>
      <div className="navContainer" style={{ top: `${show ? "-90" : "30"}px` }}>
        <div className="leftContainer">
          <ul>
            <li
              className="btnNav "
              onMouseEnter={() => setTogglevisibility(true)}
              onMouseLeave={() => setTogglevisibility(false)}
            >
              Shop
              <div
                className={`${
                  togglevisibility ? "dropDowUl" : "dropDowUlNoShow"
                }`}
              >
                <div>
                  <ul className="libtnContainer">
                    <Link to={"/ShoesPage"}>
                      <li onClick={() => setAllowToggleVisibility(false)}>
                        SHOP
                      </li>
                    </Link>
                    <Link to={"/featured"}>
                      <li onClick={() => setAllowToggleVisibility(false)}>
                        FEATURED
                      </li>
                    </Link>
                  </ul>

                  <ul className="libtnContainer">
                    <Link to={"/orderstatus"}>
                      <li
                        className="liBttm"
                        onClick={() => setAllowToggleVisibility(false)}
                      >
                        Order status
                      </li>
                    </Link>

                    <Link to={"/stores"}>
                      <li
                        className="liBttm"
                        onClick={() => setAllowToggleVisibility(false)}
                      >
                        Stores
                      </li>
                    </Link>

                    <Link to={"/referfriend"}>
                      <li
                        className="liBttm"
                        onClick={() => setAllowToggleVisibility(false)}
                      >
                        Refer a friend
                      </li>
                    </Link>

                    <Link to={"/signUpPage"}>
                      <li
                        className="liBttm"
                        onClick={() => setAllowToggleVisibility(false)}
                      >
                        Sign Up
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </li>

            <li
              className="btnNav"
              onMouseEnter={() => setTogglevisibility3(true)}
              onMouseLeave={() => setTogglevisibility3(false)}
            >
              Explore
              <div
                className={`${
                  togglevisibility3 ? "dropDowUl dropDowUl3" : "dropDowUlNoShow"
                }`}
              >
                <ul className="libtnContainer">
                  <Link to={"/movement"}>
                    <li onClick={() => setAllowToggleVisibility(false)}>
                      MOVEMENT
                    </li>
                  </Link>

                  <Link to={"/innovation"}>
                    <li onClick={() => setAllowToggleVisibility(false)}>
                      INNOVATION
                    </li>
                  </Link>

                  <Link to={"/abouton"}>
                    <li onClick={() => setAllowToggleVisibility(false)}>
                      ABOUT ON
                    </li>
                  </Link>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* ------------------------------------------------------------------------------ */}
        {/*search icon with dropdown for search products */}

        <div className="RightContainer">
          <div
            className="iconContainer2"
            onMouseEnter={() => setTogglevisibilitySearch(true)}
            onMouseLeave={() => setTogglevisibilitySearch(false)}
          >
            <div className="iconContainer2">
              <BsSearch className="iconBtn " />
            </div>

            <div
              className={`${
                togglevisibilitySearch ? "dropDowcontainer2" : "dropDowNoShow"
              }`}
            >
              <SearchDropDown />
            </div>
          </div>

          {/* ----------------------------BAG-------------------------------------------------- */}
          {/* basket of Shop */}

          <div
            className="iconContainer2 "
            onMouseEnter={() => setTogglevisibilityCart(true)}
            onMouseLeave={() => setTogglevisibilityCart(false)}
          >
            <div className="containerForCountIcon">
              <div className="numberOfItens">{countShopBag}</div>
              <BsBag className="iconBtn " />
            </div>

            <div
              className={`${
                togglevisibilityCart ? "dropDowcontainer2" : "dropDowNoShow"
              }`}
            >
              {cartItems.length > 0 ? <Cart /> : <CartEmpty />}
            </div>
          </div>
          {/* ------------------------------------------------------------------------------ */}
          {/* signUp login */}
          <div
            className="iconContainer2 "
            onMouseEnter={() => setTogglevisibilitySignUp(true)}
            onMouseLeave={() =>
              setTogglevisibilitySignUp(false) + setSingUp(false)
            }
          >
            <div className="iconContainer2">
              <AiOutlineUser className="iconBtn " />
            </div>

            <div
              className={`${
                togglevisibilitySignUp ? "dropDowcontainer2" : "dropDowNoShow"
              }`}
            >
              {user ? (
                <NavBarAccount />
              ) : (
                <Login_SignUp handleSignUp={handleSignUp} />
              )}
            </div>
          </div>

          {/* ------------------------------------------------------------------------------ */}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  a {
    color: #3c3b3b;
  }
  .navContainer {
    width: 75rem;
    height: 5.65rem;
    position: fixed;
    background-color: #f5c003;
    right: 3.125rem;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: all 0.4s ease-out;

    .leftContainer {
      ul {
        display: flex;
        margin-left: 3.75rem;
        position: relative;

        .btnNav {
          position: relative;
          background-color: transparent;
          border: none;
          font-size: 1.375rem;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 1.875rem;
          font-weight: 500;
          color: #232222;
          height: 5rem;
          cursor: pointer;

          &:after {
            content: "";
            position: absolute;
            width: 110%;
            height: 0.125rem;
            background-color: #232222;
            bottom: 0.625rem;
            transform: scaleX(0);
            transform-origin: bottom left;
            transition: all 0.2s ease-in-out;
          }
          &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
          }

          .dropDowUl {
            display: flex;
            position: absolute;
            top: 5rem;
            left: -3.75rem;
            background-color: #f9f8f8;
            width: 75rem;
            flex-direction: column;
            padding: 3.125rem 0;
            height: 80vh;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            box-shadow: rgba(8, 8, 9, 0.2) 0px 7px 29px 0px;
            transition: all ease-in-out 0.4s;

            li {
              list-style: none;
              font-size: 2.5rem;
              transition: all ease-in-out 0.3s;
              margin-bottom: 0.938rem;
              &:hover {
                transform: translateX(1.875rem);
              }
            }
            .libtnContainer {
              margin-top: 3.125rem;
              display: flex;
              flex-direction: column;
              .liBttm {
                font-size: 1.9rem;
                margin-bottom: 0.625rem;
                font-weight: 400;
              }
            }
          }
          .dropDowUl2 {
            top: 5rem;
            left: -9.313rem;
          }
          .dropDowUl3 {
            top: 5rem;
            left: -9.25rem;
          }
          .dropDowUlNoShow {
            visibility: hidden;
            position: absolute;
          }
        }
      }
    }
    .RightContainer {
      margin-right: 3.75rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15rem;
      height: 4rem;

      .iconBtn {
        font-size: 1.25rem;
        color: #3c3b3b;
        cursor: pointer;
      }

      .iconContainer2 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 4.8rem;
        .containerForCountIcon {
          width: 4rem;
          height: 4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          cursor: pointer;
          .numberOfItens {
            position: absolute;
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 50%;
            background-color: #171717;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #f5c003;
            top: 0.3rem;
            left: 2.2rem;
            font-size: 1rem;
          }
        }
      }

      .dropDowcontainer2 {
        display: flex;
        position: absolute;
        top: 5.3rem;
        left: 0rem;
        background-color: white;
        width: 75rem;
        flex-direction: column;
        height: 80vh;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        box-shadow: rgba(8, 8, 9, 0.2) 0px 7px 29px 0px;
        transition: all ease-in-out 0.2s;
      }
      .dropDowNoShow {
        visibility: hidden;
        position: absolute;
      }
    }
  }
`;
export default Navbar;
