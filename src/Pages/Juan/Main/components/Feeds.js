import React from 'react';
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

function Feeds({ commentArr, setCommentArr }) {
  const ReplySumbit = e => {
    const replyInput = document.querySelector('.replyInput');
    let copy = [...commentArr];
    copy.push(replyInput.value);
    setCommentArr(copy);
    replyInput.value = '';
    e.preventDefault();
  };
  return (
    <section className="feeds">
      <div className="article">
        <section className="articleHeader">
          <div className="userProfileImgCircle" />
          <div className="userId">shinju4n</div>
          <FontAwesomeIcon icon={faEllipsisVertical} className="ellipsis" />
        </section>

        <div className="articleContentImg" />

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
            <span className="userProfileImgCircle" />{' '}
            <span className="userId">h.j.jang</span>님외 &nbsp;
            <span className="likeCount">7</span>명이 좋아합니다.
          </div>

          <div className="articleText">
            <div>
              <span className="userId">shinju4n</span>
              <span className="replyText">2022.07.30 즐거웠던빠지여행</span>
            </div>
          </div>

          <ul className="replyContainer">
            <UserReply commentArr={commentArr} setCommentArr={setCommentArr} />
          </ul>

          <p className="articleTime">42분전</p>
        </div>

        <form onSubmit={ReplySumbit} className="replyForm">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="replyInput"
          />
          <button className="replyBtn" type="submit" onClick={ReplySumbit}>
            게시
          </button>
        </form>
      </div>
    </section>
  );
}

function UserReply(props) {
  return props.commentArr.map(function (el, i) {
    return (
      <li key={i} className="userReply">
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
