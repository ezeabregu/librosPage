import { Form } from "formik";
import styled from "styled-components";

export const FormularioContenedorStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  row-gap: 3px;
  position: relative;
  h3 {
    font-size: 1rem;
    color: var(--moreGray);
  }
  textarea {
    border: 1px solid;
    border-color: ${({ error }) => (error ? "error" : "var(--moreGray)")};
    border-radius: 5px;
    padding: 10px;
    width: 250px;
    background: transparent;
    color: var(--moreGray);
    outline: none;
  }

  @media (max-width: 800px) {
    padding: 0px 50px;
    width: 100%;
    textarea {
      width: 100%;
      height: 6rem;
    }
  }
`;

export const InputStyled = styled.input`
  border: 1px solid;
  border-color: ${({ error }) => (error ? "error" : "var(--moreGray)")};
  border-radius: 5px;
  padding: 10px;
  width: 250px;
  background: transparent;
  color: var(--moreGray);
  outline: none;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ErrorStyled = styled.span`
  font-size: 0.6rem;
  color: red;
`;

export const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  width: auto;
  height: auto;
  padding: 20px 20px;
  border: none;
  border-radius: 15px;
  z-index: 999;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  background-color: var(--rojo);
`;
