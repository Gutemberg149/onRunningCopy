import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserAccount = () => {
  return (
    <Wrapper>
      <main>
        <div className="topText">
          <h1>Hello</h1>
          <p>
            Stay one step ahead. Here you can easily manage your account, track
            orders, return items and talk to our Happiness <br />
            Delivery team.
          </p>
        </div>
        <div className="container">
          <h4>Your Orders</h4>
          <p>
            First time making an order? Here's a good place to start.{" "}
            <Link to={"/ShoesPage"}> Shop Now.</Link>
          </p>
        </div>
        <div className="container">
          <h4>Your Cyclon</h4>
          <p>
            Manage your <Link to={"/featured"}>Cyclon™</Link> subscription and
            stay in the loop.
          </p>
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 4rem;
  .topText {
    margin-bottom: 5rem;
    h1 {
      font-size: 5.5rem;
      font-weight: 500;
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.8rem;
      font-weight: 300;
      width: 55rem;
      line-height: 3rem;
    }
  }
  .container {
    margin-bottom: 5rem;
    h4 {
      font-size: 2.2rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 300;
      color: #313030;
      margin-bottom: 2.5rem;
      a {
        color: black;
        font-weight: 500;
        text-decoration: underline;
      }
    }
  }
`;
export default UserAccount;
