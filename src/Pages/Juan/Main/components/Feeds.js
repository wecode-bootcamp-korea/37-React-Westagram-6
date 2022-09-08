import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Comment from './Comment';
import {
  faEllipsisVertical,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

function Feeds({ article }) {
  const { id, img_url, user_id, content } = article;
  const [inputValue, setInputValue] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [commentId, setCommentId] = useState(1);

  const inputValueHandle = e => {
    setInputValue({ id: commentId, content: e.target.value });
  };

  const replySumbit = e => {
    e.preventDefault();
    setCommentArr(prev => [inputValue, ...prev]);
    setCommentId(prev => prev + 1);
    setInputValue({ id: commentId, content: '' });
  };

  const deleteComment = e => {
    setCommentArr(commentArr.filter(comment => comment.id !== e));
  };

  return (
    <div className="article" key={id}>
      <section className="articleHeader">
        <img src={img_url} alt="유저 프로필" className="userProfileImgCircle" />
        <div className="userId">{user_id}</div>
        <FontAwesomeIcon icon={faEllipsisVertical} className="ellipsis" />
      </section>

      <img src={img_url} alt="피드 이미지" className="articleContentImg" />

      <div className="articleReplyContainer">
        <div className="articleBtnContainer">
          <FontAwesomeIcon icon={faHeart} className="articleBtn" />
          <FontAwesomeIcon icon={faComment} className="articleBtn" />
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="articleBtn" />
          <FontAwesomeIcon icon={faBookmark} className="articleBtn" />
        </div>

        <div className="articleLike">
          <span className="userProfileImgCircle" />
          <span className="userId">h.j.jang</span>님외 &nbsp;
          <span className="likeCount">7</span>명이 좋아합니다.
        </div>

        <div className="articleText">
          <span className="userId">{user_id}</span>
          <span className="replyText">{content}</span>
        </div>

        <ul className="replyContainer">
          {commentArr.map(comment => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                onXClick={deleteComment}
              />
            );
          })}
        </ul>

        <p className="articleTime">42분전</p>
      </div>

      <form className="replyForm" onSubmit={replySumbit}>
        <input
          type="text"
          placeholder="댓글 달기..."
          className="replyInput"
          onChange={inputValueHandle}
          value={inputValue.content || ''}
        />
        <button className="replyBtn" type="submit" onClick={replySumbit}>
          게시
        </button>
      </form>
    </div>
  );
}

export default Feeds;
