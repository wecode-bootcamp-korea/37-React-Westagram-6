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

function Feeds(props) {
  const { articleData } = props;
  const [commentArr, setCommentArr] = useState([]);

  const replySumbit = e => {
    const replyInput = document.querySelector('.replyInput');
    let copy = [...commentArr];
    copy.push(replyInput.value);
    setCommentArr(copy);
    replyInput.value = '';
    e.preventDefault();
  };
  return articleData.map(data => {
    return (
      <div className="article" key={data.id}>
        <section className="articleHeader">
          <img
            src={data.img_url}
            alt="유저 프로필"
            className="userProfileImgCircle"
          />
          <div className="userId">{data.user_id}</div>
          <FontAwesomeIcon icon={faEllipsisVertical} className="ellipsis" />
        </section>

        <img
          src={data.img_url}
          alt="피드 이미지"
          className="articleContentImg"
        />

        <div className="articleReplyContainer">
          <div className="articleBtnContainer">
            <FontAwesomeIcon icon={faHeart} className="articleBtn" />
            <FontAwesomeIcon icon={faComment} className="articleBtn" />
            <FontAwesomeIcon
              icon={faArrowUpFromBracket}
              className="articleBtn"
            />
            <FontAwesomeIcon icon={faBookmark} className="articleBtn" />
          </div>

          <div className="articleLike">
            <span className="userProfileImgCircle" />
            <span className="userId">h.j.jang</span>님외 &nbsp;
            <span className="likeCount">7</span>명이 좋아합니다.
          </div>

          <div className="articleText">
            <div>
              <span className="userId">{data.user_id}</span>
              <span className="replyText">{data.content}</span>
            </div>
          </div>

          <ul className="replyContainer">
            <UserReply commentArr={commentArr} setCommentArr={setCommentArr} />
          </ul>

          <p className="articleTime">42분전</p>
        </div>

        <form onSubmit={replySumbit} className="replyForm">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="replyInput"
          />
          <button className="replyBtn" type="submit" onClick={replySumbit}>
            게시
          </button>
        </form>
      </div>
    );
  });
}

function UserReply(props) {
  return props.commentArr.map(function (el, i) {
    return (
      <li key={el} className="userReply">
        <div className="replyTextContainer">
          <p className="userId">neceosecius</p>
          <p className="replyText">{props.commentArr[i]}</p>
        </div>
        <div className="replyBtnContainer">
          <button
            onClick={() => {
              let copy = [...props.commentArr];
              copy.splice(i, 1);
              props.setCommentArr(copy);
            }}
            className="deleteBtn"
          >
            x
          </button>
          <button>
            <i className="fa-regular fa-heart reple_heart" />
          </button>
        </div>
      </li>
    );
  });
}
export default Feeds;
