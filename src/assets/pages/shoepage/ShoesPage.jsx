import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logo.jpeg";
import { listProduct } from "../../utils/APIArray";
import ShoeContainer from "./ShoeContainer";
import Footer from "../../componentes/footer/Footer";
import { Link } from "react-router-dom";

const ShoesPageWoman = () => {
  return (
    <Wrapper>
      <section className="section1">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>{" "}
        <Navbar />
      </section>
      <section className="section2">
        <Link to={"/"}>
          <div className="homeLink">HOME</div>
        </Link>
        <h1>Shoes</h1>
        <p>
          Discover our collection of shoes infused with our patented CloudTec®
          cushioning technology and sustainable elements. From mountain peaks to
          city pavements – they're Swiss-engineered to take you further.
        </p>
      </section>
      <section className="section03">
        {listProduct.map((item) => {
          return item.type ? (
            <div className="containerImg" key={item.id}>
              <img src={item.img01} alt="" />
              <div className="message">
                <h4>The right shoe for you</h4>
              </div>
              <div className="shadow"></div>
            </div>
          ) : (
            <ShoeContainer
              key={item.id}
              id={item.id}
              img={item.img01}
              title={item.title}
              introduction={item.introduction}
              colors={item.colors}
              price={item.price}
              extraInfo={item.extraInfo}
            />
          );
        })}
      </section>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: #fafafa;
  .section1 {
    padding: 0 4rem;
    .logo {
      width: 5.5rem;
      margin: 2.55rem 3.75rem;
      border-radius: 50%;
    }
  }
  .section2 {
    width: 80rem;
    padding: 0 4rem;
    .homeLink {
      font-size: 1.5rem;
      font-weight: 400;
    }
    h1 {
      font-size: 5.8rem;
      font-weight: 500;
    }
    p {
      font-size: 2rem;
    }
  }
  .section03 {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4rem;
    .containerImg {
      position: relative;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 35rem;
      height: 55rem;
      margin: 2.9rem 1.063rem;
      img {
        width: 35rem;
        height: 55rem;
        object-fit: cover;
      }
      .message {
        position: absolute;
        color: white;
        font-size: 3rem;
        bottom: 2rem;
        z-index: 98;
      }
      .shadow {
        position: absolute;
        width: 100%;
        height: 7rem;
        bottom: 0;
        background-image: linear-gradient(to top, #0000008d, transparent);
        z-index: 97;
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    width: 100vw;
    .section1 {
      padding: 0 4rem;
      height: 6rem;
      width: 100vw;
      .logo {
        display: none;
      }
    }
    .section2 {
      width: 100vw;
      padding: 1.5rem 1rem;
      .homeLink {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      h1 {
        font-size: 1.5rem;
        font-weight: 500;
      }
      p {
        font-size: 1rem;
      }
    }
    .section03 {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0rem;
      width: 100vw;
      margin-bottom: 1.5rem;
      .containerImg {
        position: relative;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 9.5rem;
        height: 18rem;
        margin-top: 0.5rem;
        img {
          width: 9.5rem;
          height: 18rem;
          object-fit: cover;
        }
        .message {
          position: absolute;
          color: white;
          font-size: 0.8rem;
          bottom: 1rem;
          z-index: 98;
        }
        .shadow {
          position: absolute;
          width: 100%;
          height: 7rem;
          bottom: 0;
          background-image: linear-gradient(to top, #0000008d, transparent);
          z-index: 97;
        }
      }
    }
  }
`;
export default ShoesPageWoman;
