import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import stepstorun1 from "../../../../images/movements/articlesPageImg/stepstorun1.avif";
import stepstorun2 from "../../../../images/movements/articlesPageImg/stepstorun2.avif";
import stepstorun3 from "../../../../images/movements/articlesPageImg/stepstorun3.avif";
import stepstorun4 from "../../../../images/movements/articlesPageImg/stepstorun4.avif";
import stepstorun5 from "../../../../images/movements/articlesPageImg/stepstorun5.avif";
const StepsToRun = () => {
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
          Runner’s high explained – what it is and how to reach it
        </h1>
        <p className="pSec1">
          New research helps explain the why behind runner’s high. We explore
          this elusive sensation and share eight simple steps to get you there.
        </p>
      </section>

      <section className="secImg">
        <img src={stepstorun1} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <h4 className="containerText_h4">
            What does a runner’s high feel like?
          </h4>
          <div className="pSecText">
            You can feel every muscle fiber, your pulse is thumping, your
            circulation is at full speed. But you can't stop now. You keep going
            further and further. And suddenly it happens. The fatigue you have
            felt before disappears. A wave of energy washes over you, growing
            with every step you take. Feeling pain turns into a feeling of
            euphoria. Your legs fly over the ground. Whether you’re running on
            damp forest soil or grey asphalt: a runner’s high makes you feel
            like a superhero.
            <br /> <br />
            From recreational athletes to ultra-marathon masters, most runners
            usually describe their runner’s high with sentences like these:
            <br /> <br />
            “Effortless running ... Your head is completely free from thoughts.”
            <br /> <br />
            “You’re literally running in your own world and enjoy every moment.”
            <br /> <br />
            “It’s too bad that happy feeling doesn't last forever after passing
            the finish line.”
            <br /> <br />
            “My run was really easy once I got into that elevated mood and
            euphoric state.”
            <br /> <br />
            Ok then, so it doesn’t just feel good, but great. But is it a
            tingling sensation? A state of complete mental clarity? Maybe even
            an inner place a runner reaches? The reward of a runner’s high is
            like a rush – a feeling of pure euphoria that releases new energy
            reserves. The intensity and duration of the high can’t be measured
            precisely – and it always depends on the situation and the runner.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={stepstorun2} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <h4 className="containerText_h4">The test of time</h4>
          <div className="pSecText">
            How can you reach runner’s high and how long do you have to run to
            reach flow state?
            <br /> <br />
            You can run five kilometers, ten kilometers, even 15 and beyond.
            Keep pushing yourself until your muscles and your bones start to the
            strain from the effort. Giving up would feel natural at this point
            but now is the time to persevere*. It is exactly when you start
            experiencing these symptoms that you’re climbing towards the high if
            you can keep the rhythm.
            <br /> <br />
            Push a little longer and gravity will suddenly release its hold on
            those heavy legs. Running will almost feel like floating. You
            literally feel elevated. Welcome to the runner’s high club. After
            you’ve felt the reward of that extended effort, your perception
            changes. You’ll want to chase this feeling again and again.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={stepstorun3} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <h4 className="containerText_h4">The test of time</h4>
          <div className="pSecText">
            What does the science say about runner’s high and what is it
            exactly?
            <br /> <br />
            So it feels awesome, but what exactly is happening in our bodies
            when we hit that high? The research is surprisingly divided over the
            exact cause, despite it being a phenomenon that millions of people
            claim to have experienced. Here begins “the science bit”:
            <br /> <br />
            For a long time, endorphin release was thought to be the trigger for
            runner's high. Ask why people work out and endorphins will often
            come back as the reason they dance with discomfort. But these
            natural pain-slaying hormones might not actually be the reason why
            working out feels good.
            <br /> <br />
            Endorphins are produced in the brain and released when you exercise.
            Even more endorphins are released when you are exposed to prolonged
            endurance exercise. They are chemically similar to opiates and have
            been known to cause numbness and a mental state of intoxication.
            <br /> <br />
            However, more recent research results show that endorphins don't
            cross the so-called blood-brain barrier – they are too big to cross
            into the brain for that mental high. Which leads us in a new
            direction...
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={stepstorun4} alt="" />
      </section>

      <section className="sectionText">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="containerSecText">
            <h4 className="containerText_h4">The test of time</h4>
            <div className="pSecText">
              Running on endocannabinoids
              <br /> <br />
              Various tests suggest it’s actually endocannabinoids that cause
              runner's high – the same ones that can be found in cannabis. These
              chemicals bind to the same receptors in your brain as THC –
              psychoactive compound in cannabis responsible for high. And your
              body has been proven to produce these while running, which helps
              you internally trigger a so-called high. The latest research says
              that it’s these chemical compounds, not endorphins, that are
              responsible for runner’s high. Talk of endorphins as the cause
              still remains rife among runners though. Probably not least
              because “endocannabinoids” is a real mouthful.
              <br /> <br />
              Either way, our bodies are made for this natural intoxication at
              the biochemical level. So, whatever’s causing the high, unleash
              that elevating energy on your next run.
            </div>
          </div>
          <div className="containerSecText">
            <h4 className="containerText_h4">The test of time</h4>
            <div className="pSecText">
              Can a runner’s high be bad for you?
              <br /> <br />
              Getting and staying healthy through exercise not only feels good
              but is good for you. We all know that. Yet people who are
              physically active and exercise regularly sometimes wonder if
              reaching the resulting high-like state of euphoria could be a bad
              thing. The simple answer, we’re pleased to report, is no, because
              the feeling of getting high itself isn’t harmful in any way.
              <br /> <br />
              Having said that, there is a (comparatively low) risk that being
              under the influence of this euphoric feeling can distract you from
              risks in the same way you’d be less sharp if you were under the
              influence of drugs so, as always, take care out there.
              <br /> <br />
              There’s also the possibility of getting addicted to the high you
              experience while running, which can also be harmful – you can have
              too much even of a very good thing, so that’s something to be
              mindful of too.
            </div>
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={stepstorun5} alt="" />
      </section>
      <section className="sectionText">
        <div
          className="container"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="containerSecText">
            <h4 className="containerText_h4">Is runner’s high a myth?</h4>
            <div className="pSecText">
              No. But you do have to earn it with effort. So be patient.
              Different runners have different thresholds to cross before they
              experience their runner's high. You will probably test your
              physical and mental limits – or even overcome them – on the way.
              <br /> <br />
              Running longer distances increases the chances of reaching a state
              of euphoria. The feeling of intoxication sometimes also sets in on
              shorter distances and regular training increases your chances of
              experiencing it many times over. Ready to start your pursuit of
              the runner’s high? These eight steps will help you get there: .
            </div>
          </div>
          <div className="containerSecText">
            <h4 className="containerText_h4">
              Eight steps to euphoria: how to experience runner’s high.{" "}
            </h4>
            <div className="pSecText">
              Taking the following steps into consideration before a run will
              increase your chances of reaching a runner’s high:
              <br /> <br />
              Step 1: Start in the right shoe
              <br /> <br />
              Pick a shoe that is light and supports a fluid transition so you
              can move how you were meant to. The all-new Cloudflow checks all
              these boxes. It’s known as the “shortcut to runner’s high” for a
              reason.
            </div>
          </div>
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
        padding: 2rem;
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
  }

  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0rem 0rem;
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
        padding: 0.5rem;
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
  }
`;
export default StepsToRun;
