import React from "react";
import {
  FormularioContenedorStyled,
  InputStyled,
  ErrorStyled,
} from "./formularioStyles";
import ButtonForm from "../ButtonForm/ButtonForm";
import { ErrorMessage, Field, Formik } from "formik";
import { initialValues } from "../../formik/initialValues";
import { validation } from "../../formik/validationSchema";

const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
          alert("Mensaje enviado correctamente");
        }}
      >
        <FormularioContenedorStyled>
          <h3>Nombre:</h3>
          <Field name="nombre" type="text" id="nombre" as={InputStyled}></Field>
          <ErrorMessage name="nombre" component={ErrorStyled} />
          <h3>Apellido:</h3>
          <Field
            name="apellido"
            type="text"
            id="apellido"
            as={InputStyled}
          ></Field>
          <ErrorMessage name="apellido" component={ErrorStyled} />
          <h3>Correo electronico:</h3>
          <Field name="email" type="email" id="email" as={InputStyled}></Field>
          <ErrorMessage name="email" component={ErrorStyled} />
          <h3>Asunto:</h3>
          <Field
            name="asunto"
            type="text"
            id="asunto"
            component="textarea"
            col={50}
          ></Field>
          <ErrorMessage name="asunto" component={ErrorStyled} />
          <ButtonForm>ENVIAR</ButtonForm>
        </FormularioContenedorStyled>
      </Formik>
    </>
  );
};

export default Formulario;
