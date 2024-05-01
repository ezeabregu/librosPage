import styled from "styled-components";

export const ButtonStyled = styled.button`
  position: fixed;
  left: 50%;
  bottom: 40px;
  height: 50px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  * {
    color: var(--rojo);
  }
  border: none;
  background-color: transparent;

  *:hover {
    color: black;
  }
`;
