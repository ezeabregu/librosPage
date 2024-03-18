import React from "react";
import { ContadorStyled } from "./Contador";

const Contador = ({ children }) => {
  return (
    <>
      <ContadorStyled>{children}</ContadorStyled>
    </>
  );
};

export default Contador;
