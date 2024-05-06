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
        whileTap={{ scale: 0.9, backgroundColor: "#008000" }}
        transition={{ type: "spring", stiffness: 500 }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonStyled>
    </>
  );
};

export default Button;
