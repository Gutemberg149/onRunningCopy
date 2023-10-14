import styled from "styled-components";
import theme_Questions_Sustainability from "./ArraySustainability";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";

const ProductInfo = () => {
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
      <h3 className="titleSession"> Sustainability</h3>
      <div className="accordion">
        {theme_Questions_Sustainability.map((questionTheme) => {
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
                  style={{ transition: "ease .3s" }}
                >
                  <p>{quest.question}</p>
                </div>
                <div
                  className={
                    selectedQuestion === quest.id ? "answer show" : "answer"
                  }
                  style={{ transition: "ease .3s" }}
                >
                  <p>{quest.answer}</p>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  width: 100%;
  padding: 0 2rem;
  border-radius: 1rem;
  .titleSession {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    font-weight: 500;
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
`;
export default ProductInfo;
