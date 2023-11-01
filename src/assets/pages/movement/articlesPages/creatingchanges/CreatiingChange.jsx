import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import creatingAndChanging1 from "../../../../images/movements/articlesPageImg/creatingAndChanging1.avif";
import creatingAndChanging2 from "../../../../images/movements/articlesPageImg/creatingAndChanging2.avif";
import creatingAndChanging3 from "../../../../images/movements/articlesPageImg/creatingAndChanging3.avif";
import creatingAndChanging4 from "../../../../images/movements/articlesPageImg/creatingAndChanging4.avif";
const CreatiingChange = () => {
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
          Every Runner Series: Creating change through running
        </h1>
        <p className="pSec1">
          Picture a "runner," who do you see? Who’s represented in this space
          and who is not? We asked ourselves these same questions and then we
          listened. Listened to stories of groups that are changing the
          narrative of what it looks like to be a runner and inspiring others in
          their community. These are the stories of those creating spaces for
          every runner to feel represented and welcome.
        </p>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/ojCTQRHOif0`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay"
        />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <h4 className="containerText_h4">The Running Charity</h4>
          <div className="pSecText">
            Running can change your life. This is the idea behind The Running
            Charity helping young homeless people in London and Manchester build
            healthier futures by embracing running.
          </div>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/NUI3Tri-w8M`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay"
        />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            “Our young people have so much potential and they often don’t see it
            in themselves,” says Alex Eagle, The Running Charity’s co-founder.
            <br />
            The organization works with vulnerable young people to improve their
            health and well-being by turning running into a tool for life.
            Claude, a coach at The Running Charity, knows the benefits first
            hand. Homeless and struggling to see a way out, he joined the first
            ever program nine years ago.
          </div>

          <h4 className="containerText_h4">
            “The Running Charity made me who I am today. Everything I was doing
            to escape, I replaced with running.”
          </h4>
        </div>
      </section>

      <section className="secImg">
        <img src={creatingAndChanging1} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Through group and one-to-one sessions focusing on personal
            development, fitness and well-being, the young people build their
            confidence, achieving things they thought were impossible. <br />
            <br />
            Helping over 500 young people change their lives by running since
            2012, The Running Charity is creating a space for young people to
            belong and take their lives back.
          </div>

          <h5 className="containerText_h5"> Fresh Air Fund</h5>

          <div className="pSecText">
            Playing outside among their friends, spending their youthful energy
            and exploring the neighborhood – sounds like the typical summer
            break for many children. Unfortunately, in the Bronx borough of New
            York City, access to the outdoors and safe recreation is not always
            a given. In order to ensure a safe and fun summer experience for
            these kids, a getaway is needed. Enter The Fresh Air Fund.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={creatingAndChanging2} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            The event gathers the local Bronx youth to engage in run centric
            exercises and games with an emphasis on building healthy lifestyle
            choices, the empowerment of sport, and team building. Fresh Air Fund
            alum and Tutoring Coordinator, Kayla Paulino, isn’t the only witness
            to the visible impact the track club has on the participants:
            <br />
            <br />
            "Week after week we kept receiving positive feedback, saying that
            the kids came home happy, feeling like they got something
            accomplished, something done."
            <br />
            She hopes that these immediate benefits of running will entice the
            participants to embed the sport into their daily lives.
          </div>

          <h5 className="containerText_h5"> Pansa Boyz</h5>

          <div className="pSecText">
            Pansa Boyz’s mission is to build an authentic community of runners
            that feel supported and empowered by one another.
          </div>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/NUI3Tri-w8M`}
          frameBorder={0}
          allowFullScreen
          allow="autoplay"
        />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Since 1877, the Fresh Air Fund has been providing transformative
            summer experiences for New York City children and teenagers from
            disadvantaged communities. With activities ranging from summer camps
            to weekly meets, the organization also encourages an active
            lifestyle. This Spring, On partnered with The Fresh Air Fund to
            bring a weekly track club to the Bronx.
          </div>
        </div>
      </section>

      <section className="secDoubleImg">
        <img src={creatingAndChanging3} alt="" />
        <img src={creatingAndChanging4} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            “There’s men out there that want to go running and they’re
            embarrassed. Because they don’t look like what a “runner” looks
            like,” says Manny “Bodega” Rodriguez, founder of the Pansa Boyz.
            <br />
            <br />A group of four first-generation Latin American men born and
            raised in New York, the Pansa Boyz were brought together by their
            mutual desire to move and run – and to shut down the stigma that you
            need to look a certain type of way to be accepted as a runner.
          </div>

          <h4 className="containerText_h4">
            “Men also feel body shaming around the way we look and the way we’re
            shaped. We’re just trying to put some positivity into the world for
            people of any shape, size, form. Just because we’re big doesn’t mean
            we’re unhealthy,” they explain.
          </h4>
        </div>
      </section>

      <section className="IframeSection">
        <iframe
          src={`https://www.youtube.com/embed/2vckZRzQUpM`}
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
  .sectionText {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    margin-top: 1rem;
    .containerSecText {
      width: 100vw;
      .containerText_h4 {
        color: #e6e6e6;
        font-size: 3.5rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      .containerText_h5 {
        color: #e6e6e6;
        font-size: 2.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-weight: 300;
      }
      .pSecText {
        color: #e6e6e6;
        font-size: 2rem;
        margin-bottom: 3rem;
      }
    }
  }

  .secImg {
    img {
      width: 100%;
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

    .secImg {
      img {
        width: 100%;
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
export default CreatiingChange;
