import React from "react";
import { ButtonFormStyled } from "./buttonFormStyles";

const ButtonForm = ({ children }) => {
  return (
    <>
      <ButtonFormStyled type="submit">{children}</ButtonFormStyled>
    </>
  );
};

export default ButtonForm;
