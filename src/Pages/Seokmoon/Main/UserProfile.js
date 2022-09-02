import React from 'react';

function UserProfile() {
  return (
    <>
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
    </>
  );
}
export default UserProfile;
