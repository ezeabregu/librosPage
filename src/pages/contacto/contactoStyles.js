import styled from "styled-components";

export const ContactoStyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    height: auto;
    padding: 0.5rem;
    margin-top: 5rem;
  }
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
  @media (max-width: 800px) {
    width: 100%;
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
  @media (max-width: 800px) {
    width: 100%;
  }
`;
