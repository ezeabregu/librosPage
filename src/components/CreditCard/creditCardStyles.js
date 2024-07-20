import styled from "styled-components";

export const ContainerCreditCardStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LabelContainerStyled = styled.label`
  color: var(--moreGray);
  font-weight: 700;
`;

export const cardNumberStyled = styled.input`
  border-radius: 5px;
  border: 0.5px solid black;
  height: auto;
  padding: 10px;
`;

export const cardSecutiryNumberStyled = styled.input`
  border-radius: 5px;
  border: 0.5px solid black;
  height: auto;
  padding: 10px;
  width: 100px;
`;

export const ContainerDataCardTotal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ContainerDataCard = styled.div`
  display: flex;
  flex-direction: column;
`;
