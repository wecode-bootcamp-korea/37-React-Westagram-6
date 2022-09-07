import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile.js';
import Comments from './Comments.js';
import { FOOTER_LIST } from './uiData.js';
import './Main.scss';
import MainFeed from './MainFeed.js';
import Nav from '../../../components/Nav/Nav';

function Main() {
  // const [userName] = useState('tjrans9248');
  // const [feedComments, setFeedComments] = useState([]);
  // const [comment, setComment] = useState('');

  // const [feedList, setFeedList] = useState([]);

  // useEffect(() => {
  //   fetch('/data/feedList.json')
  //     .then(response => response.json())
  //     .then(result => setFeedList(result));
  // }, []);

  // const post = e => {
  //   const copyFeedComments = [...feedComments];
  //   copyFeedComments.push(comment);
  //   setFeedComments(copyFeedComments);
  //   setComment('');
  // };

  // const onChange = e => {
  //   setComment(e.target.value);
  // };

  return (
    <div>
      <div className="background">
        <Nav />
        {/* <div className="nav-bar">
          <div>
            <div className="nav-space">
              <i className="fa-brands fa-instagram i-logo" />
              <span className="i-logo"> | </span>
              <span className="logo-letter i-logo">Westagram</span>
            </div>
          </div>
          <div className="nav-space">
            <i className="fa-regular fa-magnifying-glass search-icon" />
            <input type="text" placeholder="검색" className="search-box" />
          </div>
          <div className="nav-space-right">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              className="icon-image1"
              alt=""
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt=""
              className="icon-image2"
            />
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
              className="icon-image3"
            />

            <div className="main-image-box-right">
              <img
                src="/images/Seokmoon/main.logo.jpeg"
                className="main-image"
                alt=""
              />
            </div>
            <div className="profilePopup">
              <ul>
                <li>
                  <i className="fa-regular fa-user profile-icon" />
                  프로필
                </li>
                <li>
                  <i className="fa-regular fa-bookmark profile-icon" />
                  저장됨
                </li>
                <li>
                  <i className="fa-solid fa-gear profile-icon" />
                  설정
                </li>
                <li>
                  <i className="fa-solid fa-rotate profile-icon" />
                  계정전환
                </li>
                <li className="log-out-letter">로그아웃</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* <!-- main --> */}

        <div className="main-container">
          <div className="main-feeds">
            <div className="article-box">
              <MainFeed />

              <div className="main-right">
                <div>
                  <div className="right-box main-image-box-right-bottom">
                    <img
                      src="/images/Seokmoon/main.logo.jpeg"
                      className="main-image"
                      alt=""
                    />
                  </div>
                </div>
                <div className="main-right-location">
                  <div className="right-box-name">
                    <strong>seokmoonyang</strong>
                    <p style={{ color: 'grey' }}>seokmoon Yang(sean)</p>
                  </div>
                  <span className="right-box-letter">전환</span>
                </div>

                <div className="story-box">
                  <div className="user-recommendation">
                    <span style={{ color: 'grey' }}>스토리</span>
                    <span>
                      <strong>모두보기</strong>
                    </span>
                  </div>

                  <div className="scroll">
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                    <UserProfile />
                  </div>
                </div>

                <div className="recommendation-box">
                  <div className="user-recommendation">
                    <span style={{ color: 'grey' }}>회원님을 위한 추천</span>
                    <span>
                      <strong>모두보기</strong>
                    </span>
                  </div>

                  <UserProfile />
                  <UserProfile />
                  <UserProfile />
                </div>

                {/* <!-- Main right box bottom info --> */}

                <div className="information-list">
                  {FOOTER_LIST.map(footerList => {
                    return (
                      <span key={footerList.id}>{footerList.footerName}</span>
                    );
                  })}
                  <ul />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
