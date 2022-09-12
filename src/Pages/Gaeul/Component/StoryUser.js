import React from 'react';
import { STORY_USER_SAMPLE } from '../Component/data';

const StoryUser = () => {
  return (
    <div className="StoryUser">
      {STORY_USER_SAMPLE.map(userSample => (
        <div className="story-user" key={userSample.id}>
          <div className="user-image" />
          <div className="user-info">
            <p className="user-id">{userSample.id}</p>
            <p className="timeline">{userSample.timeline}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryUser;
