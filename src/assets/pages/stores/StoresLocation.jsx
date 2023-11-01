import logo from "../../images/logoImg/logowhite.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../../componentes/navbar/Navbar";
import { PiDotBold } from "react-icons/pi";
import Footer from "../../componentes/footer/Footer";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { markers, addresses } from "./MarkersAPI";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useState } from "react";
import { useMapEvent } from "react-leaflet/hooks";

const StoresLocation = () => {
  const [indx, setIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const MyComponent = () => {
    const map = useMapEvent("click", () => {
      map.setView(markers[indx].geocode, map.getZoom());
    });
    return null;
  };

  const handleClickOnTheMAp = () => {
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <Wrapper>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <Navbar />
      </nav>
      <section className="sec1">
        <div className="ptop">
          <Link to={"/"}>HOME</Link> <PiDotBold className="dot" /> SHOP LOCATOR
        </div>
        <h1>Shops located in Brazil</h1>
      </section>
      <main>
        <section className="mapSection">
          <MapContainer
            className="MapContainer"
            center={markers[indx].geocode}
            zoom={13}
          >
            <MyComponent />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup chunkedLoading>
              {markers.map((marker) => (
                <Marker position={marker.geocode} key={marker.id}></Marker>
              ))}
              <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css"
              />
              <script src="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.js"></script>
            </MarkerClusterGroup>
          </MapContainer>

          <div className="addressesContainer">
            <div className="topMessage">
              <h4>Stores Addresses</h4>
              <p className="message">
                To see the location on the map, click one of the options below
                than <span>click on the map.</span>
              </p>
            </div>
            <div className="mapAddresses">
              {addresses.map((store) => {
                return (
                  <div
                    className="locationsContainer"
                    onClick={() => setIndex(store.idx) + setClicked(true)}
                    key={store.idx}
                  >
                    {clicked && handleClickOnTheMAp()}
                    {clicked && store.idx === indx ? (
                      <div className="clickOnTheMAp">
                        <p>Now click on the map</p>
                      </div>
                    ) : (
                      <div className="addressDetails">
                        <p className="localName">{store.localName}</p>
                        <p className="address">{store.address}</p>
                        <p className="tel">{store.tel}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  nav {
    padding: 0 4rem;
    .logo {
      width: 5.25rem;
      margin: 2.55rem 3.75rem;
      mix-blend-mode: multiply;
    }
  }
  .sec1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem 5rem 3rem 5rem;
    .ptop {
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
      a {
        margin-left: 0.6rem;
        cursor: pointer;
        color: black;
        &:hover {
          color: #b40303;
        }
      }
      .dot {
        font-size: 2rem;
      }
    }
    h1 {
      font-size: 4.5rem;
      font-weight: 400;
    }
  }
  .mapSection {
    position: relative;
    width: 100%;
    height: 60rem;
    display: flex;
    padding: 0.5rem;
    z-index: 90;
    margin-bottom: 1rem;
    //in leaflet it is important to set this class below a 100% even though there is no visible class in the code. It is invisible.

    .MapContainer {
      width: 60%;
      background-color: transparent;
    }
    .addressesContainer {
      border-left: 2rem solid #9e9c9c8d;
      width: 45%;
      height: 100%;
      background-color: #e7e7e7;
      overflow: scroll;
      .topMessage {
        padding: 1.5rem 2rem 3rem 2rem;
        h4 {
          font-size: 1.8rem;
        }
        .message {
          font-size: 1.4rem;
          margin-top: 2rem;
        }
        span {
          color: #cf0303;
          font-size: 1.6rem;
          font-weight: 600;
        }
      }
      .mapAddresses {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .locationsContainer {
          position: relative;
          border-radius: 1rem;
          margin: 0.6rem;
          width: 22rem;
          height: 11.5rem;
          margin-bottom: 1rem;
          background-color: white;
          font-size: 1.4rem;
          padding: 0.8rem;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          transition: ease 0.3s;
          cursor: pointer;
          &:hover {
            transform: scale(1.05);
          }
          .localName {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.3rem;
          }
          .address {
            font-size: 1.1rem;
            margin-bottom: 0.3rem;
          }
          .tel {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 0.3rem;
          }
          .clickOnTheMAp {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: #f5c103a9;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            font-weight: 600;
            color: #b40303;
            border-radius: 1rem;
          }
        }
      }
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 600px) and (-webkit-min-device-pixel-ratio: 2) {
    nav {
      padding: 0 0rem;
      .logo {
        width: 4rem;
        margin: 6rem 0 0 0;
        mix-blend-mode: multiply;
      }
    }
    .sec1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0.5rem 0;
      .ptop {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 300;
        margin-bottom: 0rem;
        a {
          margin-left: 0.6rem;
          cursor: pointer;
          color: black;
          &:hover {
            color: #b40303;
          }
        }
        .dot {
          font-size: 2rem;
        }
      }
      h1 {
        font-size: 2rem;
        font-weight: 400;
      }
    }
    .mapSection {
      position: relative;
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      padding: 0rem;
      z-index: 90;
      margin-bottom: 1rem;
      //in leaflet it is important to set this class below a 100% even though there is no visible class in the code. It is invisible.

      .MapContainer {
        display: none;
      }
      .addressesContainer {
        border-left: 2rem solid #9e9c9c8d;
        width: 100%;
        height: 100%;
        background-color: #e7e7e7;
        overflow: scroll;
        .topMessage {
          padding: 0.5rem 1rem 1.5rem 1rem;
          h4 {
            font-size: 1.5rem;
          }
          .message {
            font-size: 1.2rem;
            margin-top: 0.5rem;
          }
          span {
            color: #cf0303;
            font-size: 1.4rem;
            font-weight: 600;
          }
        }
        .mapAddresses {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          .locationsContainer {
            position: relative;
            border-radius: 1rem;
            margin: 0.4rem;
            width: 95%;
            height: 11.5rem;
            margin-bottom: 0.5rem;
            background-color: white;
            font-size: 1.2rem;
            padding: 0.8rem;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            transition: ease 0.3s;
            cursor: pointer;
            &:hover {
              transform: scale(1.05);
            }
            .localName {
              font-size: 1.4rem;
              font-weight: 600;
              margin-bottom: 0.3rem;
            }
            .address {
              font-size: 1.1rem;
              margin-bottom: 0.3rem;
            }
            .tel {
              font-size: 1.1rem;
              font-weight: 500;
              margin-bottom: 0.3rem;
            }
            .clickOnTheMAp {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              background-color: #f5c103a9;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8rem;
              font-weight: 600;
              color: #b40303;
              border-radius: 1rem;
            }
          }
        }
      }
    }
  }
`;
export default StoresLocation;
