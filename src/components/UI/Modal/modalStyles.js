import styled from "styled-components";

export const ModalStyled = styled.div`
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--colorBlanco);
  background-color: green;
  position: fixed;
  bottom: 0;
  width: 100%;
  transition: all 0.5s ease-out;
  transform: translateY(200%);

  &:active {
    transform: translateY(0);
    transition: all 0.5s ease-in;
  }
`;
