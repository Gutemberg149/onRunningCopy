import styled from "styled-components";
import { useState, useContext } from "react";
import { ShippingContext } from "../../contexts/ShippingContext";
import { useEffect } from "react";

const Shipping = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    docnumber: "",
    street: "",
    neighbohood: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
  });

  //fill up the form left side
  const handleUserData = (e) => {
    setUserData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSumit = (e) => {
    e.preventDefault();
  };

  const handleUsedataFill = () => {
    const userDataValues = Object.values(userData);
    const userDataEmpty = userDataValues.filter((elem) => {
      return elem === "";
    });
    if (userDataEmpty.length === 1) {
      return setDisabledButton(false);
    }
  };
  useEffect(() => {
    handleUsedataFill();
  }, [handleSumit]);

  //context to change checout from shipping details to payment details, line 108
  const { setMovetoPayment } = useContext(ShippingContext);

  return (
    <Wrapper>
      <div className="shippingContainer">
        <form onSubmit={handleSumit}>
          <div className="inputContainer">
            <div className="inputBox margimRight">
              <input
                type="text"
                name="firstname"
                onChange={handleUserData}
                required
              />
              <span>First name</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="lastname"
                onChange={handleUserData}
                required
              />
              <span>Last name</span>
            </div>
          </div>
          <div className="inputContainer ">
            <div className="inputBox ">
              <input
                type="text"
                name="docnumber"
                onChange={handleUserData}
                required
              />
              <span>Document Number</span>
            </div>
          </div>
          <div className="inputContainer ">
            <div className="inputBox ">
              <input
                type="text"
                name="street"
                onChange={handleUserData}
                required
              />
              <span>Street Adress</span>
            </div>
          </div>
          <div className="inputContainer ">
            <div className="inputBox ">
              <input
                type="text"
                name="neighbohood"
                onChange={handleUserData}
                required
              />
              <span>Neighborhood</span>
            </div>
          </div>
          <div className="inputContainer ">
            <div className="inputBox ">
              <input
                type="text"
                name="city"
                onChange={handleUserData}
                required
              />
              <span>City</span>
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputBox margimRight">
              <input
                type="text"
                name="state"
                onChange={handleUserData}
                required
              />
              <span>State</span>
            </div>

            <div className="inputBox">
              <input
                type="text"
                name="postCode"
                onChange={handleUserData}
                required
              />
              <span>Post Code</span>
            </div>
          </div>
          <div className="inputContainer ">
            <div className="inputBox ">
              <span className="selectSpan">Country</span>
              <select defaultValue={"brasil"}>
                <option value="andora">Andora</option>
                <option value="brasil">Brazil</option>
                <option value="canada">Canada</option>
                <option value="denmark">Denmark</option>
                <option value="estonia">Estonia</option>
                <option value="finlandia">Finlandia</option>
                <option value="france">France</option>
                <option value="germany">Germany</option>
                <option value="hungary">Hungary</option>
                <option value="ireland">Ireland</option>
                <option value="singapore">Singapore</option>
                <option value="spain">Spain</option>
                Brasil
                <option value="uruguai">Uruguai</option>
              </select>
            </div>
          </div>
          <button
            className="goPayment"
            onClick={() => setMovetoPayment(true)}
            disabled={disabledButton}
          >
            Go to payment
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .shippingContainer {
    width: 100%;
    form {
      width: 100%;
      margin-top: 2rem;

      .inputContainer {
        width: 100%;
        display: flex;
        justify-content: space-between;
        position: relative;
        .inputBox {
          position: relative;
          width: 100%;
          height: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;

          input {
            width: 100%;
            height: 3.5rem;
            outline: none;
            background-color: transparent;
            border: none;
            border: 1px solid lightgray;
            font-size: 1.1rem;
            color: #504f4f;
            font-weight: 300;
            padding-left: 1rem;
          }
          .documentNumber {
            width: 100%;
          }
          span {
            position: absolute;
            left: 0;
            padding: 20px;
            pointer-events: none;
            font-size: 1rem;
            color: gray;
            font-weight: 300;
            transition: all 0.3s;
          }
          .selectSpan {
            transform: translateX(10px) translateY(-25px);
            font-size: 0.7rem;
            padding: 0 10px;
            background-color: white;
          }
          select {
            width: 100%;
            height: 3.5rem;
            outline: none;
            background-color: transparent;
            appearance: none;
            border: none;
            border: 1px solid lightgray;
            font-size: 1.1rem;
            color: #504f4f;
            font-weight: 300;
            padding-left: 1rem;
          }
        }
        .margimRight {
          margin-right: 1rem;
        }
        .inputBox input:valid ~ span,
        .inputBox input:focus ~ span {
          transform: translateX(10px) translateY(-25px);
          font-size: 0.7rem;
          padding: 0 10px;
          background-color: white;
        }
        .inputBox input:valid,
        .inputBox input:focus {
          border: 0.5px solid #3e3e3e;
        }
      }
    }
  }
`;
export default Shipping;
