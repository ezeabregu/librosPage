import React from "react";
import {
  UserContainerStyled,
  NameUserStyled,
  ContentUserAndVerify,
  VerifyUserStyled,
} from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { InputFormStyled } from "../../components/ProductCards/productCardsStyles";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <UserContainerStyled>
      <ContentUserAndVerify>
        <NameUserStyled>{`Hola ${currentUser?.name}!!`}</NameUserStyled>
        <VerifyUserStyled>
          <h3>Verificar cuenta?</h3>
          <InputFormStyled minLength={5}></InputFormStyled>
        </VerifyUserStyled>
      </ContentUserAndVerify>

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
