import React from "react";
import { InicioStyledContainer } from "./inicioStyles";
import Hero from "../../components/Hero/Hero";
import Destacados from "../../components/Destacados/Destacados";

const Inicio = () => {
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
