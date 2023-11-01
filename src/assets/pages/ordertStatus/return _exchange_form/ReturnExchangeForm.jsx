import { useState } from "react";
import styled from "styled-components";
import theme_Questions from "./ArrayReturnExchange";
import { HiPlus } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
const ReturnExchangeForm = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const toggleQuestions = (i) => {
    if (selectedQuestion === i) {
      return setSelectedQuestion(null);
    }
    setSelectedQuestion(i);
  };

  const toggleTitles = (i) => {
    if (selectedTitle === i) {
      return setSelectedTitle(null);
    }
    return setSelectedTitle(i);
  };
  return (
    <Wrapper>
      <h1>Return / Exchange form</h1>
      <p className="pTop">Create your return or exchange request here.</p>

      <div className="accordion">
        {theme_Questions.map((questionTheme) => {
          return questionTheme.map((quest) => {
            return quest.title ? (
              <div
                className={"title"}
                key={quest.id}
                onClick={() => toggleTitles(quest.id)}
              >
                <h3>{quest.title}</h3>
                {selectedTitle === quest.id ? (
                  <AiOutlineMinus className="plusIcon" />
                ) : (
                  <HiPlus className="plusIcon" />
                )}
              </div>
            ) : (
              <div
                className={
                  selectedTitle === quest.idTitle
                    ? "showSetOfquestion"
                    : "hiddenSetOfquestion"
                }
                key={quest.id}
              >
                <div
                  className="question"
                  onClick={() => toggleQuestions(quest.id)}
                  style={{ transition: "ease .2s" }}
                >
                  <p>{quest.question}</p>
                </div>
                <div
                  className={
                    selectedQuestion === quest.id ? "answer show" : "answer"
                  }
                  style={{ transition: "ease .2s" }}
                >
                  <div style={{ marginBottom: "3rem" }}>{quest.answer}</div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: #201f1f;
  }
  .pTop {
    font-size: 1.9rem;
    font-weight: 300;
    margin-bottom: 5rem;
    color: #201f1f;
  }
  .accordion {
    .title {
      padding: 0 2rem;
      font-size: 1.2rem;
      font-weight: 400;
      background-color: black;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 1rem;
      height: 8rem;
      margin-bottom: 0.5rem;
      cursor: pointer;
      .plusIcon {
        color: white;
        font-size: 2.1rem;
      }
    }

    .showSetOfquestion {
      height: auto;
      max-height: 45rem;
      margin-bottom: 1rem;
      .question {
        display: flex;
        align-items: self-start;
        height: 5rem;
        padding: 0 2rem;
        font-size: 1.6rem;
        font-weight: 500;
        background-color: white;
        cursor: pointer;
        p {
          margin-top: 1rem;
        }
      }
      .answer {
        overflow: hidden;
        max-height: 0;
        height: auto;
      }
      .answer.show {
        height: auto;
        max-height: 75rem;
        padding: 0.7rem 1rem 0.2rem 1rem;
        margin: 0.5rem 0rem;
        font-size: 1.4rem;
        font-weight: 300;
        color: #575656;
      }
    }
    .hiddenSetOfquestion {
      max-height: 0;
      overflow: hidden;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    margin-top: 2rem;
    width: 100%;
    h1 {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    .pTop {
      font-size: 1.1rem;
      font-weight: 300;
      margin-bottom: 2rem;
      color: #201f1f;
    }
    .accordion {
      .title {
        padding: 0 2rem;
        font-size: 0.8rem;
        font-weight: 400;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 1rem;
        height: 4rem;
        width: 90%;
        margin-bottom: 0.5rem;
        cursor: pointer;
        .plusIcon {
          color: white;
          font-size: 1.5rem;
        }
      }

      .showSetOfquestion {
        height: auto;
        max-height: 45rem;
        margin-bottom: 0.5rem;
        .question {
          display: flex;
          align-items: center;
          height: 5rem;
          padding: 0 2rem;
          font-size: 1.2rem;
          font-weight: 500;
          background-color: white;
          cursor: pointer;
        }
        .answer {
          overflow: hidden;
          max-height: 0;
        }
        .answer.show {
          height: auto;
          max-height: 25rem;
          padding: 0.7rem 1rem;
          margin: 0.5rem 0rem;
          font-size: 1.3rem;
          color: #424141;
        }
      }
      .hiddenSetOfquestion {
        max-height: 0;
        overflow: hidden;
      }
    }
  }
`;
export default ReturnExchangeForm;
