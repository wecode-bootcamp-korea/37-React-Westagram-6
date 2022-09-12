import React, { useState } from 'react';
import CommentList from './CommentList';

const Feeds = ({ feedData }) => {
  const [input, setInput] = useState('');
  const [inputList, setInputList] = useState([]);

  const post = event => {
    event.preventDefault();
    setInputList(inputList.concat(input));
    setInput('');
  };

  const handleInput = event => {
    setInput(event.target.value);
  };

  return (
    <div className="feeds" key={feedData.userId}>
      <div className="user-bar">
        <div className="user">
          <div className="user-image" />
          <em className="user-id">{feedData.userId}</em>
        </div>
        <button id="feed-dot">
          <i className="fa-solid fa-ellipsis" />
        </button>
      </div>

      <img className="article-img" src={feedData.url} alt="피드이미지" />

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
          <b>{feedData.likeUser}</b>님 외 <b>{feedData.like}명</b>이 좋아합니다
        </p>
      </div>

      <ul className="comments-ul">
        {inputList.map((input, idx) => {
          return <CommentList key={idx} item={input} />;
        })}
      </ul>

      <form className="lets-comment" onSubmit={post}>
        <input
          className="comment-input"
          type="text"
          placeholder="댓글 달기..."
          onChange={handleInput}
          value={input}
        />
        <button
          className={input ? 'submitCommentActive' : 'submitCommentInactive'}
          disabled={!input}
        >
          게시
        </button>
      </form>
    </div>
  );
};

export default Feeds;
