import React, { useState } from "react";
import { motion } from "framer-motion";
import { ButtonStyled } from "./buttonStyles";
import { GrBasket } from "react-icons/gr";
import { BsCartCheck } from "react-icons/bs";

const Button = ({ onClick = (e) => e.preventDefault() }) => {
  // Boton para comprar libros dentro de las tarjetas

  const [buttonText, setButtonText] = useState("Comprar ");

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    setButtonText("Agregando... ");

    setTimeout(() => {
      setButtonText("Listo! ");
    }, 1500);

    setTimeout(() => {
      setButtonText("Comprar ");
      setIsActive(false);
    }, 3000);
  };

  return (
    <>
      <motion.div>
        <ButtonStyled
          onClick={() => {
            onClick();
            handleClick();
          }}
        >
          {buttonText}
          {isActive ? <BsCartCheck /> : <GrBasket />}
        </ButtonStyled>
      </motion.div>
    </>
  );
};

export default Button;
