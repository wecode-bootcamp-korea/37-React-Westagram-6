import React from 'react';
import { USER_DATA } from './data';

function RecommendUser() {
  return USER_DATA.map(user => {
    return (
      <div className="user_container" key={user.id}>
        <img
          src={user.profile_url}
          alt="유저 이미지"
          className="userProfileImgCircle"
        />
        <div className="user_tag">
          <p className="userId">{user.user_id}</p>
          <p className="article_profile_follow">
            _legend_a님 외 2명이 팔로우하고 있습니다
          </p>
        </div>
        <p className="follow_btn">팔로우</p>
      </div>
    );
  });
}
export default RecommendUser;
