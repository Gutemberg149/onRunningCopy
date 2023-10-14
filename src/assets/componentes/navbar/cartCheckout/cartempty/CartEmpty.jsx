import styled from "styled-components";
import Activities from "./Activities";
import cards from "../../../../images/logoImg/cards.png";
const CartEmpty = () => {
  return (
    <Wrapper>
      <div className="cartBody">
        <h3>Your cart is empty</h3>
        <Activities />
        <div className="paymentMethods">
          <p>Available payment methods</p>
          <img src={cards} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    font-size: 3rem;
    color: #3a3939;
    margin-left: 1.2rem;
    margin-bottom: 2.5rem;
    font-weight: 500;
  }
  .cartBody {
    margin: 4.5rem 3rem 3rem 3rem;
    .paymentMethods {
      margin-top: 4rem;
      p {
        margin-left: 0.7rem;
        margin-bottom: 0.4rem;
        font-size: 1.3rem;
      }
      img {
        width: 35rem;
      }
    }
  }
`;
export default CartEmpty;
