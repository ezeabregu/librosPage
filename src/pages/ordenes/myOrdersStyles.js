import styled from "styled-components";

export const ContainerMyOrders = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    min-height: 100vh;
  }
`;

export const TituloMyOrders = styled.h2`
  color: var(--black);
  font-size: 2rem;
`;

export const ContainerOrders = styled.div`
  margin: 2rem;
  width: 80vw;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--moreGray);
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
