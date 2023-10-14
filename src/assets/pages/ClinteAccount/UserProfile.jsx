import React from "react";
import styled from "styled-components";
import { useUserAuth } from "../../contexts/UserAuthContext";
const Profile = () => {
  const { user } = useUserAuth();
  return (
    <Wrapper>
      <h4>Your Profile</h4>
      <p className="p1">
        Keep your details updated. It helps us tailor content to you and speeds
        up checkout.
      </p>
      <div className="container1">
        <h5>Personal details</h5>
        <div className="email">
          <p className="pEmail">Email</p>
          <p className="userEmail">{user.email}</p>
          <p></p>
        </div>

        <div className="dataContainer ">
          <div className="datas firstName">
            <p className="p01">First name</p>
            <p className="p02">Gutemberg</p>
          </div>
          <div className="datas lastName">
            <p className="p01">Last name</p>
            <p className="p02">Rocha</p>
          </div>
        </div>
        <div className="dataContainer ">
          <div className="datas DataOfBirth">
            <p className="p01">Data of birth</p>
            <p className="p02">01/01/1999</p>
          </div>
          <div className="datas gender">
            <p className="p01">Gender</p>
            <p className="p02">Male</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 4rem;
  margin-bottom: 8rem;

  h4 {
    font-size: 4.5rem;
    font-weight: 500;
    margin-bottom: 3rem;
  }
  .p1 {
    width: 55rem;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 5rem;
  }
  .container1 {
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 60rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    h5 {
      font-size: 2.5rem;
      font-weight: 500;
    }
    .email {
      margin-bottom: 3rem;
      .pEmail {
        font-size: 1.2rem;
        font-weight: 300;
        color: #383838;
        margin-bottom: 0.5rem;
      }
      .userEmail {
        font-size: 1.2rem;
        font-weight: 400;
        color: #2c2b2b;
      }
    }
    .dataContainer {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .datas {
        .p01 {
          font-size: 1.1rem;
          color: #646464;
          margin-bottom: 0.2rem;
        }
        .p02 {
          font-size: 1.2rem;
          color: #323131;
          margin-bottom: 2.5rem;
        }
      }
    }
  }
`;
export default Profile;
