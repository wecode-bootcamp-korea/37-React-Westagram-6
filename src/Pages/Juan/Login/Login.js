import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPwdValue, setInputPwdValue] = useState('');
  const [disabled, setDisabled] = useState(true);

  const SaveUserId = e => {
    setInputIdValue(e.target.value);
    validation();
  };
  const SaveUserPwd = e => {
    setInputPwdValue(e.target.value);
    validation();
  };

  const validation = () => {
    inputIdValue.includes('@') && inputPwdValue.length >= 5
      ? setDisabled(false)
      : setDisabled(true);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="logo">westagram</div>
        <input
          className="loginInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          id="idInput"
          onChange={SaveUserId}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호"
          id="pwdInput"
          onChange={SaveUserPwd}
        />
        <Link to="/Mainj">
          <button className="loginBtn" disabled={disabled}>
            로그인
          </button>
        </Link>
        <a className="pwdFind" href="/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
