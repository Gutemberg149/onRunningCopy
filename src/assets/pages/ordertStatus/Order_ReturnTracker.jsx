import styled from "styled-components";
import { useState } from "react";
import SubmitData from "../../componentes/SubmitData";

const Order_ReturnTracker = () => {
  return (
    <Wrapper>
      <h1>Order & Return Tracker</h1>
      <p>
        Please provide us with your order number. We'll check on its status and
        provide you details below.
      </p>
      {/* component to get and submit user data */}
      <SubmitData />
      <div className="info">
        <h5>Status Information</h5>
        <p>
          Hint: your order number can be found in your order confirmation email
          or in the Orders section of your runner account.
        </p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 60%;
  h1 {
    font-size: 4.1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: #201f1f;
  }
  p {
    font-size: 1.9rem;
    font-weight: 300;
    margin-bottom: 5rem;
    color: #201f1f;
  }
  form {
    margin-bottom: 4rem;
    .inputs {
      display: flex;
      margin-bottom: 3rem;
      .inputDiv {
        position: relative;
        width: 25rem;
        height: 2.5rem;
        font-size: 1.4rem;
        border-bottom: 1px solid gray;
        margin-right: 3rem;
        height: 4.5rem;
        .error {
          position: absolute;
          bottom: -2rem;
          color: red;
          font-weight: 400;
        }
        input {
          position: absolute;
          border: none;
          background-color: transparent;
          font-size: 1.4rem;
          bottom: 0.7rem;
          width: 100%;
          &:focus {
            outline: none;
          }
        }

        label {
          position: absolute;
          bottom: 3rem;
          font-size: 1.1rem;
        }
      }
    }
    .btn {
      width: 11rem;
      height: 4.2rem;
      background-color: black;
      color: white;
      border: none;
      border-radius: 2.5rem;
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
  .info {
    h5 {
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
      color: #201f1f;
    }
    p {
      font-size: 1.2rem;
      font-weight: 400;
      color: #201f1f;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 98%;
    margin-top: 3rem;
    h1 {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 1rem;
      color: #201f1f;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
      margin-bottom: 2rem;
      color: #201f1f;
    }
    form {
      margin-bottom: 4rem;
      .inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        .inputDiv {
          position: relative;
          width: 90%;
          height: 2.5rem;
          font-size: 1.4rem;
          border-bottom: 1px solid gray;
          margin-right: 1rem;
          margin-bottom: 1.5rem;
          height: 4.5rem;
          .error {
            position: absolute;
            bottom: -2rem;
            color: red;
            font-weight: 400;
          }
          input {
            position: absolute;
            border: none;
            background-color: transparent;
            font-size: 1.2rem;
            bottom: 0.3rem;
            width: 100%;
            &:focus {
              outline: none;
            }
          }

          label {
            position: absolute;
            bottom: 2rem;
            font-size: 1.1rem;
          }
        }
      }
      .btn {
        width: 50%;
        height: 3.2rem;
        background-color: black;
        color: white;
        border: none;
        border-radius: 2.5rem;
        font-size: 1.3rem;
        cursor: pointer;
      }
    }
    .info {
      h5 {
        font-size: 1.4rem;
        margin-bottom: 1.2rem;
        color: #201f1f;
      }
      p {
        font-size: 1.2rem;
        font-weight: 400;
        color: #201f1f;
      }
    }
  }
`;
export default Order_ReturnTracker;
