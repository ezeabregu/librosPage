import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

export const ContainerOrder = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: var(--rojo);
  padding-left: 1rem;
  border-radius: 5px;
  margin: 8px;
  cursor: pointer;
  -webkit-box-shadow: 10px 7px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 7px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media (max-width: 800px) {
    width: 300px;
  }
`;

export const ContainerData = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 15px;
  width: 75%;
  span {
    color: var(--WalterWhite);
    font-weight: 500;
  }
`;

export const ContainerIcon = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Pending = styled(IoTimeOutline)`
  color: #ff8b00;
  font-size: 24px;
`;

export const Check = styled(CiCircleCheck)`
  color: #35c840;
  font-size: 24px;
`;

export const ContainerNoOrder = styled.div`
  width: 300px;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: var(--moreGray);
    font-size: 1rem;
  }
`;

export const Loading = styled.div`
  font-weight: 600;
  font-size: 16px;
  padding: 30%;
  width: 100vw;
  min-height: 100vh;
  border-radius: 5px;
  text-align: center;
  span {
    color: var(--black);
    animation: loading 2s infinite;
    font-size: 25px;
  }
  span:nth-child(1) {
    animation-delay: 0s;
  }

  span:nth-child(2) {
    animation-delay: 0.5s;
  }

  span:nth-child(3) {
    animation-delay: 1s;
  }
  @keyframes loading {
    0%,
    20%,
    80%,
    100% {
      opacity: 0;
    }
    40%,
    60% {
      opacity: 1;
    }
  }
`;
