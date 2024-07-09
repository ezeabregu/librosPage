import styled from "styled-components";

export const UserContainerStyled = styled.div`
  //margin-top: 90px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
