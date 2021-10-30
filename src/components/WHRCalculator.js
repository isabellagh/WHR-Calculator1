import React from "react";
import { WHRContainer, WHRHeader, WHRWrapper, } from "./WHRElements";
import Gender from "./Gender";

function WHRCalculator() {

  return (
    <>
    <WHRContainer>
      <WHRHeader>WHR Calculator</WHRHeader>
      <WHRWrapper>
      <h3>Today's date: </h3>
      <Gender />
      <br />
      <imput>Waist circ</imput>
      <imput>Hip circ</imput>
      <br />
      <button>Calculate</button>
      <br />
      <p>Here is your result:</p>
      </WHRWrapper>
    </WHRContainer>
    </>
  );
};

export default WHRCalculator;
