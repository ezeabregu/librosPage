import React, { useState } from "react";
import {
  UserContainerStyled,
  NameUserStyled,
  ContentUserAndVerify,
  VerifyUserStyled,
  VerifyTextStyled,
} from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";
import { InputFormStyled } from "../../components/ProductCards/productCardsStyles";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [verifyCode, setVerifyCode] = useState();
  const codeVerified = (e) => {
    setVerifyCode(e.target.value);
  };

  return (
    <UserContainerStyled>
      <ContentUserAndVerify>
        <NameUserStyled>{`Hola ${currentUser?.name}!!`}</NameUserStyled>
        <VerifyUserStyled>
          <VerifyTextStyled>Verificar cuenta?</VerifyTextStyled>
          <InputFormStyled
            minLength={5}
            onChange={codeVerified}
            value={verifyCode}
          ></InputFormStyled>
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
