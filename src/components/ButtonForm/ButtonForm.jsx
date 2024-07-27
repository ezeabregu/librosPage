import React from "react";
import { ButtonFormStyled } from "./buttonFormStyles";

const ButtonForm = ({ children, disabled }) => {
  return (
    <>
      <ButtonFormStyled type="submit" disabled={disabled}>
        {children}
      </ButtonFormStyled>
    </>
  );
};

export default ButtonForm;
