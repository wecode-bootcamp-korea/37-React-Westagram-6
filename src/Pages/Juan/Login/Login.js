import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    validation();
  };

  const validation = () => {
    const isVaild =
      inputValue.email.includes('@') && inputValue.password.length >= 5;
    setDisabled(!isVaild);
  };
  return (
    <div className="login">
      <div className="container">
        <div className="logo">westagram</div>
        <input
          className="loginInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          name="email"
          onChange={handleInput}
        />
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={handleInput}
        />
        <Link to="/Mainj">
          <button className="loginBtn" disabled={disabled}>
            로그인
          </button>
        </Link>
        <Link to="/Loginj">
          <p className="pwdFind">비밀번호를 잊으셨나요?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
