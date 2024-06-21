import React from "react";
import { SignUpContainer } from "./signUpStyles";
import { Formik, Field, ErrorMessage } from "formik";
import { signUpValues } from "../../formik/initialValues";
import { validationSignUp } from "../../formik/validation";
import { InputStyled } from "../../components/Formulario/formularioStyles";
import { ErrorStyled } from "../../components/Formulario/formularioStyles";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { LinkButton } from "../../components/Hero/heroStyles";

const SignUp = () => {
  return (
    <>
      <Formik
        initialValues={signUpValues}
        validationSchema={validationSignUp}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <SignUpContainer>
          <h2>PAGE</h2>
          <label>Regístrate para regalarte ese libro que tanto deseas.</label>
          <Field
            name="name"
            type="text"
            id="name"
            as={InputStyled}
            placeholder="Nombre completo"
          ></Field>
          <ErrorMessage name="name" component={ErrorStyled} />
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
          <p>
            Al registrarte, aceptas nuestras Condiciones, la Política de
            privacidad y la Política de cookies.
          </p>
          <ButtonForm>Registrate</ButtonForm>
          <h3>¿Tienes una cuenta?</h3>
          <LinkButton to="/login">Inicia sesión</LinkButton>
        </SignUpContainer>
      </Formik>
    </>
  );
};

export default SignUp;
