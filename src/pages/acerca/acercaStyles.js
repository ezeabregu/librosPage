import styled from "styled-components";

export const AcercaStyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AcercaText = styled.div`
  width: 60%;
  h2 {
    color: var(--moreGray);
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    color: var(--moreGray);
    text-align: justify;
    font-weight: 500;
    line-height: 2rem;
  }
  img {
    padding-top: 1rem;
    width: 100%;
    border-end-end-radius: 80px 80px;
    border-start-start-radius: 80px 80px;
  }

  @media (max-width: 800px) {
    width: 80%;
    p {
      font-size: 1rem;
    }
  }
`;
