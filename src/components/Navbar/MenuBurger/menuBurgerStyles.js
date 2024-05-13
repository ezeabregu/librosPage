import styled from "styled-components";

export const LinkContainerStyled = styled.div`
  display: none;
  @media (max-width: 800px) {
    position: fixed;
    top: 60px;
    left: 0;
    background-color: var(--rojo);
    color: black;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    width: 100%;
    height: calc(100% - 60px);
    font-size: 2rem;
    font-weight: 700;
    padding: 2rem;
  }
`;
