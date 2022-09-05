import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

function Main() {
  const [commentArr, setCommentArr] = useState(['거봐 좋았잖아~~~🙆🏻‍♀️']);

  return (
    <>
      <Nav />
      <div className="Main">
        <main>
          <Feeds commentArr={commentArr} setCommentArr={setCommentArr} />
          <MainRight />
        </main>
        <Footer />
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
        </div>
      </section>

      <div className="right_item3">
        <div className="right_item_header">
          <p className="right_item_title">회원님을 위한 추천</p>
          <p className="right_item_all">모두보기</p>
        </div>
        <RecommendUser />
      </div>
    </section>
  );
}

function UserStoryContainer() {
  return USER_DATA.map(user => {
    return (
      <li className="user_container" key={user.id}>
        <img
          src={user.profile_url}
          alt="유저 이미지"
          className="userProfileImgCircle article_profile onStory"
        />
        <div className="user_tag">
          <p className="userId">{user.user_id}</p>
          <p className="article_profile_content">{user.time}</p>
        </div>
      </li>
    );
  });
}

function RecommendUser() {
  return USER_DATA.reverse().map(user => {
    return (
      <div className="user_container" key={user.id}>
        <img
          src={user.profile_url}
          alt="유저 이미지"
          className="userProfileImgCircle article_profile"
        />
        <div className="user_tag">
          <p className="userId">{user.user_id}</p>
          <p className="article_profile_follow">
            _legend_a님 외 2명이 팔로우하고 있습니다
          </p>
        </div>
        <p className="follow_btn">팔로우</p>
      </div>
    );
  });
}

function Footer() {
  return (
    <footer>
      {FOOTER_INFO.map(info => {
        return (
          <span key={info.id} className="footerLink">
            <Link to="#/" className="footerLink">
              {info.text}
            </Link>
          </span>
        );
      })}
      <p>@2022 Instagram</p>
    </footer>
  );
}
export default Main;
const FOOTER_INFO = [
  { id: 0, text: 'Instagram 정보.' },
  { id: 1, text: '지원.' },
  { id: 2, text: '홍보센터.' },
  { id: 3, text: 'API.' },
  { id: 4, text: '채용 정보.' },
  { id: 5, text: '개인정보처리방침.' },
  { id: 6, text: '약관.' },
  { id: 7, text: '디렉터리.' },
  { id: 8, text: '프로필.' },
  { id: 9, text: '해시태그.' },
  { id: 10, text: '언어.' },
];

const USER_DATA = [
  {
    id: 0,
    user_id: 'tiger_abc',
    time: '14분전',
    profile_url:
      'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
  },
  {
    id: 1,
    user_id: 'fox_tail',
    time: '30분전',
    profile_url:
      'https://images.fineartamerica.com/images/artworkimages/medium/1/funny-fox-series-fox-poto-bomb-roeselien-raimond.jpg',
  },
  {
    id: 2,
    user_id: 'ttabong_gosuemdochi',
    time: '35분전',
    profile_url:
      'https://img.animalplanet.co.kr/news/2019/08/10/700/v4q0b0ff4hcpew1g6t39.jpg',
  },
  {
    id: 3,
    user_id: 'doge_space',
    time: '36분전',
    profile_url:
      'https://i.kym-cdn.com/entries/icons/facebook/000/013/564/doge.jpg',
  },
  {
    id: 4,
    user_id: 'i_am_not_human',
    time: '14분전',
    profile_url:
      'https://www.rd.com/wp-content/uploads/2020/11/eastern-chimpanzee-male-fudge-aged-17-years-portrait.jpg',
  },
  {
    id: 5,
    user_id: 'american_eagle',
    time: '14분전',
    profile_url:
      'https://safariniagara.com/wp-content/uploads/2017/01/BaldEagle-Portrait.jpg',
  },
  {
    id: 6,
    user_id: 'fat_cat',
    time: '45분전',
    profile_url:
      'https://i.chzbgr.com/full/9018583552/h43E44E88/cat-when-you-explain-something-17-times-and-they-still-dont-get-it',
  },
  {
    id: 7,
    user_id: 'dogflower',
    time: '46분전',
    profile_url:
      'https://cdn.shopify.com/s/files/1/0972/5474/files/9d891ea4dad4547389af15e45ba25d42.jpg?16699883088683802383',
  },
];
