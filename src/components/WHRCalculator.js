import React from "react";
import { WHRContainer, WHRHeader, WHRWrapper } from "./WHRElements";
import Gender from "./Gender";
import Circ from "./Circ";

function WHRCalculator() {
  return (
    <>
      <WHRContainer>
        <WHRHeader>WHR Calculator</WHRHeader>
        <WHRWrapper>
          <h3>Today's date: </h3>
          <Gender />
          <Circ />
          <p>Here is your result:</p>
        </WHRWrapper>
      </WHRContainer>
    </>
  );
}

export default WHRCalculator;
