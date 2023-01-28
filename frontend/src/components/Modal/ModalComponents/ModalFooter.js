import React from "react";
import styled from "styled-components";

const ModalFooterWrapper = styled.div`
  display: flex;
  width: 100%;
`;

function ModalFooter({ children }) {
  return <ModalFooterWrapper>{children}</ModalFooterWrapper>;
}

export default ModalFooter;
