import React from "react";
import { UserContainerStyled, NameUserStyled } from "./userStyles";
import ButtonDefect from "../../components/ButtonDefect/ButtonDefect";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../redux/user/userSlice";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <UserContainerStyled>
      <NameUserStyled>{`Hola ${currentUser?.name}!!`}</NameUserStyled>
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
