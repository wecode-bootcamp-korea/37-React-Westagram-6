import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faComment,
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

function Feeds({ data }) {
  const [inputValue, setInputValue] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [commentId, setCommentId] = useState(1);
  const { id, img_url, user_id, content } = data;

  const inputValueHandle = event => {
    setInputValue({ id: commentId, content: event.target.value });
  };
  const replySumbit = e => {
    e.preventDefault();
    setCommentArr(prev => [inputValue, ...prev]);
    setCommentId(prev => prev + 1);
    setInputValue({ id: commentId, content: '' });
  };

  const deleteComment = e => {
    setCommentArr(commentArr.filter(comment => comment.id !== e.id));
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
          <div>
            <span className="userId">{user_id}</span>
            <span className="replyText">{content}</span>
          </div>
        </div>

        <ul className="replyContainer">
          {commentArr.map(e => {
            return (
              <UserReply
                key={e.id}
                commentArr={e}
                onXClick={() => deleteComment(e)}
              />
            );
          })}
        </ul>

        <p className="articleTime">42분전</p>
      </div>

      <form onSubmit={replySumbit} className="replyForm">
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

function UserReply(props) {
  const { commentArr, onXClick } = props;
  return (
    <li className="userReply">
      <div className="replyTextContainer">
        <p className="userId">new_reply</p>
        <p className="replyText">{commentArr.content}</p>
      </div>
      <div className="replyBtnContainer">
        <button onClick={onXClick} className="deleteBtn">
          x
        </button>
        <button>
          <i className="fa-regular fa-heart reple_heart" />
        </button>
      </div>
    </li>
  );
}
export default Feeds;
