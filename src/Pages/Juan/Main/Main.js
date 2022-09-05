import React from 'react';
import Nav from '../../../components/Nav/Nav';
import '../Main/Main.scss';
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
import { useState } from 'react';
function Main() {
  const [commentArr, setCommentArr] = useState(['거봐 좋았잖아~~~🙆🏻‍♀️']);
  return (
    <>
      <Nav />
      <div className="Main">
        {/*  */}
        <main>
          <Feeds commentArr={commentArr} setCommentArr={setCommentArr} />
          <MainRight />
        </main>
        <footer>
          <p className="gray">
            Instagram 정보. 지원. 홍보센터. API. 채용 정보. 개인정보처리방침.
            약관. 디렉터리. 프로필. 해시태그. 언어
          </p>
          <p className="gray">© 2019 INSTAGRAM</p>
        </footer>
      </div>
    </>
  );
}
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
            <span className="like_count">7</span>명이 좋아합니다.
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

function MainRight() {
  return (
    <section className="mainRight">
      <div className="rightItem1">
        <div className="userProfileImgCircle user_img" />
        <div className="user_tag">
          <p className="userId">wecode_bootcamp</p>
          <p className="article_profile_content">WeCode | 위코드</p>
        </div>
      </div>
      <section className="rightItem2">
        <div className="right_item_header">
          <p className="right_item_title">스토리</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <div className="user_story_container">
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
          <UserStoryContainer />
        </div>
      </section>

      <div className="right_item3">
        <div className="right_item_header">
          <p className="right_item_title">회원님을 위한 추천</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <RecommendUser />
        <RecommendUser />
        <RecommendUser />
        <RecommendUser />
      </div>
    </section>
  );
}

function UserStoryContainer() {
  return (
    <li className="user_container">
      <div className="userProfileImgCircle article_profile onStory" />
      <div className="user_tag">
        <p className="userId">_yum_s</p>
        <p className="article_profile_content">16분 전</p>
      </div>
    </li>
  );
}

function RecommendUser() {
  return (
    <div className="user_container">
      <div className="userProfileImgCircle article_profile onStory" />
      <div className="user_tag">
        <p className="userId">_yum_s</p>
        <p className="article_profile_follow">
          _legend_a님 외 2명이 팔로우하고 있습니다
        </p>
      </div>
      <p className="follow_btn">팔로우</p>
    </div>
  );
}
export default Main;
