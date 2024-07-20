import React from "react";
import {
  ContainerCreditCardStyled,
  cardNumberStyled,
  LabelContainerStyled,
  ContainerDataCard,
  ContainerDataCardTotal,
  cardSecutiryNumberStyled,
} from "./creditCardStyles";
import { ErrorMessage, Field, Formik } from "formik";

const CreditCard = () => {
  return (
    <Formik>
      <ContainerCreditCardStyled>
        <LabelContainerStyled>Número de tarjeta</LabelContainerStyled>
        <Field
          name="numberCard"
          type="text"
          id="numberCard"
          placeholder="1234 1234 1234 1234"
          as={cardNumberStyled}
        ></Field>
        <ErrorMessage name="numberCard"></ErrorMessage>
        <ContainerDataCardTotal>
          <ContainerDataCard>
            <LabelContainerStyled>Vencimiento</LabelContainerStyled>
            <Field
              name="expiration"
              type="date"
              id="expiration"
              placeholder="MM/AA"
              as={cardNumberStyled}
            ></Field>
            <ErrorMessage name="expiration"></ErrorMessage>
          </ContainerDataCard>
          <ContainerDataCard>
            <LabelContainerStyled>Código de seguridad</LabelContainerStyled>
            <Field
              name="securityNumber"
              type="number"
              id="securityNumber"
              placeholder="123"
              as={cardSecutiryNumberStyled}
            ></Field>
            <ErrorMessage name="securityNumber"></ErrorMessage>
          </ContainerDataCard>
        </ContainerDataCardTotal>
      </ContainerCreditCardStyled>
    </Formik>
  );
};

export default CreditCard;
