import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass,
  faCircleUser,
  faBookmark,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Nav() {
  const [menuState, setMenuState] = useState(false);
  const [searchState, setSearchState] = useState(false);

  return (
    <header className="Nav">
      <div className="navLogoContainer">
        <FontAwesomeIcon icon={faInstagram} className="navIcon" />
        <p className="navLogo">Westagram</p>
      </div>
      <div className="searchInputContainer">
        <input
          type="text"
          placeholder="검색"
          className="searchInput"
          onFocus={() => {
            setSearchState(true);
          }}
          onBlur={() => {
            setSearchState(false);
          }}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        {searchState && <SearchModal />}
      </div>
      <div className="navMenuContainer">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="explore"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="heart"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="profile"
          className="navProfile"
          onClick={() => {
            setMenuState(!menuState);
          }}
        />
        {menuState === true ? <UserMenu /> : null}
      </div>
    </header>
  );
}

function UserMenu() {
  return (
    <div className="userMenu">
      <ul>
        <li>
          <FontAwesomeIcon icon={faCircleUser} />
          <span>프로필</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBookmark} />
          <span>저장됨</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGear} />
          <span>설정</span>
        </li>
        <li>
          <Link to="/Loginj">
            <span>로그아웃</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function SearchModal() {
  return (
    <div className="searchModal">
      <ul className="searchList" />
    </div>
  );
}
export default Nav;
