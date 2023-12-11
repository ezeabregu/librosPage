import React from "react";
import { ButtonStyled } from "./buttonStyles";

const Button = ({ children }) => {
  return (
    <>
      <ButtonStyled whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
