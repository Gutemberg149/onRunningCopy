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

//These two parameters comes from SignUpPage.
const Navbar = ({ signUp, handleSignUp }) => {
  const [togglevisibility, setTogglevisibility] = useState(false);
  const [togglevisibility2, setTogglevisibility2] = useState(false);
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
        <div className="navLeftContainer">
          <div
            className="navBtnDropDown"
            onMouseEnter={() => setTogglevisibility(true)}
            onMouseLeave={() => setTogglevisibility(false)}
          >
            <p>Shop</p>
            <div
              className={`${
                togglevisibility ? "dropDowcontainer" : "dropDowUlNoShow"
              }`}
            >
              <div>
                <ul className="liBtnContainer">
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

                <ul className="liBtnContainer">
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
          </div>
          {/* ------------------------------------------------------------------------------------------ */}
          <div
            className="navBtnDropDown"
            onMouseEnter={() => setTogglevisibility2(true)}
            onMouseLeave={() => setTogglevisibility2(false)}
          >
            <p>Explore</p>
            <div
              className={`${
                togglevisibility2 ? "dropDowcontainer" : "dropDowUlNoShow"
              }`}
            >
              <ul className="liBtnContainer">
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
          </div>
        </div>

        <div className="navRightContainer">
          <div
            className="navBtnDropDown"
            onMouseEnter={() => setTogglevisibilitySearch(true)}
            onMouseLeave={() => setTogglevisibilitySearch(false)}
          >
            <BsSearch className="iconBtn " />

            <div
              className={`${
                togglevisibilitySearch ? "dropDowcontainer" : "dropDowNoShow"
              }`}
            >
              <SearchDropDown />
            </div>
          </div>

          {/* ----------------------------Bag-------------------------------------------------- */}
          {/* basket of Shop */}

          <div
            className="navBtnDropDown "
            onMouseEnter={() => setTogglevisibilityCart(true)}
            onMouseLeave={() => setTogglevisibilityCart(false)}
          >
            <div className="containerForCountIcon">
              <div className="numberOfItens">{countShopBag}</div>
              <BsBag className="iconBtn " />
            </div>

            <div
              className={`${
                togglevisibilityCart ? "dropDowcontainer" : "dropDowNoShow"
              }`}
            >
              {cartItems.length > 0 ? <Cart /> : <CartEmpty />}
            </div>
          </div>
          {/* ------------------------ SignUp Login -------------------------- */}

          <div
            className="navBtnDropDown "
            onMouseEnter={() => setTogglevisibilitySignUp(true)}
            onMouseLeave={() => setTogglevisibilitySignUp(false)}
          >
            <AiOutlineUser className="iconBtn " />

            <div
              className={`${
                togglevisibilitySignUp ? "dropDowcontainer" : "dropDowNoShow"
              }`}
            >
              {user ? (
                <NavBarAccount />
              ) : (
                <Login_SignUp handleSignUp={handleSignUp} />
              )}
            </div>
          </div>
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

    .navLeftContainer {
      margin-left: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15rem;
      height: 6rem;

      .navBtnDropDown {
        font-size: 1.4rem;
        display: flex;
        font-weight: 500;
        justify-content: center;
        align-items: center;
        margin-right: 1.875rem;
        color: #232222;
        height: 5rem;
        cursor: pointer;
      }
      .dropDowcontainer {
        display: flex;
        position: absolute;
        top: 5rem;
        left: 0rem;
        background-color: white;
        width: 75rem;
        height: 80vh;
        flex-direction: column;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        box-shadow: rgba(8, 8, 9, 0.2) 0px 7px 29px 0px;
        transition: all ease-in-out 0.2s;

        li {
          margin-left: 2.75rem;
          list-style: none;
          font-size: 2.5rem;
          transition: all ease-in-out 0.3s;
          margin-bottom: 0.938rem;
          &:hover {
            transform: translateX(1.875rem);
          }
        }
        .liBtnContainer {
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
      .dropDowUlNoShow {
        display: none;
        position: absolute;
      }
    }

    .navRightContainer {
      margin-right: 4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 15rem;
      height: 4rem;
      .navBtnDropDown {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5rem;
        height: 4.8rem;
        .iconBtn {
          font-size: 1.25rem;
          color: #3c3b3b;
          cursor: pointer;
        }
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

      .dropDowcontainer {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 5.3rem;
        left: 0rem;
        background-color: white;
        width: 75rem;
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
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      color: #3c3b3b;
    }
    .navContainer {
      width: 100%;
      height: 3.5rem;
      position: fixed;
      background-color: #f5c003;
      right: 0;
      border-radius: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      transition: all 0.4s ease-out;

      .navLeftContainer {
        margin-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 10rem;
        height: 100%;

        .navBtnDropDown {
          font-size: 1.1rem;
          display: flex;
          font-weight: 500;
          justify-content: center;
          align-items: center;
          margin-right: 0.8rem;
          color: #232222;
          height: 100%;
          cursor: pointer;
        }
        .dropDowcontainer {
          display: flex;
          position: absolute;
          top: 3.3rem;
          left: 0rem;
          background-color: white;
          width: 100%;
          height: 80vh;
          flex-direction: column;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          box-shadow: rgba(8, 8, 9, 0.2) 0px 7px 29px 0px;
          transition: all ease-in-out 0.2s;

          li {
            margin-left: 2rem;
            list-style: none;
            font-size: 2rem;
            transition: all ease-in-out 0.3s;
            margin-bottom: 0.938rem;
            &:hover {
              transform: translateX(1.875rem);
            }
          }
          .liBtnContainer {
            margin-top: 3.125rem;
            display: flex;
            flex-direction: column;
            .liBttm {
              font-size: 2rem;
              margin-bottom: 0.625rem;
              font-weight: 400;
            }
          }
        }
        .dropDowUlNoShow {
          display: none;
          position: absolute;
        }
      }

      .navRightContainer {
        margin-right: 0rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 15rem;
        height: 100%;

        .navBtnDropDown {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;

          .iconBtn {
            font-size: 1.2rem;
            color: #3c3b3b;
            cursor: pointer;
          }
          .containerForCountIcon {
            width: 4rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;

            .numberOfItens {
              position: absolute;
              width: 1.1rem;
              height: 1.1rem;
              border-radius: 50%;
              background-color: #171717;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #f5c003;
              top: 0.3rem;
              left: 2.2rem;
              font-size: 0.8rem;
            }
          }
        }

        .dropDowcontainer {
          display: flex;
          position: absolute;
          top: 3.3rem;
          left: 0rem;
          background-color: white;
          width: 100%;
          height: 80vh;
          flex-direction: column;
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
  }

  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      color: #3c3b3b;
    }
    .navContainer {
      width: 80%;
      height: 3.5rem;
      position: fixed;
      background-color: #f5c003;
      right: 0.4rem;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      transition: all 0.4s ease-out;

      .navLeftContainer {
        margin-left: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 10rem;
        height: 100%;

        .navBtnDropDown {
          font-size: 1.3rem;
          display: flex;
          font-weight: 500;
          justify-content: center;
          align-items: center;
          margin-right: 0rem;
          color: #232222;
          height: 100%;
          cursor: pointer;
        }
        .dropDowcontainer {
          display: flex;
          position: absolute;
          top: 3.3rem;
          left: 0rem;
          background-color: white;
          width: 100%;
          height: 80vh;
          flex-direction: column;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          box-shadow: rgba(8, 8, 9, 0.2) 0px 7px 29px 0px;
          transition: all ease-in-out 0.2s;

          li {
            margin-left: 2rem;
            list-style: none;
            font-size: 1.8rem;
            transition: all ease-in-out 0.3s;
            margin-bottom: 0.938rem;
            &:hover {
              transform: translateX(1.875rem);
            }
          }
          .liBtnContainer {
            margin-top: 3.125rem;
            display: flex;
            flex-direction: column;
            .liBttm {
              font-size: 1.6rem;
              margin-bottom: 0.625rem;
              font-weight: 400;
            }
          }
        }
        .dropDowUlNoShow {
          display: none;
          position: absolute;
        }
      }

      .navRightContainer {
        margin-right: 0rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 15rem;
        height: 100%;

        .navBtnDropDown {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;

          .iconBtn {
            font-size: 1.5rem;
            color: #3c3b3b;
            cursor: pointer;
          }
          .containerForCountIcon {
            width: 4rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;

            .numberOfItens {
              position: absolute;
              width: 1.3rem;
              height: 1.3rem;
              border-radius: 50%;
              background-color: #171717;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #f5c003;
              top: 0.3rem;
              left: 2.2rem;
              font-size: 0.9rem;
            }
          }
        }

        .dropDowcontainer {
          display: flex;
          flex-direction: column;
          position: absolute;
          align-items: center;
          top: 3.3rem;
          left: 0rem;
          background-color: white;
          width: 100%;
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
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    a {
      color: #3c3b3b;
    }
    .navContainer {
      width: 65%;
      height: 4.5rem;
      position: fixed;
      background-color: #f5c003;
      right: 0.4rem;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 100;
      transition: all 0.4s ease-out;

      .navLeftContainer {
        margin-left: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 13rem;
        height: 100%;

        .navBtnDropDown {
          font-size: 1.5rem;
          display: flex;
          font-weight: 500;
          justify-content: center;
          align-items: center;
          margin-right: 0rem;
          color: #232222;
          height: 100%;
          cursor: pointer;
        }
        .dropDowcontainer {
          display: flex;
          position: absolute;
          top: 4.2rem;
          left: 0rem;
          background-color: white;
          width: 100%;
          height: 80vh;
          flex-direction: column;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          box-shadow: rgba(8, 8, 9, 0.2) 0px 7px 29px 0px;
          transition: all ease-in-out 0.2s;

          li {
            margin-left: 2rem;
            list-style: none;
            font-size: 2rem;
            transition: all ease-in-out 0.3s;
            margin-bottom: 0.938rem;
            &:hover {
              transform: translateX(1.875rem);
            }
          }
          .liBtnContainer {
            margin-top: 3.125rem;
            display: flex;
            flex-direction: column;
            .liBttm {
              font-size: 1.8rem;
              margin-bottom: 0.625rem;
              font-weight: 400;
            }
          }
        }
        .dropDowUlNoShow {
          display: none;
          position: absolute;
        }
      }

      .navRightContainer {
        margin-right: 0rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 16rem;
        height: 100%;

        .navBtnDropDown {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;

          .iconBtn {
            font-size: 1.7rem;
            color: #3c3b3b;
            cursor: pointer;
          }
          .containerForCountIcon {
            width: 4rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            cursor: pointer;

            .numberOfItens {
              position: absolute;
              width: 1.3rem;
              height: 1.3rem;
              border-radius: 50%;
              background-color: #171717;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #f5c003;
              top: 0.3rem;
              left: 2.2rem;
              font-size: 0.9rem;
            }
          }
        }

        .dropDowcontainer {
          display: flex;
          position: absolute;
          top: 4.2rem;
          left: 0rem;
          background-color: white;
          width: 100%;
          height: 80vh;
          flex-direction: column;
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
  }
`;
export default Navbar;
