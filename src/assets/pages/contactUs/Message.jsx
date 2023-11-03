import { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { conatctUsContext } from "../../contexts/ContactUsContext";

const Message = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    textmessage: "",
  });

  const { disabledButton, setDisabledButton, setMessageSent } =
    useContext(conatctUsContext);

  const handleUserData = (e) => {
    setContact((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    setContact((prev) => {
      return {
        [e.target.name]: "",
      };
    });
    // console.log(contact);
  };

  const handleContactdataFill = () => {
    const userDataValues = Object.values(contact);
    const userDataEmpty = userDataValues.filter((elem) => {
      return elem === "";
    });
    if (userDataEmpty.length > 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  useEffect(() => {
    handleContactdataFill();
  }, [handleSumit]);
  return (
    <Wrapper>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="name"
          onChange={handleUserData}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          onChange={handleUserData}
          placeholder="Email"
        />
        <input
          type="text"
          name="subject"
          onChange={handleUserData}
          placeholder="Subject"
        />
        <textarea
          type="text"
          name="textmessage"
          onChange={handleUserData}
          rows="6"
          maxLength="150"
          placeholder="Your message here"
        />

        <button disabled={disabledButton} onClick={() => setMessageSent(true)}>
          Send menssage
        </button>
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 3rem;
      border: none;
      border-bottom: 1px solid lightgray;
      margin-bottom: 1rem;
      font-size: 1.2rem;
      &::placeholder {
        font-size: 1.1rem;
        color: #7d7c7c;
      }
      &:focus {
        outline: none;
      }
    }
    textarea {
      border: none;
      border-bottom: 1px solid lightgray;
      margin-top: 2rem;
      font-size: 1.2rem;
      &::placeholder {
        font-size: 1.1rem;
        color: #7d7c7c;
      }
      &:focus {
        outline: none;
      }
    }
    button {
      width: 8rem;
      height: 3rem;
      background-color: #047695;
      border: none;
      font-size: 0.9rem;
      color: white;
      border-radius: 0.3rem;
      margin-top: 2rem;
      cursor: pointer;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    form {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      padding: 0 0.5rem;
      input {
        height: 3rem;
        border: none;
        border-bottom: 1px solid lightgray;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        &::placeholder {
          font-size: 1.1rem;
          color: #7d7c7c;
        }
        &:focus {
          outline: none;
        }
      }
      textarea {
        border: none;
        border-bottom: 1px solid lightgray;
        margin-top: 2rem;
        font-size: 1.2rem;
        &::placeholder {
          font-size: 1.1rem;
          color: #7d7c7c;
        }
        &:focus {
          outline: none;
        }
      }
      button {
        width: 8rem;
        height: 3rem;
        background-color: #047695;
        border: none;
        font-size: 0.9rem;
        color: white;
        border-radius: 0.3rem;
        margin-top: 2rem;
        cursor: pointer;
      }
    }
  }
`;
export default Message;
