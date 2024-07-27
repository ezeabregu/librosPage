import styled from "styled-components";

export const ContainerWrapperCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  max-height: 400px;
  padding: 1rem;
  overflow: scroll;
  &::-webkit-scrollbar {
    background: transparent;
  }
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 800px) {
    height: auto;
    width: 100%;
  }
`;

export const CheckOutUserStyled = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--moreGray);
  margin: 1.5rem;
  @media (max-width: 800px) {
    padding: 1rem;
    margin: 1rem;
    width: 95%;
  }
`;

export const ContainerTotalCheckout = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  p {
    color: var(--black);
    font-size: 1.2rem;
  }
  span {
    color: var(--moreGray);
  }
`;

export const Separador = styled.div`
  width: 100%;
  height: 10px;
  border-bottom: solid 1px var(--moreGray);
`;

export const TituloSubtotal = styled.span`
  font-size: 0.7rem;
  color: aliceblue;
`;
