import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

export const ContainerOrder = styled.div`
  width: 500px;
  height: 150px;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #0c0c0c;
  padding-left: 1rem;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: 10px 7px 8px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 7px 8px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 7px 8px 0px rgba(0, 0, 0, 0.75);
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
    color: #ffffff;
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
  text-align: center;
  h2 {
    color: #ffffff;
    font-size: 1.2rem;
  }
`;
