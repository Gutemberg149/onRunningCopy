import { Link } from "react-router-dom";
import styled from "styled-components";

const ShoeContainer = ({
  id,
  img,
  price,
  title,
  introduction,
  colors,
  extraInfo,
}) => {
  return (
    <Wrapper>
      <Link to={`/singleproduct/${id}`}>
        <div className="itemContainer">
          <div className="imgContainer">
            <img src={img} alt="" />
          </div>

          <div className="itemInfo">
            <p className="extraInfo">{extraInfo}</p>
            <h4>{title}</h4>
            <p className="introduction">{introduction}</p>
            <p className="colors">{colors} color</p>
            <p className="price">R$ {price},00</p>
          </div>
        </div>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: 30px 0;
  .itemContainer {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    margin: 1.063rem;
    height: 55rem;
    cursor: pointer;
    .imgContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      background-color: #f4f0e7;

      img {
        width: 37rem;
      }
    }
    .itemInfo {
      width: 100%;
      height: 18rem;
      color: #2b2a2a;
      padding: 1.5rem;

      .extraInfo {
        color: #a4740c;
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.21rem;
        margin-bottom: 1.3rem;
      }
      h4 {
        font-size: 1.6rem;
        margin-bottom: 1.3rem;
      }
      .introduction {
        font-size: 1.3rem;
        color: #2b2a2a;
        margin-bottom: 1.3rem;
      }
      .colors {
        font-size: 1.2rem;
        color: #2b2a2a;
        margin-bottom: 1.3rem;
      }
      .price {
        font-size: 1.2rem;
        color: #2b2a2a;
        margin-bottom: 1.3rem;
      }
    }
    &:hover {
      img {
        width: 36rem;
        background-color: #f9f2e2;
        transition: all 0.3s ease-in;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    margin: 0px 0;
    .itemContainer {
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;
      width: 9.5rem;
      height: 18rem;
      margin: 0.6rem;

      cursor: pointer;
      .imgContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: #f4f0e7;

        img {
          width: 9rem;
        }
      }
      .itemInfo {
        width: 100%;
        height: 9rem;
        color: #2b2a2a;
        padding: 0.3rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .extraInfo {
          color: #a4740c;
          font-size: 0.8rem;
          font-weight: 400;
          letter-spacing: 0.21rem;
          margin-bottom: 0.2rem;
        }
        h4 {
          font-size: 0.9rem;
          margin-bottom: 0.6rem;
        }
        .introduction {
          font-size: 0.7rem;
          color: #2b2a2a;
          margin-bottom: 0.3rem;
        }
        .colors {
          font-size: 0.8rem;
          color: #2b2a2a;
          margin-bottom: 0.3rem;
        }
        .price {
          font-size: 0.7rem;
          color: #2b2a2a;
          margin-bottom: 1.3rem;
        }
      }
      &:hover {
        img {
          width: 9rem;
          background-color: #f9f2e2;
          transition: all 0.3s ease-in;
        }
      }
    }
  }
`;
export default ShoeContainer;
