import styled from "styled-components";
import recycle from "../../images/feautres/recycle.avif";
import repeat from "../../images/feautres/repeat.avif";
import run from "../../images/feautres/run.avif";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const CyclonWork = () => {
  const [hideBlackBox1, setHideBlackBox1] = useState(true);
  const [hideBlackBox2, setHideBlackBox2] = useState(true);
  const [hideBlackBox3, setHideBlackBox3] = useState(true);

  return (
    <Wrapper>
      <div className="container">
        <div className="box box1">
          <div className="conmands">
            <p>Runff</p>
            <button
              className="btn"
              onClick={() => {
                setHideBlackBox1(!hideBlackBox1);
                setHideBlackBox3(true);
                setHideBlackBox2(true);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="shadowOverlay"></div>
          <div
            className="balckBoXText"
            style={{ bottom: `${hideBlackBox1 ? -60 : 0}rem` }}
            onClick={() => {
              setHideBlackBox1(!hideBlackBox1);
              setHideBlackBox3(true);
              setHideBlackBox2(true);
            }}
          >
            <p>
              Subscribe to the Cloudneo, and we'll send you a pair. Run in the
              shoe. Train. Workout. Chase down a PR Challenge yourself to
              another marathon. Do whatever you like. Run 'til you can't run
              anymore (in this shoe).
            </p>
          </div>
        </div>

        <div className="box box2">
          <div className="conmands">
            <p>Recycle</p>
            <button
              className="btn"
              onClick={() => {
                setHideBlackBox2(!hideBlackBox2);
                setHideBlackBox3(true);
                setHideBlackBox1(true);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="shadowOverlay"></div>
          <div
            className="balckBoXText"
            style={{ bottom: `${hideBlackBox2 ? -60 : 0}rem` }}
            onClick={() => {
              setHideBlackBox2(!hideBlackBox2);
              setHideBlackBox3(true);
              setHideBlackBox1(true);
            }}
          >
            <p>
              Every 6 months you can request new running gear. When the new
              shoes arrive (still recyclable, obviously), put the worn out,
              recyclable ones in the bag and send it back to us. Easy!
            </p>
          </div>
        </div>

        <div className="box box3">
          <div className="conmands">
            <p>Repeat</p>

            <button
              className="btn"
              onClick={() => {
                setHideBlackBox3(!hideBlackBox3);
                setHideBlackBox1(true);
                setHideBlackBox2(true);
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="shadowOverlay"></div>
          <div
            className="balckBoXText"
            style={{ bottom: `${hideBlackBox3 ? -60 : 0}rem` }}
            onClick={() => {
              setHideBlackBox3(!hideBlackBox3);
              setHideBlackBox1(true);
              setHideBlackBox2(true);
            }}
          >
            <p>
              We get the worn out Cyclon™ product and use it as raw materials
              for new products. You keep running until you need to recycle. And
              so it goes on, and on, and on, and on.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .container {
    width: 95%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 5rem;
    .box {
      position: relative;
      width: 35rem;
      height: 60rem;
      border-radius: 1rem;
      overflow-y: hidden;
      transition: all ease 0.6s;

      &:hover {
        z-index: 99;
        transform: scale(1.02);
      }
      .conmands {
        position: absolute;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        bottom: 4rem;
        z-index: 99;
        p {
          font-size: 2.2rem;
          color: #eae9e9;
          font-weight: 600;
        }
        .btn {
          width: 4rem;
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid white;
          border-radius: 50%;
          background-color: transparent;
          font-size: 2rem;
          color: #eae9e9;
          cursor: pointer;
        }
      }
      .shadowOverlay {
        width: 100%;
        height: 14rem;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        position: absolute;
        bottom: 0;
        background: linear-gradient(0deg, #0000009b 0%, rgba(0, 0, 0, 0) 100%);
        z-index: 97;
      }
      .balckBoXText {
        position: absolute;
        background-color: black;
        color: #eae9e9;
        width: 35rem;
        height: 60rem;
        border-radius: 1rem;
        transition: all ease 0.5s;
        bottom: -60rem;
        z-index: 98;
        p {
          font-size: 1.8rem;
          padding: 2rem;
        }
      }
    }
    .box1 {
      position: relative;
      background-image: url(${run});
      background-position: center;
    }
    .box2 {
      background-image: url(${recycle});
      background-position: center;
    }
    .box3 {
      background-image: url(${repeat});
      background-position: center;
      background-size: cover;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .container {
      width: 95%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;
      .box {
        position: relative;
        width: 34%;
        height: 35vh;
        border-radius: 1rem;
        overflow-y: hidden;
        transition: all ease 0.6s;
        margin: 0.3rem;
        &:hover {
          z-index: 99;
          transform: scale(1.02);
        }
        .conmands {
          position: absolute;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          bottom: 1rem;
          z-index: 99;
          p {
            font-size: 1rem;
            color: #eae9e9;
            font-weight: 600;
          }
          .btn {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            font-size: 1.3rem;
            color: #eae9e9;
            cursor: pointer;
          }
        }
        .shadowOverlay {
          width: 100%;
          height: 100%;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          position: absolute;
          bottom: 0;
          background: linear-gradient(
            0deg,
            #0000009b 0%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 97;
        }
        .balckBoXText {
          position: absolute;
          background-color: black;
          color: #eae9e9;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          transition: all ease 0.5s;
          bottom: -30rem;
          z-index: 98;
          p {
            font-size: 0.72rem;
            padding: 0.4rem;
          }
        }
      }
      .box1 {
        position: relative;
        background-image: url(${run});
        background-position: center;
      }
      .box2 {
        background-image: url(${recycle});
        background-position: center;
      }
      .box3 {
        background-image: url(${repeat});
        background-position: center;
        background-size: cover;
      }
    }
  }
  @media only screen and (min-device-width: 601px) and (max-device-width: 900px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .container {
      width: 95%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;
      .box {
        position: relative;
        width: 34%;
        height: 70vh;
        border-radius: 1rem;
        overflow-y: hidden;
        transition: all ease 0.6s;
        margin: 0.3rem;
        &:hover {
          z-index: 99;
          transform: scale(1.02);
        }
        .conmands {
          position: absolute;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          bottom: 1rem;
          z-index: 99;
          p {
            font-size: 1rem;
            color: #eae9e9;
            font-weight: 600;
          }
          .btn {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            font-size: 1.3rem;
            color: #eae9e9;
            cursor: pointer;
          }
        }
        .shadowOverlay {
          width: 100%;
          height: 100%;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          position: absolute;
          bottom: 0;
          background: linear-gradient(
            0deg,
            #0000009b 0%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 97;
        }
        .balckBoXText {
          position: absolute;
          background-color: black;
          color: #eae9e9;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          transition: all ease 0.5s;
          bottom: -30rem;
          z-index: 98;
          p {
            font-size: 0.72rem;
            padding: 0.4rem;
          }
        }
      }
      .box1 {
        position: relative;
        background-image: url(${run});
        background-position: center;
      }
      .box2 {
        background-image: url(${recycle});
        background-position: center;
      }
      .box3 {
        background-image: url(${repeat});
        background-position: center;
        background-size: cover;
      }
    }
  }
  @media only screen and (min-device-width: 901px) and (max-device-width: 1400px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .container {
      width: 96%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;
      .box {
        position: relative;
        width: 34%;
        height: 70vh;
        border-radius: 1rem;
        overflow-y: hidden;
        transition: all ease 0.6s;
        margin: 0.4rem;
        &:hover {
          z-index: 99;
          transform: scale(1);
        }
        .conmands {
          position: absolute;
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          bottom: 1rem;
          z-index: 99;
          p {
            font-size: 1.6rem;
            color: #eae9e9;
            font-weight: 600;
          }
          .btn {
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid white;
            border-radius: 50%;
            background-color: transparent;
            font-size: 1.3rem;
            color: #eae9e9;
            cursor: pointer;
          }
        }
        .shadowOverlay {
          width: 100%;
          height: 100%;
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
          position: absolute;
          bottom: 0;
          background: linear-gradient(
            0deg,
            #0000009b 0%,
            rgba(0, 0, 0, 0) 100%
          );
          z-index: 97;
        }
        .balckBoXText {
          position: absolute;
          background-color: black;
          color: #eae9e9;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          transition: all ease 0.5s;
          bottom: -30rem;
          z-index: 98;
          p {
            font-size: 0.72rem;
            padding: 0.4rem;
          }
        }
      }
      .box1 {
        position: relative;
        background-image: url(${run});
        background-position: center;
      }
      .box2 {
        background-image: url(${recycle});
        background-position: center;
      }
      .box3 {
        background-image: url(${repeat});
        background-position: center;
        background-size: cover;
      }
    }
  }
`;
export default CyclonWork;
