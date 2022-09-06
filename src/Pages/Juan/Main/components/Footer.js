import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      {FOOTER_INFO.map(info => {
        return (
          <span key={info.id} className="footerLink">
            <Link to={info.url} className="footerLink">
              {info.content}
            </Link>
          </span>
        );
      })}
      <p>@2022 Instagram</p>
    </footer>
  );
}
const FOOTER_INFO = [
  { id: 0, content: 'Instagram 정보.', url: '#/' },
  { id: 1, content: '지원.', url: '#/' },
  { id: 2, content: '홍보센터.', url: '#/' },
  { id: 3, content: 'API.', url: '#/' },
  { id: 4, content: '채용 정보.', url: '#/' },
  { id: 5, content: '개인정보처리방침.', url: '#/' },
  { id: 6, content: '약관.', url: '#/' },
  { id: 7, content: '디렉터리.', url: '#/' },
  { id: 8, content: '프로필.', url: '#/' },
  { id: 9, content: '해시태그.', url: '#/' },
  { id: 10, content: '언어.', url: '#/' },
];

export default Footer;
