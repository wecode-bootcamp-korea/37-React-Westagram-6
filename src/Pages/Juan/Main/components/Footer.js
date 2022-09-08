import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_INFO } from './data';
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

export default Footer;
