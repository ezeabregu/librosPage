import React from "react";
import {
  UserContainerStyled,
  NameUserStyled,
  ContentUserAndVerify,
  VerifyUserStyled,
  CheckOutUserStyled,
  ContainerOrdersStyled,
} from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";

import { LinkButton } from "../../components/Hero/heroStyles";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <UserContainerStyled>
      <ContentUserAndVerify>
        <NameUserStyled>{`Hola ${currentUser?.name}!!`}</NameUserStyled>
        <VerifyUserStyled>
          <LinkButton to="/verify">¿Verificar cuenta?</LinkButton>
        </VerifyUserStyled>
      </ContentUserAndVerify>
      <ContainerOrdersStyled>
        <CheckOutUserStyled>Orden para checkout</CheckOutUserStyled>
        <CheckOutUserStyled>Ordenes historicos</CheckOutUserStyled>
      </ContainerOrdersStyled>
      <ButtonDefect
        onClick={() => {
          dispatch(setCurrentUser(null));
        }}
      >
        Cerrar sesión
      </ButtonDefect>
    </UserContainerStyled>
  );
};

export default User;
