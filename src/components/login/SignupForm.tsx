import { useForm } from "react-hook-form";
import styled from "styled-components";

type FormValues = {
  name: string;
  cell: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    //회원가입 로직 API
  };

  const password = watch("password");

  return (
    <Wrap>
      <TitleWrap>
        <Title>Sign up</Title>
        <SubTitle>
          <p className="text-sm">이미 회원이신가요?</p>
          <p className="text-xs">로그인 페이지로 가기</p>
        </SubTitle>
      </TitleWrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          이름
          <Input
            {...register("name", {
              required: "이름은 필수입니다.",
              minLength: { value: 2, message: "이름은 2자 이상 입력해주세요." },
            })}
            placeholder="이름"
          />
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
        </Label>

        <Label>
          셀
          <Input
            {...register("cell", {
              required: "셀 정보는 필수입니다.",
            })}
            placeholder="소속된 셀"
          />
          {errors.cell && <ErrorMsg>{errors.cell.message}</ErrorMsg>}
        </Label>

        <Label>
          이메일
          <Input
            {...register("email", {
              required: "이메일은 필수입니다.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "유효한 이메일 형식이 아닙니다.",
              },
            })}
            type="email"
            placeholder="example@email.com"
          />
          {errors.email && <ErrorMsg>{errors.email.message}</ErrorMsg>}
        </Label>

        <Label>
          비밀번호
          <Input
            {...register("password", {
              required: "비밀번호는 필수입니다.",
              minLength: {
                value: 8,
                message: "비밀번호는 최소 8자 이상이어야 합니다.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "영문자와 숫자를 포함해야 합니다.",
              },
            })}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}
        </Label>

        <Label>
          비밀번호 확인
          <Input
            {...register("passwordConfirm", {
              required: "비밀번호 확인이 필요합니다.",
              validate: (value) =>
                value === password || "비밀번호가 일치하지 않습니다.",
            })}
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
          />
          {errors.passwordConfirm && (
            <ErrorMsg>{errors.passwordConfirm.message}</ErrorMsg>
          )}
        </Label>

        <SubmitButton type="submit">회원가입</SubmitButton>
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

const TitleWrap = styled.div`
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

const ErrorMsg = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;
