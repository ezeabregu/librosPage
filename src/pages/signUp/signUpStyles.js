import styled from "styled-components";
import { Form } from "formik";

export const SignUpContainer = styled(Form)`
  margin: 80px auto;
  width: 250px;
  min-height: 430px;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h2 {
    color: #6d6e70;
    font-size: 5rem;
  }
  h3 {
    color: #131415;
  }
  label {
    color: var(--moreGray);
  }
  p {
    font-size: 0.7rem;
    color: var(--moreGray);
  }
  @media (width <= 800px) {
    width: 90%;
    margin: 80px auto;
  }
`;
