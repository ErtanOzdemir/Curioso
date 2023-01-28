import React from "react";
import styled from "styled-components";
import ModalBody from "./ModalComponents/ModalBody";
import ModalHeader from "./ModalComponents/ModalHeader";
import ModalFooter from "./ModalComponents/ModalFooter";

const ModalWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 1;

  @media (max-width: 768px) {
    background-color: white;
  }
`;

const ModalBox = styled.div`
  position: relative;
  max-height: 600px;
  width: 500px;
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  @media (max-width: 768px) {
    border-radius: 0px;
    box-shadow: none;
  }
`;

function Modal({ isOpen, children }) {
  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <ModalBox>{children}</ModalBox>
        </ModalWrapper>
      )}
    </>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
