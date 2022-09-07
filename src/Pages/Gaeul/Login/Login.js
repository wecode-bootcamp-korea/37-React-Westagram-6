import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputValues, setInputValues] = useState({
    userId: '',
    password: '',
  });

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const navigate = useNavigate();

  // function goToMain() {
  //   navigate('/maing');
  // }

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
    <>
      <section className="main-box">
        <div className="logo">Westagram</div>

        <form className="wrap">
          <input
            name="userId"
            type="text"
            className="nameEmail"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            className="passWord"
            placeholder="비밀번호"
            onChange={handleInput}
          />
          <button
            className="login-btn"
            onClick={login}
            disabled={
              inputValues.userId.includes('@') &&
              inputValues.password.length >= 5
                ? false
                : true
            }
          >
            로그인
          </button>
        </form>

        <div className="or-wrap">
          <div className="line" />
          <p>또는</p>
          <div className="line" />
        </div>

        <div className="facebook-login-btn">
          <button>
            <img src="images/Gaeul/facebook_icon.png" alt="facebook icon" />
            <span>Facebook으로 로그인</span>
          </button>
        </div>

        <div className="forgot-password">
          <button>비밀번호를 잊으셨나요?</button>
        </div>
      </section>

      <section className="join-box">
        <p className="let-join">
          계정이 없으신가요?<button onClick={signUp}>가입하기</button>
        </p>
      </section>

      <div className="app-down">
        <p>앱을 다운로드하세요.</p>
        <div className="download-image">
          <a
            href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
            target="_blank"
            rel="noreferrer"
          >
            <img src="images/Gaeul/appstoredownload.png" alt="go to appstore" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9B98617F-78AA-471A-A22F-E8F80A1366E9%26utm_content%3Dlo%26utm_medium%3Dbadge"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/Gaeul/googleplaydownload.png"
              alt="go to googleplay"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
