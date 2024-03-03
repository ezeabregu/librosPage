import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroStyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  padding-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeroStyledText = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  h1 {
    color: #6d6e70;
    font-size: 5rem;
  }
  h2 {
    color: #6d6e70;
    font-size: 2.5rem;
  }
  h5 {
    color: black;
    margin-top: 50px;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const HeroStyledImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  img {
    width: 60%;
    height: 50%;
  }
`;

export const LinkButton = styled(Link)`
  color: var(--textGray);
  background-color: var(--rojo);
  font-weight: 700;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
