import React from 'react';

function MainRight({ mainRight }) {
  const { profileImg, userId, email } = mainRight;

  return (
    <div className="MainRights">
      <div>
        <div className="right-box main-image-box-right">
          <img src={profileImg} className="main-image" alt="" />
        </div>
      </div>

      <div className="right-id">
        <strong>{userId}</strong>
        <p style={{ color: 'grey' }}>{email}님 외 5명이 팔로우합니다</p>
      </div>

      <div className="follow-letter">팔로우</div>
    </div>
  );
}

export default MainRight;
