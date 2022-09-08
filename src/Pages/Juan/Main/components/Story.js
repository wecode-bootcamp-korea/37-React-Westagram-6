import React from 'react';
import { USER_DATA } from './data';

function Story() {
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

export default Story;
