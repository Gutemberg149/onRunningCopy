import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logo.jpeg";
import image1 from "../../images/movements/image1.avif";
import Footer from "../../componentes/footer/Footer";
import ArticlesBoxes from "./ArticlesBoxes";

const Movement = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>
        <Navbar />
      </nav>

      <main>
        <section className="sec1">
          <p className="pSec1">Read. Watch. Listen.</p>
          <h3>Movement</h3>
          <img src={image1} alt="" />
        </section>

        <section className="sec2">
          <ArticlesBoxes />
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
    }
  }
  main {
    .sec1 {
      p {
        color: white;
        font-size: 2rem;
        margin-left: 4rem;
      }
      h3 {
        color: white;
        font-size: 6rem;
        font-weight: 500;
        margin-left: 4rem;
        margin-bottom: 5rem;
      }
      img {
        width: 100%;
      }
    }
  }
`;
export default Movement;
