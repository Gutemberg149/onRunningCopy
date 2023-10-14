import styled from "styled-components";
import Navbar from "../../componentes/navbar/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logoImg/logo.jpeg";
import image1 from "../../images/innovationImg/image1.avif";
import video2 from "../../pages/inovation/videos/video2.mp4";
import { InovationVideo1, InovationVideo2 } from "./videos/inovationYoutube";
import Footer from "../../componentes/footer/Footer";
const Innovation = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>

      <section className="sectionText">
        <div className="containerSecText">
          <h4 className="containerText_h4">
            Tech innovation is our super power
          </h4>
          <p className="pSecText">
            On started with a simple goal – to revolutionize running, bringing
            innovative ideas to life through the power of cutting-edge
            technology.
          </p>
        </div>
      </section>

      <section className="secImage">
        <img src={image1} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <p className="pSecText2">
            The heart of On lies in our lab. Our scientists are always
            experimenting to achieve new and better, from improved energy return
            and impact protection to increasing product sustainability. And like
            every athlete out there, we revise, refine and re-engineer at every
            opportunity – to continue to help others achieve amazing things.
          </p>
        </div>
      </section>

      <section className="sectionTech">
        <div className="innerCoudeTech">
          <h5>CloudTec®</h5>
          <p>
            The secret power in every On shoe, CloudTec® is the technology that
            launched everything. Swiss-engineered to deliver soft landings and
            supreme take-offs, it adapts to you.
          </p>
        </div>
      </section>

      <section className="secvideo">
        <video src={video2} width="1920" loop muted autoPlay />
      </section>

      <section
        className="sectionText"
        style={{ backgroundColor: "white", color: "black" }}
      >
        <div className="containerSecText">
          <h4 className="containerText_h4" style={{ color: "black" }}>
            Speedboard®
          </h4>
          <p className="pSecText" style={{ color: "black" }}>
            Speedboard® is your On shoe’s secret weapon. Working in harmony with
            CloudTec®, it converts the kinetic energy of each landing into a
            powerful take-off – more speed, for the same effort.
          </p>
        </div>
      </section>

      <section className="secVideo">
        <InovationVideo1 />
      </section>

      <section className="sectionTech">
        <div className="innerCoudeTech">
          <h5>Helion™</h5>
          <p>
            A superfoam for superior performance. We crafted Helion™ in the On
            Lab to work with CloudTec® so you enjoy smoother, effortless runs in
            the city and beyond.
          </p>
        </div>
      </section>

      <section className="secVideo">
        <InovationVideo2 />
      </section>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #2d256f;
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
      border-radius: 50%;
    }
  }
  .secImage {
    img {
      width: 100%;
    }
  }
  .sectionText {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 5rem 0; */
    /* margin-top: 2rem; */
    .containerSecText {
      width: 100%;
      padding: 0 4rem;
      .containerText_h4 {
        color: #e6e6e6;
        font-size: 6rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
      }
      .pSecText {
        color: #e6e6e6;
        font-size: 4rem;
        margin-bottom: 3rem;
      }
      .pSecText2 {
        color: #e6e6e6;
        font-size: 5rem;
        margin: 5rem 2rem;
        font-weight: 600;
        line-height: 6rem;
      }
    }
  }
  .sectionTech {
    background-color: white;
    height: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .innerCoudeTech {
      width: 90%;
      h5 {
        font-size: 7rem;
      }
      p {
        font-size: 2.5rem;
      }
    }
  }
`;
export default Innovation;
