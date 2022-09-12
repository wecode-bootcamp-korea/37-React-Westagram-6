import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    userId: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const isValidLogin = !(
    inputValues.userId.includes('@') && inputValues.password.length >= 5
  );

  const navigate = useNavigate();

  function signUp(e) {
    e.preventDefault();
    fetch('http://10.58.2.36:3001/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.userId,
        password: inputValues.password,
      }),
    });
  }

  function login(e) {
    e.preventDefault();
    fetch('http://10.58.2.36:3001/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: inputValues.userId,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (!!data.accessToken) {
          alert('환영합니다!');
          localStorage.setItem('token', data.accessToken);
          navigate('/maing');
        } else if (data.message === 'INVALID_ID') {
          alert('아이디를 확인해주세요!');
        } else if (data.message === 'INVALID_PW') {
          alert('비밀번호를 확인해주세요!');
        }
      });
  }

  return (
    <div className="Login">
      <section className="main-box">
        <div className="logo">Westagram</div>

        <form className="login-wrap" onSubmit={login}>
          <input
            name="userId"
            type="text"
            className="nameEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
            value={inputValues.userId}
          />
          <input
            name="password"
            type="password"
            className="passWord"
            placeholder="비밀번호"
            onChange={handleInput}
            value={inputValues.password}
          />
          <button className="login-btn" disabled={isValidLogin}>
            로그인
          </button>
        </form>

        <div className="or-wrap">
          <div className="or-line" />
          <p className="or">또는</p>
          <div className="or-line" />
        </div>

        <div className="facebook-login">
          <button className="facebook-btn">
            <img
              className="facebook-icon"
              src="images/Gaeul/facebook_icon.png"
              alt="facebook icon"
            />
            <span>Facebook으로 로그인</span>
          </button>
        </div>

        <div className="forgot-password">
          <button className="forgot-btn">비밀번호를 잊으셨나요?</button>
        </div>
      </section>

      <section className="join-box">
        <p className="let-join">
          계정이 없으신가요?
          <button className="signup-btn" onClick={signUp}>
            가입하기
          </button>
        </p>
      </section>

      <div className="app-down">
        <p className="app-down-text">앱을 다운로드하세요.</p>
        <div className="download-image">
          <Link to="https://apps.apple.com/app/instagram/id389801252?vt=lo">
            <img
              className="appstore-link"
              src="images/Gaeul/appstoredownload.png"
              alt="go to appstore"
            />
          </Link>
          <Link to="https://play.google.com/store/apps/details?id=com.instagram.androidreferrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9B98617F-78AA-471A-A22F-E8F80A1366E9%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img
              className="googleplay-link"
              src="images/Gaeul/googleplaydownload.png"
              alt="go to googleplay"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
