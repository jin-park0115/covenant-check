import styled from "styled-components";
import { LoginLogo } from "../components/login/LoginLogo";
import { SignupForm } from "../components/login/SignupForm";

export const SignupPage = () => {
  return (
    <Container>
      <LoginLogo />
      <SignupForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 100vh;
  gap: 10px;
  background-color: aqua;
`;
