import React from 'react';
import { STORY_USER_SAMPLE } from '../Component/data';

const StoryUser = () => {
  return (
    <>
      {STORY_USER_SAMPLE.map(item => (
        <div className="story-user" key={item.id}>
          <div className="user-image" />
          <div className="user-info">
            <p className="user-id">{item.id}</p>
            <p className="timeline">{item.timeline}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StoryUser;
