import React, { useEffect, useState } from 'react';
import { FOOTER_LIST } from './uiData.js';
import UserProfile from '../Main/components/UserProfile';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/components/Feed';
import './Main.scss';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="background">
      <Nav />

      {/* <!-- main --> */}
      <div>
        <div className="main-container">
          <div className="main-feeds">
            <div className="article-box">
              {feedList.map(feedInfo => (
                <Feed
                  profileImg={feedInfo.profileImg}
                  imageUrl={feedInfo.imageUrl}
                  userId={feedInfo.userId}
                  key={feedInfo.id}
                />
              ))}
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
  );
}

export default Main;
