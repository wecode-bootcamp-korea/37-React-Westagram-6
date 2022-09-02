import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userId, setId] = useState('');
  const [userPw, setPw] = useState('');
  const [loginBtn, setButton] = useState(false);

  const saveInputId = e => {
    setId(e.target.value);
  };

  const saveInputPw = e => {
    setPw(e.target.value);
  };

  const clickButton = e => {
    setButton(e.target.value);
    userId.includes('@') > 0 && userPw.length >= 5
      ? setButton(true)
      : setButton(false);
  };

  return (
    <>
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
                onChange={saveInputId}
                onKeyUp={clickButton}
              />

              <input
                type="password"
                id="user-password"
                className="input-container"
                placeholder="비밀번호"
                onChange={saveInputPw}
                onKeyUp={clickButton}
              />

              <Link to="/main">
                <button
                  className="login-button"
                  id="click-login"
                  disabled={loginBtn}
                >
                  로그인
                </button>
              </Link>

              <a href="https://www.naver.com/" className="lost-password">
                비밀번호를 잊으셨나요?
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
