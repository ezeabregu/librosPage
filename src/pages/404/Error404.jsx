import React from "react";
import { Error404StyledContainer, Error404Text } from "./Error404Styles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { NavLinkStyled } from "../../components/Navbar/navbarStyles";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      <Error404StyledContainer>
        <Error404Text>Hemos perdido esta página!</Error404Text>
        <NavLinkStyled
          onClick={() => {
            navigate("/");
          }}
        >
          <ButtonDefect>Ir al inicio</ButtonDefect>
        </NavLinkStyled>
      </Error404StyledContainer>
    </>
  );
};

export default Error404;
