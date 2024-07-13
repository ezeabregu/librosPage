import React from "react";
import { ContainerVerifyStyled } from "./verifyEmailStyles";
import { LinkButton } from "../../components/Hero/heroStyles";
import { InputStyled } from "../../components/Formulario/formularioStyles";
import { useSelector, useDispatch } from "react-redux";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { MdVerified } from "react-icons/md";
import { Formik, ErrorMessage, Field } from "formik";
import { verifyValues } from "../../formik/initialValues";
import { validationVerify } from "../../formik/validationSchema";
import { setCurrentUser } from "../../redux/user/userSlice";
import { verifyUser } from "../../axios/axiosUser";
import { ErrorStyled } from "../../components/Formulario/formularioStyles";

const VerifyEmail = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={verifyValues}
        validationSchema={validationVerify}
        onSubmit={async (values, actions) => {
          const user = await verifyUser(currentUser.email, values.code);
          if (user) {
            dispatch(
              setCurrentUser({
                ...user.usuario,
                token: user.token,
                verified: true,
              })
            );
          }
          actions.resetForm();
        }}
      >
        <ContainerVerifyStyled>
          <label>Ingrese el código enviado a su casilla de correo:</label>
          <Field name="code" type="text" id="code" as={InputStyled}></Field>
          <ErrorMessage name="code" component={ErrorStyled} />
          <ButtonForm>
            Verificar
            <MdVerified />
          </ButtonForm>
          {currentUser.verified === true ? (
            <h2>¡Email verificado correctamente!</h2>
          ) : null}
          <LinkButton to="/login">Atrás</LinkButton>
        </ContainerVerifyStyled>
      </Formik>
    </>
  );
};

export default VerifyEmail;
