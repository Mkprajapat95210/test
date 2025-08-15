import React from 'react';

const PostTagShare: React.FC = () => {
  return (
    <div className="flx-between gap-2 mb-40 mt-40">
      <div className="post-tag flx-align gap-3">
        <span className="post-tag__text text-heading fw-500">Post Tag: </span>
        <ul className="post-tag__list flx-align gap-2">
          <li className="post-tag__item">
            <a href="blog.html" className="post-tag__link font-14 text-heading pill fw-500">Business</a>
          </li>
          <li className="post-tag__item">
            <a href="blog.html" className="post-tag__link font-14 text-heading pill fw-500">Marketing</a>
          </li>
          <li className="post-tag__item">
            <a href="blog.html" className="post-tag__link font-14 text-heading pill fw-500">Strategy</a>
          </li>
        </ul>
      </div>
      <div className="socail-share flx-align gap-3">
        <span className="socail-share__text text-heading fw-500">Share On: </span>
        <ul className="social-icon-list colorful-style">
          <li className="social-icon-list__item">
            <a href="https://www.facebook.com/" className="social-icon-list__link text-heading font-16 flex-center"><i className="fab fa-facebook-f"></i></a>
          </li>
          <li className="social-icon-list__item">
            <a href="https://www.twitter.com/" className="social-icon-list__link text-heading font-16 flex-center"> <i className="fab fa-linkedin-in"></i></a>
          </li>
          <li className="social-icon-list__item">
            <a href="https://www.google.com/" className="social-icon-list__link text-heading font-16 flex-center"> <i className="fab fa-twitter"></i></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostTagShare;
