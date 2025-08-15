import React from 'react';

const SocialShare: React.FC = () => {
  return (
    <div className="social-share">
      <button type="button" className="social-share__button">
        <img src="assets/images/icons/share-icon.svg" alt="" />
      </button>
      <div className="social-share__icons">
        <ul className="social-icon-list colorful-style">
          <li className="social-icon-list__item">
            <a href="https://www.facebook.com/" className="social-icon-list__link text-body flex-center"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li className="social-icon-list__item">
            <a href="https://www.twitter.com/" className="social-icon-list__link text-body flex-center"> <i className="fab fa-linkedin-in"></i></a>
          </li>
          <li className="social-icon-list__item">
            <a href="https://www.google.com/" className="social-icon-list__link text-body flex-center"> <i className="fab fa-twitter"></i></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShare;