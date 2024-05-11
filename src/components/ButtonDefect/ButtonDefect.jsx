import React from "react";
import { ButtonStyled } from "./buttonDefectStyles";

const ButtonDefect = ({
  children,
  onClick = (e) => e.preventDefault(),
  disabled,
}) => {
  // Boton para comprar libros dentro de las tarjetas
  return (
    <>
      <ButtonStyled
        // whileTap={{ opacity: 0.5 }}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </ButtonStyled>
    </>
  );
};

export default ButtonDefect;
