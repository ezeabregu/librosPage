import React from "react";
import { InicioStyledContainer } from "./inicioStyles";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Destacados from "../../components/Destacados/Destacados";
import Footer from "../../components/Footer/Footer";

const Inicio = () => {
  return (
    <>
      <InicioStyledContainer>
        <Navbar />
        <Hero />
        <Destacados />
      </InicioStyledContainer>
      <Footer />
    </>
  );
};

export default Inicio;
