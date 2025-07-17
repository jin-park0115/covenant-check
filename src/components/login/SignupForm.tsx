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
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 50%;
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
