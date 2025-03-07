import { useState } from 'react';
import {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer1,
  ButtonContainer,
  InputContainer,
} from '../../user/styles/Login';
import Button from 'react-bootstrap/Button';

const AdminLoginPage = () => {
  const [input, setInput] = useState({});

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer1>
          <img
            src={process.env.PUBLIC_URL + '/login.png'}
            alt="Logo"
            className="logo"
          />
        </ImageContainer1>
        <div>
          <LoginTitle>자원 관리 시스템</LoginTitle>
          <form>
            <div>ID</div>
            <InputContainer>
              <input
                type="text"
                name="id"
                onChange={handleOnChange}
                placeholder="아이디를 입력하세요"
              />
            </InputContainer>
            <br />
            <div>PW</div>
            <InputContainer>
              <input
                type="password"
                name="password"
                onChange={handleOnChange}
                placeholder="비밀번호를 입력하세요"
              />
            </InputContainer>
            <ButtonContainer>
              <Button variant="primary">로그인</Button>
            </ButtonContainer>
          </form>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default AdminLoginPage;
