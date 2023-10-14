import React from "react";
import styled from "styled-components";
import logo from "../images/logoImg/logo.jpeg";
import { Link } from "react-router-dom";
import Navbar from "../componentes/navbar/Navbar";
import Footer from "../componentes/footer/Footer";
const OrderPlaced = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <main>
        <h1>Thank you for your order</h1>
        <p>
          Your order has been placed and is being processed. You will receive an
          email with the order details.
        </p>
        <Link to={"/"}>
          <span>Back to home page</span>
        </Link>
      </main>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    padding-top: 3rem;
    h1 {
      font-size: 4rem;
      color: #262525;
      margin-bottom: 5rem;
    }
    p {
      font-size: 2rem;
      color: #262525;
      margin-bottom: 6rem;
    }
    a {
      font-size: 1.5rem;
      text-decoration: underline;
      color: #ff5100;
    }
  }
`;
export default OrderPlaced;
