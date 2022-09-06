import React from 'react';
import { USER_DATA } from '../Main';

function MainRight() {
  return (
    <section className="mainRight">
      <div className="rightItem1">
        <div className="userProfileImgCircle user_img" />
        <div className="user_tag">
          <p className="userId">wecode_bootcamp</p>
          <p className="article_profile_content">WeCode | 위코드</p>
        </div>
      </div>
      <section className="rightItem2">
        <div className="right_item_header">
          <p className="right_item_title">스토리</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <div className="user_story_container">
          <UserStoryContainer />
        </div>
      </section>

      <div className="right_item3">
        <div className="right_item_header">
          <p className="right_item_title">회원님을 위한 추천</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <RecommendUser />
      </div>
    </section>
  );
}

function UserStoryContainer() {
  return USER_DATA.map(user => {
    return (
      <li className="user_container" key={user.id}>
        <img
          src={user.profile_url}
          alt="유저 이미지"
          className="userProfileImgCircle article_profile onStory"
        />
        <div className="user_tag">
          <p className="userId">{user.user_id}</p>
          <p className="article_profile_content">{user.time}</p>
        </div>
      </li>
    );
  });
}

function RecommendUser() {
  return USER_DATA.reverse().map(user => {
    return (
      <div className="user_container" key={user.id}>
        <img
          src={user.profile_url}
          alt="유저 이미지"
          className="userProfileImgCircle article_profile"
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
export default MainRight;
