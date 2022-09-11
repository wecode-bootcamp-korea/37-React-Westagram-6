import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/components/Feed';
import MainRight from './components/MainRight';
import { FOOTER_LIST } from './uiData';
import './Main.scss';

function Main() {
  const [feedList, setFeedList] = useState([]);
  const [mainRights, setMainRight] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  useEffect(() => {
    fetch('/data/MainRight.json')
      .then(response => response.json())
      .then(result => setMainRight(result));
  }, []);

  return (
    <div className="Main">
      <Nav />
      <div>
        <div className="main-container">
          <div className="main-feeds">
            <div className="article-box">
              {feedList.map(feedInfo => (
                <Feed feedInfo={feedInfo} />
              ))}
            </div>

            <div className="MainRight">
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
                  <div className="user-recommendation-letter">
                    <span style={{ color: 'grey' }}>스토리</span>
                    <span>
                      <strong>모두보기</strong>
                    </span>
                  </div>
                  <div className="scroll">
                    {mainRights.map(mainRight => (
                      <MainRight mainRight={mainRight} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="user-prefer">
                {mainRights.map(mainRight => (
                  <MainRight mainRight={mainRight} />
                ))}
              </div>

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
