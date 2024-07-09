import React, { useState } from "react";
import { ContainerVerifyStyled } from "./verifyEmailStyles";
import { LinkButton } from "../../components/Hero/heroStyles";
import { InputFormStyled } from "../../components/ProductCards/productCardsStyles";

const VerifyEmail = () => {
  const [verifyCode, setVerifyCode] = useState();
  const codeVerified = (e) => {
    setVerifyCode(e.target.value);
  };
  return (
    <ContainerVerifyStyled>
      <label>Ingrese el código enviado a su casilla de correo:</label>
      <InputFormStyled
        minLength={6}
        onChange={codeVerified}
        value={verifyCode}
      ></InputFormStyled>
      <h2>Email verificado correctamente</h2>
      <LinkButton to="/login">Atrás</LinkButton>
    </ContainerVerifyStyled>
  );
};

export default VerifyEmail;
