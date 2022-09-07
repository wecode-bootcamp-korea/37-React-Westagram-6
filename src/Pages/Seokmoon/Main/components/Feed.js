import React, { useState } from 'react';
import Comments from './Comments';

function Feed(props) {
  const [feedComments, setFeedComments] = useState([]);
  const [comment, setComment] = useState('');
  const [userName] = useState('tjrans9248');

  const onChange = e => {
    setComment(e.target.value);
  };

  const post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  return (
    <div key={props.id}>
      <div className="feed-nav">
        <div>
          <div className="main-image-box">
            <img src={props.profileImg} className="main-image" alt="" />
          </div>
        </div>
        <div>
          <span className="user-id">{props.userId}</span>
          <i className="fa-solid fa-ellipsis i-dot" />
        </div>
      </div>

      <div className="feed-main">
        <img src={props.imageUrl} alt="" className="feed-image" />
      </div>

      <div className="feed-footer-back">
        <div className="feed-footer">
          <div>
            <i className="fa-solid fa-heart feed-heart feed-icon" />
            <i className="fa-solid fa-comment feed-icon" />
            <i className="fa-solid fa-arrow-up-from-bracket feed-icon" />
          </div>

          <div>
            <i className="fa-solid fa-bookmark feed-icon" />
          </div>
        </div>

        <div>
          <strong>{props.userId}</strong>님 <strong>외 10명</strong>이
          좋아합니다.
        </div>

        <div>
          <p className="comment">
            <strong>seokmoonYang</strong> 올드카가 굉장히 멋있습니다....
          </p>
          <p className="comment">
            <strong>neceosecius</strong> 이건 얼마정도할까요???
          </p>
        </div>

        <div className="comment-input-box">
          {feedComments.map((commentArr, user) => {
            return (
              <div className="mainComments" key={user}>
                <Comments userName={userName} commentArr={commentArr} />
              </div>
            );
          })}
        </div>

        <div>
          <div className="border-top">
            <input
              className="input-comment"
              type="text"
              placeholder="댓글 달기..."
              style={{ fontSize: '18px' }}
              onChange={onChange}
              value={comment}
            />

            <input
              className="input-button"
              type="button"
              value="게시"
              onClick={post}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
