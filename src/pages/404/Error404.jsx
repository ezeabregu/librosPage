import React from "react";
import { Error404StyledContainer, Error404Text } from "./Error404Styles";
import Button from "../../components/Button/Button";
import { NavLinkStyled } from "../../components/Navbar/navbarStyles";

const Error404 = () => {
  return (
    <>
      <Error404StyledContainer>
        <Error404Text>Hemos perdido esta página!</Error404Text>
        <NavLinkStyled to="/">
          <Button>Ir al inicio</Button>
        </NavLinkStyled>
      </Error404StyledContainer>
    </>
  );
};

export default Error404;
