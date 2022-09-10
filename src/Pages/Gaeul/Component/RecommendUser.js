import React from 'react';
import { RECOMMEND_USER_SAMPLE } from '../Component/data';

const RecommendUser = () => {
  return (
    <div className="RecommendUser">
      {RECOMMEND_USER_SAMPLE.map(userSample => (
        <div className="story-recommend-user" key={userSample.id}>
          <div className="user-image" />
          <div className="user-info">
            <p className="user-id">{userSample.id}</p>
            <p className="recommend-text">{userSample.text}</p>
          </div>
          <button className="follow">팔로우</button>
        </div>
      ))}
    </div>
  );
};

export default RecommendUser;
