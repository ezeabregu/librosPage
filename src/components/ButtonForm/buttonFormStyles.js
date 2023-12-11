import { styled } from "styled-components";

export const ButtonFormStyled = styled.button`
  width: 100%;
  margin: 10px 0;
  background-color: var(--rojo);
  color: var(--textGray);
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
