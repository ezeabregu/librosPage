import React from "react";
import { IncrementarStyled } from "./incrementarStyled";

const Incrementar = ({
  children,
  bgColor,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <IncrementarStyled
      whileTap={{ scale: 0.95 }}
      bgColor={bgColor}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </IncrementarStyled>
  );
};

export default Incrementar;
