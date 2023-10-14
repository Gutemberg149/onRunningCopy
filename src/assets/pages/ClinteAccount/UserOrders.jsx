import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserOrders = () => {
  return (
    <Wrapper>
      <h4>Your Orders</h4>
      <p className="p1">Any On gear you've bought online will appear here.</p>
      <p className="p2">
        You currently don't have any purchases. We can help with that.
      </p>
      <Link to={"/ShoesPage"}>
        <button>Start Shopping</button>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 0 4rem;
  h4 {
    font-size: 4.5rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }
  .p1 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 5rem;
  }
  .p2 {
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 3rem;
    width: 40rem;
  }
  button {
    width: 18rem;
    height: 5.5rem;
    background-color: black;
    border: none;
    border-radius: 3rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 6rem;
    cursor: pointer;
    &:hover {
      background-color: #272626;
    }
  }
`;
export default UserOrders;
