import styled from "styled-components";
import { Form } from "formik";

export const ContainerVerifyStyled = styled(Form)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  label {
    color: #252525;
  }
  h2 {
    color: #279b37;
  }
  @media (max-width: 800px) {
    padding: 2rem;
  }
`;
