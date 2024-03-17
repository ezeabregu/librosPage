import React from "react";
import { ButtonStyled } from "./buttonStyles";

const Button = ({
  children,
  onClick = (e) => e.preventDefault(),
  disabled,
}) => {
  return (
    <>
      <ButtonStyled
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
