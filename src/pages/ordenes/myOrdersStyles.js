import styled from "styled-components";

export const ContainerMyOrders = styled.div`
  width: 100vw;
  max-height: 1300px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
