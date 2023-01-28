import React from "react";
import styled from "styled-components";

const ModalBodyWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
function ModalBody({ children }) {
  return <ModalBodyWrapper>{children}</ModalBodyWrapper>;
}

export default ModalBody;
