import styled from "styled-components";

export const SignupForm = () => {
  return (
    <Wrap>
      <TittleWrap>
        <Title>Sign up</Title>
        <SubTitle>
          <p className="text-sm">이미 회원이신가요?</p>
          <p className="text-xs">로그인 페이지로 가기</p>
        </SubTitle>
      </TittleWrap>
      <Form>
        <Label>
          이름
          <Input type="text" placeholder="이름" />
        </Label>
        <Label>
          셀
          <Input type="text" placeholder="소속된 셀" />
        </Label>
        <Label>
          이메일
          <Input type="email" placeholder="example@email.com" />
        </Label>
        <Label>
          비밀번호
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </Label>
        <Label>
          비밀번호 확인
          <Input type="password" placeholder="비밀번호를 다시 입력하세요" />
        </Label>

        <SubmitButton>회원가입</SubmitButton>
      </Form>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 50%;
  background-color: beige;
  display: flex;
  flex-direction: column;
`;

const TittleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitle = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 6px 4px;
  margin-top: 0.2rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0070f3;
    box-shadow: 0 0 0 2px rgba(0, 112, 243, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 6px 4px;

  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #005dc1;
  }
`;
