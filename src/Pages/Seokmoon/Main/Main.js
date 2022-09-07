import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Main/components/Feed';
import MainRight from './components/MainRight';
import './Main.scss';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="background">
      <Nav />

      {/* <!-- main --> */}
      <div>
        <div className="main-container">
          <div className="main-feeds">
            <div className="article-box">
              {feedList.map(feedInfo => (
                <Feed
                  profileImg={feedInfo.profileImg}
                  imageUrl={feedInfo.imageUrl}
                  userId={feedInfo.userId}
                  key={feedInfo.id}
                />
              ))}
            </div>
            <MainRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
