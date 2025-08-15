import React from 'react';

const SocialIconList: React.FC = () => {
  return (
    <div className="footer-widget__social">
      <ul className="social-icon-list">
        <li className="social-icon-list__item">
          <a href="https://www.facebook.com/" className="social-icon-list__link flx-center"><i className="fab fa-facebook-f"></i></a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.twitter.com/" className="social-icon-list__link flx-center"> <i className="fab fa-twitter"></i></a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center"> <i className="fab fa-linkedin-in"></i></a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-pinterest-p"></i></a>
        </li>
        <li className="social-icon-list__item">
          <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-youtube"></i></a>
        </li>
      </ul>
    </div>
  );
};
export default SocialIconList;