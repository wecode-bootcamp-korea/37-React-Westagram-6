import React, { useState } from 'react';
import './Main.scss';
import CommentList from '../Component/CommentList';

function Main() {
  //코멘트 아이디, 코멘트 입력값
  const [idValue, setIdValue] = useState('user007');
  const [inputValue, setInputValue] = useState('');
  //코멘트 입력값 저장소
  const [inputValueList, setInputValueList] = useState([]);
  //코멘트 버튼 유효성 검사
  const [isValid, setIsValid] = useState(false);

  const post = e => {
    e.preventDefault();
    const copyArr = [...inputValueList];
    copyArr.push(inputValue);
    setInputValueList(copyArr);
    setInputValue('');
    setIsValid(false);
  };

  return (
    <>
      <header>
        <div className="modal-bg" />
        <div className="header-wrap">
          <div className="logo-wrap">
            <img className="insta-logo" src="images/Gaeul/instagram.png" />
            <div className="logo-line" />
            <div className="logo-text">Westagram</div>
          </div>

          <form className="search-wrap">
            <span id="search-icon">
              <i className="fa-solid fa-magnifying-glass" />
            </span>
            <input type="text" className="search-bar" placeholder="검색" />
          </form>

          <div className="icons">
            <button>
              <img
                className="icon-explore"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              />
            </button>

            <button>
              <img
                className="icon-heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              />
            </button>

            <button className="icon-mypage">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
            </button>

            <div className="modal hidden">
              <div className="modal-content">
                <a>
                  <i className="fa-regular fa-circle-user" />
                  프로필
                </a>
                <a>
                  <i className="fa-regular fa-bookmark" />
                  저장됨
                </a>
                <a href="#">
                  <i className="fa-solid fa-gear" />
                  설정
                </a>
                <a>로그아웃</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="main">
        <div className="feeds">
          <div className="article-wrap">
            <div className="user-bar">
              <div className="user">
                <div className="user-image" />
                <p className="user-id">galee326</p>
              </div>

              <button id="dot">
                <i className="fa-solid fa-ellipsis" />
              </button>
            </div>

            <div className="article-img" />

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
                <b>everyone_woo</b>님 외 <b>12명</b>이 좋아합니다
              </p>
            </div>

            <ul className="comments-ul">
              {inputValueList.map((item, i) => {
                return <CommentList idValue={idValue} item={item} key={i} />;
              })}
            </ul>

            <form className="lets-comment" onSubmit={post}>
              <input
                className="comment-input"
                type="text"
                placeholder="댓글 달기..."
                onChange={e => {
                  setInputValue(e.target.value);
                }}
                onKeyUp={e => {
                  e.target.value.length > 0
                    ? setIsValid(true)
                    : setIsValid(false);
                }}
                value={inputValue}
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
        </div>

        <div className="main-right">
          <div className="id-info-box">
            <div className="my-image" />
            <div className="my-info">
              <p id="my-id">wecode_bootcamp</p>
              <p id="my-id-text">WeCode | 위코드</p>
            </div>
          </div>

          <section className="story">
            <div className="story-bar">
              <h5>스토리</h5>
              <button>모두 보기</button>
            </div>

            <div className="story-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user001</p>
                <p className="timeline">16분 전</p>
              </div>
            </div>

            <div className="story-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user002</p>
                <p className="timeline">20분 전</p>
              </div>
            </div>

            <div className="story-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user003</p>
                <p className="timeline">22분 전</p>
              </div>
            </div>

            <div className="story-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user004</p>
                <p className="timeline">36분 전</p>
              </div>
            </div>

            <div className="story-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user005</p>
                <p className="timeline">40분 전</p>
              </div>
            </div>
          </section>

          <section className="recommend">
            <div className="story-bar">
              <h5>회원님을 위한 추천</h5>
              <button>모두 보기</button>
            </div>

            <div className="story-recommend-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user_1</p>
                <p className="recommend-text">canon_mj님 외 2명이 팔로우</p>
              </div>
              <button className="follow" href="">
                팔로우
              </button>
            </div>

            <div className="story-recommend-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user_2</p>
                <p className="recommend-text">mama_h님 외 5명이 팔로우</p>
              </div>
              <button className="follow">팔로우</button>
            </div>

            <div className="story-recommend-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user_3</p>
                <p className="recommend-text">m_amah님 외 2명이 팔로우</p>
              </div>
              <button className="follow">팔로우</button>
            </div>

            <div className="story-recommend-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user_4</p>
                <p className="recommend-text">mama_h님 외 5명이 팔로우</p>
              </div>
              <button className="follow">팔로우</button>
            </div>

            <div className="story-recommend-user">
              <div className="user-image" />
              <div className="user-info">
                <p className="user-id">user_4</p>
                <p className="recommend-text">mama_h님 외 5명이 팔로우</p>
              </div>
              <button className="follow">팔로우</button>
            </div>
          </section>

          <footer>
            <div className="site-info">
              <p>
                소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 ·
                약관 · 위치 · 언어
              </p>
              <p>© 2022 INSTAGRAM FROM META</p>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Main;
