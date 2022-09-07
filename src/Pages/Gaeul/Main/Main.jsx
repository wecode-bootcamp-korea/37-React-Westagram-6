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
    <>
      <header>
        <Nav />
      </header>

      <section className="main">
        <div className="feeds">
          {feedList.map(i => (
            <Feeds
              userId={i.userId}
              userUrl={i.url}
              userLike={i.like}
              userLikeUser={i.likeUser}
              key={i.userId}
            />
          ))}
        </div>
        {/* <Feeds feedList={feedList} /> */}

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
              <h5>스토리</h5>
              <button>모두 보기</button>
            </div>
            <StoryUser />
          </section>

          <section className="recommend">
            <div className="story-bar">
              <h5>회원님을 위한 추천</h5>
              <button>모두 보기</button>
            </div>
            <RecommendUser />
          </section>

          <aside>
            <div className="site-info">
              {ASIDE_TEXT.map(item => (
                <span key={item.id}>{item.text}</span>
              ))}
              <p>© 2022 INSTAGRAM FROM META</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Main;
