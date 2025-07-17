import styled from "styled-components";

export const LoginForm = () => {
  return (
    <Form>
      <Title>covenant</Title>
      <Subtitle>
        영혼을 살리고 <br /> 세우는 공동체
      </Subtitle>
      <InputSection>
        <input type="email" placeholder="아이디를 입력해주세요." />
        <input type="password" placeholder="비밀번호를 입력해주세요." />
        <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword>
      </InputSection>
      <ButtonGroup>
        <SignBtn>sign in</SignBtn>
        <SignBtn>sign up</SignBtn>
      </ButtonGroup>
    </Form>
  );
};

const Form = styled.div`
  background-color: aqua;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1``;
const Subtitle = styled.h2``;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    width: 300px;
  }
`;

const ForgotPassword = styled.div`
  font-size: 0.75rem;
  font-weight: lighter;
  text-align: right;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SignBtn = styled.button``;
