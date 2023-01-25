import styled from "styled-components";
import Button from "../../components/Button/Button";
import FormField from "../../components/Form/Form";
import TextField from "../../components/Form/Input";
import Label from "../../components/Form/Label";

import AppLogo from "../../assets/logo.png";

const ContentWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
`;

const Box = styled.div`
  font-family: Assistant;
  font-size: 30px;
  font-weight: 900;
  width: 400px;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  padding: 40px;

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

export default function LoginPage() {
  return (
    <ContentWrapper>
      <Box>
        <Logo src={AppLogo} />
        <FormField>
          <Label>E-mail</Label>
          <TextField
            name='loginEmail'
            type='text'
            placeholder='Enter your e-mail'
          />

          <Label>Password</Label>
          <TextField
            name='loginPassword'
            type='password'
            placeholder='Enter your password'
          />
          <Button mt={60}>Log in</Button>
        </FormField>
      </Box>
    </ContentWrapper>
  );
}
