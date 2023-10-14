import styled from "styled-components";
import hiking from "../../../../images/cartEmpty/hiking.avif";
import lifestyle from "../../../../images/cartEmpty/lifestyle.avif";
import roadRunning from "../../../../images/cartEmpty/roadRunning.avif";
import tennis from "../../../../images/cartEmpty/tennis.avif";
import trail from "../../../../images/cartEmpty/trail.avif";

const Activities = () => {
  return (
    <Wrapper>
      <span>Activities</span>
      <article>
        <div className="container">
          <img src={roadRunning} alt="" />
          <p>Road Running</p>
        </div>
        <div className="container">
          <img src={trail} alt="" />
          <p>Trail Running</p>
        </div>
        <div className="container">
          <img src={lifestyle} alt="" />
          <p>Lifestyle</p>
        </div>
        <div className="container">
          <img src={hiking} alt="" />
          <p> Outdoor</p>
        </div>
        <div className="container">
          <img src={tennis} alt="" />
          <p>Tennis</p>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 4rem;
  span {
    margin-left: 1.5rem;
    font-size: 1.7rem;
    font-weight: 400;
  }
  article {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      width: 12rem;
      border-radius: 10px;
      cursor: pointer;
      img {
        width: 180px;
        margin-bottom: 0.4rem;
        border-radius: 10px;
      }
      p {
        font-size: 1.4rem;
        font-weight: 500;
        color: #302f2f;
      }
    }
  }
`;
export default Activities;
