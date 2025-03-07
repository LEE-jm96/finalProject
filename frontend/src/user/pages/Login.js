import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import logo from '../assets/logo.png';
import login from '../assets/login.png';

import { tokenState } from '../recoil/token';
import { userNoState, userNameState } from '../recoil/user';

import Button from 'react-bootstrap/Button';

import {
  Container,
  LoginContainer,
  LoginTitle,
  ImageContainer1,
  ImageContainer2,
  ButtonContainer,
  InputContainer,
  ContentContainer,
} from '../styles/Login';

const Login = () => {
  const setToken = useSetRecoilState(tokenState);
  const setUserNo = useSetRecoilState(userNoState);
  const setUserName = useSetRecoilState(userNameState);

  const [inputId, setInputId] = useState('');
  const [inputPwd, setInputPwd] = useState('');

  const navigate = useNavigate();

  const [cookies, setCookie] = useCookies(['accessToken']);

  const handleChangeId = (e) => {
    setInputId(e.target.value);
  };

  const handleChangePwd = (e) => {
    setInputPwd(e.target.value);
  };

  const handleClickResetBtn = () => {
    setInputId('');
    setInputPwd('');
  };

  const loginBtn = (e) => {
    e.preventDefault();

    handleClickResetBtn();
    postLogin();
  };

  const postLogin = () => {
    try {
      const data = {
        userId: inputId,
        password: inputPwd,
      };
      axios
        .post(`${process.env.REACT_APP_SERVER_PORT}/login`, data)
        .then((res) => {
          console.log(res);
          setToken(res.headers.authorization);
          setUserName(res.data.data.name);
          setUserNo(res.data.data.userNo);
          setCookie('accessToken', res.headers.authorization);
          console.log(res);
          if (res.data.resCode === 0) {
            navigate('/main');
          } else {
            alert(`잘못된 정보를 입력하셨습니다.`);
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <LoginContainer>
        <ImageContainer1>
          <img src={login} alt="Login" className="login" />
        </ImageContainer1>
        <div>
          <ImageContainer2>
            <img src={logo} alt="Logo" />
          </ImageContainer2>
          <LoginTitle>자원 관리 시스템</LoginTitle>
          <br />
          <form onSubmit={loginBtn}>
            <ContentContainer>
              <label htmlFor="id">ID</label>
              <InputContainer>
                <input
                  type="text"
                  name="id"
                  id="id"
                  placeholder="아이디를 입력하세요"
                  onChange={handleChangeId}
                  value={inputId}
                />
              </InputContainer>
              <br />
              <label htmlFor="pwd">PWD</label>
              <InputContainer>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="비밀번호를 입력하세요"
                  onChange={handleChangePwd}
                  value={inputPwd}
                />
              </InputContainer>
              <ButtonContainer>
                <Button variant="primary" type="submit" className="loginBtn">
                  LOGIN
                </Button>
              </ButtonContainer>
            </ContentContainer>
          </form>
        </div>
      </LoginContainer>
    </Container>
  );
};

export default Login;
