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
  display: flex;
  flex-direction: column;
  p,
  span {
    color: var(--moreGray);
  }
`;
