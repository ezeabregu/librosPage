import React from "react";
import { ModalStyled } from "./modalStyles";

const Modal = ({ children, active }) => {
  setTimeout(() => {
    ModalStyled.classList.remove("active");
  }, 1500);

  return <ModalStyled>{children}</ModalStyled>;
};

export default Modal;
