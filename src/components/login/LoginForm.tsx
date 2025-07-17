import { Link } from "react-router-dom";
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
        <ForgotPassword to={"/"}>비밀번호를 잊으셨나요?</ForgotPassword>
        <ButtonGroup>
          <SignBtn>로그인</SignBtn>
          <SignBtn to={"/signup"}>회원가입</SignBtn>
        </ButtonGroup>
      </InputSection>
    </Form>
  );
};

const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #314061;
  @media (max-width: 425px) {
    width: auto;
  }
`;

const Title = styled.h1`
  @media (max-width: 425px) {
    display: none;
  }
`;
const Subtitle = styled.h2`
  margin-top: 10rem;
  @media (max-width: 425px) {
    margin-top: 5rem;
  }
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 5rem;
  input {
    width: 300px;
    font-size: 1rem;
    padding: 6px 4px;
    border-radius: 8px;
    outline: none;
    border: 1px solid #222;
  }
`;

const ForgotPassword = styled(Link)`
  width: 300px;

  font-size: 0.8rem;
  font-weight: lighter;
  text-align: right;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SignBtn = styled(Link)`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  border: 1px soild #222;
  outline: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
