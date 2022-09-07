import React from 'react';
import { FOOTER_LIST } from '../uiData.js';

function MainRight() {
  return (
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
          <div className="right-recommendation">
            <div>
              <div className="right-box main-image-box-right">
                <img
                  src="/images/Seokmoon/main.logo.jpeg"
                  className="main-image"
                  alt=""
                />
              </div>
            </div>

            <div className="right-id">
              <strong>celemore0505</strong>
              <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
            </div>

            <div className="follow-letter">팔로우</div>
          </div>

          <div className="right-recommendation">
            <div>
              <div className="right-box main-image-box-right">
                <img
                  src="/images/Seokmoon/main.logo.jpeg"
                  className="main-image"
                  alt=""
                />
              </div>
            </div>

            <div className="right-id">
              <strong>celemore0505</strong>
              <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
            </div>

            <div className="follow-letter">팔로우</div>
          </div>

          <div className="right-recommendation">
            <div>
              <div className="right-box main-image-box-right">
                <img
                  src="/images/Seokmoon/main.logo.jpeg"
                  className="main-image"
                  alt=""
                />
              </div>
            </div>

            <div className="right-id">
              <strong>celemore0505</strong>
              <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
            </div>

            <div className="follow-letter">팔로우</div>
          </div>

          <div className="right-recommendation">
            <div>
              <div className="right-box main-image-box-right">
                <img
                  src="/images/Seokmoon/main.logo.jpeg"
                  className="main-image"
                  alt=""
                />
              </div>
            </div>

            <div className="right-id">
              <strong>celemore0505</strong>
              <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
            </div>

            <div className="follow-letter">팔로우</div>
          </div>
        </div>
      </div>

      <div className="recommendation-box">
        <div className="user-recommendation">
          <span style={{ color: 'grey' }}>회원님을 위한 추천</span>
          <span>
            <strong>모두보기</strong>
          </span>
        </div>

        <div className="right-recommendation">
          <div>
            <div className="right-box main-image-box-right">
              <img
                src="/images/Seokmoon/main.logo.jpeg"
                className="main-image"
                alt=""
              />
            </div>
          </div>

          <div className="right-id">
            <strong>celemore0505</strong>
            <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
          </div>

          <div className="follow-letter">팔로우</div>
        </div>

        <div className="right-recommendation">
          <div>
            <div className="right-box main-image-box-right">
              <img
                src="/images/Seokmoon/main.logo.jpeg"
                className="main-image"
                alt=""
              />
            </div>
          </div>

          <div className="right-id">
            <strong>celemore0505</strong>
            <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
          </div>

          <div className="follow-letter">팔로우</div>
        </div>

        <div className="right-recommendation">
          <div>
            <div className="right-box main-image-box-right">
              <img
                src="/images/Seokmoon/main.logo.jpeg"
                className="main-image"
                alt=""
              />
            </div>
          </div>

          <div className="right-id">
            <strong>celemore0505</strong>
            <p style={{ color: 'grey' }}>....님 외 5명이 팔로우합니다</p>
          </div>

          <div className="follow-letter">팔로우</div>
        </div>
      </div>

      {/* <!-- Main right box bottom info --> */}

      <div className="information-list">
        {FOOTER_LIST.map(footerList => {
          return <span key={footerList.id}>{footerList.footerName}</span>;
        })}
        <ul />
      </div>
    </div>
  );
}

export default MainRight;
