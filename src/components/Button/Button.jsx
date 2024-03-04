import React from "react";
import { ButtonStyled } from "./buttonStyles";

const Button = ({ children, onClick = (e) => e.preventDefault() }) => {
  return (
    <>
      <ButtonStyled
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
      >
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
