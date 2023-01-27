import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import FormField from "../../components/Form/Form";
import TextField from "../../components/Form/Input";
import Label from "../../components/Form/Label";
import LoginImage from "../../assets/login_bg.jpeg";
import AppLogo from "../../assets/logo.png";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${LoginImage});
  background-size: cover;
`;

const Box = styled.div`
  font-family: Assistant;
  font-size: 30px;
  font-weight: 900;
  width: 400px;
  height: 100vh;
  display: flex;
  background-color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 40px;

  @media (max-width: 768px) {
    box-shadow: none;
  }
`;

const Logo = styled.img`
  height: 40px;
`;

export default function LoginPage() {
  const [data, setData] = useState({ email: null, password: null });
  const { login } = useAuth();

  const handleOnTextFieldChange = (event) => {
    const { name: field, value } = event.target;

    if (field && value) {
      setData({ ...data, [field]: value });
    }
  };

  const handleLogin = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/auth/login",
      data,
      withCredentials: true,
    }).then(() => {
      localStorage.setItem("isAuth", true);
      login(true);
    });
  };

  return (
    <ContentWrapper>
      <Box>
        <Logo src={AppLogo} />
        <FormField>
          <Label>E-mail</Label>
          <TextField
            name='email'
            type='text'
            placeholder='Enter your e-mail'
            onChange={(e) => handleOnTextFieldChange(e)}
          />

          <Label>Password</Label>
          <TextField
            name='password'
            type='password'
            placeholder='Enter your password'
            onChange={(e) => handleOnTextFieldChange(e)}
          />
        </FormField>
        <Button mt={60} onClick={handleLogin}>
          Log in
        </Button>
      </Box>
    </ContentWrapper>
  );
}
