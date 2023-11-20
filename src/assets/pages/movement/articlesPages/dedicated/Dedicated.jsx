import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import dedicated1 from "../../../../images/movements/articlesPageImg/dedicated1.avif";
import dedicated2 from "../../../../images/movements/articlesPageImg/dedicated2.avif";
import dedicated3 from "../../../../images/movements/articlesPageImg/dedicated3.avif";
import dedicated4 from "../../../../images/movements/articlesPageImg/dedicated4.avif";
import dedicated5 from "../../../../images/movements/articlesPageImg/dedicated5.avif";
const Dedicated = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <section className="sec1">
        <h1 className="h1Sec1">Dedicated to the run: SiuHei Chung</h1>
        <p className="pSec1">
          Fashion stylist and model SiuHei Chung moved from Hong Kong to London
          in August 2020. Alone in a new country, they used their lifelong
          dedication to running to explore their new surroundings and alleviate
          the difficulties of pandemic life.
        </p>
      </section>
      <section className="secImg">
        <img src={dedicated1} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            SiuHei Chung doesn’t stand still for long. So far, they have lived
            in three different continents. And each night they rack up an
            average of 14 km (8.7 miles) on foot, split with a 7 km run and a 7
            km return walk. Running is their daily adventure, maintaining their
            physical and mental health while they adjust to a new city where
            Covid-19 lockdowns have made finding new friends even more
            challenging. We caught up with them to hear their full story.
            <h4 className="containerText_h4">Q&A with SiuHei Chung</h4>
            SiuHei – when and how did you discover running?
            <br /> <br />
            It’s something I’ve always done. When I was younger, I joined the
            local running team. I’ve kept running ever since. It keeps me happy.
            It gives me time to free my mind, be myself and just enjoy the run.
            I fell in love with it straightaway. When you’re running and find it
            difficult to breathe, of course it’s hard. But when you go through
            the whole journey, you feel amazing.
            <br /> <br />
            SiuHei – when and how did you discover running?
            <br /> <br />
            When I was in Hong Kong, I needed personal space because I lived
            with all of my family in a small apartment. If you run at night,
            obviously there are not many people out on the streets. You’re by
            yourself. Your mind empties. You can just be yourself. I run where
            there are no people – just empty spaces, me and the moonlight.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={dedicated2} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            How does running help you in the rest of your life?
            <br /> <br />
            I suffer from anxiety and depression. Running definitely helps me to
            fight off the worst feelings. It gives me time to figure out what I
            want. I can daydream. The better I learn to relax my mind, the
            better I feel. Running is key. It’s something I’ll be doing for the
            rest of my life. It’s incredibly important to me.
            <br /> <br />
            What do you think about when you’re running?
            <br /> <br />I feel like my mind is quite jumpy. I’ve got a crazy
            imagination. My work in fashion gives me creativity and vision. When
            I’m running, my mind jumps from one thing to another. It never
            stops. But I get that runner’s high and I enjoy being alone when
            it’s dark. It’s exciting. I love running at night. Then after the
            journey, I have to walk home. So things start fast, then slow down.
            It’s a good rhythm.
            <br /> <br />
            Most people run a loop, but you do a long run and then walk the same
            route home. Why?
            <br /> <br />
            I’ll usually run 7 km (4.35 miles). Running back is just too
            exhausting. I want to enjoy the whole journey. When I walk back, it
            frees my muscles. It loosens my body. It’s my medication.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={dedicated3} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Do you only run at night?
            <br /> <br />
            I love daytime running, but I wake up too late. I’m lazy during the
            day. Running in London is very different to running in Hong Kong. In
            Hong Kong, almost everyone lives in high buildings. When I run at
            night there, the lights are still on and you’re just running between
            skyscrapers. But in London, a lot of buildings are only a couple of
            floors high. You can see the sky, the stars and the moon. I love
            that connection.
            <br /> <br />
            Do you have set routes?
            <br /> <br />
            No, I love running freely instead. I don’t have a journey in mind. I
            just run to wherever I feel like. If I decide I want to explore
            Hackney, I’ll run there and then walk home. Running gives you the
            chance to see the city in a way that public transport doesn’t.
            That’s been amazing for me settling into a new place. I can choose
            exactly where to go, where to explore, and that’s really opened up
            the city to me. As well as Hong Kong, I’ve also lived in Australia
            and Bali and I used running in the same way there. I love that it
            allows me to see places that people don’t normally enjoy through
            public travel.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={dedicated4} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            What’s your relationship with running?
            <br /> <br />
            I definitely have some days where I don’t want to do it. Rainy days,
            cold days – they’re difficult. But if I stay at home for a few days,
            I will push myself to go out, even if it’s just a walk or a short
            run. It keeps my energy up, so I make sure I do it.
            <br /> <br />
            Do you track your runs?
            <br /> <br />
            No. For me, running is about relaxation. It’s not a training
            session. I just want to lose myself, do the best I can and do what I
            want.
            <br /> <br />
            How does running benefit the rest of your life?
            <br /> <br />
            It teaches me to push myself. Because I’m skinny, I have to use a
            lot of energy if I do a longer run, say 10 km. But it’s a lesson I
            can apply elsewhere too. You have to push yourself to do something
            that’s really hard. You have to go to the limit to achieve your
            goals.
            <br /> <br />
            What would you say to someone thinking about starting to run?
            <br /> <br />
            At first, it’s hard. You really have to push yourself. You have to
            make yourself think that you have to do it today. Not tomorrow. Once
            you start, you’ll keep doing it.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={dedicated5} alt="" />
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
          font-size: 1.3rem;
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
        color: rgb(255, 255, 255);
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
          font-size: 1.7rem;
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
  }
`;
export default Dedicated;
