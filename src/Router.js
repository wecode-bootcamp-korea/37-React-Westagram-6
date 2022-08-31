import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 신주안의 컴포넌트
import LoginJ from './Pages/Juan/Login/Login';
import MainJ from './Pages/Juan/Main/Main';

// 양석문의 컴포넌트
import LoginS from './Pages/Seokmoon/Login/Login';
import MainS from './Pages/Seokmoon/Main/Main';

//이가을의 컴포넌트
import LoginG from './Pages/Gaeul/Login/Login';
import MainG from './Pages/Gaeul/Main/Main';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/loginj" element={<LoginJ />} />
        <Route path="/mainj" element={<MainJ />} />
        <Route path="/logins" element={<LoginS />} />
        <Route path="/mains" element={<MainS />} />
        <Route path="/loging" element={<LoginG />} />
        <Route path="/maing" element={<MainG />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
