import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import logo from "../../images/logoImg/logo.jpeg";
import Footer from "../../componentes/footer/Footer";
import friendsrunning from "../../images/referToFriend/friendsrunning.jpeg";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const ReferFriend = () => {
  const [check, setCheck] = useState(false);
  const [emailOnchange, setEmailOnChange] = useState("");
  // const [emailFriendArray, setEmailFriendArray] = useState([]);
  const [error, setError] = useState(null);

  // const [emailUser, setEmailUser] = useState([]);
  //validate email------------------------------
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(emailOnchange);
  }

  const handleEmailChange = (event) => {
    event.preventDefault();
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmailOnChange(event.target.value);
    // console.log(emailOnchange);
  };

  //this code gets the email from emailOnchange using the emaijs site and send it to email registered in this case my personal email (gutemberg149), also if there are more user info in the form it can be send to the registered email too.
  const templateParams = {
    email: emailOnchange,
  };
  const handleEmails = () => {
    emailjs
      .send(
        "service_mgplpdm",
        "template_ow9hqbm",
        templateParams,
        "ePQLQL6uF5zHPkqb2"
      )
      .then(
        (response) => {
          console.log("Email enviado:", response.status, response.text);
          setEmailOnChange("");
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
  };

  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <main>
        <div className="left">
          <h3>Win-Win: Share On with a friend and both get 10% off.</h3>
          <p>
            Like to share? Sign up below to get an exclusive 10% off link to
            share with friends for use on their first On order.
          </p>
          <p>
            Once they make that purchase, we'll send you your very own 10%
            discount code too.
          </p>
          <div className="boxRefertoAFriend">
            <p>Ready. Set. Share!</p>

            <form>
              <div className="emailConatiner">
                <input
                  type="email"
                  placeholder="What's your email address?"
                  id="email"
                  maxLength={70}
                  value={emailOnchange}
                  onChange={handleEmailChange}
                />
                <div className="error">
                  {error && <h5 className="error">{error}</h5>}
                </div>
              </div>

              <div className="inputCheckBox">
                <div className="checkBox" onClick={() => setCheck(!check)}>
                  {check && <AiOutlineCheck />}
                </div>
                <label htmlFor="signup">
                  Sign up for exclusive offers and product previews. By ticking
                  this box you agree to On's privacy policy and will start
                  receiving our newsletter.
                </label>
              </div>
            </form>
            <button onClick={() => handleEmails()}>Refer a friend</button>
          </div>
        </div>
        <div className="right">
          <img src={friendsrunning} alt="" />
        </div>
      </main>

      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    padding: 0 4rem;
    .logo {
      width: 6.5rem;
      margin: 2rem 3rem;
      mix-blend-mode: difference;
      cursor: pointer;
    }
  }
  main {
    display: flex;
    margin-bottom: 4rem;
    .left {
      padding: 6rem 12rem;
      width: 50%;
      height: 60rem;
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 3rem;
        font-weight: 400;
        color: #2d2c2c;
        margin-bottom: 3rem;
      }
      > p {
        font-size: 1.3rem;
        color: #2d2c2c;
        margin-bottom: 2rem;
        font-weight: 300;
      }
      .boxRefertoAFriend {
        display: flex;
        flex-direction: column;
        width: 100%;
        > p {
          font-size: 0.9rem;
          color: #2d2c2c;
          margin-bottom: 0.2rem;
        }
        form {
          .emailConatiner {
            /* border: #262525 2px solid; */
            height: 6rem;
            #email {
              width: 100%;
              height: 3.5rem;
              border: none;
              border: 1px solid #7b7a7a;
              margin-bottom: 0.5rem;
              font-size: 1.5rem;
              padding-left: 1.5rem;
              &::placeholder {
                font-size: 1.1rem;
              }
              &:focus {
                outline: none;
              }
            }
            .error {
              color: red;
            }
          }

          .inputCheckBox {
            display: flex;

            justify-content: space-between;
            .checkBox {
              width: 3rem;
              height: 1.3rem;
              border: #7b7a7a 1px solid;
              border-radius: 0.2rem;
              margin-right: 1rem;
              margin-top: 0.2rem;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
            label {
              line-height: 1.8rem;
              font-size: 1.1rem;
              padding: 0 6rem 2rem 0;
              color: #514f4f;
            }
          }
        }
        button {
          width: 100%;
          height: 4rem;
          border: none;
          border-radius: 0.2rem;
          background-color: #262525;
          color: #e8e7e7;
          font-size: 1.2rem;
          cursor: pointer;
          &:hover {
            background-color: black;
          }
        }
      }
    }
    .right {
      overflow: hidden;
      width: 50%;
      height: 60rem;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default ReferFriend;
