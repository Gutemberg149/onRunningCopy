import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";

const NavBarAccount = () => {
  const { user, logOut } = useUserAuth();
  return (
    <Wrapper>
      <header>
        <h3>Hello</h3>
        <p>Welcome to your account.</p>
        <Link to={"/account"}>
          <p>View Your Profile and Orders.</p>
        </Link>
      </header>
      <main>
        <h5>Your details</h5>
        <p className="pTag">EMAIL</p>
        <p className="pData">{user && user.email}</p>
      </main>
      <div className="btnsContainer">
        <button className="btnBottom checkout" onClick={logOut}>
          Log out
        </button>
        <Link to={"/account"}>
          <button className="btnBottom yourAccount">Your Acount</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  header {
    h3 {
      font-size: 3rem;
      font-weight: 400;
      color: #3a3939;
    }
    p {
      font-size: 2.3rem;
      font-weight: 400;
      color: #3a3939;
    }
    a {
      text-decoration: underline;
    }
  }
  main {
    height: 55%;
    h5 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }
    .pTag {
      font-size: 1.2rem;
      font-weight: 400;
      color: #969595;
      margin-bottom: 0.5rem;
      letter-spacing: 0.2rem;
    }
    .pData {
      font-size: 1.2rem;
      font-weight: 300;
      color: #242323;
      margin-bottom: 1rem;
    }
  }
  .btnsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    .btnBottom {
      width: 20rem;
      height: 5rem;
      background-color: white;
      border: none;
      border: 2px solid black;
      margin: 0 2rem;
      border-radius: 3rem;
      font-size: 1.5rem;
      cursor: pointer;
      &:hover {
        background-color: black;
        color: white;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        color: #3a3939;
        margin-top: 2rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: 400;
        color: #3a3939;
      }
      a {
        text-decoration: underline;
      }
    }
    main {
      height: 55%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      font-size h5 {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }
      .pTag {
        font-size: 1.2rem;
        font-weight: 400;
        color: #969595;
        letter-spacing: 0.2rem;
      }
      .pData {
        font-size: 1.2rem;
        font-weight: 300;
        color: #242323;
        margin-bottom: 3rem;
      }
    }
    .btnsContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      .btnBottom {
        width: 45vw;
        height: 3rem;
        background-color: white;
        border: none;
        border: 2px solid black;
        margin: 0 0.5rem;
        border-radius: 2rem;
        font-size: 1.2rem;
        cursor: pointer;
        &:hover {
          background-color: black;
          color: white;
        }
      }
    }
  }
`;
export default NavBarAccount;
