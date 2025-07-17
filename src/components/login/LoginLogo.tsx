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

  @media (max-width: 425px) {
    width: auto;
  }
`;
