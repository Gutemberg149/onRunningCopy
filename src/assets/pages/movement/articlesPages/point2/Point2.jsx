import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import point2_1 from "../../../../images/movements/articlesPageImg/point2_1.avif";
import point2_2 from "../../../../images/movements/articlesPageImg/point2_2.avif";
import point2_3 from "../../../../images/movements/articlesPageImg/point2_3.avif";
import point2_4 from "../../../../images/movements/articlesPageImg/point2_4.avif";
import point2_5 from "../../../../images/movements/articlesPageImg/point2_5.avif";
import point2_6 from "../../../../images/movements/articlesPageImg/point2_6.avif";
import point2_7 from "../../../../images/movements/articlesPageImg/point2_7.avif";
import point2_8 from "../../../../images/movements/articlesPageImg/point2_8.avif";
import point2_9 from "../../../../images/movements/articlesPageImg/point2_9.avif";

const Point2 = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>

      <section className="sec1">
        <h1 className="h1Sec1">Point2 NYC: Dream marathon. Dream big.</h1>
        <p className="pSec1">
          What does it take to run 26.2 miles? What lures us to dream of
          post-run highs and picture-perfect smiles at the finish line? Is it a
          frame of mind? An elusive drive? A determination to progress? We meet
          Cheryl and Matthew - two runners from New York whose different
          approaches to training is the fuel to achieving their dreams.
        </p>
      </section>

      <section className="secImg">
        <img src={point2_1} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <h4 className="containerText_h4">The test of time</h4>
          <div className="pSecText">
            A marathon is roughly 26 miles. <br /> <br />
            No, wait. Hold on.
            <br />
            <br />A marathon is 26.2 miles. Not 26. Not 27.
            Twenty-six-point-two. And it’s the point-two we’re talking about.
            It’s the point-two that makes the difference. Because it’s in the
            point-two that you find yourself. Push past the pain to shimmering
            endorphins. Make your dreams your truth.
            <br />
            We created the Point2 experience to celebrate Point2 people. Runners
            who get out there day after day. Fighting the fight, doing the
            distance.
          </div>
        </div>
      </section>

      <section className="secDoubleImg">
        <img src={point2_2} alt="" />
        <img src={point2_3} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            We’re talking runners who strive to unlock their fullest potential.
            Who keep going, no matter what. Runners who understand that the only
            “process” is one that works for them. And the only “competition”
            with themselves.
            <br /> <br />
            Cheryl and Matthew are two New Yorkers whose unique approach to
            running lays the foundation for all they do. Here are their stories.
          </div>
        </div>
      </section>

      <section className="secTripleImg">
        <div className="containerSecTriple">
          <img src={point2_4} alt="" />
          <img src={point2_5} alt="" />
          <img src={point2_6} alt="" />
          <img src={point2_7} alt="" />
        </div>
      </section>

      <section className="sectionTextSmallPadding">
        <div className="containerSecText">
          <h4 className="containerText_h4">Cheryl</h4>
          <div className="pSecText">
            <br />
            46-year old Cheryl was born to achieve. And succeed. A Marriage and
            Family Therapist from Brooklyn, and a passionate advocate for
            healthcare rights, determination is instilled in her bones. ‘My
            father was a general in the army, so I was raised all over the
            world. It’s from him that I inherited my mindset.’
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={point2_8} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            But it wasn’t until the lead-up to her 40th birthday that Cheryl
            discovered long-distance running. ‘I was bamboozled into doing the
            Brooklyn half-marathon by my sorority sister. Which I finished in
            under two hours. Not bad, for a beginner.’ That same year, Cheryl
            ran five marathons and qualified for New York City.
            <br />
            <br />
            Six years, three continents and fifteen marathons later, Cheryl hits
            the sidewalk at five in the morning, six days a week. ‘Running has
            intention. Running is strategic. Running is my coffee.’ And running
            has taken her to places she’d have never otherwise seen, from the
            suburbs of New York to the historical landmarks of Berlin. Following
            the murder of George Floyd and the unrest that followed, Cheryl
            participated in protest runs all over the country. ‘There are many
            ways to protest. Ours is to run.’
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={point2_9} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Today, Cheryl’s a regular speaker at anti-hate events. And her
            latest goal? To run the Boston marathon – a height she’s had her
            sights on since missing the qualifier by five seconds. Hit play to
            see Cheryl’s incredible story of passion and perseverance.
            <br />
          </div>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/VuNqZzciy4g`}
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
      width: 90%;
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
  .secImg {
    img {
      width: 100%;
    }
  }
  .sectionText {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    margin-top: 2rem;
    .containerSecText {
      width: 95rem;
      .containerText_h4 {
        color: #e6e6e6;
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 2rem;
      }
      .pSecText {
        color: #e6e6e6;
        font-size: 2rem;
        margin-bottom: 3rem;
      }
    }
  }
  .sectionTextSmallPadding {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    .containerSecText {
      width: 95rem;
      .containerText_h4 {
        color: #e6e6e6;
        font-size: 3.5rem;
      }
      .pSecText {
        color: #e6e6e6;
        font-size: 2rem;
        margin-bottom: 3rem;
      }
    }
  }
  .secDoubleImg {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5rem;
    margin-bottom: 4rem;
    img {
      width: 50rem;
    }
  }
  .secTripleImg {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30rem;
    .containerSecTriple {
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;

      img {
        width: 25rem;
        margin: 0 0.5rem;
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
    .secImg {
      img {
        width: 100%;
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0rem 1rem;
      margin-top: 2rem;
      .containerSecText {
        width: 100vw;
        .containerText_h4 {
          color: #e6e6e6;
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .pSecText {
          color: #e6e6e6;
          font-size: 1rem;
          margin-bottom: 1.4rem;
        }
      }
    }
    .sectionTextSmallPadding {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
      padding: 0.5rem;
      .containerSecText {
        width: 100vw;
        .containerText_h4 {
          color: #e6e6e6;
          font-size: 1.5rem;
        }
        .pSecText {
          color: #e6e6e6;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
      }
    }
    .secDoubleImg {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 1rem;
      margin-bottom: 1.5rem;
      img {
        width: 50%;
        margin: 0.3rem;
      }
    }
    .secTripleImg {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      margin-bottom: 1rem;
      .containerSecTriple {
        margin: 0.2rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        img {
          width: 24%;
          margin: 0 0.2rem;
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
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0 0rem;
      .logo {
        width: 4rem;
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
        font-size: 1.8rem;
        width: 99%;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 1rem;
      }
      .pSec1 {
        color: white;
        font-size: 1.3rem;
        width: 90%;
        font-weight: 300;
        line-height: 2rem;
      }
    }
    .secImg {
      img {
        width: 100%;
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0rem 1rem;
      margin-top: 2rem;
      .containerSecText {
        width: 100vw;
        .containerText_h4 {
          color: #e6e6e6;
          font-size: 1.8rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .pSecText {
          color: #e6e6e6;
          font-size: 1.3rem;
          margin-bottom: 1.4rem;
        }
      }
    }
    .sectionTextSmallPadding {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
      padding: 1rem;
      .containerSecText {
        width: 100vw;
        .containerText_h4 {
          color: #e6e6e6;
          font-size: 1.8rem;
        }
        .pSecText {
          color: #e6e6e6;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }
      }
    }
    .secDoubleImg {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 1rem;
      margin-bottom: 1.5rem;
      img {
        width: 50%;
        margin: 0.3rem;
      }
    }
    .secTripleImg {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      margin-bottom: 1rem;
      .containerSecTriple {
        margin: 0.2rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        img {
          width: 24%;
          margin: 0 0.2rem;
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

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0 0rem;
      .logo {
        width: 5rem;
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
        font-size: 2rem;
        width: 99%;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 1rem;
      }
      .pSec1 {
        color: white;
        font-size: 1.6rem;
        width: 90%;
        font-weight: 300;
        line-height: 2rem;
      }
    }
    .secImg {
      img {
        width: 100%;
      }
    }
    .sectionText {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0rem 1rem;
      margin-top: 2rem;
      .containerSecText {
        width: 100vw;
        .containerText_h4 {
          color: #e6e6e6;
          font-size: 2rem;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .pSecText {
          color: #e6e6e6;
          font-size: 1.7rem;
          margin-bottom: 1.4rem;
        }
      }
    }
    .sectionTextSmallPadding {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 0.5rem;
      padding: 1rem;
      .containerSecText {
        width: 100vw;
        .containerText_h4 {
          color: #e6e6e6;
          font-size: 1.8rem;
        }
        .pSecText {
          color: #e6e6e6;
          font-size: 1.7rem;
          margin-bottom: 1rem;
        }
      }
    }
    .secDoubleImg {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 0 1rem;
      margin-bottom: 1.5rem;
      img {
        width: 50%;
        margin: 0.3rem;
      }
    }
    .secTripleImg {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      margin-bottom: 1rem;
      .containerSecTriple {
        margin: 0.2rem 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        img {
          width: 24%;
          margin: 0 0.2rem;
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
export default Point2;
