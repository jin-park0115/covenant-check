import styled from "styled-components";
import { LoginForm } from "../components/login/LoginForm";
import { LoginLogo } from "../components/login/LoginLogo";

export const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <LoginLogo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 100vh;
  gap: 10px;
  @media (max-width: 425px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;
