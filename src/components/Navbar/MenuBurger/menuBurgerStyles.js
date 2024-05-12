import styled from "styled-components";

export const LinkContainerStyled = styled.div`
  display: none;
  @media (max-width: 800px) {
    position: absolute;
    top: 60px;
    left: 0;
    background-color: var(--rojo);
    color: black;
    z-index: 99;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    width: 100%;
    height: calc(100% - 60px);
    font-size: 2rem;
    padding: 2rem;
  }
`;
