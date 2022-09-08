import React from 'react';
import { RECOMMEND_USER_SAMPLE } from '../Component/data';

const RecommendUser = () => {
  return (
    <>
      {RECOMMEND_USER_SAMPLE.map(item => (
        <div className="story-recommend-user" key={item.id}>
          <div className="user-image" />
          <div className="user-info">
            <p className="user-id">{item.id}</p>
            <p className="recommend-text">{item.text}</p>
          </div>
          <button className="follow">팔로우</button>
        </div>
      ))}
    </>
  );
};

export default RecommendUser;
