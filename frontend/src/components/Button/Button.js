import styled from "styled-components";
import { margin } from "styled-system";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px;
  font-size: large;
  background-color: #eb6440;
  color: white;
  border: 0px;

  &:hover {
    background-color: rgb(235, 100, 64, 0.9);
  }

  ${margin}
`;

export default Button;
