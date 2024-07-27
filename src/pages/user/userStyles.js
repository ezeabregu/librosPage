import { Form } from "formik";
import styled from "styled-components";

export const UserContainerStyled = styled(Form)`
  margin-top: 5rem;
  padding: 5rem 1rem;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 800px) {
    margin-top: 100px;
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
  height: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    height: auto;
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

export const ContainerTotalCheckout = styled.div`
  height: auto;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  h5,
  h3 {
    color: #252525;
  }
  @media (max-height: 800px) {
    width: 100%;
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

export const TitleCheckOut = styled.label`
  color: var(--black);
  font-size: 1rem;
`;

export const Loading = styled.div`
  margin: 10px 0;
  background-color: var(--rojo);
  font-weight: 600;
  font-size: 16px;
  width: 155px;
  min-height: 35px;
  border-radius: 5px;
  text-align: center;
  span {
    color: var(--WalterWhite);
    animation: loading 2s infinite;
    font-size: 25px;
  }
  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.5s;
  }

  span:nth-child(3) {
    animation-delay: 1s;
  }
  @keyframes loading {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
    }
    40%,
    60% {
      opacity: 1;
    }
  }
`;
