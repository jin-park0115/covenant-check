import styled from "styled-components";
import logo from "../../assets/covenantlogo.jpg";

export const LoginLogo = () => {
  return (
    <LoginImg>
      <img src={logo} alt="커넌로고" />
    </LoginImg>
  );
};

const LoginImg = styled.div`
  width: 50%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    border-radius: inherit;
    width: 220px;
    height: 200px;
  }

  @media (max-width: 425px) {
    width: auto;
  }
`;
