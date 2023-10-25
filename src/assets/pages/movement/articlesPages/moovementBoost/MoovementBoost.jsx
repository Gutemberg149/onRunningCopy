import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import movement_boost from "../../../../images/movements/articlesPageImg/Movement_Boost.avif";
import movement_boosts2 from "../../../../images/movements/articlesPageImg/Movement_Boosts2.avif";
import movement_boosts3 from "../../../../images/movements/articlesPageImg/Movement_Boosts3.avif";
import movement_boosts4 from "../../../../images/movements/articlesPageImg/Movement_Boosts4.avif";

const MoovementBoost = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <section className="sec1">
        <h1 className="h1Sec1">How movement boosts creativity</h1>
        <p className="pSec1">
          Looking for inspiration? Science suggests you won’t find it sat
          staring at a blank page. We explore the link between exercise and
          creativity.
        </p>
      </section>

      <section className="sectionImage">
        <img src={movement_boost} alt="" />
      </section>
      <section className="sectionContainer">
        <div className="containerSec3">
          <p className="pSec3_botton">
            Frederick Nietzsche was a vocal advocate. Steve Jobs was a fan.
            Arianna Huffington practices it daily. Haruki Murakami even wrote a
            book about it. Throughout history, some of the world’s best-known
            thinkers and entrepreneurs have used movement to stimulate
            creativity.
            <br /> <br />
            As Murakami puts it in his book, What I talk about when I talk about
            running, “physical strength is as necessary as artistic
            sensitivity.” Yet many of us who are focused on being creative at
            work use this very work as a reason not to exercise. So can
            sacrificing some precious desk time for movement outdoors really
            improve creative results?
            <br /> <br />
          </p>
        </div>
      </section>
      <section className="sectionImage">
        <img src={movement_boosts2} alt="" />
      </section>
      <section className="sectionContainer">
        <div className="containerSec3">
          <h5 className="topText">What the science says</h5>
          <p className="pSec3_botton">
            That exercise can benefit the mind, relieving stress for example, is
            widely recognized. In his book Spark: The Revolutionary New Science
            of Exercise and the Brain, Dr. John Ratey digs deeper into how the
            benefits of exercise extend far beyond physical performance. Ratey
            discusses the impact of movement on the chemistry and physiology of
            the brain. He highlights that exercise can increase neuroplasticity
            – the ability to create new neural connections. This appears to be
            the link to enhancements in your mood and decision-making
            capabilities, but what about creativity specifically?
            <br /> <br />
            Research on the link between movement and creativity largely focuses
            on aerobic activity (like running) or anaerobic activity (like
            sprinting). Studies have shown that aerobic exercise can increase
            the speed of concurrent cognition (multitasking), and that an
            intense workout can improve memory performance, and potentially
            creativity, for some time afterwards – good news if you like your
            lunch runs fast.
            <br /> <br />
            Perhaps even better news is that it doesn’t take an all-out run to
            help get the creative juices flowing. Nietzsche once said that “all
            truly great thoughts are conceived by walking,” an assertion that’s
            now supported by science.
            <br /> <br />
            In the brilliantly titled paper, Give Your Ideas Some Legs: The
            Positive Effect of Walking on Creative Thinking, Marily Oppezzo and
            Daniel Schwartz of Stanford University used four varying methods to
            assess the impact of walking on creativity. Their results showed a
            link between movement and improved creativity each time, both during
            exercise and shortly after. Whether done outdoor or indoor, they
            conclude that “walking opens up the free flow of ideas, and it is a
            simple and robust solution to the goals of increasing creativity and
            increasing physical activity.”
          </p>
        </div>
      </section>

      <section className="sectionImage">
        <img src={movement_boosts3} alt="" />
      </section>

      <section className="sectionContainer">
        <div className="containerSec3">
          <h5 className="topText"> Finding inspiration offline</h5>

          <p className="pSec3_botton">
            The science backs up claims made by some of the world’s brightest
            thinkers – movement means new ideas, whether it’s running or
            walking. creativity.
            <br /> <br />
            And while there are rewards to be gained by moving indoors, getting
            out from under those fluorescent lights and away from a screen
            compounds the benefits of moving with the positive effects of being
            outside.
            <br /> <br />
            One study showed that really immersing yourself in nature can have a
            significant impact on creativity. After just four days in the wild
            away from technological interruptions, the subjects of the study
            boosted their problem-solving skills by 50%.
          </p>
        </div>
      </section>
      <section className="sectionImage">
        <img src={movement_boosts4} alt="" />
      </section>
      <section className="sectionContainer">
        <div className="containerSec3">
          <h5 className="topText"> Head for the door</h5>
          <p className="pSec3_botton">
            The best way to start thinking outside of the box is getting out of
            your box-shaped office building or apartment and into the outdoors.
            Moving in the fresh air means fresh perspectives and switches our
            brains on for new stimuli. By getting outside for a regular run or
            walk, we don’t only get the aforementioned creativity boost from
            movement, but also see and hear new things, meet new people and
            watch how others interact. As Steve Jobs said, “The broader our
            understanding of human experience, the more dots we will have to
            connect, the more creative our ideas will be.” creativity.
            <br /> <br /> <br />
            <h5 className="topText">Head into the wild</h5>
            Heading out the door is great. Heading into the great outdoors is
            even better. Where the mobile reception ends is where additional
            benefits begin.
            <br /> <br />
            While our devices make us more productive in some ways, they sap our
            creative skills in others. The constant interruptions and so-called
            “task switching” triggered by email and instant messaging can reduce
            our attention spans and stop us reaching a focused and productive
            state of flow.
            <br /> <br />
            Remember the study mentioned above about the benefits of going off
            the grid? That same paper describes getting away from the pinging in
            your pocket as a key component of “Attention Restoration Theory
            (ART). ART suggests that exposure to nature can restore prefrontal
            cortex-mediated processes – in other words, it turns your brain back
            up to full power.
            <br /> <br />
            There’s a reason that Bill Gates takes “think weeks” away from the
            office to read and reflect. He is also known to head into the
            wilderness, staying in cabins in places like Storfjord, Norway,
            which combine comfort for reading with easy access to raw, unspoilt
            landscapes. And, according to the research, that’s how great minds
            become even greater.
            <br /> <br />
          </p>
        </div>
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
  .sectionImage {
    img {
      width: 100%;
    }
  }
  .sectionContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    .containerSec3 {
      width: 85rem;

      .topText {
        font-size: 1.5rem;
        color: white;
        margin-bottom: 2rem;
      }
      .pSec3_botton {
        color: #e6e6e6;
        font-size: 1.5rem;
      }
    }
  }
`;
export default MoovementBoost;
