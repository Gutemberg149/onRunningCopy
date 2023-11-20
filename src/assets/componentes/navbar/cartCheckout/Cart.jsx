import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

import { useContext } from "react";
import { ProdDetailContetx } from "../../../contexts/ProdetailContext";

const Cart = () => {
  const { id } = useParams();

  //context to send and delete itens from the cart
  const {
    removeProduct,
    cartItems,
    decreaseProducQty,
    increaseProducQty,
    total,
    countShopBag,
  } = useContext(ProdDetailContetx);
  cartItems;

  return (
    <Wrapper>
      <div className="cartBody">
        <div className="innerCartBody">
          <h1>Your cart</h1>
          <div className="numberOfItens">
            {countShopBag} {countShopBag > "1" ? <p> Items</p> : <p>Item</p>}
          </div>

          {cartItems.map((item) => {
            return (
              <div className="prodInCart" key={item.id}>
                <div className="left">
                  <img src={item.img01} alt="" />
                  <div className="info">
                    <h3>{item.title}</h3>
                    <p className="gender">Mens</p>
                    <p className="color">{item.color}</p>
                    <p className="size">BR {item.size} (mens)</p>
                    <div className="buttonContainer">
                      <div
                        className="btn minus"
                        onClick={() => decreaseProducQty(item.id)}
                      >
                        -
                      </div>
                      <div className="qtd">{item.qty}</div>
                      <div
                        className="btn plus"
                        onClick={() => increaseProducQty(item.id)}
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right">
                  <div className="price">R$ {item && item.price}</div>
                  <div className="deleteContainer">
                    <BsTrash
                      className="delete"
                      onClick={() => removeProduct(item.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="checkOutContainer">
          <div className="top">
            <div className="shipping">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="total">
              <p>Total</p>
              <p>
                R$ {total.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
          <Link to={"/checkout"} className="checkout">
            <p>Check out</p>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  .cartBody {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 54.5rem;
    width: 100%;

    .innerCartBody {
      padding: 4rem;

      h1 {
        font-size: 3rem;
        font-weight: 500;
      }
      .numberOfItens {
        margin-top: 1rem;
        margin-left: 0.5rem;
        font-size: 1.5rem;
        display: flex;
        p {
          margin-left: 1rem;
        }
      }
      .prodInCart {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 18rem;
        border-bottom: #c7c4c4 0.5px solid;
        .left {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 35rem;
          height: 18rem;
          img {
            width: 15rem;
          }
          .info {
            min-width: 10rem;
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: center;
            h3 {
              font-size: 1.8rem;
              font-weight: 600;
            }
            p {
              margin-top: 0.4rem;
              font-size: 1.2rem;
              font-weight: 400;
              color: #343434;
            }
            .buttonContainer {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-top: 1rem;
              .btn {
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 50%;
                border: 1px solid gray;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.9rem;
                font-weight: 200;
                cursor: pointer;
                &:hover {
                  background-color: #efeded;
                  border: none;
                }
              }
              .qtd {
                font-size: 1.5rem;
                font-weight: 300;
              }
            }
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          height: 100%;
          width: 10rem;
          .price {
            font-size: 1.4rem;
            font-weight: 300;
          }
          .deleteContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 4rem;
            height: 4rem;
            cursor: pointer;
          }
          .delete {
            font-size: 1.5rem;
          }
        }
      }
    }

    .checkOutContainer {
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: sticky;
      bottom: 0;
      z-index: 110;
      padding: 1rem;
      height: 14rem;
      box-shadow: 0px -2px 5px 3px #cac8c8;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      cursor: pointer;
      .top {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        .shipping {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          width: 40rem;
          border-bottom: 0.5px solid gray;
        }
        .total {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.4rem;
          font-weight: 600;
          width: 40rem;
          border-bottom: 0.5px solid gray;
        }
      }
      .checkout {
        background-color: #f60909;
        width: 60%;
        height: 4rem;
        background-color: #1f1e1e;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f9f5f5;
        border-radius: 5rem;
        &:hover {
          background-color: #323232;

          font-size: 1.2rem;
          border: 2px solid #393838;
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 54.5rem;
      width: 100vw;

      .innerCartBody {
        padding: 0.3rem;
        height: 100%;
        width: 100%;
        h1 {
          font-size: 1.5rem;
        }
        .numberOfItens {
          margin-top: 1rem;
          margin-left: 0.5rem;
          font-size: 1.2rem;
          display: flex;
          p {
          }
        }
        .prodInCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          width: 100%;

          .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 72%;
            height: 100%;
            margin-right: 0;

            img {
              width: 50%;
            }
            .info {
              min-width: 8rem;
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: center;
              h3 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              p {
                margin-top: 0.4rem;
                font-size: 1rem;
                font-weight: 400;
                color: #343434;
              }
              .buttonContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                .btn {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  border: 1px solid gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.9rem;
                  font-weight: 200;
                  cursor: pointer;
                  &:hover {
                    background-color: #efeded;
                    border: none;
                  }
                }
                .qtd {
                  font-size: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 28%;
            .price {
              font-size: 1.4rem;
              font-weight: 300;
            }
            .deleteContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 4rem;
              height: 4rem;
              cursor: pointer;
            }
            .delete {
              font-size: 1.5rem;
            }
          }
        }
      }

      .checkOutContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
        z-index: 110;
        padding: 1rem 0.5rem;
        height: 14rem;
        box-shadow: 0px -2px 5px 3px #cac8c8;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;

        cursor: pointer;
        .top {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          .shipping {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            width: 96%;
            border-bottom: 0.5px solid gray;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 500;
            width: 95%;
            border-bottom: 0.5px solid gray;
          }
        }
        .checkout {
          background-color: #f60909;
          width: 7rem;
          height: 3rem;
          background-color: #1f1e1e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f9f5f5;
          border-radius: 5rem;
          margin-top: 1rem;
          &:hover {
            background-color: #323232;

            font-size: 1.2rem;
            border: 2px solid #393838;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 54.5rem;
      width: 100%;
      .innerCartBody {
        padding: 1rem;
        height: 100%;
        width: 100%;
        h1 {
          font-size: 1.8rem;
        }
        .numberOfItens {
          margin-top: 1rem;
          margin-left: 0.5rem;
          font-size: 1.3rem;
          display: flex;
          p {
          }
        }
        .prodInCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          width: 100%;

          .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 72%;
            height: 100%;
            margin-right: 0;

            img {
              width: 50%;
            }
            .info {
              min-width: 8rem;
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: center;
              h3 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              p {
                margin-top: 0.4rem;
                font-size: 1rem;
                font-weight: 400;
                color: #343434;
              }
              .buttonContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                .btn {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  border: 1px solid gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.9rem;
                  font-weight: 200;
                  cursor: pointer;
                  &:hover {
                    background-color: #efeded;
                    border: none;
                  }
                }
                .qtd {
                  font-size: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 28%;
            .price {
              font-size: 1.4rem;
              font-weight: 300;
            }
            .deleteContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 4rem;
              height: 4rem;
              cursor: pointer;
            }
            .delete {
              font-size: 1.5rem;
            }
          }
        }
      }

      .checkOutContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
        z-index: 110;
        padding: 1rem 0.5rem;
        height: 14rem;
        box-shadow: 0px -2px 5px 3px #cac8c8;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;

        cursor: pointer;
        .top {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          .shipping {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            width: 96%;
            border-bottom: 0.5px solid gray;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 500;
            width: 95%;
            border-bottom: 0.5px solid gray;
          }
        }
        .checkout {
          background-color: #f60909;
          width: 7rem;
          height: 3rem;
          background-color: #1f1e1e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f9f5f5;
          border-radius: 5rem;
          margin-top: 1rem;
          &:hover {
            background-color: #323232;

            font-size: 1.2rem;
            border: 2px solid #393838;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    .cartBody {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 54.5rem;
      width: 100%;

      .innerCartBody {
        padding: 0.3rem;
        height: 100%;
        width: 100%;
        h1 {
          font-size: 2rem;
        }
        .numberOfItens {
          margin-top: 1rem;
          margin-left: 0.5rem;
          font-size: 1.5rem;
          display: flex;
          p {
          }
        }
        .prodInCart {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 14rem;
          width: 100%;

          .left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 72%;
            height: 100%;
            margin-right: 0;

            img {
              width: 50%;
            }
            .info {
              min-width: 8rem;
              display: flex;
              flex-direction: column;
              align-items: left;
              justify-content: center;
              h3 {
                font-size: 1.2rem;
                font-weight: 600;
              }
              p {
                margin-top: 0.4rem;
                font-size: 1rem;
                font-weight: 400;
                color: #343434;
              }
              .buttonContainer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 1rem;
                .btn {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  border: 1px solid gray;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 1.9rem;
                  font-weight: 200;
                  cursor: pointer;
                  &:hover {
                    background-color: #efeded;
                    border: none;
                  }
                }
                .qtd {
                  font-size: 1.5rem;
                  font-weight: 300;
                }
              }
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
            width: 28%;
            .price {
              font-size: 1.4rem;
              font-weight: 300;
            }
            .deleteContainer {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 4rem;
              height: 4rem;
              cursor: pointer;
            }
            .delete {
              font-size: 1.5rem;
            }
          }
        }
      }

      .checkOutContainer {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: sticky;
        bottom: 0;
        z-index: 110;
        padding: 1rem 0.5rem;
        height: 14rem;
        box-shadow: 0px -2px 5px 3px #cac8c8;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 100%;

        cursor: pointer;
        .top {
          width: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          .shipping {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.2rem;
            margin-bottom: 1rem;
            width: 96%;
            border-bottom: 0.5px solid gray;
          }
          .total {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1.3rem;
            font-weight: 500;
            width: 95%;
            border-bottom: 0.5px solid gray;
          }
        }
        .checkout {
          background-color: #f60909;
          width: 7rem;
          height: 3rem;
          background-color: #1f1e1e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f9f5f5;
          border-radius: 5rem;
          margin-top: 1rem;
          &:hover {
            background-color: #323232;

            font-size: 1.2rem;
            border: 2px solid #393838;
          }
        }
      }
    }
  }
`;
export default Cart;
