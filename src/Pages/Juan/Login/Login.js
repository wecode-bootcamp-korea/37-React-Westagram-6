import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [inputValue, setInputValue] = useState({ email: '', password: '' });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const isVaild =
    inputValue.email.includes('@') && inputValue.password.length >= 5;

  const loginFetch = () => {
    fetch('http://10.58.2.194:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json(); // 5
        }
        throw new Error('통신실패!'); // 6
      })
      .catch(error => alert(error)) // 7
      .then(data => {
        localStorage.setItem('token', data.accessToken);
        alert('로그인 성공');
      });
  };

  const signupFetch = () => {
    fetch('http://10.58.2.194:3000/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!'); //reponse.ok가 true가 아닐 경우 error를 throw
      })
      .catch(error => alert(error));
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
          value={inputValue.email}
          onChange={handleInput}
        />

        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호"
          name="password"
          value={inputValue.password}
          onChange={handleInput}
        />

        <button onClick={loginFetch} className="loginBtn" disabled={!isVaild}>
          로그인
        </button>

        <button onClick={signupFetch} className="loginBtn">
          회원가입
        </button>

        <Link to="/Loginj">
          <p className="pwdFind">비밀번호를 잊으셨나요?</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
