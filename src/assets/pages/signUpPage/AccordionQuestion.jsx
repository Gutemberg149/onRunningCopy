import styled from "styled-components";
import { AccordionQuestions } from "./arrayQuestion";
import { useState } from "react";
const AccordionQuestion = () => {
  const [idAnser, setIdAnser] = useState(null);
  const toggleAnswer = (id) => {
    if (idAnser === id) {
      setIdAnser(null);
    } else {
      setIdAnser(id);
    }
  };

  return (
    <Wrapper>
      {AccordionQuestions.map((elemt) => {
        return (
          <div className="container" key={elemt.id}>
            <div className="question" onClick={() => toggleAnswer(elemt.id)}>
              <p>{elemt.question}</p>
            </div>
            <div
              className={idAnser === elemt.id ? "answer" : "answer hiddenAnser"}
            >
              <p>{elemt.answer}</p>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 5rem 3rem;
  .container {
    border-bottom: 2px solid gray;
    .question {
      font-size: 1.7rem;
      font-weight: 400;
      margin: 1rem 0;
      cursor: pointer;
    }
    .answer {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      color: #2c2c2c;
      font-weight: 300;
      margin: 2rem 0;
      transition: ease 0.3s;
      height: 7rem;
    }
    .hiddenAnser {
      height: 0;
      overflow: hidden;
    }
  }
`;
export default AccordionQuestion;
