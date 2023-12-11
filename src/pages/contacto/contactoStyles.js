import { styled } from "styled-components";

export const ContactoStyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContactoFormulario = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: auto;
  color: var(--moreGray);
  h2 {
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--moreGray);
  }
`;

export const ContactoDatosContenedor = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: auto;
  h2,
  li {
    margin-bottom: 1rem;
    font-weight: 700;
    color: var(--moreGray);
  }
`;
