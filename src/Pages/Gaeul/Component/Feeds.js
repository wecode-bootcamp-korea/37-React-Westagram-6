import React, { useState } from 'react';
import CommentList from './CommentList';

const Feeds = ({ userId, userUrl, userLike, userLikeUser }) => {
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const post = event => {
    event.preventDefault();
    setInputList(inputList.concat(input));
    setInput('');
  };

  return (
    <div className="article-wrap" key={userId}>
      <div className="user-bar">
        <div className="user">
          <div className="user-image" />
          <em className="user-id">{userId}</em>
        </div>
        <button id="feed-dot">
          <i className="fa-solid fa-ellipsis" />
        </button>
      </div>

      <img className="article-img" src={userUrl} alt="피드" />

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
          <i className="fa-regular fa-bookmark" />
        </button>
      </div>

      <div className="like-user">
        <div className="like-user-img" />
        <p>
          <b>{userLikeUser}</b>님 외 <b>{userLike}명</b>이 좋아합니다
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
            e.target.value.length > 0 ? setIsValid(true) : setIsValid(false);
          }}
          value={input}
        />
        <button
          type="button"
          className={
            isValid === true ? 'submitCommentActive' : 'submitCommentInactive'
          }
          onClick={post}
          disabled={isValid ? false : true}
        >
          게시
        </button>
      </form>
    </div>
  );
};

export default Feeds;
