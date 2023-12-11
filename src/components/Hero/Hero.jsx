import React from "react";
import heroImage from "../../img/heroImage.png";
import {
  HeroStyledContainer,
  HeroStyledText,
  HeroStyledImage,
  LinkButton,
} from "./heroStyles";

const Hero = () => {
  return (
    <>
      <HeroStyledContainer>
        <HeroStyledText>
          <h1>PAGE</h1>
          <h2>¡El libro que buscás, esta acá!</h2>
          <h5>
            ¿Tenés curiosidad de como creamos PAGE? Hacé click en el botón y
            averigualo
          </h5>
          <LinkButton to="/acerca">SOBRE NOSOTROS</LinkButton>
        </HeroStyledText>
        <HeroStyledImage>
          <img src={heroImage} alt="heroImage" />
        </HeroStyledImage>
      </HeroStyledContainer>
    </>
  );
};

export default Hero;
