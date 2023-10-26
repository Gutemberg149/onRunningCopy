import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";
import { listProduct } from "../../utils/APIArray";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchDropDown = () => {
  const [handleFAQS, setHandleFAQs] = useState(-100); //move carrossel FAQs

  const [handleSearch, setHandleSearch] = useState(""); //query
  const [productQuery, setproductQuery] = useState(""); //APIquery

  const [sugestedOption, setSugestedOption] = useState(""); //sugestions
  const [data, setData] = useState([]);

  const [toggleAllProds, setToggleAllProds] = useState(true);

  //----------Move carrossel------------------
  const handleFAQsFunctionLeft = () => {
    if (handleFAQS === 0) {
      return;
    } else {
      setHandleFAQs(handleFAQS + 20);
    }
  };
  const handleFAQsFunctionRight = () => {
    if (handleFAQS == -100) {
      return;
    } else {
      setHandleFAQs(handleFAQS - 20);
    }
  };
  //-------------Handle search----------------

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      setproductQuery(handleSearch);
    }, 600);
    return () => clearTimeout(timeOutID);
  }, [handleSearch]);

  const handleSearchFunction = (e) => {
    setHandleSearch(e.target.value);
  };

  // -------------------------------------------

  const sugestedFunction = (e) => {
    const text = e.target.textContent;
    setSugestedOption(text);
  };

  useEffect(() => {
    const sugested = listProduct.filter((item) => {
      const sugestedLowerCase = sugestedOption
        .toLocaleLowerCase()
        .replace(/\s/g, "");
      return (
        item.title.toLocaleLowerCase().replace(/\s/g, "") === sugestedLowerCase
      );
    });
    setData(sugested);
  }, [sugestedOption]);

  return (
    <Wrapper>
      <div className="bodyContainer">
        <section className="search">
          <input
            type="text"
            onChange={handleSearchFunction}
            value={handleSearch}
            placeholder={"Search for products"}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Search for products")}
          />
          {toggleAllProds ? (
            <BsSearch className="searchIcon" />
          ) : (
            <AiOutlineCloseCircle
              className="searchIcon"
              style={{ fontSize: "1.6rem" }}
              onClick={() => setToggleAllProds(true)}
            />
          )}
        </section>
        {toggleAllProds && (
          <section className="suggestedSearch">
            <p className="pSugested">Suggested Search</p>
            <div
              className="innerSugested"
              onClick={() => setToggleAllProds(false)}
            >
              <div className="sugested" onClick={(e) => sugestedFunction(e)}>
                <p>Cloud Rock</p>
              </div>
              <div className="sugested" onClick={(e) => sugestedFunction(e)}>
                <p>Cloudswift</p>
              </div>
              <div className="sugested" onClick={(e) => sugestedFunction(e)}>
                <p>Cloud Vista</p>
              </div>
              <div className="sugested" onClick={(e) => sugestedFunction(e)}>
                <p>The Roger</p>
              </div>
              <div className="sugested" onClick={(e) => sugestedFunction(e)}>
                <p>Cloudx</p>
              </div>
              <div className="sugested" onClick={(e) => sugestedFunction(e)}>
                <p>Cloud Boom</p>
              </div>
            </div>
          </section>
        )}

        <section className="products">
          <p className="pProd">Products</p>
          {toggleAllProds ? (
            <div className="prodsContainer">
              {listProduct
                .filter((item) => {
                  const prodTitle = item.title.toLowerCase().replace(/\s/g, "");
                  const productQueryFinal = productQuery
                    .toLowerCase()
                    .replace(/\s/g, "");

                  return prodTitle.includes(productQueryFinal);
                })
                .map((item) => {
                  return item.type ? (
                    ""
                  ) : (
                    <Link to={`/singleproduct/${item.id}`} key={item.id}>
                      <div className="prodContainer" key={item.id}>
                        <div className="upperPart">
                          <img src={item.img01} alt="" />
                        </div>
                        <div className="bottomPart">
                          <p className="name">{item.title}</p>
                          <p className="introduction">{item.introduction}</p>
                          <p className="colors">{item.colors} colors</p>
                          <p className="price">R$ {item.price},00</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : (
            data[0] && (
              <Link to={`/singleproduct/${data[0].id}`}>
                <div className="prodsContainer">
                  <div className="prodContainer" key={data[0].id}>
                    <div className="upperPart">
                      <img src={data[0].img01} alt="" />
                    </div>
                    <div className="bottomPart">
                      <p className="name">{data[0].title}</p>
                      <p className="introduction">{data[0].introduction}</p>
                      <p className="colors">{data[0].colors} colors</p>
                      <p className="price">R$ {data[0].price},00</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          )}
        </section>

        <section className="pFaqs">
          <p>FAQs</p>
        </section>

        <section className="FAQs">
          <div className="innerFaqs" style={{ left: `${handleFAQS}rem` }}>
            <div className="faqsContainer">
              <h5>What is an exchange?</h5>
              <p>
                A exchange is when you need a differentsize. We simply swap the
                shoes received for the shoe size you need
              </p>
            </div>
            <div className="faqsContainer">
              <h5>What is a recycle?</h5>
              <p>
                A recycle is when you are sending your Cyclon item back to us in
                exchange for a new one.
              </p>
            </div>
            <div className="faqsContainer">
              <h5>How we use your Personal Information</h5>
              <p>
                We use your Personal Information to offer you our products and
                provide you with and improve our services as well as for
                communication purposes.
              </p>
            </div>
            <div className="faqsContainer">
              <h5>What is an exchange?</h5>
              <p>
                We took inspiration from our fastest racing shoes and equipped
                the Cloudneo with an extreme rocker shape and lean silhouette.
                It fits true to size and can be compared to the fit of the
                Cloudflow.
              </p>
            </div>
            <div className="faqsContainer">
              <h5>How can I submit a warranty claim?</h5>
              <p>
                Simply go to our Warranty claim form, provide details and images
                of the issue, and we'll get back to you with the result. Please
                note that a claim can only be made for ... <br />
                <span>Read more</span>
              </p>
            </div>
            <div className="faqsContainer">
              <h5>How does the Cloudneo fit compared?</h5>
              <p>
                We took inspiration from our fastest racing shoes and equipped
                the Cloudneo with an extreme rocker shape and lean silhouette.
                It fits true to size and can be compared to the fit of the
                Cloudflow.
              </p>
            </div>
            <div className="faqsContainer">
              <h5>How I care for my runniing shoes?</h5>
              <p>
                If your shoes get dirty, we recommend brushing them off first to
                release any dirt. If washing your shoes is needed, it's best to
                wash them by hand using warm water. Washing your shoes as seldom
                as possible is recommended.
              </p>
            </div>
            <div className="faqsContainer">
              <h5>What is the returning policy?</h5>
              <p>
                All Cyclon™ products are returnable within 30 days of purchase
                or subscription. If you'd like to return your Cloudneo, simply
                log into your customer account, click on cancel plan, and return
                them to us in the Cyclon™ bag. Returns can only be processed for
                a complete refund if they're sent back within 30 days of
                purchase and if the shoes are in original condition. Read: No
                wear or tear.
              </p>
            </div>
          </div>

          <div className="btnsConatainer">
            <div
              className="btnContainer"
              onClick={() => handleFAQsFunctionLeft()}
            >
              <FiArrowLeft className="btnIcon" />
            </div>
            <div
              className="btnContainer"
              onClick={() => handleFAQsFunctionRight()}
            >
              <FiArrowRight className="btnIcon" />
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 2rem;

  .bodyContainer {
    width: 70rem;
    height: 55rem;
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    align-items: center;
    overflow-x: hidden;

    .search {
      width: 70rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      input {
        width: 100%;
        height: 4.5rem;
        border-radius: 10rem;
        background-color: #e3e2e2;
        border: none;
        outline: none !important;
        font-size: 1.5rem;
        padding-left: 2rem;
        &::placeholder {
          font-size: 1.2rem;
          font-weight: 400;
          color: #454444;
        }
      }
      .searchIcon {
        position: absolute;
        right: 2rem;
        font-size: 1.4rem;
        cursor: pointer;
      }
    }

    .suggestedSearch {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 2rem;
      width: 65rem;
      .pSugested {
        font-size: 1rem;
        margin-bottom: 1rem;
        margin-left: 3rem;
      }
      .innerSugested {
        width: 100%;
        height: 4rem;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3rem;
        margin-left: 2rem;
        .sugested {
          margin: 0.9rem;
          width: 10rem;
          padding: 0.8rem 1.6rem 0.8rem 1.6rem;
          margin-bottom: 1rem;
          height: 3.2;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b3b3b;
          background-color: #e7e6e6;
          border-radius: 3rem;
          cursor: pointer;
          &:hover {
            background-color: #cfcece;
          }
        }
      }
    }

    .products {
      width: 70rem;
      margin-top: 4.5rem;

      .pProd {
        width: 10rem;
        margin-left: 3rem;
        font-size: 1.2rem;
      }
      .prodsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        cursor: pointer;
        .prodContainer {
          width: 20rem;
          height: 35rem;
          margin: 2rem 1rem;
          display: grid;
          grid-template-rows: 1fr 2fr;
          .upperPart {
            width: 21rem;
            background-color: #e9e8e8;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 21rem;
            }
          }
          .bottomPart {
            background-color: #fcf6f2;
            width: 21rem;
            padding: 1rem;
            .name {
              font-size: 1.3rem;
              font-weight: 600;
              color: #535252;
              margin-bottom: 0.5rem;
            }
            .introduction,
            .price,
            .colors {
              font-size: 1.2rem;
              color: #4d4d4d;
              margin-bottom: 0.8rem;
            }
          }
        }
      }
    }

    .pFaqs {
      margin-top: 3rem;
      margin-left: 3.2rem;
    }
    .FAQs {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 23rem;
      margin-bottom: 2rem;

      .innerFaqs {
        display: flex;
        justify-content: space-between;
        position: absolute;
        transition: all 0.4s ease;
        .faqsContainer {
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          width: 19rem;
          height: 15rem;
          margin: 1rem;
          padding: 1rem;
          border-radius: 1rem;
          overflow-y: scroll;
          transition: all 0.3s ease;
          cursor: pointer;
          &:hover {
            background-color: #f4f3f3;
          }
          p {
            span {
              text-decoration: underline;
            }
          }
        }
      }

      .btnsConatainer {
        position: absolute;
        width: 13rem;
        bottom: 0rem;
        left: 3rem;
        display: flex;
        justify-content: space-between;

        .btnContainer {
          width: 5rem;
          height: 5rem;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          cursor: pointer;
          &:hover {
            background-color: #f4f3f3;
          }
          .btnIcon {
            font-size: 1.2rem;
          }
        }
      }
    }
  }

  @media only screen and (min-device-width: 375px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    padding: 0;
    width: 36rem;
    .bodyContainer {
      width: 36rem;
      display: flex;
      flex-direction: column;
      align-items: center;

      .search {
        width: 30rem;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        input {
          height: 3.8rem;
          &::placeholder {
          }
        }
        .searchIcon {
          font-size: 1rem;
          cursor: pointer;
        }
      }

      .suggestedSearch {
        /* align-items: center; */
        margin-top: 1rem;
        width: 29rem;
        height: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .pSugested {
          font-size: 1rem;
          margin-bottom: 0;
          margin-left: 3rem;
        }
        .innerSugested {
          width: 29rem;
          height: 10rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 0;
          margin-left: 0;
          .sugested {
            margin: 0.5rem;
            width: 7rem;
            height: 5.8;
            font-size: 0.9rem;
            padding: 0.5rem 0.6rem;
            margin-bottom: 0;

            cursor: pointer;
            &:hover {
            }
          }
        }
      }

      .products {
        width: 33rem;
        margin-top: 1.5rem;
        .pProd {
          margin-left: 2rem;
        }
        .prodsContainer {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 33rem;
          cursor: pointer;
          .prodContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 14rem;
            height: 22rem;
            margin: 2rem 1rem;
            display: grid;
            grid-template-rows: 1fr 2fr;
            .upperPart {
              width: 14rem;
              background-color: #e9e8e8;
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 11rem;
              }
            }
            .bottomPart {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 14rem;
              height: 12rem;
              padding: 0.5rem;
              .name {
                font-size: 1.1rem;
                font-weight: 600;
                color: #535252;
                margin-bottom: 0.5rem;
              }
              .introduction,
              .price,
              .colors {
                text-align: center;
                font-size: 1rem;
                color: #4d4d4d;
                margin-bottom: 0.8rem;
              }
            }
          }
        }
      }
      .pFaqs {
        display: none;
      }
      .FAQs {
        display: none;
      }
    }
  }
`;
export default SearchDropDown;
