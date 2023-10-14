import { useReducer, useState } from "react";
import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logowhite.png";
import { Link } from "react-router-dom";
import Footer from "../../componentes/footer/Footer";
import UserAccount from "./UserAccount";
import UserOrders from "./UserOrders";
import UserProfile from "./UserProfile";
import ReducerAccountBcg from "./ReducerAccountBcg";
import initialState from "./ReducerAccountBcg";

const Account = () => {
  const [state, dispatch] = useReducer(ReducerAccountBcg, initialState);

  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <Navbar />
      </nav>
      <div className="menuList">
        <ul>
          <li
            onClick={() => dispatch({ type: "li1" })}
            className={state.Li1 === "Li1" ? "orange" : "liBcgDynamic"}
          >
            Account
          </li>
          <li
            onClick={() => dispatch({ type: "li2" })}
            className={state.Li2 === "Li2" ? "orange" : "liBcgDynamic"}
          >
            Orders
          </li>
          <li
            onClick={() => dispatch({ type: "li3" })}
            className={state.Li3 === "Li3" ? "orange" : "liBcgDynamic"}
          >
            Profile
          </li>
        </ul>
      </div>
      <main>
        {state.Li1 === "Li1" ? (
          <UserAccount />
        ) : state.Li2 === "Li2" ? (
          <UserOrders />
        ) : (
          <UserProfile />
        )}
      </main>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #fff8f0;
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
      mix-blend-mode: darken;
    }
  }
  .menuList {
    margin: 4rem;
    width: 30rem;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      align-items: center;
      li {
        font-size: 2rem;
        font-weight: 500;
        cursor: pointer;
      }
      .orange {
        width: fit-content;
        height: fit-content;
        background: #ffc250;
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.3s ease-out;
        cursor: pointer;
      }
      .liBcgDynamic {
        width: fit-content;
        height: fit-content;
        background: linear-gradient(to right, #ffc250 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.3s ease-out;
        cursor: pointer;
        &:hover {
          background-position: left bottom;
        }
      }
    }
  }
`;
export default Account;
