import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import theFacePageImg from "../../../../images/movements/articlesPageImg/theFacePageImg.avif";

const TheFace = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <section className="sec1">
        <h1 className="h1Sec1">
          The Face x On – 26.2 Miles. Chapter 4: The wall.
        </h1>
        <p className="pSec1">
          As race day approaches, the remaining runners seek advice about how to
          avoid what marathoners fear most: “hitting the wall”.
        </p>
      </section>

      <section className="sec2">
        <img src={theFacePageImg} alt="" />
      </section>

      <section className="sec3">
        <div className="containerSec3">
          <p className="pSec3_top">
            The final stages of marathon preparation are when a runner needs to
            call on the mental and strength built during months of training.
            There’s a physical test too, of course, with long runs that can go
            beyond 20-miles (32 kilometers) and the heaviness of cumulative
            fatigue. But it’s the whispers about “hitting the wall” (running out
            of energy reserves during the run) that really make first-time
            marathoners apprehensive.
          </p>
          <p className="pSec3_botton">
            In the penultimate chapter of our five-part video series 26.2 Miles:
            The Runners’ Story, the two remaining runners, Corbin Shaw and
            Hélène Selam Kleih, discuss this so-called “maranoia” with those
            who’ve already experienced crossing the finish line.
            <br /> <br />
            Talking to fashion designer Charles Jeffrey, Corbin shares his hope
            that a focus on mindset throughout his training will help him
            embrace the marathon experience, even when things inevitably get
            tough. “Through this whole journey of training for a marathon, I’ve
            focused on myself mentally,” Corbin explains. “I want to succumb to
            the event and be completely immersed in it.”
            <br /> <br />
            In her search to find the right headspace on race day, Hélene speaks
            with triathlete and running coach Olivia Ross-Hurst, who doesn’t
            sugarcoat the challenge ahead. “Expect the hard times – the marathon
            is a real journey,” is Olivia’s advice. “It’s a mental game, but the
            training is going to give you confidence, and that’s how we tap into
            mental strength.”
            <br /> <br />
            Find out how Corbin and Hélène’s preparations pay off on marathon
            day in the final episode of the series. Olivia sums it up well:
            “It’s going to be a rollercoaster.”
          </p>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/ILN99_PZzko`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay"
        />
      </section>
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
  .sec1 {
    padding: 2rem 5rem;
    margin-bottom: 5rem;
    .h1Sec1 {
      color: white;
      font-size: 6rem;
      width: 80%;
      font-weight: 500;
      line-height: 7rem;
      margin-bottom: 2rem;
    }
    .pSec1 {
      color: white;
      font-size: 3rem;
      width: 90%;
      font-weight: 300;
      line-height: 4rem;
    }
  }
  .sec2 {
    img {
      width: 100%;
    }
  }
  .sec3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    .containerSec3 {
      width: 85rem;
      .pSec3_top {
        color: #e6e6e6;
        font-size: 2rem;
        margin-bottom: 3rem;
      }
      .pSec3_botton {
        color: #e6e6e6;
        font-size: 1.5rem;
      }
    }
  }

  .IframeSection {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 25%;
    background-color: #fac892;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    background-color: black;
    nav {
      padding: 0 0rem;
      .logo {
        width: 3.25rem;
        margin: 0;
        margin-top: 7rem;
      }
    }
    .sec1 {
      padding: 0rem 1rem;
      margin-bottom: 2rem;
      width: 100vw;
      .h1Sec1 {
        color: white;
        font-size: 1.6rem;
        width: 99%;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 1rem;
      }
      .pSec1 {
        color: white;
        font-size: 1rem;
        width: 90%;
        font-weight: 300;
        line-height: 2rem;
      }
    }
    .sec2 {
      img {
        width: 100%;
      }
    }
    .sec3 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      .containerSec3 {
        width: 99%;
        .pSec3_top {
          color: #e6e6e6;
          font-size: 1.5rem;
          margin-bottom: 3rem;
        }
        .pSec3_botton {
          color: #e6e6e6;
          font-size: 1.5rem;
        }
      }
    }
    .IframeSection {
      width: 100%;
      position: relative;
      overflow: hidden;
      padding: 25%;
      background-color: #fac892;
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export default TheFace;
