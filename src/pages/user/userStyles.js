import styled from "styled-components";

export const UserContainerStyled = styled.div`
  margin-top: 5rem;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 800px) {
    margin-top: 8rem;
    height: auto;
  }
`;

export const ContentUserAndVerify = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const NameUserStyled = styled.h2`
  color: #252525;
  font-size: 2rem;
`;

export const VerifyTextStyled = styled.h2`
  color: #252525;
  font-size: 0.8rem;
`;

export const VerifyUserStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const ContainerOrdersStyled = styled.div`
  margin: 2rem;
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
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

export const AccountVerifiedStyled = styled.label`
  color: var(--success);
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;

export const ContainerWrapperCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 50%;
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
    width: 80%;
  }
`;

export const ContainerTotalCheckout = styled.div`
  height: 150px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  h5,
  h3 {
    color: #252525;
  }
  label {
    color: #252525;
    font-size: 0.6rem;
  }
`;

export const ContainerSubtotalStyledCheckout = styled.div`
  width: 100%;
  font-size: 0.8rem;
  margin: 0.5rem 0;
  text-align: left;
  h3 {
    color: var(--moreGray);
  }
`;
