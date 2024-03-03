import styled from "styled-components";

export const ProductCardsStyledContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  margin-top: 90px;
  padding: 15px 0;
  h2 {
    color: var(--moreGray);
    text-align: left;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-row-gap: 1rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;
`;

export const ProductStyled = styled.div`
  background-color: white;
  width: 200px;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  img {
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
    transition: all 1s ease;
  }
  img:hover {
    transform: scale(1.1);
  }
  h2 {
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
  }
  p {
    color: black;
    padding: 8px 0;
    text-align: start;
    font-weight: 700;
    font-size: 1rem;
  }
`;
