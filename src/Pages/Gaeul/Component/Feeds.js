import React, { useEffect, useState } from 'react';
import CommentList from './CommentList';

const Feeds = () => {
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [isValid, setIsValid] = useState(false);
  const [feedList, setFeedList] = useState([]);

  const post = event => {
    event.preventDefault();
    setInputList(inputList.concat(input));
    setInput('');
  };

  useEffect(() => {
    fetch('/data/feeds.json')
      .then(response => response.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="feeds">
      {feedList.map(item => {
        return (
          <div className="article-wrap" key={item.userId}>
            <div className="user-bar">
              <div className="user">
                <div className="user-image" />
                <em className="user-id">{item.userId}</em>
              </div>
              <button id="feed-dot">
                <i className="fa-solid fa-ellipsis" />
              </button>
            </div>

            <img className="article-img" src={item.url} alt="피드" />

            <div className="article-icons">
              <div className="article-three-icons">
                <button>
                  <i className="fa-regular fa-heart" />
                </button>
                <button>
                  <i className="fa-regular fa-comment" />
                </button>
                <button>
                  <i className="fa-solid fa-arrow-up-from-bracket" />
                </button>
              </div>

              <button className="bookmark">
                <i class="fa-regular fa-bookmark" />
              </button>
            </div>

            <div className="like-user">
              <div className="like-user-img" />
              <p>
                <b>{item.likeUser}</b>님 외 <b>{item.like}명</b>이 좋아합니다
              </p>
            </div>

            <ul className="comments-ul">
              {inputList.map((item, i) => {
                return <CommentList item={item} key={i} />;
              })}
            </ul>

            <form className="lets-comment" onSubmit={post}>
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
                onChange={e => {
                  setInput(e.target.value);
                }}
                onKeyUp={e => {
                  e.target.value.length > 0
                    ? setIsValid(true)
                    : setIsValid(false);
                }}
                value={input}
              />
              <button
                type="button"
                className={
                  isValid === true
                    ? 'submitCommentActive'
                    : 'submitCommentInactive'
                }
                onClick={post}
                disabled={isValid ? false : true}
              >
                게시
              </button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Feeds;
