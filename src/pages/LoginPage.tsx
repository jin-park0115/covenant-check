import styled from "styled-components";
import logo from "../assets/covenantlogo.jpg";
import { LoginForm } from "../components/login/LoginForm";

export const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <LoginImg>
        <img src={logo} alt="커넌로고" />
      </LoginImg>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 100vh;
  gap: 10px;
`;

const LoginImg = styled.div`
  background-color: #fff;
  width: 50%;
  border-radius: 1rem;
  box-shadow: 0px 0px 4px 0px #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: inherit;
    width: 220px;
    height: 200px;
  }
`;
