import styled from "styled-components";
import { Link } from "react-router-dom";

export const DestacadosContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  padding: 15px 0;
  h2 {
    color: var(--moreGray);
    text-align: left;
  }
`;

export const LinkButton = styled(Link)`
  color: var(--textGray);
  background-color: var(--rojo);
  font-weight: 700;
  border: none;
  border-radius: 5px;
  padding: 10px 25px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
