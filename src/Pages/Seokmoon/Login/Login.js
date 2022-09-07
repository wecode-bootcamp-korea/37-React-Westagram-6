import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // const [userId, setId] = useState('');
  // const [userPw, setPw] = useState('');
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });
  const [loginBtn, setButton] = useState(true);

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // const saveInputId = e => {
  //   setId(e.target.value);
  // };

  // const saveInputPw = e => {
  //   setPw(e.target.value);
  // };

  const navigate = useNavigate();

  // const goToMain = () => {
  //   navigate('/mains');
  // };

  const clickButton = e => {
    setButton(e.target.value);
    inputValues.email.includes('@') > 0 && inputValues.password.length >= 8
      ? setButton(false)
      : setButton(true);
  };
  //로그인
  function signUp() {
    fetch('http://10.58.2.36:3001/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    });
    // .then((response) => response.json())
    // .then((data) => console.log(data));
  }

  function logIn() {
    fetch('http://10.58.2.36:3001/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          alert('환영합니다!');
          localStorage.setItem('token', data.accessToken);
          navigate('/mains');
        } else if (data.message === 'INVALID_ID') {
          alert('아이디를 확인해주세요!');
        } else if (data.message === 'INVALID_PW') {
          alert('비밀번호를 확인해주세요!');
        }
      });
  }

  return (
    <div className="first-main-box">
      <div className="main-container-login">
        <div className="inner-box">
          <div className="box-location">
            <h1 className="logo-title">Westagram</h1>
            <input
              type="text"
              id="user-id"
              className="input-container"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
              onKeyUp={clickButton}
              name="email"
            />

            <input
              type="password"
              id="user-password"
              className="input-container"
              placeholder="비밀번호"
              onChange={handleInput}
              onKeyUp={clickButton}
              name="password"
            />

            {/* <Link to="/mains"> */}
            <button
              className="login-button"
              id="click-login"
              disabled={loginBtn}
              onClick={logIn}
            >
              로그인
            </button>

            <button
              className="login-button"
              id="click-login"
              disabled={loginBtn}
              onClick={signUp}
            >
              회원가입
            </button>
            {/* </Link> */}

            <a href="https://www.naver.com/" className="lost-password">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
