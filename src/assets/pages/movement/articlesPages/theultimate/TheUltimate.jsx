import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../../../../componentes/navbar/Navbar";
import logo from "../../../../images/logoImg/logo.jpeg";
import Footer from "../../../../componentes/footer/Footer";
import theulmiate1 from "../../../../images/movements/articlesPageImg/theulmiate1.avif";
import theulmiate2 from "../../../../images/movements/articlesPageImg/theulmiate2.avif";
import theulmiate3 from "../../../../images/movements/articlesPageImg/theulmiate3.avif";
const TheUltimate = () => {
  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>

      <section className="sec1">
        <h1 className="h1Sec1">Dedicated to the run: Modupe Shokunbi</h1>
        <p className="pSec1">
          Meet the British sprinter balancing work and study with her ambitions
          for international running success.
        </p>
      </section>

      <section className="secImg">
        <img src={theulmiate1} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Modupe Shokunbi has long been one of the brightest young talents in
            British sprinting. In 2013, she was the country’s no. 1 ranked U15
            in the 100 meters. Now a student at Brunel University, she runs for
            the Blackheath and Bromley Harriers and has found new ways to adapt
            her training during the Covid-19 pandemic. From Zoom yoga sessions
            to the importance of discipline and community, Modupe talked us
            through her life in running.
            <br /> <br />
            <h4 className="containerText_h4">Q&A with Modupe Shokunbi</h4>
            <br /> <br />
            What did you fall in love with – the running, or the winning?
            <br /> <br />
            It was the winning. I was getting medals. I could see that I was
            good at it. And each week, I could see my time was getting faster
            and faster. I was getting 100-meter personal bests every weekend. It
            gets addictive.
            <br /> <br />
            Since then, running’s been a constant in your life. What does it
            mean to you?
            <br /> <br />
            It’s woven into my life. It’s a daily routine, a ritual. If I didn’t
            do it, I don’t know what else I’d do. It shapes everything. If I go
            to the gym, it’s to help with running. If I’m doing deadlifts or
            hang cleans, it’s to get power. Without running, I wouldn’t know
            what to do.
            <br /> <br />
            Modupe – when and how did you discover running?
            <br /> <br />
            It was at a school sports day. I beat my classmates, my teacher saw
            some potential in me, and he referred to the local athletics club.
            In those early days, I’d maybe only run twice a week. But when I
            reached 14, it became more serious. I was starting to see that I was
            gaining in my performances. I was going to competitions and
            generally coming first. I was hooked.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={theulmiate2} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Why do you do run?
            <br /> <br />
            First, it keeps you fit and healthy. But I’ve got ambition too. I
            want to progress, run for my country and be involved in big events
            like the World Championship – either as an individual or as part of
            a relay.
            <br /> <br />
            How would you describe your relationship with running?
            <br /> <br />
            It’s definitely not perfect. At the stage I’m at, especially at my
            age, it’s harder to win competitions. I don’t know why that is.
            Maybe it’s circumstances, daily life, or stress from going to uni.
            When I was younger, it was so much easier. I wouldn’t have to go
            training. I wouldn’t go to the gym. A quick warm-up would do. Now,
            there are other things that impact how you run in lots of different
            ways.
            <br /> <br />
            Do you still get the same buzz, now that running has switched from
            hobby to professional ambition?
            <br /> <br />
            Yes – that sense of enjoyment is still there. You know that when you
            put in the work, you reap the reward. My training is full of targets
            and my coach videos everything. So you can see the progress, the
            achievements. That’s a good thing. It gives you that buzz.
            <br /> <br />
            What effect has the pandemic had? Did 2020 change your relationship
            with running?
            <br /> <br />
            It was difficult. I couldn’t train with my group. And I was on a
            placement for my degree, so initially I was still going to work
            every day. When I got furloughed, I would train in the morning at
            the local park. Then we’d have Zoom calls and do group yoga
            sessions. All our interactions were through social media, which was
            difficult. But I learned so much more about myself and how I train.
          </div>
        </div>
      </section>

      <section className="secImg">
        <img src={theulmiate3} alt="" />
      </section>

      <section className="sectionText">
        <div className="containerSecText">
          <div className="pSecText">
            Did 2020 make you value the running community more than you had?
            <br /> <br />
            Yeah, certainly. When you train by yourself, there’s nobody cheering
            you on when the session’s getting hard. It’s just you and your
            headphones. So I appreciate being in a group of people who I can
            train with and who are my friends.
            <br /> <br />
            What does your typical run look like?
            <br /> <br />
            Because I’m a sprinter, training is a real mix. Some days we’ll have
            a speed session, which might be two sets of four 100m sprints.
            Others will be about acceleration in the first few steps. Maybe
            there’ll be a hill session thrown in. Then after each session, we’ll
            do either a home gym or circuit session.
            <br /> <br />
            What do you think about when you’re running?
            <br /> <br />
            I try not to think about anything. It’s all about what I need to do
            in the session. In a 100-meter race, you don’t have time to think
            about anything other than the first few steps, your acceleration
            position and your standing position.
            <br /> <br />
            How does running help with other areas of your life?
            <br /> <br />I know I’m healthy and physically strong from running.
            But there’s also time management and discipline. Sometimes training
            takes every ounce of my energy, but then I’ve to return home and
            complete my studies too. Because of that discipline, I’ve learned to
            make sure everything gets done, however tired I feel.
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
  .secImg {
    img {
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
  }
`;
export default TheUltimate;
