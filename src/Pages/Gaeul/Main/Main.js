import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../Component/Feeds';
import StoryUser from '../Component/StoryUser';
import RecommendUser from '../Component/RecommendUser';
import { ASIDE_TEXT } from '../Component/data';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feeds.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="Main">
      <Nav />
      <section className="main">
        <div className="feeds-wrap">
          {feedList.map(feedData => (
            <Feeds key={feedData.id} feedData={feedData} />
          ))}
        </div>

        <div className="main-right">
          <div className="id-info-box">
            <div className="my-image" />
            <div className="my-info">
              <p id="my-id">wecode_bootcamp</p>
              <p id="my-id-text">WeCode | 위코드</p>
            </div>
          </div>

          <section className="story">
            <div className="story-bar">
              <h5 className="recommend-h5">스토리</h5>
              <button className="more-btn">모두 보기</button>
            </div>
            <StoryUser />
          </section>

          <section className="recommend">
            <div className="story-bar">
              <h5 className="recommend-h5">회원님을 위한 추천</h5>
              <button className="more-btn">모두 보기</button>
            </div>
            <RecommendUser />
          </section>

          <aside>
            <ul className="site-info">
              {ASIDE_TEXT.map(asideText => (
                <li className="site-info-list" key={asideText.id}>
                  <a href="#/">{asideText.text}</a>
                </li>
              ))}
              <p>© 2022 INSTAGRAM FROM META</p>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Main;
