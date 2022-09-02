import React, { useState } from 'react';
import './Main.scss';
import InfoList from './InfoList.js';
import UserProfile from './UserProfile.js';
import Comments from './Comments.js';

function Main() {
  const [userName] = useState('tjrans9248');
  const [feedComments, setFeedComments] = useState([]);
  const [comment, setComment] = useState('');

  const post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  const onChange = e => {
    setComment(e.target.value);
  };

  return (
    <div>
      <div className="background">
        <div className="nav-bar">
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

            <div className="main-image-box-right profileButton">
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
        </div>

        {/* <!-- main --> */}

        <div className="main-container">
          <div className="main-feeds">
            <div className="article-box">
              <div className="feed-nav">
                <div>
                  <div className="main-image-box">
                    <img
                      src="/images/Seokmoon/main.logo.jpeg"
                      className="main-image"
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <span className="user-id">tjrans9248</span>
                  <i className="fa-solid fa-ellipsis i-dot" />
                </div>
              </div>

              <div className="feed-main">
                <img
                  src="https://images.unsplash.com/photo-1661130774347-f7529bb2009f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="feed-image"
                />
              </div>

              <div className="feed-footer-back">
                <div className="feed-footer">
                  <div>
                    <i className="fa-solid fa-heart feed-heart feed-icon" />
                    <i className="fa-solid fa-comment feed-icon" />
                    <i className="fa-solid fa-arrow-up-from-bracket feed-icon" />
                  </div>

                  <div>
                    <i className="fa-solid fa-bookmark feed-icon" />
                  </div>
                </div>

                <div className="comment-letter">
                  <strong>tjrans9248</strong>님 <strong>외 10명</strong>이
                  좋아합니다.
                </div>

                <div className="comment-letter">
                  <p className="comment">
                    <strong>seokmoonYang</strong> 올드카가 굉장히 멋있습니다....
                  </p>
                  <p className="comment">
                    <strong>neceosecius</strong> 이건 얼마정도할까요???
                  </p>
                </div>

                <div className="comment-input-box">
                  {feedComments.map((commentArr, user) => {
                    return (
                      <div className="mainComments" key={user}>
                        <Comments userName={userName} commentArr={commentArr} />
                        {/* <Icon
                            key={image}
                          
                          /> */}
                      </div>
                    );
                  })}
                </div>

                <div>
                  <div className="border-top">
                    <input
                      className="input-comment"
                      type="text"
                      placeholder="댓글 달기..."
                      style={{ fontSize: '18px' }}
                      onChange={onChange}
                      value={comment}
                    />

                    <input
                      className="input-button"
                      type="button"
                      value="게시"
                      onClick={post}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

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

            <InfoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
