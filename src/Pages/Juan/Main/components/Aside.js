import React from 'react';
import Story from './Story';
import RecommendUser from './RecommendUser';

function Aside() {
  return (
    <section className="aside">
      <div className="rightItem1">
        <div className="userProfileImgCircle user_img" />
        <div className="user_tag">
          <p className="userId">wecode_bootcamp</p>
          <p className="article_profile_content">WeCode | 위코드</p>
        </div>
      </div>

      <section className="aside_story">
        <div className="right_item_header">
          <p className="right_item_title">스토리</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <div className="user_story_container">
          <Story />
        </div>
      </section>

      <div className="aside_recommend">
        <div className="right_item_header">
          <p className="right_item_title">회원님을 위한 추천</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <div className="recommendContainer">
          <RecommendUser />
        </div>
      </div>
    </section>
  );
}

export default Aside;
