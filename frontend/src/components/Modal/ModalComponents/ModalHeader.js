import React from "react";
import styled from "styled-components";
import { CloseIcon } from "../../../assets/icons";

const ModalHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  margin-bottom: 20px;
`;

const IconContiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ModalHeader({ title, onClose }) {
  return (
    <ModalHeaderWrapper>
      {title}
      <IconContiner onClick={onClose}>
        <CloseIcon />
      </IconContiner>
    </ModalHeaderWrapper>
  );
}

export default ModalHeader;
