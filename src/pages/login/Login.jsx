import React from "react";
import { LoginContainer } from "./loginStyles";
import { Formik, Field, ErrorMessage } from "formik";
import { loginValues } from "../../formik/initialValues";
import { validationLogin } from "../../formik/validation";
import { InputStyled } from "../../components/Formulario/formularioStyles";
import { ErrorStyled } from "../../components/Formulario/formularioStyles";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { LinkButton } from "../../components/Hero/heroStyles";

const Login = () => {
  return (
    <>
      <Formik
        initialValues={loginValues}
        validationSchema={validationLogin}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <LoginContainer>
          <h2>PAGE</h2>
          <label>¡El libro que buscás, esta acá!</label>
          <Field
            name="email"
            type="email"
            id="email"
            as={InputStyled}
            placeholder="Correo electrónico"
          ></Field>
          <ErrorMessage name="email" component={ErrorStyled} />
          <Field
            name="password"
            type="password"
            id="password"
            as={InputStyled}
            placeholder="Contraseña"
          ></Field>
          <ErrorMessage name="password" component={ErrorStyled} />
          <ButtonForm>Inicia sesión</ButtonForm>
          <h3>¿No tienes una cuenta?</h3>
          <LinkButton to="/register">Regístrate</LinkButton>
        </LoginContainer>
      </Formik>
    </>
  );
};

export default Login;
