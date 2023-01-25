import styled from "styled-components";

const TextField = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  font-size: large;
  border: 2px solid #dddddd;

  &:focus {
    outline: none;
    border-color: #eb6440;
  }

  ::placeholder {
    color: #aaaaaa;
  }
`;

export default TextField;
