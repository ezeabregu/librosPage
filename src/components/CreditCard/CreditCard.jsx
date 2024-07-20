import React from "react";
import {
  ContainerCreditCardStyled,
  cardNumberStyled,
  LabelContainerStyled,
  ContainerDataCard,
  ContainerDataCardTotal,
  cardSecutiryNumberStyled,
  ContainerDataCardNumber,
  ContainerCardCompany,
} from "./creditCardStyles";
import { ErrorMessage, Field, Formik } from "formik";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { ErrorStyled } from "../../components/Formulario/formularioStyles";
import { cardValues } from "../../formik/initialValues";
import { validationCard } from "../../formik/validationSchema";

const CreditCard = () => {
  return (
    <Formik
      initialValues={cardValues}
      validationSchema={validationCard}
      onSubmit={async (values, actions) => {
        console.log(values.numberCard, values.codeCard, values.expirationCard);
        actions.resetForm();
      }}
    >
      <ContainerCreditCardStyled>
        <ContainerDataCardNumber>
          <LabelContainerStyled>Número de tarjeta</LabelContainerStyled>
          <ContainerCardCompany>
            <Field
              name="numberCard"
              type="text"
              id="numberCard"
              placeholder="1234 1234 1234 1234"
              as={cardNumberStyled}
            ></Field>
            <ContainerCardCompany>
              <FaCcVisa size={20} />
              <FaCcMastercard size={20} />
              <SiAmericanexpress size={16} />
            </ContainerCardCompany>
          </ContainerCardCompany>
        </ContainerDataCardNumber>
        <ErrorMessage name="numberCard" component={ErrorStyled}></ErrorMessage>
        <ContainerDataCardTotal>
          <ContainerDataCard>
            <LabelContainerStyled>Vencimiento</LabelContainerStyled>
            <Field
              name="expirationCard"
              type="month"
              min="2024-01"
              id="expirationCard"
              placeholder="MM/AA"
              as={cardNumberStyled}
            ></Field>
            <ErrorMessage
              name="expirationCard"
              component={ErrorStyled}
            ></ErrorMessage>
          </ContainerDataCard>
          <ContainerDataCard>
            <LabelContainerStyled>Código de seguridad</LabelContainerStyled>
            <Field
              name="codeCard"
              type="number"
              id="codeCard"
              placeholder="123"
              as={cardSecutiryNumberStyled}
            ></Field>
            <ErrorMessage
              name="codeCard"
              component={ErrorStyled}
            ></ErrorMessage>
          </ContainerDataCard>
        </ContainerDataCardTotal>
        <ContainerDataCardTotal>
          <LabelContainerStyled>Tipo</LabelContainerStyled>
          <Field
            name="type"
            type="datalist"
            id="type"
            as={cardSecutiryNumberStyled}
          ></Field>
          <LabelContainerStyled>Número</LabelContainerStyled>
          <Field
            name="dni"
            type="number"
            id="dni"
            placeholder="12 123 456"
            as={cardSecutiryNumberStyled}
          ></Field>
          <ErrorMessage name="dni" component={ErrorStyled}></ErrorMessage>
        </ContainerDataCardTotal>
      </ContainerCreditCardStyled>
    </Formik>
  );
};

export default CreditCard;
