import styled from "styled-components";
import { TfiArrowRight } from "react-icons/tfi";
import { ArrayLinkBox } from "./ArrayLinkbox";
import { Link } from "react-router-dom";

const ArticlesBoxes = () => {
  return (
    <Wrapper>
      <section className="links_Grid">
        {ArrayLinkBox.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <div
                className="linkBox linkBox1"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="textBox">
                  <p>{item.text}</p>

                  <button>
                    <TfiArrowRight className="iconArrowLeft" />
                  </button>
                </div>
                <div className="overlay"></div>
              </div>
            </Link>
          );
        })}
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .links_Grid {
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .linkBox {
      position: relative;
      width: 25.5rem;
      height: 40rem;
      border-radius: 1rem;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all ease 0.5s;
      margin: 2rem;
      cursor: pointer;
      &:hover {
        transform: scale(1.04);
      }
      .textBox {
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.8rem;
        width: 100%;
        bottom: 2rem;
        z-index: 93;
        cursor: pointer;
        button {
          width: 4rem;
          height: 4rem;
          border: 1px solid white;
          border-radius: 50%;
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          .iconArrowLeft {
            color: white;
            font-size: 1.5rem;
            font-weight: 900;
          }
          cursor: pointer;
          &:hover {
            background-color: #ffffff50;
          }
        }
        p {
          font-size: 1.3rem;
          color: white;
          font-weight: 300;
          width: 80%;
        }
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(
          360deg,
          rgba(0, 0, 0, 0.797) 0%,
          rgba(0, 0, 0, 0.05) 40%
        );
        z-index: 92;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    .links_Grid {
      margin: 2rem 0;
      display: flex;
      flex-wrap: null;
      justify-content: center;
      align-items: center;
      width: 100vw;
      .linkBox {
        position: relative;
        width: 96vw;
        height: 50vh;
        border-radius: 1rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all ease 0.5s;
        margin: 2rem;
        cursor: pointer;
        &:hover {
          transform: scale(1.04);
        }
        .textBox {
          position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.8rem;
          width: 100%;
          bottom: 2rem;
          z-index: 93;
          cursor: pointer;
          button {
            width: 3rem;
            height: 3rem;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            .iconArrowLeft {
              color: white;
              font-size: 1.5rem;
              font-weight: 900;
            }
            cursor: pointer;
            &:hover {
              background-color: #ffffff50;
            }
          }
          p {
            font-size: 1.3rem;
            color: white;
            font-weight: 300;
            width: 80%;
          }
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.797) 0%,
            rgba(0, 0, 0, 0.05) 40%
          );
          z-index: 92;
        }
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    .links_Grid {
      margin: 2rem 0;
      display: flex;
      flex-wrap: null;
      justify-content: center;
      align-items: center;
      width: 100vw;
      .linkBox {
        position: relative;
        width: 38vw;
        height: 50vh;
        border-radius: 1rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all ease 0.5s;
        margin: 2rem;
        cursor: pointer;
        &:hover {
          transform: scale(1.04);
        }
        .textBox {
          position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.8rem;
          width: 100%;
          bottom: 2rem;
          z-index: 93;
          cursor: pointer;
          button {
            width: 3rem;
            height: 3rem;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            .iconArrowLeft {
              color: white;
              font-size: 1.5rem;
              font-weight: 900;
            }
            cursor: pointer;
            &:hover {
              background-color: #ffffff50;
            }
          }
          p {
            font-size: 1.3rem;
            color: white;
            font-weight: 300;
            width: 80%;
          }
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.797) 0%,
            rgba(0, 0, 0, 0.05) 40%
          );
          z-index: 92;
        }
      }
    }
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    .links_Grid {
      margin: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100vw;

      .linkBox {
        position: relative;
        width: 26vw;
        height: 50vh;
        border-radius: 1rem;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        transition: all ease 0.5s;
        margin: 2rem;
        cursor: pointer;
        &:hover {
          transform: scale(1.04);
        }
        .textBox {
          position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.8rem;
          width: 100%;
          bottom: 2rem;
          z-index: 93;
          cursor: pointer;
          button {
            width: 3.5rem;
            height: 3.5rem;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            .iconArrowLeft {
              color: white;
              font-size: 1.8rem;
              font-weight: 900;
            }
            cursor: pointer;
            &:hover {
              background-color: #ffffff50;
            }
          }
          p {
            font-size: 1.6rem;
            color: white;
            font-weight: 300;
            width: 80%;
          }
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(
            360deg,
            rgba(0, 0, 0, 0.797) 0%,
            rgba(0, 0, 0, 0.05) 40%
          );
          z-index: 92;
        }
      }
    }
  }
`;
export default ArticlesBoxes;
