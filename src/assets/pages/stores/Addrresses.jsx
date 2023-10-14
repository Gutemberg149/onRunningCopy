import React from "react";

const Addrresses = () => {
  return (
    <Wrapper>
      <div className="addressesContainer">
        <p className="locationsContainer" onClick={() => setIndex(0)}>
          Location1
        </p>
        <p className="locationsContainer" onClick={() => setIndex(1)}>
          Location2
        </p>
        <p className="locationsContainer" onClick={() => setIndex(2)}>
          Location3
        </p>
        <p className="locationsContainer" onClick={() => setIndex(3)}>
          Location4
        </p>
        <p className="locationsContainer" onClick={() => setIndex(4)}>
          Location5
        </p>
        <p className="locationsContainer" onClick={() => setIndex(5)}>
          Location6
        </p>
        <p className="locationsContainer" onClick={() => setIndex(5)}>
          Location6
        </p>
        <p className="locationsContainer" onClick={() => setIndex(5)}>
          Location6
        </p>
        <p className="locationsContainer" onClick={() => setIndex(5)}>
          Location6
        </p>
        <p className="locationsContainer" onClick={() => setIndex(5)}>
          Location6
        </p>
        <p className="locationsContainer" onClick={() => setIndex(5)}>
          Location6
        </p>
      </div>
    </Wrapper>
  );
};

export default Addrresses;
