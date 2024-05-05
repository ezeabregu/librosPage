import React, { useEffect } from "react";
import { InicioStyledContainer } from "./inicioStyles";
import Hero from "../../components/Hero/Hero";
import Destacados from "../../components/Destacados/Destacados";

const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <InicioStyledContainer>
        <Hero />
        <Destacados />
      </InicioStyledContainer>
    </>
  );
};

export default Inicio;
