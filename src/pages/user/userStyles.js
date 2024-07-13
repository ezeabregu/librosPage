import styled from "styled-components";

export const UserContainerStyled = styled.div`
  margin-top: 40px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 800px) {
    margin-top: 13rem;
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
  width: 80vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const CheckOutUserStyled = styled.div`
  width: 600px;
  height: 300px;
  border: 1px solid var(--moreGray);
  border-radius: 5px;
  color: var(--moreGray);
  margin: 1.5rem;
  @media (max-width: 800px) {
    padding: 1rem;
    margin: 1rem;
    width: 95%;
  }
`;
